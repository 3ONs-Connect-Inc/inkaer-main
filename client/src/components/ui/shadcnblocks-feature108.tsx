
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import  Badge  from "@/components/ui/badge";
import  Button  from "@/components/ui/button";
import { Link } from "react-router-dom";
import { heroImage, img1, img5 } from "@/assets";
import { Image } from "./Image";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Inkaer",
  heading = "Show What You've Got!",
  description = "Demonstrate your expertise with actual projects and challenges.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Portfolio Upload",
      content: {
        badge: "Showcase Work",
        title: "Upload your best projects",
        description:
          "Share your portfolio and demonstrate your skills through real work examples. Let employers see what you can actually build.",
        buttonText: "Upload Portfolio",
        imageSrc: img1,
        imageAlt: "Portfolio showcase",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Skill Challenges",
      content: {
        badge: "Prove Skills",
        title: "Tackle real-world challenges",
        description:
          "Complete engineering challenges designed by industry experts. Show your problem-solving abilities and technical competence.",
        buttonText: "Start Challenge",
        imageSrc: heroImage,
        imageAlt: "Coding challenge",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Get Certified",
      content: {
        badge: "Earn Recognition",
        title: "Receive skill certifications",
        description:
          "Get verified certifications that employers trust. Build your professional credibility with industry-recognized credentials.",
        buttonText: "View Certifications",
        imageSrc: img5,
        imageAlt: "Professional certification",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="text-inkaer-blue border-inkaer-blue">{badge}</Badge>
          <h1 className="section-title">
            {heading}
          </h1>
          <p className="section-subtitle">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8 ">
          <TabsList className="container w-40 h-12 md:w-44 md:h-14 flex flex-col items-center mt-[88px] md:mt-0 mb-[85px] md:mb-0 justify-center gap-4 md:flex-row md:gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className=" flex items-center gap-2 rounded-xl 
                px-4 py-3 text-sm font-semibold text-muted-foreground 
                data-[state=active]:bg-muted 
                bg-muted
                data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8  max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 md:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background text-inkaer-blue border-inkaer-blue">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="section-title">
                    {tab.content.title}
                  </h3>
                  <p className="section-subtitle">
                    {tab.content.description}
                  </p>
                  <Button className="btn-responsive mt-2.5 w-fit gap-2 bg-inkaer-blue hover:bg-inkaer-dark-blue font-sora" size="lg">
                    <Link to="/upload-portfolio">
                    {tab.content.buttonText}
                    </Link>
                  </Button>
                </div>
                <Image
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
