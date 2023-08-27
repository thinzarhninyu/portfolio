import Link from 'next/link';

export default function AboutMeExtracurricular() {

    const details = [
        {
            club: 'School of Computing Club (SOCC)',
            school: 'Singapore Polytechnic (SP)',
            period: '2022 June - Present',
            position: 'Public Relations Subcommittee & Events Head',
            description: [
                'Collaborate with my peers to utilize Canva to design posters',
                'Make Google Forms for event sign-ups and feedback',
                'Work in teams to organize events such as Halloween, Cyber Cup, Christmas Hangout and Freshman Orientation Camp, and manage crisis',
                'Work within tight deadlines and under pressure to deliver the projects on time',
                'Presented to Secondary School students about SOCC during the Early Admission Exercise Open House'
            ]
        },
        {
            club: 'SPAI',
            school: 'Singapore Polytechnic (SP)',
            period: '2022 June - Present',
            position: 'Administration Head',
            description: [
                'Use Microsoft Office and Google Sheets effectively to generate statistics for events',
                'Take meeting minutes and summarize the main points during EXCO meetings',
                'Maintain quality of work under pressure and produce accurate statistics for events',
                'Collaborated with my peers to organize SPAI Hackathon 2022',
                'Presented to Freshmen about SPAI and demonstrate projects during Freshman Orientation Program'
            ]
        },
        {
            club: 'SEED Student Interest Group',
            school: 'Singapore Polytechnic (SP)',
            period: '2023 January - Present',
            position: 'Events Coordinator',
            description: [
                'Collaborate with SEED peers to create learning resources for the Front-End Development module',
                'Host workshops to help peers to excel in their modules and learn new technical skills such as GitHub'
            ]
        },
        {
            club: 'SP Videography Club (SPVC)',
            school: 'Singapore Polytechnic (SP)',
            period: '2022 October - 2023 June',
            position: 'Training Head',
            description: [
                'Conduct trainings and events for club members',
                'Create training materials and resources for club members',
                'Work in teams to capture footages of live events'
            ]
        },
    ]

    const others = [
        {
            event: 'Meals on Wheels',
            place: 'SP School of Computing Club',
            period: 'March 2023',
            position: 'Organizer/ In-Charge',
            description: [
                'Organized Meals On Wheels for fellow peers',
                'Delivered food timely based on dietary requirements',
                'Worked under pressure during tight durations'
            ]
        },
        {
            event: 'Youth Model ASEAN Conference (YMAC)',
            place: 'Singapore Polytechnic',
            period: 'September 2022 - October 2022',
            position: 'Delegate',
            description: [
                'Collaborated with delegates from other countries to propose a solution for resource scarcity',
                'Learnt to use efficient time management to deliver the project on time',
                'Learnt to work in a group despite language barriers'
            ]
        },
        {
            event: 'Singapore Polytechnic Open House 2023',
            place: 'Singapore Polytechnic',
            period: 'January 2023',
            position: 'Volunteer/ Helper',
            description: [
                'Collaborated with peers to usher the public along different places of SP',
                'Learnt to improve my communication and team-working abilities'
            ]
        },
    ]

    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Extracurricular (CCA)</h1>

            <ol className="relative border-l border-gray-200 dark:border-gray-700 px-5">
                {details.map(({ club, school, period, position, description }) => (
                    <li key={club} className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
                            <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{club} <br /> @ {school}</h3>
                        <p className='block mb-2 text-sm font-normal leading-none text-gray-300'>{position}</p>
                        <time className="block mb-4 text-sm font-normal leading-none text-gray-300">{period}</time>
                        <ul className="space-y-1 text-gray-200 list-inside dark:text-gray-400">

                            {description.map(description => (
                                <li key={description} className="flex items-center text-justify">
                                    <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    {description}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>

            <h1 className='mb-10 text-xl'>Community Service/ Other Experiences</h1>

            <ol className="relative border-l border-gray-200 dark:border-gray-700 px-5">
                {others.map(({ event, place, period, position, description }) => (
                    <li key={event} className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
                            <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{event} <br /> @ {place}</h3>
                        <p className='block mb-2 text-sm font-normal leading-none text-gray-300'>{position}</p>
                        <time className="block mb-4 text-sm font-normal leading-none text-gray-300">{period}</time>
                        <ul className="space-y-1 text-gray-200 list-inside dark:text-gray-400">

                            {description.map(description => (
                                <li key={description} className="flex items-center text-justify">
                                    <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    {description}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    )
}