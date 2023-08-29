import Interest from "./interest"
import { interests } from "@/app/data"

export default function AboutMeInterests() {

    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Interests</h1>

            <div className='w-full mt-7 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
                {interests.map(({ image, text, page }) => (
                    <Interest key={text} image={image} text={text} page={page} />
                ))}
            </div>
        </div>
    )
}