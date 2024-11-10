export default function About() {
    const skills = ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Node.js', 'Tailwind','Python','Typescript','Javascript']
    const education = [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        year: '2018 - 2022'
      },
      {
        degree: 'Full Stack Web Development Bootcamp',
        institution: 'Tech Academy',
        year: '2023'
      }
    ]
  
    return (
      <div className="about">
        <h1>About Me</h1>
        <div className="card">
          <p>
            I am Hashir, a passionate web developer with a keen eye for creating responsive and
            user-friendly websites. With a strong foundation in modern web technologies, I
            specialize in building robust and scalable applications that deliver exceptional user
            experiences.
          </p>
          </div>
          <div className="card">
          <p>
            My journey in web development has equipped me with a diverse skill set, allowing
            me to tackle complex challenges and bring innovative ideas to life through code. I am
            constantly learning and staying up-to-date with the latest trends in web
            development to ensure I deliver cutting-edge solutions.
          </p>
          </div>
          <div className="card">
          <p>
          As a web developer, I enjoy tackling complex problems and turning ideas into digital solutions. I have a deep understanding of modern web technologies, including Next.js and Tailwind CSS, and am well-versed in TypeScript for creating secure, maintainable code. I am dedicated to enhancing web performance, accessibility, and mobile optimization to ensure that every project I take on is not only visually appealing but also fast and inclusive.
          </p>
          </div>
        <h1>My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
        <h1>Education</h1>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item card">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
