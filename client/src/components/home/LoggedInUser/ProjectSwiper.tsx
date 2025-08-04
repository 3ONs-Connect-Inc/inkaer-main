
import ProjectCard from "../ProjectCard"; 
import type { Project } from "@/types/types"; 
import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-ignore
import 'swiper/css';

interface ProjectSwiperProps {
  projects: Project[];
}

const ProjectSwiper = ({ projects }: ProjectSwiperProps) => {
   return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
    loop={true}
      breakpoints={{
        220: { slidesPerView: 1 },
        360: { slidesPerView: 1.5 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 3 },
      }}
      navigation
      pagination={{ clickable: true }}
     className="w-full "
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="h-full flex p-1.5">
          <div className="w-full h-full">
            <ProjectCard {...project} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
