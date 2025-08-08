
import React from "react";
import { Link } from "react-router-dom";
import { logoDark } from '@/assets';
import { defaultLegalLinks, defaultSections, defaultSocialLinks } from "@/constants";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}



export const Footer = ({
  logo = {
    url: "/",
    src: logoDark,
    alt: "Inkaer",
    title: "Inkaer",
  },
  sections = defaultSections,
  description = "Get hired based on real skills, not resumes. Tackle engineering challenges and showcase your true potential.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Inkaer. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-[1rem] w-full">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start ">
              <Link to={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className=" flex items-center justify-center text-sm text-muted-foreground font-sora">
              {description}
            </p>
            <ul className="flex items-center justify-center space-x-4 xs:space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium  hover:text-inkaer-blue transition-colors duration-200">
                  <Link to={social.href} aria-label={social.label}>
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 xs:grid-cols-2  md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold font-sora text-gray-900">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-inkaer-blue transition-colors duration-200 font-sora"
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 font-sora">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-inkaer-blue transition-colors duration-200 font-sora">
                <Link to={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
