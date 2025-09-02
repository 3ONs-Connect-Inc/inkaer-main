import { logoDark } from "@/assets";
import { Calendar, CalendarCheck, CalendarDays, ChartColumn, CheckCircle,   Clock, Contact, FileCheck, FileText, Home, NotebookPen, NotepadText, Package, Play, Rss, Settings, Shield, Tag, Target, TrendingDown, User, UserPlus, Users, UserX, Video } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";
import { VideoTab } from "@/components/home/VideoTab";
import { PortfolioViewer } from "@/components/home/PortfolioViewer";


//navbar
  export const navigation = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Verified Portfolio', href: '#verification-details' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

//home
export  const features = [
    {
      icon: TrendingDown,
      number: '68%',
      title: 'Hiring Cost Reduction',
      description: 'Eliminate agency fees and reduce time-to-hire costs with our verified talent pool.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      number: '3X',
      title: 'Faster Hiring Timeline',
      description: 'From job posting to shortlist delivery in just 48 hours, interviews within 24h.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      number: '100%',
      title: 'Bad Hire Avoidance',
      description: 'Every engineer is pre-verified with portfolio review and technical assessment.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

export   const benefits = [
    {
      id: 'skip-resume-roulette',
      icon: UserX,
      title: 'Skip Resume Roulette',
      description: 'No more sifting through hundreds of unqualified resumes. Every candidate in your shortlist has been pre-screened and verified, with portfolio work that directly relates to your engineering needs.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'tuned-shortlists',
      icon: Target,
      title: 'Shortlists Tuned to Your Tools & Domain only.',
      description: 'Candidates are specifically matched to your technology stack, industry domain, and engineering methodologies. Whether you need SolidWorks expertise or aerospace experience, we deliver precisely what you need.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'interview-booking',
      icon: Calendar,
      title: 'We Book Interviews, You Focus on Final Decisions.',
      description: 'Our team handles all the coordination and scheduling logistics. You simply review the verified candidates and focus your time on making the final hiring decision that matters most.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

export  const tabs = [
  {
    id: "interview",
    name: "Technical Interview Recording",
    icon: Play,
    content: <VideoTab />,
  },
  {
    id: "portfolio",
    name: "Inkaer-Verified Portfolio",
    icon: FileCheck,
    content: (
      <PortfolioViewer />
    ),
  },
    {
      id: 'resume',
      name: 'Resume Sample',
      icon: User,
      content: (
        <div className="bg-white rounded-xl shadow-lg p-2 sm:p-8 max-w-2xl mx-auto">
          <div className="border border-gray-200 rounded-lg  p-2 sm:p-6 text-left">
            <div className="mb-6">
              <h3 className="desc-bold">Michael Rodriguez</h3>
              <p className="desc">Senior Mechanical Engineer</p>
              <p className="text-small">Austin, TX</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="desc-bold mb-2">Experience</h4>
                <div className="desc">
                  <p >Senior Mechanical Engineer @ ManufacturingCorp (2020-2024)</p>
                  <p >• Designed automated assembly systems reducing production time by 35%</p>
                  <p >• Led CAD modeling team for $50M product line development</p>
                </div>
              </div>
              
              <div>
                <h4 className="desc-bold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['SolidWorks', 'AutoCAD', 'ANSYS', 'MATLAB', 'FEA', 'Manufacturing'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 desc text-center">
            Human-reviewed resumes with verified work history and skill assessments.
          </p>
        </div>
      )
    }
   
  ];


export  const verificationItems = [
    {
      id: 'portfolio-check',
      icon: CheckCircle,
      title: 'Portfolio originality check (project-level)',
      description: 'Each project in the candidate\'s portfolio is manually reviewed for authenticity, technical complexity, and originality. We verify that the work is genuinely created by the candidate and meets industry standards.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'industry-tagging',
      icon: Tag,
      title: 'Industry fit tagging (FEA, DFM, DTV, etc.)',
      description: 'Candidates are tagged based on their specific industry experience and technical skills such as Finite Element Analysis (FEA), Design for Manufacturing (DFM), and Design to Value (DTV) methodologies.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'interview-recording',
      icon: Video,
      title: '10‑minute technical interview recording',
      description: 'A condensed recording of the candidate answering portfolio-based technical questions, demonstrating their communication skills and deep understanding of their work.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'pdf-qr',
      icon: FileText,
      title: 'PDF + QR to online viewer',
      description: 'Comprehensive PDF report with QR code linking to an interactive online viewer where you can explore the candidate\'s portfolio, verification details, and interview recording.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

 export  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for early-stage companies',
      price: '$2,500',
      period: '/hire',
      yearlyPrice: 'Success fee only',
      features: [
        { text: '3-5 verified engineers per role', included: true },
        { text: '48h shortlist delivery', included: true },
        { text: 'Portfolio + resume + interview', included: true },
        { text: 'Basic support', included: true },
        { text: 'ATS integration', included: false },
        { text: 'Dedicated account manager', included: false }
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    },
    {
      name: 'Professional',
      description: 'Best for growing teams',
      price: '$3,500',
      period: '/hire',
      yearlyPrice: 'Success fee only',
      featured: true,
      features: [
        { text: '5-7 verified engineers per role', included: true },
        { text: '24h shortlist delivery', included: true },
        { text: 'Portfolio + resume + interview', included: true },
        { text: 'Priority support', included: true },
        { text: 'Full ATS integration', included: true },
        { text: 'Interview coordination', included: true }
      ],
      buttonText: 'Request Shortlist',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      description: 'For high-volume hiring teams',
      price: 'Custom',
      period: '',
      yearlyPrice: 'Volume discounts available',
      features: [
        { text: 'Unlimited verified engineers', included: true },
        { text: 'Same-day shortlist delivery', included: true },
        { text: 'Custom verification criteria', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'SLA guarantee', included: true }
      ],
      buttonText: 'Talk to Sales',
      buttonStyle: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }
  ];

export const faqs = [
    {
      question: "How does Inkaer verify engineers?",
      answer: "We conduct a comprehensive verification process through reverse CAD metadata scans, Turnitin plagiarism checks, AI-content forensics, industry fit tagging, and a rigorous portfolio-based technical interview, condensed into a 10-minute highlight reel for employers. This ensures every engineer has proven skills and real project experience."
    },
    {
      question: "What's the typical turnaround time?",
      answer: "We deliver your shortlist of 5 verified engineers within 48 hours of receiving your requirements. Our team works around the clock to source, verify, and match engineers to your specific needs."
    },
    {
      question: "Can you find engineers for specific tools or industries?",
      answer: "Absolutely. We specialize in finding engineers with specific tool expertise (SolidWorks, ANSYS, etc.) and industry experience (HVAC, automotive, aerospace, medical devices, etc.). Our matching algorithm ensures candidates fit your exact technical requirements."
    },
    {
      question: "What if none of the candidates are suitable?",
      answer: "If you're not satisfied with the initial shortlist, we'll provide a replacement shortlist at no additional cost. We're committed to finding the right fit for your team and will work with you until you find suitable candidates."
    },
    {
      question: "Do you handle the interview scheduling?",
      answer: "Yes, we take care of all the logistics. Once you review the shortlist and select candidates you'd like to interview, we'll coordinate with both parties to schedule interviews at your convenience."
    },
    {
      question: "What information do you need to get started?",
      answer: "We need basic information about the role (title, required tools, industry), your company, location preferences, urgency level, and your contact details. The more specific you are about requirements, the better we can match candidates."
    }
  ];


//footer
export const openings = [
      {
      title: "Mechanical Design Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $110k",
      description: "Our client is looking for a skilled mechanical design engineer to join their team."
    },
      {
      title: "Technical Recruiter Intern",
      department: "People",
      location: "Remote",
      type: "Full-time",
      salary: "Unpaid",
      description: "Help us find and vet the best engineering talent for our network."
    },
  ];


 export  const blogPosts = [
    {
      title: "The Future of Engineering Hiring: Trends to Watch in 2025",
      excerpt: "Explore the latest trends shaping how companies recruit and hire engineering talent, from AI-powered screening to remote-first strategies.",
      author: "Sarah Chen",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Industry Trends",
      image: logoDark,
      slug: "future-of-engineering-hiring"
    },
    {
      title: "How to Build a Strong Engineering Culture in Remote Teams",
      excerpt: "Learn practical strategies for fostering collaboration, communication, and innovation in distributed engineering teams.",
      author: "Mike Rodriguez",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Team Building",
      image: logoDark,
      slug: "remote-engineering-culture"
    },
    {
      title: "Technical Interview Best Practices: A Guide for Hiring Managers",
      excerpt: "Discover effective techniques for conducting technical interviews that accurately assess candidate skills while providing a positive experience.",
      author: "Emily Thompson",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Hiring",
      image: logoDark,
      slug: "technical-interview-best-practices"
    },
    {
      title: "The ROI of Quality Engineering Hires: Why Vetting Matters",
      excerpt: "Analyze the long-term impact of thorough candidate vetting on team productivity, project success, and company growth.",
      author: "David Kim",
      date: "December 28, 2024",
      readTime: "8 min read",
      category: "ROI Analysis",
      image: logoDark,
      slug: "roi-quality-engineering-hires"
    }
  ];




//admin
export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/admin",
                
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/admin/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/admin/reports",
            },
        ],
    },  
        {
        title: "Posts & Pages",
        links: [
            {
                label: "View Blogs",
                icon: NotebookPen,
                path: "/admin/view-bloglist",
            },  
        ],
    },
    {
        title: "Events",
        links: [
            {
                label: "Events",
                icon: CalendarCheck,
                path: "/admin/view-events",
            },  
            {
                label: "Add Event",
                icon: CalendarDays,
                path: "/admin/add-events",
            },
            {
                label: "Bookings",
                icon: Package,
                path: "/admin/view/bookings",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/admin/view-users",
            },
            {
                label: "Manage Users",
                icon: UserPlus,  
                path: "/admin/manage-users",
            },
            {
                label: "View Contacts",
                icon: Contact,
                path: "/admin/view-contacts",
            },
            {
                label: "View Subscribers",
                icon: Rss,
                path: "/admin/view-subscribers",
            },
        ],
    },
 
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/admin/settings",
            },
        ],
    },
];


export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Wireless Headphones",
        image: ProductImage,
        description: "High-quality noise-canceling wireless headphones.",
        price: 99.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Smartphone",
        image: ProductImage,
        description: "Latest 5G smartphone with excellent camera features.",
        price: 799.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "Gaming Laptop",
        image: ProductImage,
        description: "Powerful gaming laptop with high-end graphics.",
        price: 1299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Smartwatch",
        image: ProductImage,
        description: "Stylish smartwatch with fitness tracking features.",
        price: 199.99,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Bluetooth Speaker",
        image: ProductImage,
        description: "Portable Bluetooth speaker with deep bass sound.",
        price: 59.99,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "4K Monitor",
        image: ProductImage,
        description: "Ultra HD 4K monitor with stunning color accuracy.",
        price: 399.99,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Mechanical Keyboard",
        image: ProductImage,
        description: "Mechanical keyboard with customizable RGB lighting.",
        price: 89.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Wireless Mouse",
        image: ProductImage,
        description: "Ergonomic wireless mouse with precision tracking.",
        price: 49.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Action Camera",
        image: ProductImage,
        description: "Waterproof action camera with 4K video recording.",
        price: 249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "External Hard Drive",
        image: ProductImage,
        description: "Portable 2TB external hard drive for data storage.",
        price: 79.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];





