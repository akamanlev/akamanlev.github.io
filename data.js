/* =====================================================================
   PORTFOLIO DATA  ·  the only file you need to edit
   ---------------------------------------------------------------------
   Everything on the site (stats, charts, tables, skill matrix, terminal)
   is generated from this object. To add something:

   • New module  -> copy one entry in `modules` and change the fields.
   • New project -> copy one entry in `projects`; set `module` to the
                    module code (e.g. "CSCI316") so it links both ways.
   • Skills      -> list them in a module's or project's `skills`.
                    The skill matrix counts them automatically.
   status: "Complete" | "Enrolled"
   ===================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "May Yu Ya Maw",
    short: "May",
    roles: ["Data Analytics", "Data Science", "Web Development"],
    tagline:
      "Final-year Computer Science student majoring in Big Data at SIM–University of Wollongong. I turn messy data into models, dashboards and web apps, with a business background that keeps the end user in view.",
    location: "Singapore",
    email: "missmaypde@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/may-yu-ya-maw-20501a1bb/" }
    ],
    languages: ["English", "Mandarin", "Burmese"],
    lookingFor: "Data analyst, data science and web development roles (graduating Feb 2027)"
  },

  education: [
    {
      school: "SIM – University of Wollongong (UOW)", badge: "UOW",
      award: "Bachelor of Computer Science, Big Data major",
      period: "2024 – Feb 2027 (expected)",
      note: "Coursework spans machine learning, big data mining and management, databases and software engineering, ending with the Vigilex capstone."
    },
    {
      school: "Nanyang Polytechnic", badge: "NYP",
      award: "Diploma in Business Management",
      period: "2020 – 2023",
      note: "Specialised in Digital Communications and E-commerce & Retail Management."
    },
    {
      school: "Mayflower Secondary School", badge: "MSS",
      award: "GCE O-Level",
      period: "2016 – 2019",
      note: "President of the Chinese Dance Club; SYF 2017 Certificate of Distinction; Merit Award for Leaders."
    }
  ],

  /* ---------------- UNIVERSITY MODULES ---------------- */
  // area: used for the colour/filter. Keep to the list in `areas` below.
  areas: ["AI & ML", "Big Data", "Databases", "Programming", "Web", "Software & PM", "IT & Security"],

  modules: [
    { code: "CSIT321", name: "Project (Capstone)", year: 2026, status: "Enrolled", area: "Software & PM",
      summary: "Final-year team capstone: Vigilex, an AI platform that detects malicious smart contracts. I designed the MySQL database, built Flask API endpoints for three user roles, planned the Scrum sprints and made the marketing video.",
      skills: ["Machine learning", "Database design", "SQL", "API development", "Agile / Scrum", "Teamwork", "Python"], tools: ["Python", "Flask", "MySQL", "XGBoost", "scikit-learn", "React", "GanttPRO"], projects: ["vigilex"] },
    { code: "ISIT312", name: "Big Data Management", year: 2026, status: "Enrolled", area: "Big Data",
      summary: "Managing very large data sets: data warehouse and data cube design, HDFS and MapReduce in Java, Hive tables and queries, HBase, Pig and Spark.",
      skills: ["Data warehousing", "Dimensional modelling", "MapReduce", "Distributed processing", "NoSQL", "Java"], tools: ["Hadoop", "Hive", "HBase", "Spark", "Scala"], projects: ["hadoop"] },
    { code: "CSCI218", name: "Foundations of Artificial Intelligence", year: 2026, status: "Complete", area: "AI & ML",
      summary: "Search, machine learning, computer vision, NLP, probabilistic reasoning and responsible AI.",
      skills: ["Machine learning", "Computer vision", "NLP", "Search algorithms", "Model evaluation", "Python"],
      tools: ["Python", "scikit-learn", "Google Colab"], projects: ["flowers", "newsgroups", "wine", "romania"] },
    { code: "CSCI316", name: "Big Data Mining Techniques and Implementation", year: 2026, status: "Complete", area: "Big Data",
      summary: "Data mining at scale: pre-processing, association rules, classification, clustering, stream processing and outlier detection. Built a decision tree from scratch, Naive Bayes and logistic regression models, and an end-to-end intrusion detection project.",
      skills: ["Data mining", "Data cleaning", "Feature engineering", "Classification", "Machine learning", "Model evaluation", "Python"],
      tools: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "seaborn", "Jupyter"], projects: ["intrusion", "churn"] },
    { code: "CSCI323", name: "Modern Artificial Intelligence", year: 2026, status: "Complete", area: "AI & ML",
      summary: "Modern AI methods: linear classifiers, gradient descent and backpropagation in neural networks, and advanced search.",
      skills: ["Machine learning", "Deep learning", "Search algorithms"], tools: ["Python"], projects: [] },
    { code: "CSIT314", name: "Software Development Methodologies", year: 2026, status: "Complete", area: "Software & PM",
      summary: "Software process models, advanced UML, verification and validation, test-driven development, CI/CD, DevOps, Kanban and XP, RUP and CMMI. Team project: Bravo, a fundraising platform.",
      skills: ["Agile / Scrum", "UML", "Software testing", "CI/CD & DevOps", "Teamwork"], tools: ["Vue", "TypeScript", "Supabase", "Taiga"], projects: ["bravo"] },
    { code: "CSIT305", name: "Emerging Information Technologies and their Applications", year: 2026, status: "Complete", area: "IT & Security",
      summary: "Advanced databases, spatial data and computing, text data processing, software engineering for the cloud, IoT and edge computing, and blockchains and smart contracts.",
      skills: ["Spatial data", "Text processing", "Cloud & IoT", "Blockchain"], tools: [], projects: [] },

    { code: "CSCI203", name: "Algorithms and Data Structures", year: 2025, status: "Complete", area: "Programming",
      summary: "Algorithm analysis, recursion, data structures, sorting, trees and greedy algorithms.",
      skills: ["Algorithms", "Data structures", "Complexity analysis", "Simulation", "Python"], tools: ["Python"], projects: ["emailqueue"] },
    { code: "CSIT115", name: "Data Management and Security", year: 2025, status: "Complete", area: "Databases",
      summary: "UML and relational modelling, SQL queries and constraints, discretionary access control, and backup and restore.",
      skills: ["SQL", "Data modelling", "Database design", "Database security"], tools: ["MySQL"], projects: ["clinicdb"] },
    { code: "CSIT214", name: "IT Project Management", year: 2025, status: "Complete", area: "Software & PM",
      summary: "Running IT projects: integration, scope, schedule and cost management, plus Agile practices.",
      skills: ["Project management", "Agile / Scrum", "Teamwork"], tools: ["ProjectLibre", "Asana"], projects: ["roombooking"] },
    { code: "CSIT213", name: "Java Programming", year: 2025, status: "Complete", area: "Programming",
      summary: "Object-oriented design in Java: turning UML class diagrams into working code, with collections, file I/O, custom exceptions and assertion tests. Built an e-commerce order manager, an election system and a carpark usage analyser.",
      skills: ["Java", "OOP", "UML", "Software testing", "Data validation"], tools: ["Java"], projects: ["carpark"] },
    { code: "CSCI235", name: "Database Systems", year: 2025, status: "Complete", area: "Databases",
      summary: "Normalisation, indexing and query plans, stored procedures, functions and triggers, transactions and recovery, and NoSQL document databases.",
      skills: ["SQL", "Database design", "NoSQL", "Query optimisation", "Database programming"], tools: ["PostgreSQL", "PL/pgSQL", "MongoDB"], projects: ["tpch", "mongo"] },
    { code: "ISIT219", name: "Knowledge and Information Engineering", year: 2025, status: "Complete", area: "Databases",
      summary: "Knowledge-based systems: expert systems, neural networks, case-based reasoning, genetic algorithms, data mining, intelligent agents, knowledge acquisition and representation, uncertain reasoning and explainable AI.",
      skills: ["Knowledge representation", "Machine learning", "Data mining", "Explainable AI"], tools: [], projects: [] },

    { code: "CSIT110", name: "Fundamental Programming with Python", year: 2024, status: "Complete", area: "Programming",
      summary: "Programming fundamentals in Python: control flow, functions, lists, classes and objects.",
      skills: ["Python", "OOP"], tools: ["Python"], projects: ["diving"] },
    { code: "CSIT123", name: "Computing and Cyber Security Fundamentals", year: 2024, status: "Complete", area: "IT & Security",
      summary: "Number systems and binary arithmetic, computer architecture and cache memory design, operating systems, and cyber security fundamentals and assessments.",
      skills: ["Computer architecture", "Cyber security"], tools: [], projects: [] },
    { code: "CSIT121", name: "Object Oriented Design and Programming", year: 2024, status: "Complete", area: "Programming",
      summary: "Object-oriented design and programming with classes, inheritance and UML.",
      skills: ["OOP", "UML", "Python"], tools: ["Python"], projects: [] },
    { code: "CSIT128", name: "Introduction to Web Technology", year: 2024, status: "Complete", area: "Web",
      summary: "Web fundamentals: HTML, CSS and forms, JavaScript, XML with DTD, XSD and XSLT, JSON, and HTML5 canvas graphics.",
      skills: ["HTML / CSS", "JavaScript", "XML / JSON"], tools: ["HTML", "CSS", "JavaScript", "XML", "JSON"], projects: [] }
  ],

  /* ---------------- PROJECTS ---------------- */
  // featured: true puts it in the first row. metrics: short numbers to show on the card.
  projects: [
    { id: "vigilex", title: "Vigilex: AI detection of malicious smart contracts", module: "CSIT321", year: 2026, featured: true,
      kind: "Final-year project · Team of 5",
      summary: "A web platform that scans Ethereum token contracts and returns a Safe, Caution or High Risk verdict with plain-English reasons, so retail investors can spot honeypots and rug pulls before they buy. The detection model averages XGBoost and Random Forest over source-code, bytecode, contract-setting and early trading features, trained on 3,684 labelled contracts. I designed the MySQL database, built the Flask API endpoints for the admin, investor and API-consumer roles, refactored the backend for code lock, planned the Scrum sprints in GanttPRO, and produced the marketing video.",
      metrics: [{ k: "Precision", v: "94.3%" }, { k: "Recall", v: "85.8%" }, { k: "False positives", v: "3.3%" }],
      skills: ["Machine learning", "Classification", "Database design", "SQL", "API development", "Agile / Scrum", "Teamwork", "Python"],
      tools: ["Python", "Flask", "MySQL", "XGBoost", "scikit-learn", "React", "Azure"],
      links: [{ label: "Live site", url: "https://vigilex-fyp.eastasia.cloudapp.azure.com" }] },
    { id: "wine", title: "Wine quality prediction", module: "CSCI218", year: 2026,
      kind: "Machine learning · Group project",
      summary: "Predicted red and white wine quality bands from lab measurements. Grouped scores into three classes, used class weights for the imbalance, and compared ordinal logistic regression with a Random Forest, which scored best on accuracy and mean absolute error.",
      metrics: [{ k: "RF acc. (red)", v: "83.5%" }, { k: "RF acc. (white)", v: "78.2%" }, { k: "MAE (red)", v: "0.17" }],
      skills: ["Machine learning", "Classification", "Model evaluation", "Python"], tools: ["Python", "scikit-learn", "pandas", "Google Colab"], links: [] },
    { id: "hadoop", title: "Big data pipelines on Hadoop", module: "ISIT312", year: 2026, featured: true,
      kind: "Big data engineering",
      summary: "Wrote Java MapReduce jobs on HDFS (average speed of vehicles over the limit from speed camera logs, and min, max, average and sum of sales), designed a data cube for a data warehouse, built nested and external Hive tables, modelled a vehicle repair database in HBase, and aggregated sales with Spark RDDs and Datasets in Scala.",
      metrics: [{ k: "Stack", v: "Hadoop · Hive · Spark" }],
      skills: ["MapReduce", "Distributed processing", "Data warehousing", "Dimensional modelling", "NoSQL", "Java"], tools: ["Hadoop", "Hive", "HBase", "Spark", "Scala", "Java"], links: [] },
    { id: "newsgroups", title: "News topic classifier", module: "CSCI218", year: 2026, featured: true,
      kind: "NLP · Text classification",
      summary: "Classified 20 Newsgroups posts into 20 topics. Built a TF-IDF pipeline with stop-word removal and document-frequency filtering, trained Multinomial and Complement Naive Bayes, and read the confusion matrix to find which topics the model mixes up.",
      metrics: [{ k: "Accuracy", v: "89.3%" }, { k: "Weighted F1", v: "0.891" }, { k: "Classes", v: "20" }],
      skills: ["NLP", "Machine learning", "Model evaluation", "Python"], tools: ["Python", "scikit-learn", "Google Colab"], links: [] },
    { id: "intrusion", title: "Network intrusion detection", module: "CSCI316", year: 2026, featured: true,
      kind: "Machine learning · Team project",
      summary: "End-to-end data mining project on the UNSW-NB15 network traffic dataset to tell normal traffic from attacks. I built the logistic regression pipeline: scaling and one-hot encoding in a ColumnTransformer, a custom feature-engineering transformer, and GridSearchCV tuning.",
      metrics: [{ k: "Training rows", v: "175,341" }, { k: "Features", v: "45" }, { k: "CV F1 (LR)", v: "0.945" }],
      skills: ["Machine learning", "Feature engineering", "Classification", "Model evaluation", "Python"], tools: ["Python", "scikit-learn", "pandas", "Matplotlib", "Google Colab"], links: [] },
    { id: "churn", title: "Customer churn from scratch", module: "CSCI316", year: 2026,
      kind: "Data mining",
      summary: "Cleaned a Kaggle customer churn dataset in pandas (missing values, z-score normalisation, equal-frequency binning, one-hot encoding, a new derived feature), then coded a decision tree classifier from scratch with Gini impurity and information gain, without any ML library.",
      metrics: [{ k: "Model", v: "Decision tree" }, { k: "ML libraries", v: "None" }],
      skills: ["Data cleaning", "Feature engineering", "Classification", "Algorithms", "Python"], tools: ["Python", "pandas", "NumPy", "Jupyter"], links: [] },
    { id: "tpch", title: "Sales database programming", module: "CSCI235", year: 2025,
      kind: "SQL · PostgreSQL",
      summary: "Wrote PL/pgSQL stored procedures, functions and triggers over a TPC-H style sales database, and tuned slow queries with indexes, using EXPLAIN ANALYZE to compare sequential scans with index scans.",
      metrics: [],
      skills: ["SQL", "Database programming", "Query optimisation"], tools: ["PostgreSQL", "PL/pgSQL"], links: [] },
    { id: "mongo", title: "Document queries in MongoDB", module: "CSCI235", year: 2025,
      kind: "NoSQL",
      summary: "Queried nested subject and project documents with MongoDB find filters and aggregation pipelines ($unwind, $match, $group, $project).",
      metrics: [],
      skills: ["NoSQL", "Data modelling"], tools: ["MongoDB"], links: [] },
    { id: "flowers", title: "Flower image recognition", module: "CSCI218", year: 2026, featured: true,
      kind: "Computer vision",
      summary: "Compared three classifiers on 4,000+ Kaggle flower photos across 5 species: k-nearest neighbours on handcrafted features, a multi-layer perceptron, and a convolutional neural network.",
      metrics: [{ k: "Images", v: "4,000+" }, { k: "Classes", v: "5" }, { k: "Models compared", v: "3" }],
      skills: ["Computer vision", "Machine learning", "Deep learning", "Model evaluation", "Python"], tools: ["Python", "scikit-learn"], links: [{ label: "Try the CNN demo", url: "#cnn" }] },
    { id: "romania", title: "Route finding with A*", module: "CSCI218", year: 2026,
      kind: "AI search",
      summary: "Implemented breadth-first, depth-first, uniform-cost and A* search on the Romania road map, then compared explored states, path cost and runtime to show how a straight-line-distance heuristic beats UCS.",
      metrics: [{ k: "Algorithms", v: "5" }],
      skills: ["Search algorithms", "Algorithms", "Python"], tools: ["Python", "Google Colab"], links: [] },
    { id: "emailqueue", title: "Email server queue simulator", module: "CSCI203", year: 2025,
      kind: "Simulation",
      summary: "Built a queue data structure and a minute-by-minute simulation of a mail server with random arrivals and a 25% send-failure rate, reporting throughput, average queue length and retry counts.",
      metrics: [{ k: "Failure rate", v: "25%" }],
      skills: ["Data structures", "Simulation", "Algorithms", "Python"], tools: ["Python"], links: [] },
    { id: "carpark", title: "Carpark usage analyser", module: "CSIT213", year: 2025,
      kind: "Java application",
      summary: "Java app that loads daily carpark usage records from files, rejects bad rows (wrong field counts, duplicates, invalid dates) with a custom exception, and reports average usage per zone. Every class is covered by assertion tests.",
      metrics: [],
      skills: ["Java", "OOP", "Data validation", "Software testing"], tools: ["Java"], links: [] },
    { id: "bravo", title: "Bravo fundraising platform", module: "CSIT314", year: 2026,
      kind: "Web app · Team of 7",
      summary: "Fundraising web app for fund raisers, donees, platform managers and user admins: create, search and favourite campaigns, donation history, role-based access and report dashboards. Built in Scrum sprints tracked in Taiga, with UML use case, sequence and BCE class diagrams, user stories and test cases.",
      metrics: [{ k: "User roles", v: "4" }, { k: "Pages", v: "13" }],
      skills: ["JavaScript", "UML", "Agile / Scrum", "Software testing", "Teamwork"], tools: ["Vue", "TypeScript", "Express", "Supabase", "Chart.js"], links: [] },
    { id: "roombooking", title: "Room booking system", module: "CSIT214", year: 2025,
      kind: "Web app · Team project",
      summary: "UOW room booking web app built in an agile team: login, creating rooms, live room status, available and booked room lists, and a payment confirmation page. Sprints and tasks were planned in ProjectLibre.",
      metrics: [],
      skills: ["HTML / CSS", "JavaScript", "Project management", "Agile / Scrum", "Teamwork"], tools: ["HTML", "CSS", "JavaScript", "ProjectLibre"], links: [] },
    { id: "database", title: "Project records database", module: null, year: 2025,
      kind: "Database design",
      summary: "Designed a MySQL database for project, member and contribution records, from UML and relational models to integrity rules and optimised queries.",
      metrics: [],
      skills: ["SQL", "Database design", "Data modelling", "Query optimisation"], tools: ["MySQL"], links: [] },
    { id: "diving", title: "Diving competition scorer", module: "CSIT110", year: 2024,
      kind: "Python program",
      summary: "Python program that turns judges' ratings into final dive scores, using classes, lists and control flow.",
      metrics: [],
      skills: ["Python", "OOP"], tools: ["Python"], links: [] },
    { id: "clinicdb", title: "Secure clinic database", module: "CSIT115", year: 2025,
      kind: "SQL · MySQL",
      summary: "Built MySQL schemas with primary, foreign key and CHECK constraints, set up role-based access with GRANT privileges for separate users, and used backup and restore to find exactly which records were added, changed or deleted.",
      metrics: [],
      skills: ["SQL", "Database design", "Database security"], tools: ["MySQL"], links: [] },
    { id: "tableau", title: "Open-data dashboards", module: null, year: 2025,
      kind: "Data visualisation",
      summary: "Built interactive Tableau dashboards on open datasets to surface key metrics and trends.",
      metrics: [],
      skills: ["Data visualisation", "Dashboard design"], tools: ["Tableau"], links: [] },
    { id: "vw", title: "Digital marketing analytics for Volkswagen", module: null, year: 2022,
      kind: "Marketing analytics · NYP",
      summary: "Analysed Volkswagen's digital marketing performance and recommended improvements.",
      metrics: [],
      skills: ["Web analytics", "Digital strategy"], tools: ["Google Analytics"], links: [] },
    { id: "peelgood", title: "PeelGood", module: null, year: 2023,
      kind: "Entrepreneurship · NYP",
      summary: "Cross-school startup project: ran empathy interviews, paid social campaigns on TikTok, Instagram and Facebook, and built the Wix site and 3D product mock-ups.",
      metrics: [],
      skills: ["Digital strategy", "E-commerce"], tools: ["Wix", "Pacdora", "Canva"], links: [] }
  ],

  /* ---------------- EXPERIENCE ---------------- */
  experience: [
    { role: "Part-time Game Master", org: "Lostsg", period: "Jan 2026 – Present",
      points: ["Run immersive game sessions: brief players on rules, story and safety, and time hints to each group.",
               "Handle bookings, check-ins and guest feedback, and reset rooms and props to a consistent standard."] },
    { role: "Contract Admin Assistant", org: "Khoo Teck Puat Hospital", period: "Sep 2023 – Jun 2024",
      points: ["Prepared monthly clinical placement reports for 6 departments.",
               "Streamlined data management and audits, and automated recurring reports to cut manual work.",
               "Coordinated orientations and timetables, and analysed feedback from 100+ students."],
      skills: ["Reporting", "Data cleaning"] },
    { role: "E-commerce & Customer Service Executive", org: "", period: "Apr 2023 – Jun 2023",
      points: ["Analysed customer feedback to improve site navigation, and ran online launches and promotions."],
      skills: ["E-commerce"] },
    { role: "E-commerce Intern", org: "F J Benjamin", period: "May 2022 – Aug 2022",
      points: ["Analysed sales data and market research to improve digital storefronts.",
               "Improved SEO and product listings, and monitored site performance."],
      skills: ["Web analytics", "E-commerce"] },
    { role: "Retail Assistant", org: "", period: "Mar 2021 – Apr 2021", points: ["Store set-up, merchandising and customer service."] },
    { role: "Cashier / Expeditor", org: "", period: "Jan 2020 – Mar 2020", points: ["Cashiering, order expediting, cash balancing and stock replenishment."] }
  ],

  /* ---------------- BEYOND CLASS ---------------- */
  activities: [
    { title: "Lenovo Retail Challenge", detail: "Best Visual & Creative Set-up. Ran a small business on a $550 budget with product shoots, a website and livestream sales." },
    { title: "Marketing & Content Creator, NYP Market+", detail: "Planned and filmed TikTok and Instagram content with student sellers." },
    { title: "TikTok Consultant, Cheers", detail: "Recommended trends and planned campaign content." },
    { title: "Competitions", detail: "Geomico Client Competition (Finalist), Creative Marketing Challenge, SUSS Brand Challenge." },
    { title: "Chinese Dance Club President", detail: "Led the club; performed at NDP, Chingay, SYF and the ASEAN School Games." }
  ],

  // Extra skills that don't come from a module or project (shown in the matrix too).
  otherSkills: {
    "Data visualisation": ["Tableau"],
    "Design & content": ["Canva", "Adobe Photoshop", "Snapseed", "iMovie"],
    "Web & commerce": ["Shopify", "Wix", "Google Analytics"],
    "Dev tools & AI": ["GitHub", "Visual Studio", "AI platforms"]
  }
};
