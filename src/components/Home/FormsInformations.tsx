import { Input } from "@/components/ui/input"
import { Form, FormField, FormLabel, FormItem, FormControl } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"

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

export function FormsInformations() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (values: any) => {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={() => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel className="text-[14px]">
                                <span className="font-normal">Your</span>
                                <span className="font-bold"> Name</span>
                            </FormLabel>
                            <FormControl>
                                <Input disabled />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={() => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel className="text-[14px]">
                                <span className="font-normal">Your</span>
                                <span className="font-bold"> E-mail</span>
                            </FormLabel>
                            <FormControl>
                                <Input disabled />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}