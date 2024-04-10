import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().nonempty({
        message: "Name is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    message: z.string().nonempty({
        message: "Message is required",
    }),
});