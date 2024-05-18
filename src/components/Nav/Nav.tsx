import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthProvider/useAuth';

export function Nav() {
    const auth = useAuth();
    const confirmLogout = () => {
        auth.logout();
    };

    /* 
        sticky top-0 z-10
    */
    return (
        <nav className='h-max max-w-full flex justify-end items-center p-4 bg-white text-white'>
            <Button onClick={confirmLogout} variant="b2bit" className='w-64 text-[16px]'>
                Logout
            </Button>
        </nav>
    )
}