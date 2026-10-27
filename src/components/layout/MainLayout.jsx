import Navbar from './Navbar'
import Footer from './Footer'
import FloatingSettings from '../settings/FloatingSettings'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingSettings />
    </div>
  )
}
