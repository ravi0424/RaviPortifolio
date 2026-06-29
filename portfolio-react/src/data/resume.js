// =============================================================
// resume.js — single source of truth for all portfolio content.
// Edit values here; components map over this data automatically.
// =============================================================

export const profile = {
  name: 'Ravi Kiran Gunnabattula',
  firstName: 'Ravi Kiran',
  lastName: 'Gunnabattula',
  role: 'DevOps & Automation Engineer',
  status: 'Open to DevOps & Automation roles',
  tagline:
    'I build and automate scalable cloud infrastructure on AWS and Azure — designing CI/CD pipelines and test automation that help teams ship faster, with fewer errors and greater confidence.',
  email: 'ravikirangunnabattula2003@gmail.com',
  phone: '+91 88858 23666',
  phoneHref: '+918885823666',
  // ⚠️ Update these to your exact profile URLs if they change.
  linkedin: 'https://www.linkedin.com/in/ravi-kiran-g-826181220/',
  github: 'https://github.com/Ravi0424',
  // Prefixed with Vite's BASE_URL so the link is correct on GitHub Pages
  // sub-paths (e.g. /repo/RaviResume.pdf). File lives in /public.
  resume: import.meta.env.BASE_URL + 'RaviResume.pdf',
}

export const stats = [
  { n: '2+', l: 'Years across DevOps & automation' },
  { n: '4', l: 'Industry certifications' },
  { n: '40%', l: 'Faster deployments delivered' },
  { n: '3', l: 'Cloud & platform roles' },
]

export const skillGroups = [
  {
    title: 'Cloud',
    badge: 'infra',
    desc: 'Provisioning and operating scalable, highly available environments.',
    items: ['AWS EKS', 'EC2', 'S3', 'VPC', 'CloudFormation', 'Azure'],
  },
  {
    title: 'Containers & Orchestration',
    badge: 'deploy',
    desc: 'Packaging services and running them reliably at scale.',
    items: ['Docker', 'Kubernetes', 'Amazon ECR', 'Auto-scaling'],
  },
  {
    title: 'Programming',
    badge: 'code',
    desc: 'Automation scripting and application logic.',
    items: ['Python', 'Java', 'C++', 'Bash', 'OOP'],
  },
  {
    title: 'Test Automation',
    badge: 'verify',
    desc: 'Frameworks and suites that protect quality on every release.',
    items: ['Selenium WebDriver', 'Tricentis Tosca', 'TestNG', 'POM'],
  },
  {
    title: 'Tools & Platforms',
    badge: 'ops',
    desc: 'CI/CD, OS, and platform tooling for day-to-day delivery.',
    items: ['Jenkins', 'Linux', 'AWS CodePipeline', 'CodeBuild', 'CodeDeploy', 'Azure DevOps', 'Pega'],
  },
  {
    title: 'Working style',
    badge: 'team',
    desc: 'How I show up alongside the technical work.',
    items: ['Cross-functional collaboration', 'Problem-solving', 'Continuous improvement', 'Attention to quality'],
  },
]

export const experience = [
  {
    live: true,
    title: 'Automation Test Engineer',
    company: 'Cognizant',
    period: 'May 2025 – Present',
    current: true,
    detail: 'Programmer Analyst',
    location: 'Hyderabad, India',
    objective: null,
    points: [
      'Designed, developed, and maintained <strong>automated test solutions</strong> using Selenium WebDriver (Java) and Tricentis Tosca.',
      'Built scalable automation frameworks following the <strong>Page Object Model</strong> and TestNG best practices.',
      'Managed end-to-end test assets in Tosca — modules, test cases, execution lists, and test data.',
      'Executed functional and regression suites, analyzed results, and partnered with cross-functional teams to ship high-quality software.',
      'Drove <strong>test efficiency and script reusability</strong> through continuous improvement of automation processes.',
    ],
    tech: ['Selenium', 'Tricentis Tosca', 'TestNG', 'Java', 'POM'],
  },
  {
    live: false,
    title: 'Software Engineer Trainee',
    company: 'Sweya Infotech',
    period: 'Sep 2024 – Jan 2025',
    current: false,
    detail: '',
    location: 'Visakhapatnam, India',
    objective:
      'Project — CI/CD Pipeline for a Transport Application: seamless deployment via containerized environments and automated Kubernetes rollouts on AWS EKS.',
    points: [
      'Containerized applications with <strong>Docker</strong> and managed images in <strong>Amazon ECR</strong>.',
      'Designed and deployed Kubernetes manifests for a <strong>microservice architecture</strong> on AWS EKS.',
      'Configured <strong>high-availability EKS clusters</strong> with auto-scaling node groups.',
      'Automated deployment workflows using AWS <strong>CodePipeline, CodeBuild, and CodeDeploy</strong>.',
      'Wrote custom <strong>Bash scripts</strong> for deployment automation and environment configuration.',
    ],
    tech: ['Docker', 'Kubernetes', 'AWS EKS', 'CodePipeline', 'CodeBuild', 'CodeDeploy', 'Bash'],
  },
  {
    live: false,
    title: 'Pega Trainee',
    company: 'Technical Hub',
    period: 'May 2023 – Jul 2023',
    current: false,
    detail: '',
    location: '',
    objective: null,
    points: [
      'Built a comprehensive <strong>flight ticket booking system</strong> in Pega, streamlining the flow from search to payment.',
      'Designed an intuitive UI for a seamless flight-search and booking experience.',
      'Integrated the <strong>Razorpay payment gateway</strong> for smooth, secure transactions.',
      "Used Pega's workflow automation and case management to boost operational efficiency and ensure compliance.",
    ],
    tech: ['Pega', 'Razorpay', 'Workflow Automation'],
  },
]

export const projects = [
  {
    label: 'PROJECT_01 · Azure DevOps · Docker',
    title: 'CI/CD Pipeline for a Microservices Voting App',
    desc:
      'Built an end-to-end CI/CD pipeline for a microservices-based voting application (Voting + Result services) using Azure DevOps, with version control through Azure Repos and Infrastructure as Code for consistent, repeatable environments.',
    outcome: '40% faster deployments via pipeline optimization & automated testing',
    tech: ['Azure DevOps', 'Docker', 'Azure Repos', 'IaC'],
  },
  {
    label: 'PROJECT_02 · Arduino IoT',
    title: 'Cloud-Based Remote Electricity Metering & Billing',
    desc:
      'Developed an intelligent remote electricity metering and billing system on Arduino IoT, enabling real-time usage monitoring and automated billing. Accurate, timely data transmission to the cloud improved efficiency and cut manual intervention.',
    outcome: 'Real-time monitoring with automated, accurate billing',
    tech: ['Arduino', 'IoT', 'Cloud'],
  },
  {
    label: 'PROJECT_03 · Pega',
    title: 'Flight Ticket Booking Application',
    desc:
      'Designed and built an end-to-end flight ticket booking system in Pega with integrated payment processing and workflow automation — covering the full journey from flight search to secure checkout.',
    outcome: 'Streamlined booking with integrated, secure payments',
    tech: ['Pega', 'Razorpay', 'Case Management'],
  },
  {
    label: 'PROJECT_04 · AWS EKS',
    title: 'Containerized Microservices on AWS EKS',
    desc:
      'Production-style deployment of containerized microservices to high-availability AWS EKS clusters with auto-scaling node groups, ECR-managed images, and fully automated CodePipeline-driven rollouts.',
    outcome: 'High-availability, auto-scaling, zero-touch deployments',
    tech: ['Docker', 'Kubernetes', 'AWS EKS', 'ECR'],
  },
]

export const certifications = [
  { yr: '2026', name: 'Tricentis Tosca Automation Specialist 1', iss: 'Tricentis' },
  { yr: '2023', name: 'Microsoft Azure Administrator Associate — AZ-104', iss: 'Microsoft' },
  { yr: '2022', name: 'Microsoft Azure Fundamentals — AZ-900', iss: 'Microsoft' },
  { yr: '2022', name: 'IT Specialist — Python', iss: 'Certiport' },
]

export const education = [
  {
    deg: 'B.Tech, Electronics & Communication Engineering',
    sch: 'Aditya College of Engineering & Technology',
    place: 'Surampalem, India',
    meta: '2021 – 2024 · CGPA 7.74',
  },
  {
    deg: 'Diploma, Electronics & Communication Engineering',
    sch: 'Aditya Engineering College',
    place: 'Surampalem, India',
    meta: '2018 – 2021 · 87%',
  },
  {
    deg: 'Secondary Education',
    sch: 'CAMP School',
    place: 'Ramachandrapuram, India',
    meta: '2018 · GPA 9.2',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
