'use client';
import MouseParallaxWrapper from '@/components/MouseParallaxWrapper';


export default function Home() {
  return (
    <MouseParallaxWrapper>
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home">
        <h1>
          Hi, I'm <span className="underline-animate">Darpan Vinodrai</span>
        </h1>
        <p>
          Welcome to my portfolio. I'm a Computer Science graduate from De Montfort University with
          First-Class Honours. Skilled in programming, cybersecurity, and
          cloud engineering with Microsoft Azure. Passionate about building
          innovative solutions to solve real-world problems.
        </p>

        {/* See My Work Button */}
        <button
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            projectsSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-6 px-8 py-4 bg-purple-600 text-white rounded-3xl font-bold text-lg hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/50"
        >
          See My Work
        </button>

        {/* Social Buttons */}
        <div className="mt-10 flex gap-8 justify-center">
          <a
            href="https://github.com/FederalJZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-28 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-gray-500/50"
          >
            <img
              src="/logos/github.svg"
              alt="GitHub"
              className="w-auto h-10 object-contain !rounded-none" // <- force no rounding
            />
          </a>

          <a
            href="https://linkedin.com/in/DarpanVinodrai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-28 h-16 bg-blue-700 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-400/50"
          >
            <img
              src="/logos/linkedin.svg"
              alt="LinkedIn"
              className="w-auto h-10 object-contain !rounded-none" // <- force no rounding
            />
          </a>
        </div>
      </section>

      <section id="about">
        <h2>
          About Me
        </h2>
        <p>
          I'm a full-stack developer passionate about crafting sleek, iOS-inspired interfaces and interactive web experiences.
        </p>
      </section>

      <section id="skills" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Certifications</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Python", logo: "/logos/python.svg" },
            { name: "JavaScript", logo: "/logos/javascript.svg" },
            { name: "Java", logo: "/logos/java.svg" },
            { name: "Scala", logo: "/logos/scala.svg" },
            { name: "HTML", logo: "/logos/html.svg" },
            { name: "CSS", logo: "/logos/css.svg" },
            { name: "SQL", logo: "/logos/sql.svg" },
            { name: "Azure", logo: "/logos/azure.svg" },
            { name: "AWS", logo: "/logos/aws.svg" },
            { name: "Agile", logo: "/logos/agile.svg" },
            { name: "PRINCE2", logo: "/logos/prince2.svg" },
            { name: "VS Code", logo: "/logos/vscode.svg" },
            { name: "Android Studio", logo: "/logos/android.svg" },
            { name: "Microsoft Office", logo: "/logos/office.svg" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="relative flex items-center justify-center h-32 p-6 bg-gray-800 rounded-2xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Skill Name */}
              <span className="skill-text text-lg font-semibold text-white transition-opacity duration-300">
                {skill.name}
              </span>

              {/* Skill Logo */}
              <img
                src={skill.logo}
                alt={`${skill.name} Logo`}
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300"
              />

              {/* Hover Effect */}
              <style jsx>{`
          div:hover .skill-text {
            opacity: 0;
          }
          div:hover img {
            opacity: 1;
          }
        `}</style>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Portuguese — Native</li>
            <li>English — Native</li>
            <li>Gujarati — Elementary</li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Certificate in Financial Studies (CEFs)</li>
            <li>Cloud Engineering Trainee (AiCore)</li>
            <li>Kotlin Essential Training</li>
            <li>Android Studio Essential Training</li>
            <li>Software Engineering (AiCore)</li>
            <li>Python Essentials (AiCore)</li>
            <li>Python Basics (AiCore)</li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2>
          Projects
        </h2>
        <div className="projects-container">
          <div className="card">
            <h3>
              Project 1
            </h3>
            <p>
              Some description about Project 1. Tech used: React, CSS.
            </p>
          </div>
          <div className="card">
            <h3>
              Project 2
            </h3>
            <p>
              Some description about Project 2. Tech used: Next.js, Tailwind CSS.
            </p>
          </div>
          <div className="card">
            <h3>
              Project 3
            </h3>
            <p>
              Some description about Project 3. Tech used: JavaScript, HTML, CSS.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>
          Contact Me
        </h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
    </MouseParallaxWrapper>
  );
}