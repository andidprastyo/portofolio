/* Site content: every value the site renders lives here. A section renders
   only when its data has entries, so deleting an item removes it cleanly. */

export const profile = {
  // Shown in the navbar, hero, and browser title.
  name: 'Andi Dwi Prastyo',
  // Short role line, e.g. "Software Engineer" or "Data Platform Engineer".
  role: 'Solutions Engineer',
  // One-sentence pitch. Keep it under ~160 characters.
  tagline:
    'I bridge business needs and technical solutions, turning complex requirements into reliable, scalable systems.',
  // 2 to 3 short paragraphs for the About section.
  bio: [
    'I work at Telkomsat as a Solutions Engineer, building systems with machine learning, LLMs, and geospatial data for government and enterprise clients.',
    'My work covers solution design, data pipelines, and intelligent systems. I translate technical constraints into something a client can operate.',
    'I am currently working on AI engineering, geospatial intelligence, and solution architecture.',
  ],
  // Where you're based, and how you prefer to work.
  location: 'Bogor, Jawa Barat',
  availability: 'Open to new opportunities',
  // Path to your photo in /public. Set to null to hide the avatar.
  avatar: '/image_1.jpeg',
  // Path to your résumé in /public, or null to hide the button.
  resumeUrl: null,
}

/* Social links. `icon` accepts: github | linkedin | x | mail | link. */
export const socials = [
  { label: 'GitHub', href: 'https://github.com/andidprastyo', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andidprastyo', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:andidprastyo@gmail.com', icon: 'mail' },
]

/* Focus-area strip under the hero. `tone` is blue | cyan | green | violet. */
export const focusAreas = [
  { label: 'AI Engineering', tone: 'green' },
  { label: 'Geospatial Intelligence', tone: 'cyan' },
  { label: 'Data Platforms', tone: 'green' },
  { label: 'IoT & Edge AI', tone: 'violet' },
  { label: 'Solution Architecture', tone: 'green' },
]

/* Experience, newest first. `highlights` is optional. */
export const experience = [
  {
    role: 'Solutions Engineer',
    company: 'PT Telkom Satelit Indonesia',
    location: 'Bogor, Jawa Barat',
    start: 'Apr 2026',
    end: 'Present',
    summary:
      'Bridging business needs and technical solutions, turning complex requirements into reliable, scalable systems.',
    highlights: [
      'Engage with government agencies, state-owned enterprises, and private companies across industries, including forestry and environmental management, to identify needs and design tailored solutions.',
      'TSATSense (IoT): Developed machine learning models for fuel tank volume prediction and edge AI across 4 live CCTV streams to improve operational efficiency and workplace safety.',
      'GeoTSAT (Earth Intelligence): Built GeoTSAT.id for LULC visualization and forest fire monitoring using 100K+ hotspot records, wind data, and a chatbot for decision support.',
      'Forestry & ESG: Developing web-based carbon stock monitoring solutions using Sentinel-1/2, GLO-30, GEDI, canopy models, and machine learning to support forest carbon assessment and environmental monitoring.',
    ],
    stack: [
      'React',
      'TypeScript',
      'PostgreSQL/PostGIS',
      'Python',
      'Docker',
      'Google Earth Engine',
      'ArcgGIS',
      'QGIS',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'PT Telkom Satelit Indonesia',
    location: 'Bogor, Jawa Barat',
    start: 'Jul 2025',
    end: 'May 2026',
    summary:
      'Connected production data to BigQuery and built an n8n SQL agent that feeds 6 BI dashboards.',
    highlights: [
      'Built a SQL agent with n8n and Qwen2.5:7B (Ollama) that answers questions across 100K+ multi-table datasets.',
      'Built a Python pipeline that syncs production data to Google BigQuery every 5 minutes and feeds 6 BI dashboards through dedicated data marts.',
      'Connected AI querying to automated pipelines, which shortened the path from raw data to a report.',
    ],
    stack: ['Python', 'MySQL', 'Google BigQuery', 'Docker', 'n8n', 'Ollama', 'Power BI'],
  },
  {
    role: 'Research Assistant',
    company: 'Politeknik Negeri Malang',
    location: 'Malang, Jawa Timur',
    start: 'Jun 2024',
    end: 'Jun 2025',
    summary:
      'Built traffic monitoring prototypes that detect and track vehicles in real time on an NVIDIA Jetson Nano.',
    highlights: [
      'Built a vehicle counting system with YOLOv5n on an NVIDIA Jetson Nano that reached 85%+ detection accuracy using a custom Python tracker.',
      'Designed and tested traffic monitoring prototypes for university-funded research projects, covering real-time detection, tracking, and edge computing.',
      'Optimized computer vision models for edge deployment so they run in real time on limited hardware.',
    ],
    stack: ['Python', 'YOLOv5', 'NVIDIA Jetson Nano', 'OpenCV', 'Flask', 'Docker'],
  },
  {
    role: 'Data Scientist Intern',
    company: 'PT Telkom Satelit Indonesia',
    location: 'Bogor, Jawa Barat',
    start: 'Aug 2024',
    end: 'Dec 2024',
    summary:
      'Built a coverage-check system for beam coordinates and a LLaMA retrieval pipeline over the Telkomsat knowledge base.',
    highlights: [
      'Built a system that identifies the internet coverage area for specific coordinates, which cut negative values by 95% and supported 10,000+ beam coordinate checks a month.',
      'Built a retrieval pipeline on LLaMA 3.2 1B over the Telkomsat knowledge base, which improved retrieval accuracy by 40% across 100,000+ documents.',
      'Used Vertex AI Notebooks to cut analysis time by 30% and make reports clearer for 10+ stakeholders.',
    ],
    stack: ['Python', 'LLaMA', 'Vertex AI', 'PostgreSQL/PostGIS', 'Docker', 'n8n'],
  },
  {
    role: 'Data/Software Engineer Intern',
    company: 'Kementerian Keuangan RI',
    location: 'Jakarta Pusat, DKI Jakarta',
    start: 'Feb 2024',
    end: 'Jun 2024',
    summary:
      'Built Legalytics, a legal analytics dashboard with faster queries and automated document analysis.',
    highlights: [
      'Designed and deployed Legalytics, a legal analytics dashboard that cut data retrieval time by 40% through query optimization and caching.',
      'Automated analysis of 500+ legal documents with GPT-3.5 Turbo, using prompt engineering to extract provisions and generate comparisons.',
      'Built a legal precedent search with sentence-transformers that reduced research time by 30%.',
    ],
    stack: [
      'Python',
      'PostgreSQL',
      'Docker',
      'GPT-3.5 Turbo',
      'sentence-transformers',
      'Flask',
    ],
  },
]

/* Projects. `status`: shipped | active | wip | archived. `featured: true`
   makes a card span the full grid width. */
export const projects = [
  {
    title: 'OLIST Store ELT Pipeline',
    image: '/projects/olist.png',
    imageWidth: 782,
    imageHeight: 398,
    imageAlt:
      'OLIST ELT pipeline diagram: Kaggle CSVs ingested with Python, uploaded to S3, transformed with dbt and DuckDB, and served to Postgres and Metabase.',
    status: 'wip',
    featured: true,
    year: '2024',
    description:
      'An ELT pipeline that loads e-commerce CSVs into DuckDB, transforms them with dbt, and serves the result to Postgres and Metabase.',
    stack: ['Python', 'PostgreSQL', 'DuckDB', 'Docker', 'AWS EC2', 'AWS S3'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/andidprastyo/olist-pipeline',
        icon: 'github',
      },
    ],
  },
  {
    title: 'GeoTSAT',
    image: '/projects/geotsat.jpeg',
    imageWidth: 1200,
    imageHeight: 717,
    imageAlt:
      'GeoTSAT landing page with satellite imagery of terraced rice fields and the headline Secure Earth Intelligence for Indonesia.',
    status: 'active',
    year: '2025',
    description:
      'Geospatial platform for land cover visualization and forest fire monitoring.',
    stack: [
      'React',
      'TypeScript',
      'PostgreSQL/PostGIS',
      'GEE',
      'QGIS',
      'Docker',
      'GitLab',
    ],
    links: [{ label: 'geotsat.id', href: 'https://geotsat.id', icon: 'link' }],
  },
  {
    title: 'TSATSense',
    image: '/projects/tsatsense.jpeg',
    imageWidth: 1200,
    imageHeight: 720,
    imageAlt:
      'TSATSense IoT landing page with connected asset icons orbiting a satellite hub.',
    status: 'active',
    year: '2026',
    description:
      'IoT and AI systems that turn sensor and video feeds into alerts and predictions.',
    stack: [
      'React',
      'TypeScript',
      'PostgreSQL',
      'Python',
      'Docker',
      'GEE',
      'QGIS',
      'MQTT',
      'Edge AI',
    ],
    links: [{ label: 'tsatsense.id', href: 'https://tsatsense.id', icon: 'link' }],
  },
  {
    title: 'High Carbon Stock Analysis',
    image: '/projects/carbon.jpeg',
    imageWidth: 1200,
    imageHeight: 716,
    imageAlt:
      'Carbon monitoring report cover with satellite imagery of forested hills in Bogor Regency.',
    status: 'shipped',
    year: '2025',
    description:
      'Mapped high carbon stock areas from satellite data to support land management and conservation planning.',
    stack: [
      'ArcGIS',
      'Python',
      'GEE',
      'STAC',
      'Sentinel-1/2',
      'GEDI',
      'GLO30',
      'LULC',
      'HCSA 2017',
    ],
    links: [{ label: 'ArcMap', href: 'https://arcg.is/OmXDK', icon: 'link' }],
  },
  {
    title: 'Legalytics',
    image: '/projects/jdih.jpeg',
    imageWidth: 1200,
    imageHeight: 716,
    imageAlt:
      'JDIH Kemenkeu legal document portal with search, regulation listings, and legal analytics figures.',
    status: 'active',
    year: '2024',
    description:
      'A legal analytics dashboard with faster search and automated analysis of legal documents.',
    stack: ['React', 'TypeScript', 'Elasticsearch', 'Docker', 'GPT-3.5 Turbo', 'Flask'],
    links: [
      { label: 'JDIH Kemenkeu', href: 'https://jdih.kemenkeu.go.id/home', icon: 'link' },
    ],
  },
]

/* Navbar sections. `id` must match the id of the rendered section. */
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const footerNote = ''
