import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FormsLogin } from "@/components/Login/FormsLogin"

export function CardLogin() {
    return (
        <Card className="w-[440px] shadow-2xl">
            <CardHeader>
                <CardTitle>b2bit</CardTitle>
            </CardHeader>
            <CardContent>
                <FormsLogin />
            </CardContent>
        </Card>
    )
}