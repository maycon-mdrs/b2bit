import { CardLogin } from '@/components/Login/CardLogin';
import setBodyColor from '@/setBodyColor';

export function LoginPage() {
    setBodyColor({color: "#FFFFFF"})
    return (
        <div className='flex justify-center items-center min-h-screen p-5'>
            <CardLogin />
        </div>
    )
}
