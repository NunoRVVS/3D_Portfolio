const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
    { text:'Ideas', imgPath: '/images/ideas.svg' },
    { text:'Concepts', imgPath: '/images/concepts.svg' },
    { text:'Code', imgPath: '/images/code.svg' },
    { text:'Designs', imgPath: '/images/designs.svg' },
    { text:'Ideas', imgPath: '/images/ideas.svg' },
    { text:'Concepts', imgPath: '/images/concepts.svg' },
    { text:'Code', imgPath: '/images/code.svg' },
    { text:'Designs', imgPath: '/images/designs.svg' }
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 0, suffix: "+", label: "Satisfied Clients" },
  { value: 40, suffix: "+", label: "Completed Projects" },
  { value: 0, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/sap.png",
  },
  {
    imgPath: "/images/logos/balfe's bicycle shop.png",
  },
  {
    imgPath: "/images/logos/jactravel.png",
  },
  {
    imgPath: "/images/logos/domus stay.png",
  },
  {
    imgPath: "/images/logos/decathlon.png",
  },
  {
    imgPath: "/images/logos/abbey tours ireland & uk.png",
  },
  {
    imgPath: "/images/logos/sap.png",
  },
  {
    imgPath: "/images/logos/balfe's bicycle shop.png",
  },
  {
    imgPath: "/images/logos/jactravel.png",
  },
  {
    imgPath: "/images/logos/domus stay.png",
  },
  {
    imgPath: "/images/logos/decathlon.png",
  },
  {
    imgPath: "/images/logos/abbey tours ireland & uk.png",
  },
];

const abilities = [
  {
    imgPath:"/images/multitasking.png",
    title:"Technical Expertise",
    desc:"Proficient in JavaScript, Python, Ruby, and Java. Experienced with React.js, Ruby on Rails, and Node.js to build responsive, high-performance applications.",
  },
  {
    imgPath:"/images/cogwheel.png",
    title:"Software Development & DevOps",
    desc:"Hands-on experience in full-stack development, REST API integration, CI/CD pipelines, and Agile collaboration. Skilled in testing with Jest and RSpec.",
  },
  {
    imgPath:"/images/communication.png",
    title:"Professional & Soft Skills",
    desc:"Strong communicator and collaborator with mentoring experience. Fluent in multiple languages and adaptable across teams and technologies.",
  },
];

const techStackImgs = [
  {
    name: "Cycling Advisor/Duty Manager",
    imgPath: "/images/logos/decathlon.png",
  },
  {
    name: "Business Technology Platform Developer Intern",
    imgPath: "/images/logos/sap.png",
  },
  {
    name: "Assistant Store Manager",
    imgPath: "/images/logos/balfe's bicycle shop.png",
  },
  {
    name: "Groups Executive",
    imgPath: "/images/logos/jactravel.png",
  },
  {
    name: "Cycling Advisor",
    imgPath: "/images/logos/decathlon.png",
  },
  {
    name: "FIT Consultant",
    imgPath: "/images/logos/abbey tours ireland & uk.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: '"Nuno was really an hands on approach in either learning and showing the curiosity throughout the internship. He was able to quickly adapt to the new technologies and tools being used and was always eager to take on new challenges."' + " - " + "BTP Developer team Leader - SAP",
    imgPath: "/images/logos/sap.png",
    logoPath: "/images/logo1.png",
    title: "Business Technology Platform Developer Intern",
    date: "April – July 2024",
    responsibilities: [
      "Contributed to SAP S/4HANA and SAP BTP integration projects utilising ABAP",
      "Developed API connectivity, data mapping, and cloud deployment solutions.",
      "Ensured software stability and scalability through dedicated testing and debugging sessions.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logos/decathlon.png",
    logoPath: "/images/logo2.png",
    title: "Sales Advisor – Cycling Department ",
    date: "May 2025 - Present",
    responsibilities: [
      "Training new team members on internal ERP tools and digital sales systems.",
      "Serving as Duty Manager, overseeing process efficiency and customer experience.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};