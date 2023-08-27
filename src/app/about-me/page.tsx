// "use client"

import React from 'react';
import KDB from '@/components/KDB_link';
import AboutMeOverview from '@/components/about-me/aboutme_overview';
import AboutMeEducation from '@/components/about-me/aboutme_education';
import AboutMeExtracurricular from '@/components/about-me/aboutme_extracurricular';
import AboutMeInterests from '@/components/about-me/aboutme_interests';
import AboutMePersonality from '@/components/about-me/aboutme_personality';
import AboutMeTestimonials from '@/components/about-me/aboutme_testimonials';
import AboutMeSkills from '@/components/about-me/aboutme_skills';

export default function AboutMe() {

    return (
        <main>
            <h1 className='text-center mb-10 text-2xl'>About Me</h1>
            <div className='flex flex-row flex-wrap justify-center items-center'>
                {[
                    { label: 'Overview', value: 'overview' },
                    { label: 'Education', value: 'education' },
                    { label: 'Extracurricular', value: 'extracurricular' },
                    { label: 'Skills', value: 'skills' },
                    { label: 'Interests', value: 'interests' },
                    { label: 'Personality', value: 'personality' },
                    { label: 'Testimonials', value: 'testimonials' },
                ].map(({ label, value }) => (
                    <div key={value} className='flex flex-row items-center justify-center'>
                        <div className='w-full justify-center mr-4 mb-4'>
                            <KDB
                                id={value}
                                content={label}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <section className=''>
                <div id="overview" className='pt-20'>
                    <AboutMeOverview />
                </div>
                <div id="education" className='pt-20'>
                    <AboutMeEducation />
                </div>
                <div id="extracurricular" className='pt-20'>
                    <AboutMeExtracurricular />
                </div>
                <div id="skills" className='pt-20'>
                    <AboutMeSkills />
                </div>
                <div id="interests" className='pt-20'>
                    <AboutMeInterests />
                </div>
                <div id="personality" className='pt-20'>
                    <AboutMePersonality />
                </div>
                <div id="testimonials" className='pt-20'>
                    <AboutMeTestimonials />
                </div>
            </section>
        </main>
    );
}
