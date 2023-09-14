import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Joseph Acevedo | Portfolio</title>
        <meta name="description" content="Joseph Acevedo | Portfolio" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <header>
        <Navbar toggleSidebar={toggleSidebar} />
      </header>

      <main>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <a id="hero">
          <Hero />
        </a>
        <a id="about">
          <About />
        </a>
        <Skill />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
