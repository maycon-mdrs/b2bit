import { Nav } from '@/components/Nav/Nav';
import { CardHome } from '@/components/Home/CardHome';
import setBodyColor from '@/setBodyColor';

export function HomePage() {
    setBodyColor({color: "#F1F5F9"})
    return (
        <>
            <Nav />
            <div className='flex flex-col mt-16 p-5 justify-center items-center'>
                <CardHome />
            </div>
        </>
    )
}
