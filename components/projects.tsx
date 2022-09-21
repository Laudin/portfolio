import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { Project } from "../shared/interfaces/interfaces"

export const Projects = (props: { projects: Project[] }) => {

   // [&>*]:hover:-top-2 to make children move when father hover
   useEffect(() => {

   }, [])

   return (
      <div className='p-1 flex flex-col'>
         {props.projects.map(item =>
            <div id='container' key={item.title} className='relative m-0 sm:m-4'>
               <div className='relative p-8 flex justify-between gap-10 flex-col lg:flex-row-reverse'>
                  {/* <Image src={''} className='bg-black w-full h-auto object-cover' alt={item.title}></Image> */}
                  <div className='bg-black w-6/12 h-60 m-auto lg:m-0'></div>
                  <div id='content' className=''>
                     <h1 className='text-4xl my-8 text-center font-bold'>{item.title}</h1>
                     <ul className='text-center'>{item.stack.map(x => <li className='mx-2' key={x}>{x}</li>)}</ul>
                     <p className='text-lg my-4'>{item.description}</p>
                  </div>
               </div>
               <Link href={item.demo}><a className='text-secundary font-bold text-center block my-2'>Live Demo</a></Link>
               <Link href={item.source}><a className='text-secundary font-bold text-center block my-2'>Source Code</a></Link>
            </div>

         )}
      </div>
   )
}