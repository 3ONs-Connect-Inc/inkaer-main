import { heroImage, img1, img2, img3 } from "@/assets";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CheckCircle, Users, Trophy, Award, Briefcase } from 'lucide-react';


 

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

  //tags
  export const predefinedTags = [
    'CAD Design', 'Simulation', 'Prototyping', 'Manufacturing', 'Assembly',
    'Analysis', 'Testing', 'Optimization', 'Materials', 'Thermal',
    'Structural', 'Mechanical', 'Innovation', 'Automation', 'Robotics',
    'Product Design', 'Research', 'Development', 'Engineering'
  ];


//HOME FEATURED SECTION
  export const getRankColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Elite': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };
 export  const featuredProjects = [
    {
      title: "Project Alpha",
      category: "Backend Engineering",  
      difficulty: "Intermediate",
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
        stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
        stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
        stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
        stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
          stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
         stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
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
        stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
      rating: 4.8,
      description: "Complete mechanical design of an automated assembly line with robotic integration and quality control systems.",
      tags: ["CAD", "Automation", "Robotics"],
      image: img1,
      author: "Sarah Mitchell",
      comments: 3,
      type: "portfolio" as const
    },
    {
      title: "Wind Turbine Blade Optimization", 
      category: "Aerospace Engineering",
      difficulty: "Expert",
    stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
      rating: 4.9,
      description: "Aerodynamic optimization of wind turbine blades using computational fluid dynamics and structural analysis.",
      tags: ["CFD", "Optimization", "Renewable Energy"],
      image: img2,
      author: "Marcus Chen",
      comments: 7,
      type: "portfolio" as const
    },
     {
      title: "Automated Assembly Line Design",
      category: "Mechanical Engineering",
      difficulty: "Advanced",
     stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
      rating: 4.8,
      description: "Complete mechanical design of an automated assembly line with robotic integration and quality control systems.",
      tags: ["CAD", "Automation", "Robotics"],
      image: img3,
      author: "Sarah Mitchell",
      comments: 3,
      type: "portfolio" as const
    },
    {
      title: "Wind Turbine Blade Optimization", 
      category: "Aerospace Engineering",
      difficulty: "Expert",
       stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
      rating: 4.9,
      description: "Aerodynamic optimization of wind turbine blades using computational fluid dynamics and structural analysis.",
      tags: ["CFD", "Optimization", "Renewable Energy"],
      image: img1,
      author: "Marcus Chen",
      comments: 7,
      type: "portfolio" as const
    },
     {
      title: "Automated Assembly Line Design",
      category: "Mechanical Engineering",
      difficulty: "Advanced",
    stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
      rating: 4.8,
      description: "Complete mechanical design of an automated assembly line with robotic integration and quality control systems.",
      tags: ["CAD", "Automation", "Robotics"],
      image: img2,
      author: "Sarah Mitchell",
      comments: 3,
      type: "portfolio" as const
    },
    {
      title: "Wind Turbine Blade Optimization", 
      category: "Aerospace Engineering",
      difficulty: "Expert",
    stats: [   
      {
        duration: "2-3 hrs",
        participants: 23,
      }
    ],
      rating: 4.9,
      description: "Aerodynamic optimization of wind turbine blades using computational fluid dynamics and structural analysis.",
      tags: ["CFD", "Optimization", "Renewable Energy"],
      image: img3,
      author: "Marcus Chen",
      comments: 7,
      type: "portfolio" as const
    },
  ];  
  

//how it works page
 export const steps = [
    {
      icon: <CheckCircle className="w-10 h-10 text-inkaer-blue" />,
      title: "Submit Your Projects",
      subtitle: "Showcase Your Work",
      description: "Upload your engineering projects or tackle our curated challenges to showcase your technical skills to our community of professionals."
    },
    {
      icon: <Users className="w-10 h-10 text-inkaer-blue" />,
      title: "Get Peer Reviews",
      subtitle: "Community Feedback",
      description: "Receive constructive feedback from fellow engineers and industry experts to improve your work and learn from others."
    },
    {
      icon: <Trophy className="w-10 h-10 text-inkaer-blue" />,
      title: "Build Your Rank",
      subtitle: "Progress & Recognition",
      description: "Earn points and improve your ranking based on project quality and peer feedback. Rise from Novice to Elite status."
    },
    {
      icon: <Award className="w-10 h-10 text-inkaer-blue" />,
      title: "Get Certified",
      subtitle: "Verify Your Skills",
      description: "Achieve certification badges that validate your expertise in specific engineering domains and enhance your professional profile."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-inkaer-blue" />,
      title: "Land Your Dream Job",
      subtitle: "Career Opportunities",
      description: "Get discovered by top employers looking for talented engineers with proven skills and verified certifications."
    }
  ];



//user rank dashboard
 export  const ranks = [
    {
      name: "Novice",
      points: "Newly Joined",
      color: "bg-gray-100 text-gray-800",
      current: false,
      completed: true
    },
    {
      name: "Beginner",
      points: "1 - 500",
      color: "bg-green-100 text-green-800",
      current: false,
      completed: true
    },
    {
      name: "Intermediate",
      points: "501 - 1500",
      color: "bg-blue-100 text-blue-800",
      current: false,
      completed: true
    },
    {
      name: "Advanced",
      points: "1501 - 3000",
      color: "bg-purple-100 text-purple-800",
      current: true,
      completed: false
    },
    {
      name: "Expert",
      points: "3001 - 5000",
      color: "bg-orange-100 text-orange-800",
      current: false,
      completed: false
    },
    {
      name: "Elite",
      points: "5000+",
      color: "bg-red-100 text-red-800",
      current: false,
      completed: false
    }
  ];

 export  const domains = [
    { value: 'mechanical', label: 'Mechanical Engineering' },
    { value: 'civil', label: 'Civil Engineering' },
    { value: 'electrical', label: 'Electrical Engineering' },
    { value: 'chemical', label: 'Chemical Engineering' },
    { value: 'software', label: 'Software Engineering' },
    { value: 'aerospace', label: 'Aerospace Engineering' }
  ];

  export const certifications = [
    {
      rank: "Beginner",
      title: "Mechanical Engineering (Beginner)",
      acronym: "ME1",
      available: true,
      earned: true,
      requirements: [
        "Complete Beginner rank (1-500 points)",
        "Submit 3 verified projects",
        "Pass peer review assessment",
        "Complete basic safety training"
      ]
    },
    {
      rank: "Intermediate", 
      title: "Mechanical Engineering (Intermediate)",
      acronym: "ME2",
      available: true,
      earned: false,
      requirements: [
        "Complete Intermediate rank (501-1500 points)",
        "Submit 5 advanced projects",
        "Mentor 2 junior engineers",
        "Pass technical interview",
        "Complete advanced CAD certification"
      ]
    },
    {
      rank: "Advanced",
      title: "Mechanical Engineering (Advanced)",
      acronym: "ME3",
      available: false,
      earned: false,
      requirements: [
        "Complete Advanced rank (1501-3000 points)",
        "Lead 2 major projects",
        "Publish technical paper",
        "Complete industry collaboration",
        "Pass expert-level assessment"
      ]
    },
    {
      rank: "Expert",
      title: "Mechanical Engineering (Expert)",
      acronym: "ME4",
      available: false,
      earned: false,
      requirements: [
        "Complete Expert rank (3001-5000 points)",
        "Lead cross-functional team",
        "Develop innovative solution",
        "Complete management training",
        "Industry recognition award"
      ]
    },
    {
      rank: "Elite",
      title: "Mechanical Engineering (Elite)",
      acronym: "ME-Elite",
      available: false,
      earned: false,
      requirements: [
        "Complete Elite rank (5000+ points)",
        "Revolutionary contribution to field",
        "International recognition",
        "Mentor 10+ engineers to Expert level",
        "Industry leadership position"
      ]
    }
  ];

  export const getDomainPrefix = (domain: string) => {
    const prefixes = {
      'mechanical': 'ME',
      'civil': 'CE',
      'electrical': 'EE',
      'chemical': 'CH',
      'software': 'SE',
      'aerospace': 'AE'
    };
    return prefixes[domain as keyof typeof prefixes] || 'ME';
  };



  
//FOOTER
export const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Projects", href: "/projects" },
      { name: "Certification", href: "/certification" },
      { name: "Rankings", href: "/rank" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Documentation", href: "/documentation" },
      { name: "Support", href: "/support" },
    ],
  },
];

export const defaultSocialLinks = [
  { icon: <FaInstagram className="size-4 xs:size-5" />, href: "/", label: "Instagram" },
  { icon: <FaFacebook className="size-4 xs:size-5" />, href: "/", label: "Facebook" },
  { icon: <FaTwitter className="size-4 xs:size-5" />, href: "/", label: "Twitter" },
  { icon: <FaLinkedin className="size-4 xs:size-5" />, href: "/", label: "LinkedIn" },
];

export const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];



