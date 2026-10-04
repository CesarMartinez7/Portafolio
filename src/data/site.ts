export const site = {
  name: "César Martínez",
  role: "Frontend Developer",
  location: "Barranquilla, Colombia",
  email: "cesarwamartinez@gmail.com",
  cv: "/Resumen Profesional - CesarMartinez.pdf",
  github: "https://github.com/CesarMartinez7",
  linkedin:
    "https://www.linkedin.com/in/cesar-luis-martinez-castro-383943332/",
};

export const socials = [
  { icon: "tabler:brand-github", href: site.github, label: "GitHub" },
  { icon: "tabler:brand-linkedin", href: site.linkedin, label: "LinkedIn" },
  { icon: "tabler:mail", href: `mailto:${site.email}`, label: "Email" },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Credentials" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
