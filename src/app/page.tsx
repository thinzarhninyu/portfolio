import Image from 'next/image'
import profilePic from '../../public/img/profile.jpg';
import { projects, tags } from './data'
import Project from '@/components/projects/project';
import KDB from '@/components/KDB';
import Link from 'next/link';
import { AiFillFilePdf } from "react-icons/ai";

export default function Home() {

  const latest_projects = projects
    .slice()
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  return (
    <main>
      <div className='w-full flex justify-center items-center'>
        <div className='flex flex-col sm:flex-row md:flex-row justify-between items-center w-10/12 md:space-y-5 sm:space-y-5 lg:space-x-5'>
          <div className="w-12/12 sm:w-12/12 md:w-12/12 lg:w-6/12 mb-5 lg:mb-0 flex items-center ">
            <div>
              <div className='flex items-center justify-center'>
                {/* <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-5xl lg:text-5xl text-white font-bold">Hi, I&apos;m Thinzar!</h1> */}
                <h1 className="text-3xl md:text-5xl lg:text-5xl text-white font-bold">Hi, I&apos;m Thinzar!</h1>
              </div>
              <div className='flex flex-row flex-wrap justify-center items-center mt-5 space-x-3'>
                {tags.map(tag => (
                  <div key={tag} className='flex items-center justify-center'>
                    <div className='w-full justify-center mb-4'>
                      <KDB content={tag} />
                    </div>
                  </div>
                ))}
              </div>
              <div className='my-3'>
                <p className='text-justify'>Welcome to my very own portfolio consisting of who I am as a person, as well as my experiences in Tech. This portfolio was developed as a personal project using Next.js, Typescript, Tailwind CSS and Shadcn UI.</p>
              </div>
              <div className='mt-5 w-full flex justify-center'>
                <Link href="/cv/resume.pdf" className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"><AiFillFilePdf className='mr-2' /> View CV</Link>
              </div>

            </div>
          </div>
          <Image
            src={profilePic}
            alt="Photo of me"
            width={300}
            height={300}
            blurDataURL="data:..."
            placeholder="blur"
            className='rounded-xl w-12/12 sm:w-12/12 md:w-12/12 lg:w-6/12'
          />
        </div>
      </div>
      <div className='mt-20'>
        <h1 className='text-2xl mb-4'>Recent Projects</h1>
        <div>
          {latest_projects.map(({ title, description, language, image, link, code }) => (
            <div key={title} className='w-full flex justify-center items-center mb-10'>
              <Project link={link} code={code} title={title} description={description} language={language} image={image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
