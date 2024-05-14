import { Nav } from '@/components/Home/Nav'
import { CardHome } from '@/components/Home/CardHome'

export function HomePage() {
    return (
        <div className='flex flex-col h-scren'>
            <Nav />
            <div className=''>
                <CardHome />
            </div>
        </div>
    )
}