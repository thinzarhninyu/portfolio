"use server";

import z from "zod";
import { Resend } from 'resend';
import { ContactSchema } from "@/schemas";

export const contact = async (values: z.infer<typeof ContactSchema>) => {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const validatedFields = ContactSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { name, email, message } = validatedFields.data;

    await resend.emails.send({
        from: "mail@thinzarhninyu.me",
        to: 'thinzarhninyu.17@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: "Contact email sent!" };
};
