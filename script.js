const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const yearEl = document.getElementById('year');

const portfolioData = {
  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Journey', href: 'journey.html' },
    { label: 'Skills', href: 'skills.html' },
    { label: 'Projects', href: 'projects.html' },
    { label: 'Experience', href: 'experience.html' },
    { label: 'Blog', href: 'blog.html' },
    { label: 'Contact', href: 'contact.html' }
  ],
  journey: [
    {
      year: '2021 AD (2078 BS)',
      title: 'SEE completed at Phoenix English School',
      description: 'Completed SEE from Phoenix English School, Kamal-4, Jhapa, with a GPA of 3.6, building a strong foundation in mathematics, science, and problem-solving.'
    },
    {
      year: '2023 AD (2079 BS)',
      title: 'SLC +2 Science completed at Wonderland Boarding English School',
      description: 'Completed SLC +2 Science from Wonderland Boarding English School, Kamal-3, Jhapa, with a GPA of 3.20 and a stronger focus on science and analytical learning.'
    },
    {
      year: '2023 AD (2080 BS)',
      title: 'Bachelor studies began at ShreeYantra College',
      description: 'Started BSc CSIT at ShreeYantra College, continuing my higher education with a focus on technology, computing, and data-oriented learning.'
    },
    {
      year: '2025',
      title: 'Started teaching and building discipline',
      description: 'Joined Smarika School as a part-time secondary mathematics teacher, developing communication, patience, and responsibilities beyond the classroom.'
    },
    {
      year: '2026',
      title: 'Building applied learning projects',
      description: 'I am creating projects around analytical thinking, data cleaning, business questions, and insights generation to strengthen my portfolio and prepare for Data Analyst opportunities.'
    },
    {
      year: '2027',
      title: 'Preparing for Data Analyst opportunities',
      description: 'My goal is to graduate with a stronger technical base, a portfolio of projects, and the readiness to pursue internships and analytical roles while continuing to grow toward AI/ML.'
    }
  ],
  skills: [
    {
      title: 'Data Analysis',
      items: ['Data cleaning', 'Data wrangling', 'Exploratory analysis', 'Basic statistics', 'Business insight communication']
    },
    {
      title: 'Tools',
      items: ['Excel', 'Google Sheets', 'SQL', 'Python', 'Power BI / dashboards']
    },
    {
      title: 'Core strengths',
      items: ['Problem solving', 'Attention to detail', 'Logical thinking', 'Documentation', 'Continuous learning']
    },
    {
      title: 'Learning roadmap',
      items: ['SQL for analysis', 'Python for data tasks', 'Data visualization', 'Statistics & trends', 'AI/ML foundations']
    }
  ],
  projects: [
    {
      tag: 'Dashboard',
      status: 'In Progress',
      title: 'Air Quality Insight Dashboard',
      description: 'A simple analysis project exploring air quality trends, pollution patterns, and regional comparisons using cleaned data and visualization.',
      bullets: ['Data cleaning and transformation', 'Trend analysis', 'Dashboard storytelling']
    },
    {
      tag: 'Analytics',
      status: 'Learning',
      title: 'Student Performance Study',
      description: 'An academic data project analyzing performance patterns, subject difficulty, and learning outcomes to draw meaningful conclusions.',
      bullets: ['Spreadsheet analysis', 'Visualization', 'Insight summary']
    },
    {
      tag: 'Report',
      status: 'Planned',
      title: 'Sales Trend Analysis',
      description: 'A business-facing data project focused on identifying sales patterns, category performance, and recommendations based on historical values.',
      bullets: ['Dataset processing', 'Metric thinking', 'Decision support']
    }
  ],
  experience: [
    {
      period: '2025 - Present',
      title: 'Secondary Mathematics Teacher',
      company: 'Smarika School',
      description: 'Part-time mathematics teacher helping students strengthen numerical understanding, logical thinking, and problem-solving confidence.'
    },
    {
      period: '2024 - Present',
      title: 'BSc CSIT Student',
      company: 'ShreeYantra College',
      description: 'Studying computer science fundamentals while focusing on practical technology skills, analytical thinking, and technology career preparation.'
    },
    {
      period: 'Current Focus',
      title: 'Data Analysis Learner',
      company: 'Self-directed growth',
      description: 'Building a foundation in data analysis, spreadsheet tools, SQL, Python, and dashboard-driven insights for future opportunities.'
    }
  ],
  blog: [
    {
      meta: 'Week 1 • Data Analysis',
      category: 'Data Analysis',
      title: 'Why data cleaning matters more than it looks',
      description: 'Exploring how accurate data preparation becomes the foundation for reliable analysis and business decisions.',
      link: 'blog-posts/data-cleaning.html',
      linkText: 'Read article →'
    },
    {
      meta: 'Week 2 • Excel',
      category: 'Excel',
      title: 'Learning to tell a story with numbers',
      description: 'How simple spreadsheets can become powerful tools for exploring trends, anomalies, and meaningful business questions.',
      link: 'blog-posts/story-with-numbers.html',
      linkText: 'Read article →'
    },
    {
      meta: 'Month 1 • Career Growth',
      category: 'Career Growth',
      title: 'My roadmap from CSIT student to data analyst',
      description: 'A honest breakdown of what I am learning, the tools I am working on, and how I am preparing for future roles.',
      link: 'blog-posts/data-analyst-roadmap.html',
      linkText: 'Read article →'
    }
  ]
};

const renderNav = () => {
  if (!navMenu) return;
  navMenu.innerHTML = portfolioData.nav
    .map(
      (item) => `<a href="${item.href}">${item.label}</a>`
    )
    .join('');

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const renderJourney = () => {
  const container = document.getElementById('timeline');
  if (!container) return;

  container.innerHTML = portfolioData.journey
    .map(
      (item) => `
        <article class="timeline-item card-panel">
          <span class="timeline-year">${item.year}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join('');
};

const renderSkills = () => {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = portfolioData.skills
    .map(
      (skill) => `
        <article class="skill-card card-panel">
          <h3>${skill.title}</h3>
          <ul>
            ${skill.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
};

const renderProjects = () => {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <article class="project-card card-panel">
          <div class="project-topline">
            <span class="project-tag">${project.tag}</span>
            <span class="project-status">${project.status}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul>
            ${project.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
};

const renderExperience = () => {
  const container = document.getElementById('experience-grid');
  if (!container) return;

  container.innerHTML = portfolioData.experience
    .map(
      (item) => `
        <article class="experience-card card-panel">
          <span class="timeline-year">${item.period}</span>
          <h3>${item.title}</h3>
          <p class="company-name">${item.company}</p>
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
};

const renderBlog = () => {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  container.innerHTML = portfolioData.blog
    .map(
      (post) => `
        <article class="blog-card card-panel">
          <p class="meta">${post.meta}</p>
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <a href="${post.link}">${post.linkText}</a>
        </article>
      `
    )
    .join('');
};

const renderBlogPage = () => {
  const container = document.getElementById('blog-page-grid');
  const searchInput = document.getElementById('blog-search');
  const filterButtons = document.querySelectorAll('.blog-filter');

  if (!container) return;

  let activeFilter = 'all';

  const applyFilters = () => {
    const query = (searchInput?.value || '').trim().toLowerCase();
    const filteredPosts = portfolioData.blog.filter((post) => {
      const matchesCategory = activeFilter === 'all' || post.category === activeFilter;
      const haystack = `${post.title} ${post.description} ${post.meta} ${post.category}`.toLowerCase();
      const matchesQuery = haystack.includes(query);
      return matchesCategory && matchesQuery;
    });

    container.innerHTML = filteredPosts
      .map(
        (post) => `
          <article class="blog-card card-panel">
            <p class="meta">${post.meta}</p>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="${post.link}">${post.linkText}</a>
          </article>
        `
      )
      .join('');

    if (!filteredPosts.length) {
      container.innerHTML = `
        <article class="blog-card card-panel empty-state">
          <p class="meta">No results</p>
          <h3>No blog posts match your search.</h3>
          <p>Try a different keyword or switch back to all posts.</p>
        </article>
      `;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', applyFilters);
  applyFilters();
};

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light');
      const isLight = body.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }
};

const initNavigation = () => {
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
};

const initContactForm = () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      event.preventDefault();
      if (status) {
        status.textContent = 'Please fill in all the fields before sending your message.';
        status.classList.add('error');
      }
      return;
    }

    if (status) {
      status.classList.remove('error');
      status.textContent = 'Sending message...';
    }
  });
};

renderNav();
renderJourney();
renderSkills();
renderProjects();
renderExperience();
renderBlog();
renderBlogPage();
initTheme();
initNavigation();
initContactForm();

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
