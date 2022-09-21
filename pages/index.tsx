import Head from 'next/head'
import { Projects } from '../components/projects'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Arrow } from '../components/arrow'
import { Project } from '../shared/interfaces/interfaces'
import { useEffect, useRef, useState } from 'react'

export default function Home() {

  const projects: Project[] = [
    {
      title: 'Mercado Libre',
      media: '',
      stack: ['Next.js, Node.js, React.js'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut cum enim, perferendis modi, molestias exercitationem vel tempora ea, dolorem ad quos eius? Suscipit cumque nam reiciendis dolores omnis quis.',
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

  // for hidding arrow
  const arrow = useRef<null | HTMLAnchorElement>(null)
  // when see project hide arrow
  const project = useRef<null | HTMLDivElement>(null)
  // for the nav drop
  const ref = useRef<HTMLDivElement>(null)

  const callbackFun = (entries) => {
    if (!arrow) return

    if (entries[0].intersectionRatio > 0.1) {
      if (!project.current.classList.contains('animate-fade')) {
        if (!project) return

        project.current.classList.add('animate-fade')
        project.current.classList.remove('opacity-0')
      }
      arrow.current.style.opacity = '0'
      arrow.current.style.cursor = 'default'
    } else {
      arrow.current.style.opacity = '1'
      arrow.current.style.cursor = 'pointer'
    }
  }

  // useLayout ??
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    }
    const observer = new IntersectionObserver(callbackFun, options)
    if (project.current) observer.observe(project.current)
  }, [])

  const checked = () => {
    if (ref.current.classList.contains('drop')) {
      ref.current.style.height = '0px'
      ref.current.classList.remove('drop')
    } else {
      ref.current.style.height = '200px'
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

        <div id='nav-container' ref={ref} className='drop flex-col overflow-hidden transition-all delay-300 sm:h-0 sm:flex sm:flex-row sm:justify-end sm:gap-5 sm:overflow-visible'>
          <ul id="nav" className='flex flex-col gap-2 mb-3 text-center sm:flex-row'>
            <li><a href='#' className='sm:line'>Projects</a></li>
            <li><a href='#' className='sm:line'>Stack</a></li>
            <li><a href='#' className='sm:line'>Contact</a></li>
          </ul>
          <span className='hidden sm:block'> / </span>
          <ul id="socials" className='flex flex-col gap-2 text-center sm:flex-row'>
            <li><Link href={""}><a className='sm:line'>Github</a></Link></li>
            <li><Link href={""}><a className='sm:line'>Linkedin</a></Link></li>
            <li><Link href={""}><a className='sm:line'>Gmail</a></Link></li>
          </ul>
        </div>
      </header>

      <main className='mb-6'>
        <div id='info' className='flex flex-col gap-5 relative w-11/12 m-auto sm:mt-20 sm:flex-row sm:gap-10 sm:h-screen'>
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

          <div className='hidden w-7/12 mt-10 sm:block'>
            <p className='text-xl leading-snug sm:text-5xl'>
              {"Hello, I'm Laudin, a DFW based React web developer" +
                "that loves learning new tools & " +
                "technologies everyday."}
            </p>
          </div>

          <a href='#projects' ref={arrow} className='hidden absolute -translate-x-1/2 left-2/4 bottom-48 w-24 h-12 cursor-pointer opacity-100 transition-all delay-150 sm:block'>
            <Arrow />
          </a>
        </div>

        <div ref={project} id='projects' className='w-full opacity-0 my-28 m-auto sm:m-0 sm:mb-4'>
          <h1 className='text-3xl font-bold text-center text-secundary'>Selected Projects</h1>
          <Projects projects={projects}></Projects>
        </div>

        <div id='contact' className='py-8 bg-main2'>
          <form onSubmit={(e) => console.log(e)} className='flex flex-col gap-8 w-10/12 m-auto'>
            <input placeholder='subject' className='' name='subject'></input>
            <textarea placeholder='Your message' className='' name='message'></textarea>
            <button type='submit' className='w-8/12 m-auto p-2 border-solid border-2 border-secundary'>SEND</button>
          </form>
        </div>

      </main>
      <footer className='text-text absolute -bottom-1 w-full py-4 border-t-2 border-solid border-secundary z-50'>
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