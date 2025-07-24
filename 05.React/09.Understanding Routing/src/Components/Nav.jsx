import { Outlet , Link } from "react-router-dom"

export function Nav(){
    return (
        <>
            <div key="nav" className='flex bg-blue-300 h-[15%] justify-center items-center'>
                <div id="part1" className='w-[25%] flex justify-center text-2xl'>
                    <Link to="/"><h3 className='cursor-pointer'>Logo</h3></Link>
                </div>
                <div id="part2" className='flex w-[75%] justify-end text-2xl'>
                    <Link to="/resume"><h3 className='mr-24 cursor-pointer'>Resume</h3></Link>
                    <Link to="/projects"><h3 className='mr-24 cursor-pointer'>Projects</h3></Link>
                    <Link to="/about"><h3 className='mr-24 cursor-pointer'>About</h3></Link>
                    <Link to="/contact"><h3 className='mr-24 cursor-pointer'>Contact</h3></Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}