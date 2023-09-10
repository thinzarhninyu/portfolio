import Link from 'next/link';
import KDB from '../KDB';
import { strengths, weaknesses } from '@/app/data'

export default function AboutMePersonality() {
    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Personality</h1>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700">
                <h3 className="text-lg mb-3">My Personality Type</h3>
                <div className='text-justify'>
                    <p className='mb-4'>My MBTI is: <Link href="https://16personalities.com/isfj-personality"><u>ISFJ</u></Link>, The Defender. (Introverted, Sensing, Feeling, Judging). ISFJs are hardworking and devoted, with a deep sense of responsibility. They have excellent analytical abilities and an eye for detail. Even though they may seem reserved, they tend to have well-developed people skills and social relationships.</p>

                    <Link href='https://www.16personalities.com/profiles/121a9b151439f' className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">View my personality profile!</Link>


                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mt-5">

                <h3 className="text-lg mb-3">My Values</h3>
                <div className='text-justify'>
                    <p>The most important thing to me is the well-being of <b>me</b> and <b>my family</b>, which is later followed by my <b>friends or colleagues</b> who are within in primary social circle. I believe that <b>hard work</b> is the key to success, and <b>integrity</b>, <b>diligence</b>, <b>responsibility</b> and <b>discipline</b> are the remaining key factors towards success.</p>
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow mt-5">

                <div className=''>
                    <h3 className="text-lg mb-3">My Strengths</h3>
                    <div className='flex flex-row flex-wrap items-center'>
                        {strengths.map(strength => (
                            <div key={strength} className='flex flex-row items-center'>
                                <div className='w-full justify-center mr-4 mb-4'>
                                    <KDB content={strength} />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className="text-lg mb-3">My Weaknesses</h3>
                    <div className='flex flex-row flex-wrap items-center'>
                        {weaknesses.map(weakness => (
                            <div key={weakness} className='flex flex-row items-center'>
                                <div className='w-full justify-center mr-4 mb-4'>
                                    <KDB content={weakness} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div >
    )
}