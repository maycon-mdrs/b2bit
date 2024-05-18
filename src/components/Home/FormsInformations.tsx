import { Form, FormField, FormLabel, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { IProfile } from "@/interfaces/IProfile";

export function FormsInformations(props: IProfile) {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
        }
    });

    return (
        <Form {...form}>
            <form className="flex flex-col gap-6">
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
                                <Input defaultValue={props?.name} disabled />
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
                                <Input defaultValue={props?.email} disabled />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}