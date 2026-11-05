// Edit this file to update the whole site. Replace everything in [brackets].

export const profile = {
  name: "VIGNESH B",
  role: "Full Stack Developer",
  openTo: "Full Stack, MERN Stack, React and React Native roles",
  email: "vigneshbaskaran7531@gmail.com",
  phone: "+91 7339088157",
  linkedin: "https://www.linkedin.com/in/vignesh-b-835a79187",
  github: "https://github.com/vicky-react-developer",
  headline: "I build the whole product, screen to server.",
  lead: [
    "Four years of building full-stack apps with ",
    { b: "React" },
    ", ",
    { b: "Node.js" },
    " and ",
    { b: "React Native" },
    ". A hospital platform with payments, video and calendar sync. A four-app taxi system. An AI English coach.",
  ] as (string | { b: string })[],
};

export const facts = [
  { b: "4 years", rest: "experience" },
  { b: "Sharesoft Technology", rest: "since Nov 2022" },
  { b: "TypeScript", rest: "first" },
];

export type Screen = {
  src: string; // file inside public/screens/
  alt: string;
  caption: string;
  kind: "web" | "phone"; // web: about 1200x750, phone: about 600x1200
  width: number;
  height: number;
};

export type Project = {
  id: string;
  tags: string[];
  title: string;
  summary: { text: string; bold?: boolean }[];
  features: { label?: string; text: string }[];
  stack: string[];
  links?: { label: string; href: string }[];
  lifecycle?: boolean;
  screens?: Screen[];
};

export const projects: Project[] = [
  {
    id: "iboost",
    tags: ["Sharesoft Technology", "Built from scratch"],
    title: "IBoost Healthcare System",
    summary: [
      { text: "A multi-role platform where " },
      { text: "hospitals, doctors, staff and patients", bold: true },
      { text: " book, run and pay for appointments. I built both the frontend and the backend." },
    ],
    features: [
      { label: "Payments", text: "Authorize.net for one-time payments and hospital subscription plans, with automated invoicing." },
      { label: "Secure chat", text: "Socket.IO messaging with encrypted messages, photos and audio." },
      { label: "Video calls", text: "patients and doctors connect through Twilio, with usage reports for call minutes and cost." },
      { label: "Google Calendar", text: "one-way and two-way sync, with drag-and-drop rescheduling." },
      { label: "Widgets", text: "appointment and contact widgets that hospitals embed on their own sites." },
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Sequelize", "Socket.IO", "Twilio", "JWT"],
    lifecycle: true,
    screens: [
      { src: "/screens/iboost-calendar.webp", kind: "web", width: 1200, height: 633, alt: "Weekly doctor calendar with appointments and busy slots from Google Calendar", caption: "Calendar with two-way Google sync and drag-and-drop rescheduling" },
      { src: "/screens/iboost-booking.webp", kind: "web", width: 1152, height: 835, alt: "Schedule an appointment form with category, patient, doctor, mode, date and time slots", caption: "Booking a single appointment from available time slots" },
      { src: "/screens/iboost-chat.webp", kind: "web", width: 1112, height: 781, alt: "Secure chat with a photo, an audio message and a PDF attachment", caption: "Secure chat with photos, audio and file sharing" },
      { src: "/screens/iboost-video-call.webp", kind: "web", width: 1200, height: 829, alt: "Telehealth video call with a call timer and an in-call chat panel", caption: "Telehealth video call with in-call chat" },
      { src: "/screens/iboost-billing.webp", kind: "web", width: 1200, height: 634, alt: "Billing and payments page with totals and an invoice list", caption: "Invoices and payments with totals at a glance" },
      { src: "/screens/iboost-widget.webp", kind: "web", width: 1200, height: 620, alt: "Appointment request widget listing clinicians on a sample website", caption: "Embeddable Book Online widget on a hospital website" },
    ],
  },
  {
    id: "zebu",
    tags: ["Sharesoft Technology", "4 apps"],
    title: "Zebu Taxi",
    summary: [
      { text: "A taxi booking system made of a " },
      { text: "Customer app, Driver app, Operator app", bold: true },
      { text: " and a React admin panel." },
    ],
    features: [
      { text: "Moved the backend from Firebase to MongoDB." },
      { text: "Redefined the driver search logic so matching runs faster than before." },
      { text: "Connected Socket.IO so screens change instantly when a ride request moves." },
      { text: "Operators manage drivers and vehicles; drivers receive customer requests live." },
    ],
    stack: ["React Native", "React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Redux", "JWT"],
    screens: [
      { src: "/screens/zebu-customer-booking.webp", kind: "phone", width: 600, height: 1289, alt: "Customer app Book Your Trip screen with car types and fares", caption: "Customer app: choose a car type and book" },
      { src: "/screens/zebu-driver-request.webp", kind: "phone", width: 600, height: 1222, alt: "Driver app showing an incoming booking request with accept and cancel", caption: "Driver app: incoming booking request" },
      { src: "/screens/zebu-live-trip.webp", kind: "phone", width: 600, height: 1222, alt: "Driver app showing the route to the customer with distance and estimated time", caption: "Driver app: route to the customer" },
      { src: "/screens/zebu-operator.webp", kind: "phone", width: 600, height: 1156, alt: "Operator app earnings screen with active cars, bookings and cash collected", caption: "Operator app: cars and earnings" },
      { src: "/screens/zebu-admin.webp", kind: "web", width: 1200, height: 576, alt: "Admin panel with navigation menu, gross earnings and a live map of drivers", caption: "Admin panel: earnings and live driver map" },
    ],
  },
  {
    id: "lingo",
    tags: ["Personal project", "Solo build", "Mobile-first"],
    title: "LingoRefresh",
    summary: [
      { text: "A mobile-first English speaking coach for Tamil speakers. Learners practise with tasks, passages and an AI teacher powered by " },
      { text: "Gemini", bold: true },
      { text: ". I built it alone, from the API to the VPS it runs on." },
    ],
    features: [
      { label: "Four practice modes", text: "dual language speaking, functional words, short passages and real-life conversations." },
      { label: "AI teacher chat", text: "replies in English and Tamil, corrects grammar and explains each fix." },
      { label: "Translation practice", text: "Tamil passages translated to English, with a score and a corrected version." },
      { label: "Voice input", text: "speak answers in English or Tamil, with progress saved for every task." },
      { text: "Full-stack development and deployment on a VPS." },
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "RTK Query", "MySQL", "Sequelize", "Gemini API", "JWT"],
    screens: [
      { src: "/screens/lingo-home.webp", kind: "phone", width: 600, height: 1083, alt: "LingoRefresh home screen with four speaking practice modes", caption: "Four practice modes" },
      { src: "/screens/lingo-tasks.webp", kind: "phone", width: 600, height: 1083, alt: "Task list with progress bars for each task", caption: "Tasks with saved progress" },
      { src: "/screens/lingo-practice.webp", kind: "phone", width: 600, height: 1083, alt: "Translate-to-English exercise with a voice answer box", caption: "Fill-in-the-blank with voice answer" },
      { src: "/screens/lingo-chat.webp", kind: "phone", width: 600, height: 1083, alt: "AI teacher chat correcting a learner's sentence", caption: "AI teacher corrects grammar" },
      { src: "/screens/lingo-passages.webp", kind: "phone", width: 600, height: 1083, alt: "List of Tamil passages with attempt status and score", caption: "Passages with attempt scores" },
      { src: "/screens/lingo-story-result.webp", kind: "phone", width: 600, height: 1083, alt: "Story translation result with score and corrected translation", caption: "Score and corrected translation" },
    ],
    links: [
      { label: "Live demo", href: "https://lingorefresh.in" },
    ],
  },
];

export const lifecycleSteps = [
  { t: "Hospital books the slot", w: "Pending" },
  { t: "Doctor accepts to lock it", w: "Doctor" },
  { t: "Patient confirms by email link", w: "Patient" },
  { t: "Attendance marked, status Completed", w: "Doctor" },
  { t: "Invoice created and paid", w: "Billing" },
];

export const experience = {
  when: ["Nov 2022 to present", "4 years"],
  title: "React Developer, Sharesoft Technology",
  points: [
    [{ text: "Own features end to end on " }, { text: "web and mobile", bold: true }, { text: ", from React and React Native screens to Node.js APIs and database design." }],
    [{ text: "Built a hospital appointment platform with " }, { text: "payments, encrypted chat, video calls and calendar sync", bold: true }, { text: "." }],
    [{ text: "Migrated a taxi platform backend from " }, { text: "Firebase to MongoDB", bold: true }, { text: " and sped up driver matching." }],
    [{ text: "Secure every API with " }, { text: "JWT authentication", bold: true }, { text: " across all projects." }],
  ] as { text: string; bold?: boolean }[][],
};

export const skills = [
  { group: "Core stack", items: "React, Node.js, Express.js, MySQL (Sequelize), MongoDB, React Native, TypeScript" },
  { group: "Frontend", items: "React, JavaScript (ES6+), TypeScript, HTML5, CSS3, Redux Toolkit, RTK Query, Redux" },
  { group: "Mobile", items: "React Native" },
  { group: "Backend", items: "Node.js, Express.js, REST APIs, JWT Authentication, Socket.IO" },
  { group: "Databases", items: "MySQL (via Sequelize ORM), MongoDB" },
  { group: "Integrations", items: "Authorize.net, Google Calendar API, Twilio, Gemini API" },
  { group: "Tools", items: "Git, GitHub, VPS deployment" },
];

export const education = {
  when: "2017 to 2021",
  title: "B.E. Computer Science and Engineering",
  school: "KGiSL Institute of Technology, 80%",
};
