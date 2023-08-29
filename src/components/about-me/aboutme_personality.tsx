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
                    <p>My MBTI is: <Link href="https://16personalities.com/isfj-personality"><u>ISFJ</u></Link>, The Defender. (Introverted, Sensing, Feeling, Judging). ISFJs are hardworking and devoted, with a deep sense of responsibility. They have excellent analytical abilities and an eye for detail. Even though they may seem reserved, they tend to have well-developed people skills and social relationships.</p>
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mt-5">

                <h3 className="text-lg mb-3">My Values</h3>
                <div className='text-justify'>
                    <p>The most important thing to me is the well-being of <b>me</b> and <b>my family</b>, which is later followed by my <b>friends or colleagues</b> who are within in primary social circle. I believe that <b>hard work</b> is the key to success, and <b>integrity</b>, <b>diligence</b>, <b>responsibility</b> and <b>discipline</b> are the remaining key factors towards success.</p>
                </div>
            </div>

            <div className='mt-10'>
                <h3 className="text-lg mb-3">My Strengths</h3>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    {strengths.map(strength => (
                        <div key={strength} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={strength} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='mt-5'>
                <h3 className="text-lg mb-3">My Weaknesses</h3>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    {weaknesses.map(weakness => (
                        <div key={weakness} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={weakness} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}