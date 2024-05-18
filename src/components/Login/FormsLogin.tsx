import { Form, FormField, FormLabel, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Alert, message } from 'antd';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLoginMutate } from "@/hooks/useLogin";

import { ILogin } from "@/interfaces/IUser";


const formSchema = z.object({
    email: z.string({
        required_error: "Please enter an email.",
    }).email({
        message: "Please enter a valid email address.",
    }),
    password: z.string({
        required_error: "Please enter a password.",
    }).min(1, {
        message: "Password must be at least 1 character.",
    }).max(100, {
        message: "Password must be at most 100 characters.",
    }),
})

export function FormsLogin() {
    const { mutate, isSuccess, isPending, isError } = useLoginMutate();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (values: ILogin) => {
        const loginData: ILogin = {
            email: values.email,
            password: values.password,
        }
        mutate(loginData);
    }

    useEffect(() => {
        if (isSuccess) { 
            navigate('/home');
            message.success('Successful login!');
        }
    }, [isSuccess]);

    return (
        <Form {...form}>
            {
                isError &&
                <Alert
                    message="Incorrect email or password!"
                    showIcon
                    className="mb-2"
                    type="error"
                    closable
                />
            }
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel className="text-[18px]">E-mail</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="@gmail.com" autoComplete="true" />
                            </FormControl>
                            <FormMessage />
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
                                <Input {...field} placeholder="***********" type="password" autoComplete="true" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" variant="b2bit" className="h-[54px]" >
                    {isPending ? <LoadingSpinner /> : "Sign In"}
                </Button>
            </form>
        </Form>
    )
}
