import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormsLogin } from "@/components/Login/FormsLogin";
import b2bit from "@/assets/b2bit.png";

export function CardLogin() {
    return (
        <Card className="w-[440px] shadow-2xl">
            <CardHeader>
                <div className="flex justify-center items-center">
                    <img src={b2bit} alt="b2bit" className="w-[290px]" />
                </div>
            </CardHeader>
            <CardContent>
                <FormsLogin />
            </CardContent>
        </Card>
    )
}