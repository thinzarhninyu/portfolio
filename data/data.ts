import { db } from "@/lib/db";
import { ExperienceType } from "@prisma/client";

export const getProfileImage = async () => {
    return 'https://res.cloudinary.com/ddoajstil/image/upload/v1709092788/portfolio/thinzar_profile.jpg'
}

export const getProfileTags = async () => {
    return ['Software Engineer', 'Full Stack Developer', 'Tech Enthusiast']
}

export const getEducationDetails = async () => {
    try {
        const educationDetails = await db.education.findMany({ orderBy: { startDate: 'desc' } });

        return educationDetails;
    } catch {
        return null;
    }
};

export const getExperienceDetails = async () => {
    try {
        const experienceDetails = await db.experience.findMany({ where: { type: { not: ExperienceType.EXTRACURRICULAR } }, orderBy: { startDate: 'desc' } });

        return experienceDetails;
    } catch {
        return null;
    }
};

export const getSkills = async () => {
    try {
        const skills = await db.skills.findMany();

        return skills;
    } catch {
        return null;
    }
};

export const getProjects = async () => {
    try {
        const projects = await db.projects.findMany({ include: { technologies: { select: { name: true } } }, orderBy: { startDate: 'desc' } });

        return projects;
    } catch {
        return null;
    }
};

export const getProjectById = async (id: string) => {
    try {
        const project = await db.projects.findUnique({ where: { id }, include: { technologies: { select: { name: true } } } });

        return project;
    } catch {
        return null;
    }
};

export const getTestimonials = async () => {
    try {
        const testimonials = await db.testimonials.findMany();

        return testimonials;
    } catch {
        return null;
    }
};

export const getExtracurriculars = async () => {
    try {
        const extracurriculars = await db.experience.findMany({ where: { type: ExperienceType.EXTRACURRICULAR }, orderBy: { startDate: 'desc' } });

        return extracurriculars;
    } catch {
        return null;
    }
}

export const getCertifications = async () => {
    try {
        const certifications = await db.certifications.findMany({ orderBy: { date: 'desc' } });

        return certifications;
    } catch {
        return null;
    }
}

export const getInterests = async () => {
    try {
        const interests = await db.interests.findMany();

        return interests;
    } catch {
        return null;
    }
}

export const getPersonalityTraits = async () => {
    try {
        const personalityTraits = await db.personality.findMany();

        return personalityTraits;
    } catch {
        return null;
    }
}