import KDB from "../KDB"


export default function AboutMeSkills() {

    const frontend = [
        'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React.js', 'Next.js'
    ]

    const backend = [
        'Node.js', 'Express', 'Java', 'PHP'
    ]

    const database = [
        'MySQL', 'NoSQL', 'Microsoft SQL', 'Planetscale', 'MongoDB', 'ERD'
    ]

    const others = [
        'Cloudinary',
        'UI/UX',
        'Usability Testing',
        'ERD'
    ]


    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Skills</h1>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mb-4">
                <p className="mb-3">Frontend Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {frontend.map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mb-4">
                <p className="mb-3">Backend Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {backend.map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mb-4">
                <p className="mb-3">Database Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {database.map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mb-4">
                <p className="mb-3">Other Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {others.map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}