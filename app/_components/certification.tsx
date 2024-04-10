import { Certifications } from "@prisma/client";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"
import { Award, SquareArrowOutUpRight } from "lucide-react";

export const Certification: React.FC<{ certification: Certifications }> = ({ certification }) => {
    return (
        <Card key={certification.id} className="w-full min-h-[200px] shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.025] flex flex-col justify-center items-center">
            <Link href={certification.link} className="absolute top-4 right-4 z-10 bg-white inline-flex justify-center items-center px-4 py-2 outline outline-offset-0 outline-1 font-medium rounded-lg text-gray-600 hover:underline">
                <SquareArrowOutUpRight className="h-5 w-5" />
            </Link>
            <CardHeader className="pt-5 text-center flex flex-col justify-center items-center">
                <div className="rounded-full p-3 bg-white shadow-lg w-12 h-12 mb-3">
                    <Award className="w-full h-full object-cover rounded-lg text-orange-500" />
                </div>
                <CardTitle className="text-lg text-center">
                    {certification.name}
                </CardTitle>
                <CardDescription className="overflow-hidden line-clamp-3 dark:text-gray-100">{certification.authority}</CardDescription>
            </CardHeader>
        </Card>
    )
}