import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/img/profile.jpg';
import { AiFillFilePdf } from "react-icons/ai";

export default function AboutMeOverview() {
    return (
        <div>
            <div className='w-full flex justify-center items-center'>
                <div className='flex flex-col sm:flex-row md:flex-row justify-between items-center w-10/12 md:space-y-5 sm:space-y-5 lg:space-x-5'>
                    <div className="w-12/12 sm:w-12/12 md:w-6/12 lg:w-6/12 mb-5 lg:mb-0 flex items-center text-justify">
                        <div>
                            <p className='text-2xl text-center md:text-left sm:text-center lg:text-left font-semibold mb-5'>Hi! I&apos;m Thinzar @micxehye!</p>
                            <p className='text-s mb-5'>Reach me on social media with the tag <b>@micxehye</b>, or contact me via the links on the top!</p>
                            <p className=''>I am a Year-2 <a href="https://www.sp.edu.sg/soc/courses/full-time-diplomas/information-technology">Diploma in Information Technology</a> student, specializing in Software Development, studying @ <a href="https://www.sp.edu.sg">Singapore Polytechnic</a>. I am a student taking the Project INC Pathway, which collaborates with industry partners for a pipeline of real-world projects to offer an Industry Now Curriculum.</p>
                            <Link href="/cv/resume.pdf" className="mt-4 inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"><AiFillFilePdf className='mr-2' /> View CV</Link>
                        </div>
                    </div>
                    <Image
                        src={profilePic}
                        alt="Photo of me"
                        width={300}
                        height={300}
                        blurDataURL="data:..."
                        placeholder="blur"
                        className='rounded-xl w-12/12 sm:w-6/12 md:w-12/12 lg:w-6/12'
                    />
                </div>
            </div>
        </div >
    )
}