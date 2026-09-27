import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa"

const links = [
  { href: 'https://discord.com', icon: <FaDiscord/>},
  { href: 'https://twitter.com', icon: <FaTwitter/>},
  { href: 'https://github.com', icon: <FaGithub/>},
  { href: 'https://twitch.com', icon: <FaTwitch/>},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-600 py-4 text-white'>
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:relative md:flex-row md:justify-between">
        <p className='text-center text-sm md:text-left'>&copy; Nova 2026, All Rights Reserved.</p>
        <div className='flex justify-center gap-4 md:absolute md:left-1/2 md:-translate-x-1/2'>
          {
            links.map((link) => (
              <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className=" transition-colors duration-500 ease-in-out hover:text-yellow-300">
                {link.icon}
              </a>
            ))
          }
        </div>

        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer