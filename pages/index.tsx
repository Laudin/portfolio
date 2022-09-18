import Head from 'next/head'
import { Projects } from '../components/projects'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Arrow } from '../components/arrow'
import { Project } from '../shared/interfaces/interfaces'
import { useRef } from 'react'

export default function Home() {

  const projects: Project[] = [
    {
      title: 'Mercado Libre',
      media: '',
      stack: ['Next.js, Node.js, React.js'],
      description: '',
      demo: '',
      source: ''
    },
    {
      title: 'Chat App',
      media: '',
      stack: ['Next.js, Node.js, React.js'],
      description: '',
      demo: '',
      source: ''
    },
  ]

  const ref = useRef<null | HTMLDivElement>(null)

  const checked = () => {
    if (ref.current.classList.contains('h-0')) {
      ref.current.classList.remove('h-0')
    } else {
      ref.current.classList.add('h-0')
    }
  }

  return (
    <div className='text-text relative pb-8'>
      <Head>
        <title>Laudin | Web Developer</title>
        <meta name="description" content="Gastón Ladin Personal Portfolio" />
        <link rel="icon" href="/icon-16.png" />
      </Head>

      <header className='px-10 py-8'>
        <div className='w-full'>
          <button onClick={checked} className='relative w-0 h-0 sm:hidden cursor-pointer'>
            <svg x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path></svg>
          </button>
        </div>

        <div id='nav-container' ref={ref} className='h-0 flex-col overflow-hidden transition-all duration-300 sm:h-auto sm:flex sm:flex-row sm:justify-end sm:gap-5'>
          <ul id="nav" className='flex flex-col gap-2 text-center sm:flex-row'>
            <li><a href='#' className='line'>Projects</a></li>
            <li><a href='#' className='line'>Stack</a></li>
            <li><a href='#' className='line'>Contact</a></li>
          </ul>
          <span className='hidden sm:block'> / </span>
          <ul id="socials" className='flex flex-col gap-2 text-center sm:flex-row'>
            <li><Link href={""}><a className='line'>Github</a></Link></li>
            <li><Link href={""}><a className='line'>Linkedin</a></Link></li>
            <li><Link href={""}><a className='line'>Gmail</a></Link></li>
          </ul>
        </div>
      </header>

      <main className=''>
        <div id='info' className='flex flex-col gap-5 relative w-11/12 m-auto sm:flex-row sm:gap-10 sm:h-screen'>
          <div className='mx-8 w-80'>
            <h1 className="text-text text-7xl relative mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-16 after:h-0.5 after:bg-secundary">
              Gaston Laudin<span className='text-secundary'>.</span>
            </h1>

            <ul className='text-lg'>
              <li><Link href={''}><a><span>| </span><span className='hover:text-secundary'>Linkedin</span></a></Link></li>
              <li><Link href={''}><a><span>| </span><span className='hover:text-secundary'>Github</span></a></Link></li>
              <li><Link href={''}><a><span>| </span><span className='hover:text-secundary'>Twitter</span></a></Link></li>
            </ul>

            <button className='bg-transparent mt-6 font-bold text-secundary p-2 border-solid border-2 border-secundary transition-all duration-300 hover:bg-secundary hover:text-black'>CANTACT ME</button>
          </div>

          <div className='hidden w-7/12 sm:block'>
            <p className='text-xl leading-snug sm:text-5xl'>
              {"Hello, I'm Laudin, a DFW based React web developer" +
                "that loves learning new tools & " +
                "technologies everyday."}
            </p>
          </div>

          <a href='#projects' className='hidden absolute -translate-x-1/2 left-2/4 bottom-24 w-24 h-12 cursor-pointer sm:block'><Arrow /></a>
        </div>

        <div id='projects' className='w-11/12 my-8 m-auto'>
          <h1 className='text-3xl font-bold text-center text-secundary'>My Projects</h1>
          <Projects projects={projects}></Projects>
        </div>
      </main>

      <footer className='text-text absolute -bottom-1 w-full py-4 border-t-2 border-solid border-secundary'>
        <p className='text-center text-lg'>Made By Gastón Laudin</p>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    }
  }
}