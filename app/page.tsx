import Image from 'next/image'
import Link from 'next/link'
import prof from "./public/hero.jpg"

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-image">
          <Image
            src={prof}
            alt="Hashir's profile"
            width={270}
            height={270}
            className="profile-picture"
          />
        </div>
        <div className="hero-content">
          <h1>Hello, I am Hashir</h1>
          <p>
            I'm a passionate <span>Front-End</span> web developer specializing in creating responsive and user-friendly websites.
            With expertise in React, Next.js, and modern web technologies, I bring ideas to life through code.
          </p>
          <div className="cta-buttons">
            <Link href="/projects" className="button">View My Projects</Link>
            <Link href="/contact" className="button button-outline">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  )
}