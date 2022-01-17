const Types = {
  PROJECT: "project",
  RESEARCH: "research",
  WORK: "work",
}
const portfolio = [
  {
    name: "hubspot-datasets",
    type: Types.WORK,
    imagePath: "datasets-portfolio-image.png",
    link: "https://knowledge.hubspot.com/reports/create-and-use-datasets",
    title: "HubSpot Datasets",
    description:
      "Launched with HubSpot's new enterprise-tier Operations Hub product, Datasets enable the curation and transformation of HubSpot data to streamline analysis.",
    tags: ["product"],
    date: new Date(2021, 11, 1),
  },
  {
    name: "hubspot-custom-report-builder",
    type: Types.WORK,
    imagePath: "custom-report-builder-portfolio-image.png",
    link: "https://knowledge.hubspot.com/reports/create-reports-with-the-custom-report-builder",
    title: "HubSpot Custom Report Builder",
    description:
      "Offering a multitude of data sources and visualization options, the new HubSpot custom report builder is a SQL-powered business intelligence tool for everyday users.",
    tags: ["product"],
    date: new Date(2021, 2, 1),
  },
  {
    name: "flavor-map",
    type: Types.PROJECT,
    link: "https://food.tools",
    imagePath: "flavor-map-portfolio-image.png",
    title: "The Flavor Map",
    description:
      "Visual exploration of ingredient, pairing, and cuisine data from The Flavor Bible using force simulation.",
    tags: ["visualization"],
    date: new Date(2019, 6, 5),
  },
  {
    name: "chinese-vis",
    type: Types.PROJECT,
    link: "https://chinese-vis.brettfouss.com",
    imagePath: "chinese-vis-portfolio-image.png",
    title: "Visualizing the Chinese Language",
    description:
      "Narrative visualization piece that examines properties of Chinese characters, and how they relate to one other to form words.",
    tags: ["visualization"],
    date: new Date(2019, 4, 18),
  },
  {
    name: "net-set",
    type: Types.RESEARCH,
    link: "https://vizsec.org/files/2018/Fouss_Poster.pdf",
    imagePath: "net-set-poster-abstract-portfolio-image.png",
    title: "NetSet",
    description:
      "Cyber security tool for discovery of correlated network alerts using novel set visualizations. Poster presented at the Symposium on Visualization for Cyber Security at the 2018 IEEE VIS conference in Berlin, Germany.",
    tags: ["poster", "visualization"],
    date: new Date(2018, 9, 22),
  },
  {
    name: "punyvis",
    type: Types.RESEARCH,
    link: "https://ieeexplore.ieee.org/document/9161590",
    imagePath: "punyvis-portfolio-image.png",
    title: "PunyVis",
    description:
      "Publication discussing a visual analytics tool for mitigating homograph phishing attacks which exploit visual similarity of Unicode characters to spoof URLs. Presented at the Symposium on Visualization for Cyber Security at the 2019 IEEE VIS conference in Vancouver, Canada.",
    tags: ["paper", "visualization"],
    date: new Date(2019, 10, 23),
  },
]

export default portfolio
