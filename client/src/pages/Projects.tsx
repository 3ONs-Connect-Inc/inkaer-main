import { useState } from "react";
import Header from "@/components/Projects/Header";
import Filters from "@/components/Projects/Filters";
import ViewToggle from "@/components/Projects/ViewToggle";
import ProjectCardGrid from "@/components/Projects/ProjectCardGrid";
import ProjectCardList from "@/components/Projects/ProjectCardList";
import { useAllProjects } from "@/hooks/portfolio/useAllProjects";
import { PageLoader } from "@/components/ui/Spinner";

const Projects = () => {
  const { allProjects, loading, error } = useAllProjects();
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedSubdomain, setSelectedSubdomain] = useState("all");
  const [selectedTags, setSelectedTags] = useState("all");
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = allProjects.filter((project) => {
    const tabMatch =
      activeTab === "all" ||
      (activeTab === "challenges" && project.type === "challenge") ||
      (activeTab === "portfolio" && project.type === "portfolio");

    const domainMatch =
      selectedDomain === "all" ||
      project.domain?.toLowerCase().includes(selectedDomain);
    const difficultyMatch =
      selectedDifficulty === "all" || project.rank === selectedDifficulty;

    return tabMatch && domainMatch && difficultyMatch;
  });
  if (loading) {
    return (
      <div className="text-center py-20 font-semibold text-xl text-gray-600">
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        {error}
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <Filters
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            selectedSubdomain={selectedSubdomain}
            setSelectedSubdomain={setSelectedSubdomain}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
          <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
          {filteredProjects.length > 0 ? (
            viewMode === "grid" ? (
              <ProjectCardGrid projects={filteredProjects} />
            ) : (
              <ProjectCardList projects={filteredProjects} />
            )
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 font-sora">
                No projects found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
