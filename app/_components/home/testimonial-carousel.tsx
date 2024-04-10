"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Testimonials } from "@prisma/client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export const TestimonialCarousel: React.FC<{ testimonials: Testimonials[] }> = ({ testimonials }) => {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    return (
        <div>
            <Carousel setApi={setApi} className="w-full max-w-md aspect-square sm:aspect-[4/3]">
                <CarouselContent>
                    {testimonials?.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <Card className="aspect-square sm:aspect-[4/3] flex flex-col justify-center items-center py-5">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <CardHeader>
                                    <CardTitle className="text-center text-lg font-bold">
                                        {testimonial.name}
                                    </CardTitle>
                                    <CardDescription className="text-center dark:text-gray-100">
                                        {testimonial.position} @ {testimonial.company}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="font-semibold text-center py-0 px-6">
                                    {testimonial.description}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex dark:bg-gray-800" />
                <CarouselNext className="hidden sm:flex dark:bg-gray-800" />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground dark:text-gray-300">
                Testimonial {current} of {count}
            </div>
        </div>
    )
}