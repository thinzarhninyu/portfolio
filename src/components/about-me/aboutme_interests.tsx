// "use client"

import Interest from "./interest"
import { interests } from "@/app/data"
// import GitHubCalendar from "react-github-calendar";

export default function AboutMeInterests() {

    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Interests</h1>

            <div className='w-full mt-7 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-5'>
                {interests.map(({ image, text, page }) => (
                    <Interest key={text} image={image} text={text} page={page} />
                ))}
            </div>

            {/* <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mt-5">
                <p className="font-bold capitalize">GitHub Contribution</p>
                <p className="my-4">
                    The following is my GitHub contribution graph which shows my coding activity and productivity on the platform.
                </p>
                <GitHubCalendar username="thinzarhninyu" />
            </div> */}
        </div>
    )
}