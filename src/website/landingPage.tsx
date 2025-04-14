import { useState } from 'react'
import profile from '../assets/IMG-20230926-WA0002 bg removed.png'
import project1 from '../assets/icon in orbit.png'
import project2 from '../assets/icon url shotner project.png'
import { sendContactEmail } from '../http/contact'

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Here you can handle the form submission
    // For example, send the data to an API or display it
    console.log('Form submitted with data:', formData)

    try {
      await sendContactEmail(formData)
      alert(
        `Thank you for your message, ${formData.name}! We'll get back to you soon.`,
      )
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send email. Please try again later.')
    }

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Justino Mabui</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">Justino Mabui</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Full Stack Developer | Web Designer
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 mb-4">
                I'm a passionate developer with a strong focus on creating
                beautiful and functional web applications. With expertise in
                both frontend and backend technologies, I bring ideas to life
                through clean, efficient code and modern design principles.
              </p>
              <p className="text-gray-300">
                "Outside of coding, I enjoy exploring new technologies, engaging
                with fellow developers, and occasionally maintaining IT
                infrastructure. I'm also passionate about data security and
                always eager to keep learning and growing.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Add your image here */}
              <div className="w-64 h-64 bg-gray-700 rounded-full">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'Java',
              'Python',
              'SQL',
              'Git',
              'Docker',
            ].map(skill => (
              <div
                key={skill}
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="h-48 bg-gray-600">
                <img
                  src={project1}
                  alt="Icon in Orbit Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">In Orbit</h3>
                <p className="text-gray-300 mb-4">
                  This is the front-end implementation of a desktop web
                  application focused on goal setting and weekly progress
                  tracking. It provides users with an intuitive interface to
                  set, monitor, and update their goals on a weekly basis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    View Project
                  </a>
                  <a
                    href="https://github.com/JMMabui/inOrbit-front-end.git"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="h-48 bg-gray-600">
                <img
                  src={project2}
                  alt="URL Shortener Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">URL Shortener</h3>
                <p className="text-gray-300 mb-4">
                  This project is a modular Java-based solution for efficient
                  URL shortening and management. It is structured into two main
                  subprojects and built with a clean architecture to ensure
                  scalability and maintainability. Additionally, it is fully
                  designed for seamless integration with AWS services, including
                  Lambda, S3, and API Gateway, enabling a cloud-native
                  deployment environment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    AWS-Lambda
                  </span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    AWS-S3
                  </span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    AWS-API Gateway
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    View Project
                  </a>
                  <a
                    href="https://github.com/JMMabui/url-shortener-project.git"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-2 items-center  justify-center space-x-6">
            <a
              href="https://github.com/JMMabui"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/justino-mabui-bb2a59212/"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
