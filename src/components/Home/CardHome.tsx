import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FormsInformations } from "@/components/Home/FormsInformations";
import { useLoginQuery } from "@/hooks/useLogin";
import { IProfile } from "@/interfaces/IProfile";

export function CardHome() {
    const { data } = useLoginQuery();
    const userData: IProfile = data;
    const avatar = userData?.avatar?.medium;
    const name = userData?.name.charAt(0).toUpperCase();

    return (
        <Card className="max-w-[440px] w-full sm:w-[440px] shadow-2xl">
            <CardHeader className="flex flex-col justify-center items-center gap-2">
                <CardTitle className="text-center">Profile picture</CardTitle>
                <Avatar className="w-[75px] h-[75px] rounded-2xl">
                    <AvatarImage src={avatar} alt={name} className="object-cover"/>
                    <AvatarFallback className="text-xl font-medium rounded-2xl">
                        {name}
                    </AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent>
                <FormsInformations {...userData} />
            </CardContent>
        </Card>
    )
}