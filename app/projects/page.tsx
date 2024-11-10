import Image from 'next/image'
import ecom from "../public/ecom.jpg"
import dash from "../public/dashboard.png"
import task from "../public/taskmanage.png"
import days from "../public/30day.webp"
import calc from "../public/calc.jpg"
import resume from "../public/resume.png"



export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Next.js, and API.',
      image: ecom,
      tags: ['React', 'Next.js', 'API', 'CSS'],
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application using OpenWeatherMap API and React.',
      image: dash,
      tags: ['React', 'API Integration', 'CSS Modules'],
    },
    {
      title: 'Task Management App',
      description: 'A task management application built with Next.js and React.',
      image: task,
      tags: ['Next.js', 'React', 'CSS'],
    },
    {
        title: "Scientific Calculator App",
        description: "A complex calculator application built with Next.js and API.",
        tags: ["Next.js", "API", "Tailwind CSS"],
        image: calc
      }
      ,
      {
        title: "30-Days-of-Code",
        description: "A 30 day of coding challenge to overcome difficultiies in Next.js.",
        tags: ["Next.js", "Typscript", "Tailwind CSS"],
       image: days
      }
      ,
      {
        title: "Resume Builder",
        description: "A Problem Solving product which generates Sleek Resume with Javascript  .",
        tags: ["HTML", "CSS", "Tailwind Javascript"],
      image: resume
      }
  ]

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}