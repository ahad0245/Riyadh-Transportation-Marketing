// src/lib/team.ts
export interface TeamMember {
  name: string;
  title: string;
  photo: string;
  credentials?: string;
  description: string;
  slug?: string; // 👈 NEW, optional custom URL part
}

// 🔽 your current teamMembers array moved here (unchanged)
export const teamMembers: TeamMember[] = [
  {
    name: "Professor Hélyette Geman",
    slug: "helyette",
    title: "Founder & Chairman",
    photo: "/images/team/helyette-geman.jpg",
    credentials:
      "Financial Engineer of the Year 2022, Research Professor at Johns Hopkins University",
    description:
      "World-renowned authority in financial engineering and commodity markets, combining deep academic research with practical structuring experience."
  },
  {
    name: "Gareth Wiggan",
    title: "Director",
    photo: "/images/team/gareth-wiggan.jpg",
    description:
      "Specialist in infrastructure and cross-border project finance with more than 15 years of experience. Gareth has structured multi-billion-dollar capital solutions in energy, transport, and digital infrastructure for governments, sponsors, and institutional investors."
  },
  {
    name: "Kamran Tariq",
    title: "CFO",
    photo: "/images/team/Kami B&W.png",
    description:
      "CFO with a track record of building data-driven financial platforms across Europe and the Middle East. Kamran oversees firm strategy, governance, and technology alignment, ensuring every solution blends quantitative rigor with real-world usability."
  },
  {
    name: "Mohammad Hamed",
    title: "CEO",
    photo: "/images/team/ba1.jpg",
    description:
      "Seasoned capital markets executive with deep Middle East coverage. Mohammad leads regional strategy, investor relationships, and origination, connecting global capital with high-growth opportunities across infrastructure, financial services, and real assets."
  },
  {
    name: "Hana Mikhled Al-Husainat",
    title: "Chief Technology Officer",
    photo: "/images/team/ba2.jpg",
    description:
      "Corporate finance and governance specialist turned technology leader. Hana designs and oversees the firm’s digital platforms, data architecture, and risk-aware workflows, enabling scalable, compliant solutions for banks, regulators, and regional enterprises."
  },
  {
    name: "Fei Xu",
    title: "Chartered Financial Analyst",
    photo: "/images/team/Fei Xu.png",
    description:
      "Capital markets professional and CFA charterholder with extensive experience in China’s fixed-income and private-equity markets. Fei focuses on credit research, portfolio construction, and cross-border capital flows between Asia and the Middle East."
  },
  {
    name: "Dr. D.K. MacFadden",
     slug: "macFadden", // 👈 NEW
    title: "Medical Director & Innovation Specialist",
    photo: "/images/team/dk-macfadden.png",
    description:
      "Medical sector innovator with deep expertise in healthcare systems and insurance. Dr. MacFadden applies clinical insight to create new insurance-linked securities and risk-transfer structures, particularly in life and health portfolios."
  },
  {
    name: "Rodger Lodenguai",
    title: "Senior Executive Advisor",
    photo: "/images/team/Rodger B&W.png",
    credentials:
      "Visionary strategist in global tech, telecom, smart-city, and cybersecurity sectors with over 50,000 executive connections worldwide.",
    description:
      "Senior advisor to boards and founders across telecom, technology, smart-city, and cybersecurity verticals."
  },
  {
    name: "Rami Omran",
    title: "VP Middle East Operations",
    photo: "/images/team/omran1.jpg",
    description:
      "Capital markets and investment banking professional with a strong record in growth strategy and cross-border deal-making. Rami leads on-the-ground execution, local partnerships, and client coverage across key Middle Eastern markets."
  },
  {
    name: "Minnu Kalapala",
    title: "In-House Legal Counsel",
    photo: "/images/team/ba3.jpg",
    description:
      "Legal expert overseeing corporate governance and regulatory compliance. As a registered attorney in Chicago holding a Juris Doctor degree, she provides specialized in-house counsel to ensure robust legal frameworks for financial operations."
  }
  ,
  {
    name: "Osama Almobarak",
    title: "Vice President, telecommunications",
    photo: "/images/team/ba4 (1).jpg",
    description:
      "Telecom expert overseeing corporate governance and regulatory compliance. As a registered attorney in Chicago holding a Juris Doctor degree, he provides specialized in-house counsel to ensure robust legal frameworks for financial operations."
  }
  ,
  {
    name: "Laird Robertson",
    title: "Outside General Counsel",
    photo: "/images/team/Laird.png",
    description:
      "Yale-educated attorney with a J.D., cum laude, from Georgetown Law and studies at Oxford. Laird brings 30+ years advising investors and companies on corporate, finance, and real estate matters as outside counsel."
  }
];

// helper to build `/firstName` route
// helper: build clean URL like /kamran, /helyette, /dk
export const getFirstNameSlug = (member: TeamMember) => {
  // If custom slug is set, always use that
  if (member.slug) {
    return member.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  // Otherwise, remove common titles
  const withoutTitle = member.name
    .replace(/^professor\s+/i, "")
    .replace(/^prof\.\s+/i, "")
    .replace(/^dr\.\s+/i, "")
    .replace(/^dr\s+/i, "");

  const first = withoutTitle.trim().split(" ")[0] ?? "";
  return first.toLowerCase().replace(/[^a-z0-9]/g, "");
};