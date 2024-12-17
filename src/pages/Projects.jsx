import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaCloud } from 'react-icons/fa';
import { DiDatabase } from 'react-icons/di';
import { MdEmail } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  SiSequelize, 
  SiInsomnia, 
  SiJest,
  SiGraphql, 
  SiMongodb, 
  SiApollographql, 
  SiExpress, 
  SiC, 
  SiRedux, 
  SiWebpack,
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiJquery 
} from 'react-icons/si';




import logo2 from '../assets/images/logo2.png';
import sswelcome from '../assets/images/sswelcome.png';
import signup from '../assets/images/signup.png'
import sshome from '../assets/images/sshome.png';
import jjobs from '../assets/images/jobs.png';
import events from '../assets/images/events.png';
import products from '../assets/images/products.png'
import signedIn from '../assets/images/signedIn.png'
import cart from '../assets/images/cart.png'
import dashboard from '../assets/images/dashboard.png';
import firstpost from '../assets/images/firstpost.png';
import ADV from '../assets/images/ADV.png';
import ADV2 from '../assets/images/ADV2.png';
import ADV3 from '../assets/images/ADV3.png';
import TW1 from '../assets/images/TW1.png';
import TW2 from '../assets/images/TW2.png';
import TW3 from '../assets/images/TW3.png';



function Projects() {
  const projects = [

    {
      title: "SHE-TECH-NET",
      description: "A comprehensive full-stack platform developed in collaboration with Meadin Menbere (Meadoughnut) and Aminata Sall (mameami26). Created to bridge the gender gap in tech by providing a supportive community where women can connect with mentors, discover job opportunities, and participate in industry events. The platform empowers women technologists through real-time mentorship connections, targeted job opportunities, and community-building events.",
      technologies: "React.js, Node.js, Express.js, MongoDB, GraphQL, JWT Authentication, Jest, React Testing Library, Apollo Client, WebSocket, Material-UI, Redux",

      github: "https://github.com/AshleydVon/She-Tech-Net",
        screenshots: [
          {
            src: sswelcome,
            alt: "Welcome Page",
            caption: "Welcome Interface"
          },
          {
            src: signup,
            alt: "Sign Up Page",
            caption: "User Registration"
          },
          {
            src: sshome,
            alt: "Home Page",
            caption: "Main Dashboard"
          },
          {
            src: jjobs,
            alt: "Jobs Page",
            caption: "Job Listings"
          },
          {
            src: events,
            alt: "Events Page",
            caption: "Community Events"
          }
        ],
        
      customContent: (
        <>
          <div className="tech-stack-showcase">
            <div className="tech-icon-container">
              <FaReact className="tech-icon react" />
              <span>React</span>
            </div>
            <div className="tech-icon-container">
              <SiGraphql className="tech-icon graphql" />
              <span>GraphQL</span>
            </div>
            <div className="tech-icon-container">
              <SiMongodb className="tech-icon mongodb" />
              <span>MongoDB</span>
            </div>
            <div className="tech-icon-container">
              <SiApollographql className="tech-icon apollo" />
              <span>Apollo</span>
            </div>
          </div>
          <div className="code-preview">
            <pre>
              <code>
              {`// Authentication and Mentorship Resolver
const resolvers = {
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new AuthenticationError('User does not exist');
      
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw new AuthenticationError('Invalid credentials');
      
      const token = signToken(user);
      return { token, user };
    },

    createMentorship: async (_, { expertise, availableTimeSlots, industry }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');
      
      const mentorship = new Mentorship({
        user: user._id,
        expertise,
        availableTimeSlots,
        industry
      });
      return await mentorship.save();
    }
  }
};`}
              </code>
            </pre>
          </div>
        </>
      )
    },

    {
      title: "Redux Magic E-commerce",
      description: "A modern e-commerce platform built with Redux Toolkit for state management, featuring a shopping cart system, product filtering, and seamless user experience.",
      technologies: "React, Redux Toolkit, Node.js, Express, MongoDB, GraphQL",
      github: "YOUR_GITHUB_LINK",
      screenshots: [
        {
          src: products,
          alt: "Product Listing",
          caption: "Product catalog with Redux state"
        },
        {
          src: signedIn,
          alt: "User Authentication",
          caption: "User authentication flow"
        },
        {
          src: cart,
          alt: "Shopping Cart",
          caption: "Redux-powered shopping cart"
        }
      ],
      customContent: ( 
        <>
          <div className="tech-stack-showcase">
            <div className="tech-icon-container">
              <FaReact className="tech-icon react" />
              <span>React</span>
            </div>
            <div className="tech-icon-container">
              <SiRedux className="tech-icon redux" />
              <span>Redux</span>
            </div>
            <div className="tech-icon-container">
              <SiGraphql className="tech-icon graphql" />
              <span>GraphQL</span>
            </div>
            <div className="tech-icon-container">
              <SiMongodb className="tech-icon mongodb" />
              <span>MongoDB</span>
            </div>
          </div>
          <div className="code-preview">
            <pre>
              <code>
              {`// cartSlice.js
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    }
  }
});`}
              </code>
            </pre>
          </div>
        </>
      )
    },

    {
      title: "The Tech Blog",
      description: "A CMS-style blog platform built with MVC architecture where developers can publish posts and engage in discussions. Features secure user authentication, dynamic content management, and real-time commenting system.",
      technologies: "Node.js, Express.js, PostgreSQL, Sequelize ORM, Handlebars.js, MVC, express-session",
      github: "https://github.com/AshleydVon/the-tech-blog",
      screenshots: [
        {
          src: dashboard,
          alt: "Blog Dashboard",
          caption: "Enhanced Dashboard Interface"
        },
        {
          src: firstpost,
          alt: "First Blog Post",
          caption: "Original Blog Post Design"
        }
      ],
      customContent: (
        <>
          <div className="tech-stack-showcase">
            <div className="tech-icon-container">
              <FaNodeJs className="tech-icon node" />
              <span>Node.js</span>
            </div>
            <div className="tech-icon-container">
              <SiExpress className="tech-icon express" />
              <span>Express</span>
            </div>
            <div className="tech-icon-container">
              <DiDatabase className="tech-icon database" />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-icon-container">
              <SiSequelize className="tech-icon sequelize" />
              <span>Sequelize</span>
            </div>
          </div>
          <div className="code-preview">
            <pre>
              <code>
              {`// Post Controller with Authentication
    router.post('/api/posts', withAuth, async (req, res) => {
    try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    });
    
    res.status(201).json(newPost);
    } catch (err) {
    res.status(500).json(err);
    }
    });`}
              </code>
            </pre>
          </div>
        </>
      )
    }
    ,
    {
      title: "DataVault-C",
      description: "High-performance database system built in C, featuring advanced memory management and optimized data structures for rapid query execution and minimal memory footprint.",
      technologies: "C, Data Structures, Memory Management, SQL",
      github: "YOUR_GITHUB_LINK",
      customContent: (
        <>
          <div className="tech-stack-showcase">
            <div className="tech-icon-container">
              <SiC className="tech-icon c" />
              <span>C</span>
            </div>
            <div className="tech-icon-container">
              <DiDatabase className="tech-icon database" />
              <span>Database</span>
            </div>
          </div>
          <div className="code-preview">
            <pre>
              <code>
    {`void updateRecord(int id, Record newData) {
    FILE *file = fopen(DATABASE_FILE, "rb+");
    if (file == NULL) {
        printf("Error: Cannot open database file\\n");
        return;
    }

    Record record;
    int found = 0;
    while(fread(&record, sizeof(Record), 1, file)) {
        if(record.id == id) {
            fseek(file, -sizeof(Record), SEEK_CUR);
            fwrite(&newData, sizeof(Record), 1, file);
            found = 1;
            break;
        }
    }
    fclose(file);
}`}
              </code>
            </pre>
          </div>
        </>
      )
    },
    {
      title: "Crowdfunding Platform",
      description: "This is a crowdfunding web application where users can create, view, and fund projects. Built using Node.js, Express.js, Sequelize ORM, and Handlebars.js, it features user authentication, project management, and funding capabilities.",
      technologies: "Node.js, Express.js, Sequelize ORM, PostgreSQL, Handlebars.js, bcrypt, express-session, dotenv",
      github: "https://github.com/AshleydVon/crowdfunding-platform",
      customContent: (
        <>
          <div className="tech-stack-showcase">
            <div className="tech-icon-container">
              <FaNodeJs className="tech-icon node" />
              <span>Node.js</span>
            </div>
            <div className="tech-icon-container">
              <SiExpress className="tech-icon express" />
              <span>Express</span>
            </div>
            <div className="tech-icon-container">
              <DiDatabase className="tech-icon database" />
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="code-preview">
            <pre>
              <code>
              {`// Project creation route
router.post('/api/projects', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    const fundingGoal = await FundingGoal.create({
      amount: req.body.fundingGoal,
      project_id: newProject.id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});`}
              </code>
            </pre>
          </div>
        </>
      )
    },

    {
      title: "E-Commerce Back-End",
      description: "A robust Express.js API for e-commerce that uses Sequelize to interact with a PostgreSQL database. Features comprehensive CRUD operations for products, categories, and tags with complex relationships and data validation.",
      technologies: "Node.js, Express.js, Sequelize, PostgreSQL, RESTful API, dotenv, npm, Jest, Insomnia, Git",
      github: "https://github.com/AshleydVon/-E-Commerce-Back-End",
      customContent: (
        <>
          <div className="tech-stack-showcase">
            <div className="tech-icon-container">
              <FaNodeJs className="tech-icon node" />
              <span>Node.js</span>
            </div>
            <div className="tech-icon-container">
              <SiExpress className="tech-icon express" />
              <span>Express</span>
            </div>
            <div className="tech-icon-container">
              <DiDatabase className="tech-icon database" />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-icon-container">
              <SiSequelize className="tech-icon sequelize" />
              <span>Sequelize</span>
            </div>
            <div className="tech-icon-container">
              <SiInsomnia className="tech-icon insomnia" />
              <span>Insomnia</span>
            </div>
            <div className="tech-icon-container">
              <SiJest className="tech-icon jest" />
              <span>Jest</span>
            </div>
          </div>
          <div className="code-preview">
            <pre>
              <code>
              {`// Product Category Management
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    
    if (!category) {
      res.status(404).json({ message: 'Category not found!' });
      return;
    }
    
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});`}
              </code>
            </pre>
          </div>
        </>
      )
    }
,
{
  title: "Editorium PWA",
  description: "A sophisticated Progressive Web Application text editor that enables seamless offline functionality. Built with modern web technologies, it demonstrates advanced browser storage techniques using IndexedDB, service worker implementation for offline caching, and PWA installation capabilities.",
  technologies: "Node.js, Express.js, IndexedDB, Webpack, Service Workers, WebpackPwaManifest, Workbox",
  github: "https://github.com/AshleydVon/Editorium-PWA",
  customContent: (
    <>
      <div className="tech-stack-showcase">
        <div className="tech-icon-container">
          <FaNodeJs className="tech-icon node" />
          <span>Node.js</span>
        </div>
        <div className="tech-icon-container">
          <SiExpress className="tech-icon express" />
          <span>Express</span>
        </div>
        <div className="tech-icon-container">
          <DiDatabase className="tech-icon database" />
          <span>IndexedDB</span>
        </div>
        <div className="tech-icon-container">
          <SiWebpack className="tech-icon webpack" />
          <span>Webpack</span>
        </div>
      </div>
      <div className="code-preview">
        <pre>
          <code>
          {`// IndexedDB Configuration
const initdb = async () => {
  const db = await openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      }
    },
  });
  return db;
};`}
          </code>
        </pre>
      </div>
    </>
  )
}
,
    {
      title: "Thought Stream API",
      description: "A social networking infrastructure designed to power meaningful digital connections. The platform enables users to build communities, share ideas instantly, and engage through reactions, creating an interactive space where thoughts flow freely and relationships flourish in real-time.",
      technologies: "Node.js, Express.js, MongoDB, Mongoose, bcrypt, express-session, RESTful API, JWT Authentication",
      github: "https://github.com/AshleydVon/thought-connect-api",
      demo: "https://www.loom.com/share/d605c948e0764844bba482b07e38afb1?sid=8e294bf8-6c08-4c33-ab34-40af2ba6fe0e",
      customContent: (
        <>
          <div className="tech-stack-showcase">
            <div className="tech-icon-container">
              <FaNodeJs className="tech-icon node" />
              <span>Node.js</span>
            </div>
            <div className="tech-icon-container">
              <SiExpress className="tech-icon express" />
              <span>Express</span>
            </div>
            <div className="tech-icon-container">
              <SiMongodb className="tech-icon mongodb" />
              <span>MongoDB</span>
            </div>
            <div className="tech-icon-container">
              <DiDatabase className="tech-icon database" />
              <span>Mongoose</span>
            </div>
          </div>
          <div className="code-preview">
            <pre>
              <code>
              {`// Friend Management System
router.post('/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    ).populate('friends');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});`}
              </code>
            </pre>
          </div>
        </>
      )
    }
,

{
  title: "SVG Logo Maker",
  description: "A streamlined CLI tool designed to empower developers to create professional logos instantly. Built to eliminate dependency on expensive design software, this Node.js application transforms simple inputs into polished SVG logos, perfect for rapid branding and project customization.",
  technologies: "Node.js, Inquirer, Jest, Object-Oriented Programming, Test-Driven Development",
  github: "https://github.com/AshleydVon/SVG-Logo-Maker",
  demo: "https://ashleydvon.github.io/SVG-Logo-Maker/",
  screenshots: [
    {
      src: ADV,
      alt: "Logo Generation Process",
      caption: "Interactive CLI Interface"
    },
    {
      src: ADV2,
      alt: "Generated Logo Example",
      caption: "Custom SVG Output"
    },
    {
      src: ADV3,
      alt: "Shape Variations",
      caption: "Multiple Shape Options"
    }
  ],
  customContent: (
    <>
      <div className="tech-stack-showcase">
        <div className="tech-icon-container">
          <FaNodeJs className="tech-icon node" />
          <span>Node.js</span>
        </div>
        <div className="tech-icon-container">
          <SiJest className="tech-icon jest" />
          <span>Jest</span>
        </div>
      </div>
      <div className="code-preview">
        <pre>
          <code>
          {`class Shape {
constructor() {}
setColor(color) {
this.color = color;
}
}

class Circle extends Shape {
render() {
return \`<circle cx="150" cy="100" r="80" fill="\${this.color}"></circle>\`;
}
}`}
          </code>
        </pre>
      </div>
    </>
  )
}
,
    {
      title: "TravelWise",
    description: "A comprehensive travel planning platform built in collaboration with Florian Suess and Christopher Chhim. Integrates multiple weather APIs and location services to help travelers make informed decisions about destinations and timing, featuring real-time forecasts and historical weather data.",
    technologies: "JavaScript, HTML5, CSS3, OpenWeatherMap API, Visual Crossing API, jQuery, Foundation Framework",
    github: "https://github.com/AshleydVon/TravelWise",
    demo: "https://ashleydvon.github.io/TravelWise/",
    screenshots: [
      {
        src: TW1,
        alt: "Weather Forecast Interface",
        caption: "Dynamic Weather Dashboard"
      },
      {
        src: TW2,
        alt: "Activity Recommendations",
        caption: "Local Activities Explorer"
      },
      {
        src: TW3,
        alt: "Search History",
        caption: "Saved Destinations"
      }
    ],
    customContent: (
      <>
        <div className="tech-stack-showcase">
  <div className="tech-icon-container">
    <SiJavascript className="tech-icon javascript" />
    <span>JavaScript</span>
  </div>
  <div className="tech-icon-container">
    <SiHtml5 className="tech-icon html" />
    <span>HTML5</span>
  </div>
  <div className="tech-icon-container">
    <SiCss3 className="tech-icon css" />
    <span>CSS3</span>
  </div>
  <div className="tech-icon-container">
    <SiJquery className="tech-icon jquery" />
    <span>jQuery</span>
  </div>
        </div>
        <div className="code-preview">
          <pre>
            <code>
            {`// Multi-API Weather Integration
function getWeather(location, startDate, endDate) {
  const currentWeather = fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      updateCurrentWeather(data);
    });
    
  const forecast = fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      updateForecast(data);
    });
}`}
            </code>
          </pre>
        </div>
      </>
    )
  },
];

  return (
    <div className="projects-page">
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">Ashley D Von</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-button">Home</Nav.Link>
              <Nav.Link href="/projects" className="nav-button">Projects</Nav.Link>
              <Nav.Link href="/skills" className="nav-button">Skills</Nav.Link>
              <Nav.Link href="/contact" className="nav-button">Contact</Nav.Link>
              <Nav.Link href="/resume" className="nav-button">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="projects-hero">
        <Container>
          <div className="projects-hero-content text-center">
            <h1 className="section-title">My Projects</h1>
            <p>A collection of my development work</p>
          </div>
        </Container>
      </header>

      <main className="projects-main">
        <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project, index) => (
              <Col key={index}>
                <Card className="project-card h-100">
                  <Card.Body>
                    <Card.Title className="project-title">{project.title}</Card.Title>

                    <Card.Text>{project.description}</Card.Text>
                    <div className="technologies">
                      <strong>Technologies:</strong> {project.technologies}
                    </div>
                    {project.customContent && project.customContent}
                    {project.screenshots && (
                      <div className="screenshot-gallery">
                        {project.screenshots.map((screenshot, idx) => (
                          <div key={idx} className="screenshot-item">
                            <img src={screenshot.src} alt={screenshot.alt} />
                            <p>{screenshot.caption}</p>
                          </div>
                        ))}
                        
                      </div>
                    )}
                  </Card.Body>
                  <Card.Footer className="project-footer">
                    <Button
                      variant="primary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      GitHub
                    </Button>
                    {project.demo && (
                      <Button
                        variant="secondary"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            ))} 
          </Row>
        </Container>
      </main>

      <footer className="footer-custom">
        <Container>
          <Row>
            <Col className="text-center">
              <p>Connect with me:</p>
              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/AshleydVon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="social-icon" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ashley-von-0600a9239/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="social-icon" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:AshleydVon630@gmail.com">
                    <MdEmail className="social-icon" /> Email: AshleydVon630@gmail.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Projects;
