import { Input } from "@/components/ui/input"
import { Form, FormField, FormLabel, FormItem, FormControl } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

import { login } from "@/services/LoginService"
import { IUser } from "@/interfaces/IUser"

const formSchema = z.object({
    email: z.string({
        required_error: "Please enter a email."
    }).min(1, {
        message: "Name must be at least 2 characters.",
    }).max(100, {
        message: "Name must be at most 100 characters.",
    }),
    password: z.string({
        required_error: "Please enter a password."
    }).min(1, {
        message: "Name must be at least 2 characters.",
    }).max(100, {
        message: "Name must be at most 100 characters.",
    }),
})

export function FormsLogin() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (values: any) => {
        try { 
            console.log("cliquei")
            const response = await login(values.email, values.password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-[9px] items-start">
                            <FormLabel className="text-[18px]">E-mail</FormLabel>
                            <FormControl>
                                <Input { ...field } placeholder="@gmail.com" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel className="text-[18px]">Password</FormLabel>
                            <FormControl>
                                <Input { ...field } placeholder="***********" type="password" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="b2bit" className="h-[54px]" >
                    Sign In
                </Button>
            </form>
        </Form>
    )
}

