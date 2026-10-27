/* ============================================================================
   SITE CONTENT
   ----------------------------------------------------------------------------
   >>> THIS IS THE ONLY FILE YOU NEED TO EDIT FOR ROUTINE UPDATES. <<<

   Every value below is a PLACEHOLDER. Replace the text between the quotes with
   your real details, then reload the dev server. Delete any array item you
   don't need — every section renders only if it has content.
   ========================================================================= */

export const profile = {
  // Shown in the navbar, hero, and browser title.
  name: 'Andi Dwi Prastyo',
  // Short role line, e.g. "Software Engineer" or "Data Platform Engineer".
  role: 'Solutions Engineer',
  // One-sentence pitch. Keep it under ~160 characters.
  tagline:
    'I bridge business needs and technical solutions, turning complex requirements into reliable, scalable systems.',
  // 2–3 short paragraphs for the About section.
  bio: [
    'I am a Solution Engineer at Telkomsat, building scalable, AI-powered solutions using machine learning, LLMs, and geospatial intelligence to solve real-world problems.',
    'I work across solution design, data pipelines, and intelligent system development, translating complex technical challenges into practical, impactful solutions.',
    'Currently exploring interesting challenges in AI engineering, geospatial intelligence, and scalable solution architecture.',
  ],
  // Where you're based, and how you prefer to work.
  location: 'Bogor, Jawa Barat',
  availability: 'Open to new opportunities',
  // Path to your photo in /public. Set to null to hide the avatar.
  avatar: '/image_1.jpeg',
  // Path to your résumé in /public, or null to hide the button.
  resumeUrl: null,
}

/* ---- Social / contact links --------------------------------------------
   `icon` accepts: github | linkedin | x | mail | link
   ------------------------------------------------------------------------ */
export const socials = [
  { label: 'GitHub', href: 'https://github.com/andidprastyo', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andidprastyo', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:andidprastyo@gmail.com', icon: 'mail' },
]

/* ---- Hero ticker --------------------------------------------------------
   Decorative strip under the hero. `tone` picks the marker colour:
   blue | cyan | green | violet. Keep each label short.
   ------------------------------------------------------------------------ */
export const focusAreas = [
  { label: 'AI Engineering', tone: 'blue' },
  { label: 'Geospatial Intelligence', tone: 'cyan' },
  { label: 'Data Platforms', tone: 'green' },
  { label: 'IoT & Edge AI', tone: 'violet' },
  { label: 'Solution Architecture', tone: 'blue' },
]

/* ---- Experience ---------------------------------------------------------
   Newest first. `highlights` is optional.
   ------------------------------------------------------------------------ */
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
      'GeoTSAT (Earth Intelligence): Delivered geospatial solutions, including GeoTSAT.id for LULC visualization and AI-powered forest fire monitoring using 100K+ hotspot records, wind data, and chatbot-based decision support.',
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
      'Streamlined data access and reporting by integrating AI-driven querying with automated data pipelines, supporting faster analysis and data-driven decision-making across 6 BI dashboards.',
    highlights: [
      'Built an AI- powered SQL Agent using n8n and Qwen2.5:7B (Ollama) to automate natural language querying, analysis, and insights across 100K+ multi-table datasets.',
      'Developed a Python pipeline syncing production database data to Google BigQuery every 5 minutes, powering 6 BI dashboards through dedicated data marts with near-real-time data updates.',
      'Streamlined data access and reporting by integrating AI-driven querying with automated data pipelines, supporting faster analysis and data-driven decision-making across 6 BI dashboards.',
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
      'Developed and optimized AI-based traffic monitoring prototypes, focusing on real-time vehicle detection, tracking, and edge computing using YOLOv5n on NVIDIA Jetson Nano.',
    highlights: [
      'Developed a real-time vehicle counting system using YOLOv5n on NVIDIA Jetson Nano, achieving 85%+ detection accuracy with a custom Python-based tracking algorithm.',
      'Designed and tested AI-based traffic monitoring prototypes under university- funded research projects, focusing on real- time vehicle detection, tracking, and edge computing.',
      'Optimized computer vision models for edge deployment, enabling real-time inference on resource-constrained NVIDIA Jetson hardware.',
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
      'Developed a system to identify internet coverage area for specific coordinates, achieving a 95% reduction in negative values and enabling accurate analysis for 10,000+ beam coordinate checks monthly by optimizing network sizing algorithms.',
    highlights: [
      'Developed a system to identify internet coverage area for specific coordinates, achieving a 95% reduction in negative values and enabling accurate analysis for 10,000+ beam coordinate checks monthly by optimizing network sizing algorithms.',
      'Implemented a scalable pipeline integrating LLaMA (LLaMA 3.2 1B model) with Telkomsat’s proprietary knowledge base, improving retrieval accuracy by 40% across 100,000+ documents by fine-tuning the model and enhancing indexing techniques.',
      'Utilized Vertex AI Notebooks to reduce analysis time by 30% and enhance reporting clarity for 10+ stakeholders.',
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
      'Developed Legalytics, a legal analytics dashboard that improved data retrieval speeds by 40% through optimized database queries and advanced caching strategies, while automating the analysis of 500+ legal documents using GPT-3.5 Turbo and implementing a legal precedent retrieval system with sentence-transformers.',
    highlights: [
      'Designed and deployed Legalytics, a legal analytics dashboard that improved data retrieval speeds by 40% through optimized database queries and advanced caching strategies.',
      'Automated analysis of 500+ legal documents using GPT-3.5 Turbo, implementing prompt engineering to extract key provisions and generate comparative insights.',
      'Developed a legal precedent retrieval system using sentence-transformers, reducing research time by 30% through semantic search capabilities.',
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

/* ---- Projects -----------------------------------------------------------
   `status` drives the badge colour. One of:
   shipped | active | wip | archived
   Set `featured: true` to make a card span the full grid width.
   ------------------------------------------------------------------------ */
export const projects = [
  {
    title: 'OLIST Store ELT Pipeline',
    image: '/projects/olist.png',
    imageAlt:
      'OLIST ELT pipeline diagram: Kaggle CSVs ingested with Python, uploaded to S3, transformed with dbt and DuckDB, and served to Postgres and Metabase.',
    status: 'wip',
    featured: true,
    year: '2024',
    description:
      'A high-performance ELT pipeline that extracts and loads large-scale e-commerce data into DuckDB-WASM before transforming it for efficient querying and analysis.',
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
    imageAlt:
      'GeoTSAT landing page with satellite imagery of terraced rice fields and the headline Secure Earth Intelligence for Indonesia.',
    status: 'active',
    year: '2025',
    description:
      'Earth Intelligence solution that transforms geospatial and remote sensing data into actionable insights.',
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
    imageAlt:
      'TSATSense IoT landing page with connected asset icons orbiting a satellite hub.',
    status: 'active',
    year: '2026',
    description:
      'IoT and AI solutions that turn real-time sensor and video data into actionable insights.',
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
    imageAlt:
      'Carbon monitoring report cover with satellite imagery of forested hills in Bogor Regency.',
    status: 'done',
    year: '2025',
    description:
      'Analyzed and visualized high carbon stock areas using geospatial data and machine learning models to support sustainable land management and conservation efforts.',
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
    imageAlt:
      'JDIH Kemenkeu legal document portal with search, regulation listings, and legal analytics figures.',
    status: 'active',
    year: '2024',
    description:
      'A legal analytics dashboard that improved data retrieval speeds by 40% through optimized database queries and advanced caching strategies, while automating the analysis of 500+ legal documents using GPT-3.5 Turbo and implementing a legal precedent retrieval system with sentence-transformers.',
    stack: ['React', 'TypeScript', 'Elasticsearch', 'Docker', 'GPT-3.5 Turbo', 'Flask'],
    links: [
      { label: 'JDIH Kemenkeu', href: 'https://jdih.kemenkeu.go.id/home', icon: 'link' },
    ],
  },
]

/* ---- Navbar sections ----------------------------------------------------
   `id` must match the id of the rendered section.
   ------------------------------------------------------------------------ */
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const footerNote = ''
