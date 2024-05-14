import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { FormsInformations } from "@/components/Home/FormsInformations";

export function CardHome() {
    const [avatar, setAvatar] = useState("https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_0spsnuL.jpg");
    return (
        <Card className="w-[440px] shadow-2xl">
            <CardHeader className="flex flex-col justify-center items-center gap-2">
                <CardTitle className="text-center">Profile picture</CardTitle>
                <div className="w-[75px] h-[75px]">
                    <img src={avatar} alt="" className="fit-content rounded-xl" />
                </div>
            </CardHeader>
            <CardContent>
                <FormsInformations />
            </CardContent>
        </Card>
    )
}