export const portfolio = {
  person: {
    name: 'Jojo Hutagalung',
    shortName: 'Jojo Hutagalung',
    role: 'DevOps Engineer',
    employer: 'PT Moladin Digital Indonesia',
    location: 'Jakarta, Indonesia',
    timezone: 'UTC+7',
    email: 'vietbunder@gmail.com',
    phone: '+62 822-7323-3887',
    linkedin: 'https://www.linkedin.com/in/jojoviet/',
    twitter: 'https://twitter.com/vietbunder',
    facebook: 'https://www.facebook.com/kidalkidal',
    youtube: 'https://www.youtube.com/channel/UCGTrMie7M9_EdVomuL3UnWg',
    portrait: 'img/profile.png',
  },
  nav: [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Credentials', target: 'credentials' },
    { label: 'Contact', target: 'contact' },
  ],
  hero: {
    eyebrow: 'DevOps Engineer / Cloud Reliability / Network Automation',
    headline: 'Jojo Hutagalung',
    role: 'DevOps Engineer building reliable cloud delivery systems.',
    tagline:
      'I design Terraform-first infrastructure, automate CI/CD release paths, and wire observability into production platforms so product teams can ship with confidence.',
    status: 'Currently shipping DevOps platforms at Moladin Digital Indonesia',
    ctas: [
      {
        label: 'Book an intro',
        href: 'mailto:vietbunder@gmail.com?subject=DevOps%20portfolio%20intro',
        icon: 'fa-paper-plane',
        variant: 'primary',
      },
      {
        label: 'View LinkedIn',
        href: 'https://www.linkedin.com/in/jojoviet/',
        icon: 'fa-linkedin',
        variant: 'secondary',
        external: true,
      },
    ],
    metrics: [
      { label: 'Years in infrastructure', value: '10+' },
      { label: 'Pipelines orchestrated', value: '60+' },
      { label: 'Production uptime protected', value: '99%+' },
      { label: 'Clouds automated', value: 'GCP / AWS / Biznet' },
    ],
    focus: [
      'Terraform-first infrastructure',
      'CI/CD release automation',
      'Kubernetes operations',
      'Observability and incident workflows',
    ],
  },
  about: {
    eyebrow: 'About Me',
    title: 'I turn infrastructure complexity into predictable release systems.',
    intro:
      'My background spans network engineering, cloud platforms, and DevOps leadership across enterprise and product environments. I bridge software, security, and network teams with automation that makes delivery faster without hiding operational risk.',
    principles: [
      {
        title: 'Infrastructure as product',
        body: 'Reusable Terraform modules, documented patterns, and standard delivery paths reduce drift and give teams a dependable platform.',
      },
      {
        title: 'Reliability through feedback',
        body: 'Prometheus, Grafana, Uptime Kuma, and actionable alert routing turn incidents into measurable learning loops.',
      },
      {
        title: 'Automation with accountability',
        body: 'n8n, Jenkins, GitHub Actions, and runbooks remove toil while keeping approval gates, audit trails, and rollback paths clear.',
      },
    ],
    highlights: [
      'Cloud infrastructure across Google Cloud Platform, AWS, and Biznet Gio',
      'Release pipelines for web, mobile, container, and Kubernetes workloads',
      'Network fundamentals across TCP/IP, routing, MPLS, VPN, and hybrid connectivity',
      'Documentation practices in Confluence and Bookstack so improvements stay maintainable',
    ],
  },
  skills: [
    {
      category: 'Cloud & Infrastructure',
      icon: 'fa-cloud',
      summary: 'Hybrid cloud footprints, secure network boundaries, and reusable platform foundations.',
      items: ['GCP', 'GKE', 'Cloud Run', 'AWS', 'EKS', 'EC2', 'Biznet Gio', 'VPC', 'VPN', 'IAM'],
    },
    {
      category: 'Delivery & Automation',
      icon: 'fa-code-fork',
      summary: 'Release systems that move changes through automated quality gates and production checks.',
      items: ['Terraform', 'Terragrunt', 'Jenkins', 'GitHub Actions', 'Dokploy', 'Docker', 'Helm', 'n8n'],
    },
    {
      category: 'Observability & Reliability',
      icon: 'fa-area-chart',
      summary: 'Golden-signal dashboards, alert routing, and response workflows that lower recovery time.',
      items: ['Prometheus', 'Grafana', 'Uptime Kuma', 'Uptime Robot', 'Alertmanager', 'SLOs', 'Runbooks'],
    },
    {
      category: 'Networking & Security',
      icon: 'fa-shield',
      summary: 'Deep routing and segmentation experience from carrier-grade network operations.',
      items: ['TCP/IP', 'OSPF', 'BGP', 'MPLS', 'VPN', 'SSL/TLS', 'Access Control', 'Network Segmentation'],
    },
    {
      category: 'Collaboration & Data',
      icon: 'fa-database',
      summary: 'Operational visibility and team workflows that keep delivery context searchable.',
      items: ['Metabase', 'Mattermost', 'Listmonk', 'Confluence', 'Bookstack', 'GitHub', 'GitLab', 'Bitbucket'],
    },
  ],
  experience: [
    {
      period: '2022 - Present',
      company: 'PT Moladin Digital Indonesia',
      role: 'DevOps Engineer',
      location: 'Jakarta, Indonesia',
      summary:
        'Design and operate cloud infrastructure on GCP and Biznet Gio, supporting autoscaling digital platforms with cost-aware deployments and secure access patterns.',
      impact: ['Cloud infrastructure', 'CI/CD automation', 'Observability'],
      bullets: [
        'Built CI/CD pipelines for web and mobile applications using Jenkins and Dokploy.',
        'Automated recurring operations and incident response workflows in n8n.',
        'Monitored platforms with Prometheus, Grafana, and Uptime Kuma to protect 99%+ uptime.',
        'Improved environment security through granular access control, segmentation, and scripted audits.',
      ],
    },
    {
      period: '2015 - 2022',
      company: 'PT Datacomm Diangraha',
      role: 'Network Engineer / Team Lead, Network and Emerging Technology',
      location: 'Jakarta, Indonesia',
      summary:
        'Delivered carrier-grade network solutions and led Method of Procedure engineering for enterprise implementation teams.',
      impact: ['Network delivery', 'Technical leadership', 'Routing design'],
      bullets: [
        'Created MoP and SOP templates adopted across project implementation teams.',
        'Validated hardware features and coordinated Proof of Concept efforts for solution architects.',
        'Specialized in OSPF/BGP routing optimization, IP planning, and RFP support.',
        'Mentored engineers and reported utilization, capability development, and verification progress.',
      ],
    },
  ],
  projects: [
    {
      title: 'GCP Autoscaling Marketplace',
      type: 'Cloud Program',
      metric: '28% cost reduction',
      summary:
        'Replatformed marketplace workloads with Terraform-managed networking, Cloud Run, and managed SQL to unlock autoscaling and cleaner environment governance.',
      stack: ['GCP', 'Terraform', 'Cloud Run', 'Managed SQL', 'IAM'],
      image: 'img/project-cloud-autoscaling.svg',
    },
    {
      title: 'CI/CD Modernization',
      type: 'Delivery Program',
      metric: 'Days to hours',
      summary:
        'Built Jenkins, GitHub Actions, and Dokploy pipelines for linting, testing, container builds, and progressive delivery to Kubernetes-backed environments.',
      stack: ['Jenkins', 'GitHub Actions', 'Dokploy', 'Kubernetes', 'Docker'],
      image: 'img/project-cicd-pipeline.svg',
    },
    {
      title: 'Incident Automation Hub',
      type: 'Reliability Program',
      metric: '35% faster MTTR',
      summary:
        'Rolled out Prometheus, Grafana, Uptime Kuma, and n8n alert workflows to detect anomalies and open response paths with useful operational context.',
      stack: ['Prometheus', 'Grafana', 'Uptime Kuma', 'n8n', 'Runbooks'],
      image: 'img/project-observability-hub.svg',
    },
    {
      title: 'Hybrid Network Guardrails',
      type: 'Network Automation',
      metric: 'Reusable playbooks',
      summary:
        'Standardized routing, VPN, and segmentation practices across public cloud and private infrastructure so releases inherit secure connectivity by default.',
      stack: ['BGP', 'OSPF', 'VPN', 'VPC Peering', 'Access Control'],
      image: 'img/project-hybrid-network.svg',
    },
  ],
  credentials: {
    education: [
      {
        title: 'Del Institute of Technology',
        meta: 'Information technology professional foundation',
        body:
          'Built the technical base that grew into network engineering, cloud operations, and DevOps delivery work.',
      },
    ],
    certifications: [
      {
        title: 'Nokia Network Routing Specialist I (NRS I)',
        href: 'https://networks.nokia.com/src/certifications/nrs-i',
        body: 'Essentials of IP networking and VPN service routing.',
      },
      {
        title: 'Nokia Network Routing Specialist II (NRS II)',
        href: 'https://networks.nokia.com/src/certifications/nrs-ii',
        body: 'Nokia IP/MPLS service routing expertise.',
      },
      {
        title: 'Nokia Service Routing Architect (SRA)',
        href: 'https://networks.nokia.com/src/certifications/sra',
        body: 'Design and support of high-performing Nokia Service Router networks.',
      },
      {
        title: 'Nokia Multiprotocol Label Switching',
        href: 'https://networks.nokia.com/src/exam/multiprotocol-label-switching',
        body: 'MPLS fundamentals for service-provider routing environments.',
      },
      {
        title: 'Nokia Interior Routing Protocols',
        href: 'https://networks.nokia.com/src/exam/interior-routing-protocols',
        body: 'Interior routing concepts and operational design.',
      },
      {
        title: 'Nokia Services Architecture',
        href: 'https://networks.nokia.com/src/exam/services-architecture',
        body: 'Service routing architecture and platform design.',
      },
      {
        title: 'Nokia Scalable IP Networks',
        href: 'https://networks.nokia.com/src/exam/scalable-ip-networks',
        body: 'Scalable IP network planning and implementation.',
      },
    ],
  },
};
