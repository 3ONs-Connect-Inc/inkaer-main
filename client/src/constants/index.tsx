import { heroImage, img1, img2, img3 } from "@/assets";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";










//upload projects
 export  const engineeringDomains = [
    { value: 'mechanical', label: 'Mechanical Engineering', available: true },
    { value: 'electrical', label: 'Electrical and Mechatronics', available: false },
    { value: 'civil', label: 'Civil / Structural', available: false },
    { value: 'software', label: 'Software (Backend)', available: false },
    { value: 'uiux', label: 'UI/UX (Product Usability Design)', available: false },
    { value: 'rf', label: 'Radio Frequency (RF)', available: false },
    { value: 'antenna', label: 'Antenna', available: false },
    { value: 'embedded', label: 'Embedded', available: false },
    { value: 'aerospace', label: 'Aerospace', available: false },
  ];


//HOME FEATURED SECTION
 export  const featuredProjects = [
    {
      title: "Project Alpha",
      category: "Backend Engineering",  
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    },
      {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    }
  ];

  export const newProjects = [
    {
      title: "Modular Drone Frame",
      category: "Mechanical Design",
      difficulty: "Beginner",
      duration: "2-3 hrs", 
      participants: 23,
      rating: 4.2,
      description: "Design and prototype a modular drone frame system with interchangeable components.",
      tags: ["CAD", "Drone", "Modular"],
      image: img2,
      author: "Daniel Brown",
      comments: 18,
       type: "challenge" as const
    },
      {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    },
      {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    }
  ];

export const myProjects = [
    {
      title: "Cooling Plate Simulation",
      category: "Thermal Analysis", 
      difficulty: "Elite",
      duration: "8-10 hrs",
      participants: 78,
      rating: 4.9,
      description: "Advanced computational fluid dynamics simulation for cooling plate optimization.",
      tags: ["CFD", "Simulation", "Thermal"],
      image: img3,
      author: "Ivy Timmons",
      comments: 31,
       type: "challenge" as const
    },
      {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    },
      {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    }

  ];

  export const starredProjects = [
    {
      title: "Bracket Fatigue Test",
      category: "Structural Analysis",
      difficulty: "Intermediate", 
      duration: "5-7 hrs",
      participants: 45,
      rating: 4.4,
      description: "Comprehensive fatigue analysis and testing protocol for structural bracket components.",
      tags: ["FEA", "Testing", "Structural"],
      image: heroImage,
      author: "Kevin Carpenter",
      comments: 10,
       type: "challenge" as const
    },
      {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    }
    ,
      {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: img1,
      author: "John Stone",
      comments: 12,
       type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: heroImage,
      author: "Cathy Lee",
      comments: 25,
       type: "challenge" as const
    }
  ];

export const projects = [
    {
      title: "Real-Time Data Pipeline",
      category: "Backend Engineering",
      difficulty: "Advanced",
      duration: "3-5 hours",
      participants: 1247,
      rating: 4.8,
      description: "Build a scalable data processing pipeline that handles millions of events per minute using modern streaming technologies.",
      tags: ["Kafka", "Redis", "PostgreSQL", "Docker"],
      image: img1,
       type: "challenge" as const
    },
    {
      title: "Mobile Banking Interface",
      category: "Frontend Development", 
      difficulty: "Intermediate",
      duration: "4-6 hours",
      participants: 892,
      rating: 4.9,
      description: "Design and implement a secure, responsive banking interface with advanced UX patterns and accessibility features.",
      tags: ["React", "TypeScript", "Security", "UX"],
      image:  img2,
       type: "challenge" as const
    },
    {
      title: "ML Recommendation Engine",
      category: "Machine Learning",
      difficulty: "Expert",
      duration: "6-8 hours", 
      participants: 634,
      rating: 4.7,
      description: "Create an intelligent recommendation system that adapts to user behavior and preferences in real-time.",
      tags: ["Python", "TensorFlow", "APIs", "Analytics"],
      image:  img3,
       type: "challenge" as const
    }
  ];
 export  const portfolioProjects = [
    {
      title: "Automated Assembly Line Design",
      category: "Mechanical Engineering",
      difficulty: "Advanced",
      duration: "Submitted 2 days ago",
      participants: 1,
      rating: 4.8,
      description: "Complete mechanical design of an automated assembly line with robotic integration and quality control systems.",
      tags: ["CAD", "Automation", "Robotics"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Sarah Mitchell",
      comments: 3,
      type: "portfolio" as const
    },
    {
      title: "Wind Turbine Blade Optimization", 
      category: "Aerospace Engineering",
      difficulty: "Expert",
      duration: "Submitted 1 week ago",
      participants: 1,
      rating: 4.9,
      description: "Aerodynamic optimization of wind turbine blades using computational fluid dynamics and structural analysis.",
      tags: ["CFD", "Optimization", "Renewable Energy"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Marcus Chen",
      comments: 7,
      type: "portfolio" as const
    },
     {
      title: "Automated Assembly Line Design",
      category: "Mechanical Engineering",
      difficulty: "Advanced",
      duration: "Submitted 2 days ago",
      participants: 1,
      rating: 4.8,
      description: "Complete mechanical design of an automated assembly line with robotic integration and quality control systems.",
      tags: ["CAD", "Automation", "Robotics"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Sarah Mitchell",
      comments: 3,
      type: "portfolio" as const
    },
    {
      title: "Wind Turbine Blade Optimization", 
      category: "Aerospace Engineering",
      difficulty: "Expert",
      duration: "Submitted 1 week ago",
      participants: 1,
      rating: 4.9,
      description: "Aerodynamic optimization of wind turbine blades using computational fluid dynamics and structural analysis.",
      tags: ["CFD", "Optimization", "Renewable Energy"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Marcus Chen",
      comments: 7,
      type: "portfolio" as const
    },
     {
      title: "Automated Assembly Line Design",
      category: "Mechanical Engineering",
      difficulty: "Advanced",
      duration: "Submitted 2 days ago",
      participants: 1,
      rating: 4.8,
      description: "Complete mechanical design of an automated assembly line with robotic integration and quality control systems.",
      tags: ["CAD", "Automation", "Robotics"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Sarah Mitchell",
      comments: 3,
      type: "portfolio" as const
    },
    {
      title: "Wind Turbine Blade Optimization", 
      category: "Aerospace Engineering",
      difficulty: "Expert",
      duration: "Submitted 1 week ago",
      participants: 1,
      rating: 4.9,
      description: "Aerodynamic optimization of wind turbine blades using computational fluid dynamics and structural analysis.",
      tags: ["CFD", "Optimization", "Renewable Energy"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Marcus Chen",
      comments: 7,
      type: "portfolio" as const
    },
  ];  


  
//FOOTER
export const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Projects", href: "#projects" },
      { name: "Certification", href: "#certification" },
      { name: "Rankings", href: "#rankings" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Documentation", href: "#docs" },
      { name: "Support", href: "#support" },
    ],
  },
];

export const defaultSocialLinks = [
  { icon: <FaInstagram className="size-4 xs:size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-4 xs:size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-4 xs:size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-4 xs:size-5" />, href: "#", label: "LinkedIn" },
];

export const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#terms" },
  { name: "Privacy Policy", href: "#privacy" },
];



