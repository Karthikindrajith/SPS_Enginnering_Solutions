export type Capability = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  intro: string;
  image: string;
  services: string[];
  process: {
    number: string;
    title: string;
    description: string;
  }[];
};

export const capabilities: Capability[] = [
  {
    slug: "steel-fabrication",
    number: "01",
    eyebrow: "Steel Fabrication",
    title: "Precision steel",
    highlight: "built for execution.",
    description:
      "Structural steel fabrication focused on accuracy, controlled production and dependable project delivery.",
    intro:
      "From drawings and material preparation through fabrication and inspection, our workflow is structured around dimensional accuracy and coordinated execution.",
    image: "/images/capabilities/fabrication.jpg",

    services: [
      "Structural Steel Fabrication",
      "Material Preparation",
      "Cutting & Processing",
      "Welding & Assembly",
      "Dimensional Inspection",
      "Dispatch Coordination",
    ],

    process: [
      {
        number: "01",
        title: "Review",
        description:
          "Project drawings, requirements and fabrication scope are reviewed before production begins.",
      },
      {
        number: "02",
        title: "Prepare",
        description:
          "Materials and fabrication activities are coordinated around the required structural components.",
      },
      {
        number: "03",
        title: "Fabricate",
        description:
          "Structural components move through controlled cutting, assembly and fabrication processes.",
      },
      {
        number: "04",
        title: "Verify",
        description:
          "Completed components are checked before dispatch and subsequent site execution.",
      },
    ],
  },

  {
    slug: "structural-erection",
    number: "02",
    eyebrow: "Structural Erection",
    title: "Steel assembled",
    highlight: "where it matters.",
    description:
      "Coordinated structural erection focused on planning, responsible site practices and efficient execution.",
    intro:
      "Structural erection connects fabricated components with real site conditions. Our approach emphasizes sequence planning, coordination and controlled execution.",

    image: "/images/capabilities/erection.jpg",

    services: [
      "Structural Steel Erection",
      "Site Coordination",
      "Lifting Planning",
      "Structural Alignment",
      "Field Assembly",
      "Execution Supervision",
    ],

    process: [
      {
        number: "01",
        title: "Plan",
        description:
          "Site conditions, structural requirements and erection sequence are reviewed.",
      },
      {
        number: "02",
        title: "Coordinate",
        description:
          "Resources, lifting activities and structural components are coordinated for execution.",
      },
      {
        number: "03",
        title: "Erect",
        description:
          "Structural components are positioned and assembled through controlled site activities.",
      },
      {
        number: "04",
        title: "Verify",
        description:
          "Alignment and completed structural work are reviewed as execution progresses.",
      },
    ],
  },

  {
    slug: "peb-solutions",
    number: "03",
    eyebrow: "PEB Solutions",
    title: "Industrial buildings",
    highlight: "built efficiently.",
    description:
      "Pre-engineered building solutions supporting industrial facilities, warehouses and large-span structural requirements.",
    intro:
      "PEB systems combine structural efficiency with coordinated fabrication and site assembly for modern industrial building requirements.",

    image: "/images/capabilities/febrication.jpg",

    services: [
      "PEB Structural Systems",
      "Industrial Buildings",
      "Warehouse Structures",
      "Primary Steel Frames",
      "Secondary Members",
      "Building Coordination",
    ],

    process: [
      {
        number: "01",
        title: "Define",
        description:
          "Building requirements and structural scope are established around project needs.",
      },
      {
        number: "02",
        title: "Coordinate",
        description:
          "Structural components and building systems are coordinated before execution.",
      },
      {
        number: "03",
        title: "Fabricate",
        description:
          "Primary and secondary structural components move through fabrication.",
      },
      {
        number: "04",
        title: "Assemble",
        description:
          "Fabricated building systems are coordinated through site erection.",
      },
    ],
  },

  {
    slug: "roofing-cladding",
    number: "04",
    eyebrow: "Roofing & Cladding",
    title: "Protection from",
    highlight: "structure to envelope.",
    description:
      "Industrial roofing and cladding solutions integrated with structural systems and project requirements.",
    intro:
      "Roofing and cladding complete the industrial building envelope. Installation requires coordination with the supporting structure, interfaces and site execution.",

    image: "/images/capabilities/roofing.jpg",

    services: [
      "Industrial Roofing",
      "Wall Cladding",
      "Roofing Accessories",
      "Building Envelope",
      "Installation Coordination",
      "Structural Interfaces",
    ],

    process: [
      {
        number: "01",
        title: "Review",
        description:
          "Structural interfaces and building envelope requirements are reviewed.",
      },
      {
        number: "02",
        title: "Prepare",
        description:
          "Materials and installation sequence are coordinated around site requirements.",
      },
      {
        number: "03",
        title: "Install",
        description:
          "Roofing and cladding systems are installed across the supporting structure.",
      },
      {
        number: "04",
        title: "Complete",
        description:
          "Interfaces and completed areas are reviewed as installation progresses.",
      },
    ],
  },

  {
    slug: "industrial-piping",
    number: "05",
    eyebrow: "Industrial Piping",
    title: "Piping systems",
    highlight: "built around industry.",
    description:
      "Industrial piping support and execution capabilities coordinated around facility and project requirements.",
    intro:
      "Industrial piping requires careful coordination between routing, structural interfaces, fabrication requirements and site execution.",

    image: "/images/capabilities/peb.jpg",

    services: [
      "Industrial Piping",
      "Pipe Fabrication",
      "Pipe Supports",
      "Site Installation",
      "Structural Coordination",
      "Execution Support",
    ],

    process: [
      {
        number: "01",
        title: "Review",
        description:
          "Piping requirements, routing and structural interfaces are reviewed.",
      },
      {
        number: "02",
        title: "Coordinate",
        description:
          "Fabrication and site requirements are coordinated around the project scope.",
      },
      {
        number: "03",
        title: "Execute",
        description:
          "Piping components and associated supports move through fabrication and installation.",
      },
      {
        number: "04",
        title: "Verify",
        description:
          "Completed execution is reviewed against the defined project requirements.",
      },
    ],
  },
];

export function getCapability(slug: string) {
  return capabilities.find((capability) => capability.slug === slug);
}