import { Skills, SkillType } from '@prisma/client';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Skill: React.FC<{ title: string, skills: Skills[] }> = ({ title, skills }) => {
    return (
        <div className="w-full sm:w-full md:w-full lg:w-1/3 px-0 lg:px-2 py-2">
            <Card className="w-full min-h-[200px] shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.025] flex flex-col">
                <CardHeader className="pt-5">
                    <CardTitle className="text-lg text-center overflow-hidden line-clamp-1">
                        {title}
                    </CardTitle>
                </CardHeader>
                <div className="flex flex-wrap gap-x-0.5 gap-y-3 justify-center items-center px-5">
                    {skills?.filter((skill) => skill.featured === true).map((skill, index) => (
                        <Badge key={index}>{skill.name}</Badge>
                    ))}
                </div>
            </Card>
        </div>
    )
}