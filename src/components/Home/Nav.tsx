import { Button } from '@/components/ui/button';

export function Nav() {
    return (
        <nav className='flex justify-end items-center p-4 bg-white text-white'>
            <Button type='submit' variant="b2bit" className='w-64 text-[16px]'>
                Logout
            </Button>
        </nav>
    )
}