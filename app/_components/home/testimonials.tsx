import { getTestimonials } from "@/data/data"
import { TestimonialCarousel } from "./testimonial-carousel";

export const Testimonials: React.FC = async () => {

    const testimonials = await getTestimonials();

    return (
        <section className="">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center mt-16">
                    <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Testimonials</h2>
                </div>
                <div className="flex flex-wrap mt-5 gap-y-3">
                    {testimonials && testimonials.length > 0 ? <TestimonialCarousel testimonials={testimonials} /> : <p>No testimonials yet</p>}
                </div>
            </div>
        </section>
    )

}