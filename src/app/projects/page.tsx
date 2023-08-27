import Project from "@/components/projects/project"
// import Project from "@/components/project_overview"

export default function Projects(): JSX.Element {
    const projects = [
        {
            title: 'Portfolio',
            description: 'None other than this very own portfolio consisting of who I am as a person, as well as my experiences in Tech. This portfolio was developed as a personal project, to embark on Next.js and Typescript and was integrated with Mongo DB and Cloudinary.',
            language: ['Next.js', 'Typescript', 'Tailwind CSS'],
            image: '/img/portfolio.png',
            link: 'https://thinzarhninyu.me'
        },
        {
            title: 'Techzero',
            description: 'Inspired by Challenger, an e-commerce tech platform developed as a part of a school project, together with my 3 other teammates. This project was integrated with NoSQL (Planetscale) and Cloudinary.',
            language: ['React.js', 'Node.js', 'Javascript', 'Tailwind CSS'],
            image: '/img/techzero.png',
            link: 'http://techzero-v1-1.onrender.com/'
        },
        {
            title: 'FED',
            description: 'A personal website developed as a part of a school project.',
            language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
            image: '/img/fed.png',
            link: 'https://thinzarhninyu.github.io/fed-ca2/'
        },
    ]

    return (
        <main>
            <h1 className='text-center mb-10 text-2xl'>Projects</h1>
            <div>
                {projects.map(({ title, description, language, image, link }) => (
                    <div key={title} className='w-full flex justify-center items-center mb-10'>
                        <Project link={link} title={title} description={description} language={language} image={image} />
                    </div>
                ))}
            </div>
        </main>
    )
}