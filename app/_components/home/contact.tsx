"use client"

import { ContactIcons } from "./contact-icons"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormMessage, FormField, FormLabel, FormControl, FormItem } from "@/components/ui/form"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod";
import { ContactSchema } from "@/schemas"
import { contact } from "@/actions/contact"

export const Contact: React.FC = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ContactSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            contact(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                    form.reset();
                });
        });
    };

    return (
        <section className="">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center mt-16">
                    <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Contact Me</h2>
                </div>
                <div className="px-6 sm:px-10 py-5 outline outline-offset-2 outline-1 outline-gray-300 rounded-lg mt-5 py-7">
                    <ContactIcons />
                    <Card className="mt-7 border-0 outline-0">
                        <CardHeader>
                            <CardTitle className="text-md font-bold tracking-tight text-gray-900 dark:text-gray-100">Contact me via the links above or fill up the form below.</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            disabled={isPending}
                                                            className="dark:bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            disabled={isPending}
                                                            className="dark:bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            {...field}
                                                            disabled={isPending}
                                                            className="dark:bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormError message={error} />
                                    <FormSuccess message={success} />
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button
                                disabled={isPending}
                                type="submit"
                                onClick={form.handleSubmit(onSubmit)}
                                className="w-full"
                            >
                                Submit
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}