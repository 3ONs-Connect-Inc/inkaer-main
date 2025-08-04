import Button from "@/components/ui/button";
import { projects } from "@/constants";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../ProjectCard";

const FeaturedProjectsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title mb-4 sm:mb-6">Featured Projects</h2>
          <p className="section-subtitle">
            Take on real engineering challenges that top companies use to
            evaluate talent. Each project is designed by industry experts.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid w-full gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center text-center">
          <Button 
            variant="outline"
            className="btn-outline
      border-2 border-inkaer-blue text-inkaer-blue 
      hover:bg-inkaer-blue hover:text-white  "
          >
            View All Projects
            <ArrowRight className="icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
