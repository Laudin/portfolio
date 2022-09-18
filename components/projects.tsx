import Image from "next/image"
import Link from "next/link"
import { Project } from "../shared/interfaces/interfaces"

export const Projects = (props: { projects: Project[] }) => {
   return (
      <div className='p-1 flex flex-col sm:flex-row'>
         {props.projects.map(item =>
            <div id='container' key={item.title} className='relative w-10/12 m-auto [&>*]:hover:-top-2 sm:w-6/12 sm:m-4'>
               <div className='relative p-8 top-0 transition-all duration-250 shadow-2xl'>
                  <h1 className='text-center font-bold'>{item.title}</h1>
                  <Image src={''} className='bg-black w-full h-auto object-cover' alt={item.title}></Image>
                  <ul className=''>{item.stack.map(x => <li className='mx-2' key={x}>{x}</li>)}</ul>
                  <Link href={item.demo}><a className='text-secundary font-bold text-center block my-2'>Live Demo</a></Link>
                  <Link href={item.source}><a className='text-secundary font-bold text-center block my-2'>Source Code</a></Link>
               </div>
            </div>
         )}
      </div>
   )
}