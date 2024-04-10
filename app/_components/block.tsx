"use client"

export const Block: React.FC<{
    icon: React.ReactNode,
    title: string,
    description: string
}> = ({ icon, title, description }) => {

    return (
        <>
            <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"></span>
            <div
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:group-hover:bg-neutral-500">
                {icon}
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3
                    className="text-xl font-bold text-gray-900 dark:text-gray-100 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    {title}
                </h3>
                <h4 className="mt-2 text-base text-gray-700 dark:text-gray-200">{description}</h4>
            </div>
        </>
    )
}
