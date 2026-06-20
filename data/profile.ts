/**
 * SINGLE SOURCE OF CONTENT
 * ------------------------------------------------------------------
 * Every section of the site reads from this file. Edit here, not in
 * components. All content is resume-verified. Numbers shown as facts
 * are real only (CGPA 8.0, Class 10 Maths 99/100, OmniGuard metrics,
 * volleyball runner-up 2025). Everything else stays qualitative.
 *
 * All live links (GitHub repos, HuggingFace Space, LinkedIn, certificate
 * Drive files) are filled in. Set your real domain in app/layout.tsx,
 * app/sitemap.ts, and app/robots.ts before deploying.
 */

export type Project = {
  name: string;
  featured?: boolean;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string[];
  github?: string;
  demo?: string;
};

export type Experience = {
  role: string;
  org: string;
  place: string;
  dates: string;
  title: string;
  bullets: string[];
  tech: string[];
  demo?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  url: string;
};

export type Stat = { label: string; value: string; suffix?: string };

const GITHUB_USER = "https://github.com/harshita1109";

export const profile = {
  name: "Harshita Sharma",
  initials: "HS",
  tagline: "Turning AI research into systems that ship.",
  sub: "AI/ML engineer building and deploying computer-vision, LLM, and agentic systems — from data preprocessing to real-time inference endpoints.",
  roles: [
    "AI Engineer",
    "Generative AI Engineer",
    "AIML Engineer",
    "Agentic AI Engineer",
  ],
  location: "Faridabad, India",
  openTo: "Open to remote work & relocation",

  email: "harshitash1107@gmail.com",
  phone: "+91 81780 46045",

  links: {
    github: GITHUB_USER,
    linkedin: "https://www.linkedin.com/in/harshita-sharma-167280296/",
    resume: "/resume.pdf",
  },

  about: [
    "I'm an AI/ML engineer finishing a B.Tech in Computer Science (AIML specialization), and I like the part of the job where a model stops being a notebook and starts being a service. My work spans computer vision, LLM and RAG systems, and agentic pipelines — and I care most about the unglamorous things that make AI usable: latency, reliability, and clean inference paths.",
    "Most recently I've been building a real-time video-surveillance and anomaly-detection system with YOLOv8 and OpenCV, and before that an LLM-powered mental-health chatbot designed to stay low-latency and accessible. My favorite project, OmniGuard AI, came out of a simple question: how do you catch an LLM when it fails, without paying to call an LLM on every request?",
    "I'm based in Faridabad and open to remote work and relocation.",
  ],

  stats: [
    { label: "CGPA", value: "8.0" },
    { label: "Class 10 Maths", value: "99", suffix: "/100" },
    { label: "Shipped projects", value: "4" },
    { label: "Certifications", value: "6" },
  ] as Stat[],

  skills: {
    "Programming": ["Python", "SQL", "Java", "C++", "JavaScript (React, Node.js)"],
    "Machine Learning & Data Science": [
      "Supervised & Unsupervised Learning",
      "Classification",
      "Clustering",
      "Predictive Analytics",
      "Model Training & Evaluation",
      "Optimization",
      "Feature Engineering",
    ],
    "Gen AI & LLM": [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "AI Agents",
      "LangChain",
      "FAISS",
      "ChromaDB",
      "Chatbot Development",
      "NLP",
    ],
    "LLM APIs & Models": [
      "OpenAI (GPT)",
      "Google Gemini",
      "Anthropic Claude",
      "Groq",
      "LLaMA",
      "Hugging Face Transformers",
    ],
    "Computer Vision": [
      "YOLOv8",
      "OpenCV",
      "Object Detection",
      "Video Analytics",
      "Real-time Inference",
    ],
    "Data Analytics & Viz": ["Power BI", "Tableau", "Excel", "EDA", "Dashboards", "Statistics"],
    "Data Engineering": [
      "ETL Pipelines",
      "Data Cleaning & Transformation",
      "Data Quality & Governance",
      "PostgreSQL",
      "Cloud Environments",
    ],
    "Frameworks & Libraries": [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
    "Tools & Deployment": [
      "REST APIs",
      "FastAPI",
      "Streamlit",
      "Docker",
      "Redis",
      "Git & GitHub",
      "GitHub Actions CI/CD",
      "Linux",
      "Google Colab",
      "AWS",
      "Azure",
    ],
  } as Record<string, string[]>,

  experience: [
    {
      role: "AI Intern",
      org: "Codeacious Technologies",
      place: "Noida, India",
      dates: "Jan 2026 – Present",
      title: "AI-Powered Video Surveillance & Anomaly Detection System",
      bullets: [
        "Developed computer-vision and deep-learning models using YOLOv8 and OpenCV for real-time object detection and video analytics.",
        "Designed a multi-stage inference pipeline with motion-based frame filtering, object detection, and Visual-LLM validation — reducing false positives via event debouncing.",
        "Built scalable RTSP video-processing pipelines using multi-threading, a producer-consumer architecture, and distributed inference with auto-reconnect for reliable real-time monitoring.",
      ],
      tech: ["YOLOv8", "OpenCV", "Multi-threading", "RTSP", "Visual LLM"],
    },
    {
      role: "AIML Intern",
      org: "Qmansys Infosolutions",
      place: "Uttar Pradesh, India",
      dates: "Jul 2025 – Oct 2025",
      title: "LLM-Powered Mental Health Conversational AI Chatbot",
      bullets: [
        "Built an AI mental-health chatbot using LLMs with LangChain and Groq for empathetic, context-aware responses.",
        "Applied NLP for intent detection, sentiment analysis, and adaptive conversation flow.",
        "Optimized for scalability and low latency on Google Colab, improving accessibility for diverse user groups including visually impaired individuals.",
      ],
      tech: ["LangChain", "Groq", "NLP", "LLMs"],
      demo: "https://huggingface.co/spaces/harshitash11/Mental_Health_Booster_Chatbot",
    },
  ] as Experience[],
  // ^ Mental Health Chatbot live demo

  projects: [
    {
      name: "OmniGuard AI",
      featured: true,
      tagline: "Real-time Hybrid RAG Anomaly Detection for LLM Failures",
      problem:
        "How do you catch an LLM when it fails — without paying to call an LLM on every single request?",
      solution:
        "A hybrid RAG pipeline pairing fast vector-similarity search with an LLM-as-judge path. A custom vector database runs kNN semantic search over sentence-transformer embeddings, and a RAG retrieval layer grounds LLM verdicts in the top-5 similar examples. Served via async FastAPI with WebSocket real-time monitoring.",
      stack: [
        "FastAPI",
        "WebSockets",
        "Sentence Transformers",
        "Custom Vector DB / kNN",
        "RAG",
        "PostgreSQL",
        "Redis",
        "Docker Compose",
        "GitHub Actions",
      ],
      impact: [
        "Lifted detection F1 from 0.87 → 0.93",
        "Routes only ~18% of requests to the LLM (~80% cost cut)",
        "15× speedup via Redis caching",
        "Productionized at 70% test coverage with CI/CD",
      ],
      github: `${GITHUB_USER}/OmniGuard_AI`,
    },
    {
      name: "Mental Health Chatbot",
      tagline: "Empathetic, low-latency conversational AI",
      problem:
        "Mental-health support needs to be accessible, context-aware, and responsive — even on modest compute.",
      solution:
        "An LLM-powered chatbot using LangChain and Groq with NLP for intent detection, sentiment analysis, and adaptive conversation flow, tuned for low latency on Google Colab.",
      stack: ["LangChain", "Groq", "NLP", "Python"],
      impact: [
        "Low-latency responses on free-tier compute",
        "Designed for accessibility, including visually impaired users",
      ],
      demo: "https://huggingface.co/spaces/harshitash11/Mental_Health_Booster_Chatbot",
    },
    {
      name: "Next Word Predictor",
      tagline: "LSTM sequence modeling & text generation",
      problem: "Predict the next word in a sequence to demonstrate contextual language understanding.",
      solution:
        "An LSTM-based NLP model with text preprocessing, tokenization, and embeddings for sequence prediction and generative text.",
      stack: ["TensorFlow / Keras", "LSTM", "NLP", "Python"],
      impact: [
        "Demonstrates deep learning, sequence modeling & generative AI",
      ],
      github: `${GITHUB_USER}/Next-word-predictor`,
    },
    {
      name: "Medical Insurance Cost Prediction",
      tagline: "Regression on structured data with actionable insights",
      problem: "Estimate medical insurance cost from structured patient data.",
      solution:
        "EDA and preprocessing on structured datasets, regression models evaluated with RMSE and R², surfacing data-driven insights.",
      stack: ["Scikit-learn", "Pandas", "Regression", "EDA"],
      impact: ["Evaluated with RMSE & R²", "Extracted insights for decision-making"],
      github: `${GITHUB_USER}/Medical-Insurance-Cost-Prediction-Model`,
    },
  ] as Project[],

  achievements: [
    "Scored 99/100 in Class 10 Mathematics.",
    "Inter-University volleyball tournament — Runner-Up, 2025 championship.",
    "Mentored juniors in Python, ML, and Data Visualization during internal workshops, improving their project performance and confidence.",
    "Earned multiple industry-recognized AI & Data Science certifications.",
  ],

  certifications: [
    {
      title: "Generative AI",
      issuer: "AWS",
      date: "Jan 2024",
      url: "https://drive.google.com/file/d/1REyf3bsECGOiQXKUidBGdmLBvd_WpABJ/view?usp=drive_link",
    },
    {
      title: "Azure AI Services",
      issuer: "Microsoft",
      date: "Dec 2024",
      url: "https://drive.google.com/file/d/10h2L2dUjgOxGn5B_4LfQx3vmLNotTZB_/view?usp=drive_link",
    },
    {
      title: "Natural Language Processing",
      issuer: "Microsoft",
      date: "Jan 2025",
      url: "https://drive.google.com/file/d/1Z0_kuYlDZ4p8SogBJG77-5sQrihzSzw-/view?usp=drive_link",
    },
    {
      title: "Data Visualisation Job Simulation",
      issuer: "TATA / Forage",
      date: "2025",
      url: "https://drive.google.com/file/d/1XJZ38tZB00j7US1m8tsOTOpUVw26iFWy/view?usp=drive_link",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      date: "Oct 2025",
      url: "https://drive.google.com/file/d/15DhZzRvVsg1-2sesFYzFc5wnwJFzXzJW/view?usp=drive_link",
    },
    {
      title: "AIML Internship Completion",
      issuer: "Qmansys Infosolutions",
      date: "Oct 2025",
      url: "https://drive.google.com/file/d/1_GJmbkt5FsaHK0GY6dp5zJZk-0y5flXB/view?usp=drive_link",
    },
  ] as Certification[],

  education: {
    degree: "B.Tech, Computer Science Engineering (AIML specialization)",
    school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    dates: "2022 – 2026",
    cgpa: "8.0",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Data Analytics",
      "Software Engineering",
    ],
  },
};

export type Profile = typeof profile;
