import { Link,Outlet } from 'react-router-dom'


export function Home(){
    return (
        <div className="h-screen ">
      
        <div className="bg-[#cd8d8d86] flex px-24 h-[10%] items-center text-2xl">
          <div id="part1" className="w-2/4">
            <Link to={"/"}><h3>logo</h3></Link>
          </div>
          <div id="part2" className="flex w-2/4 justify-evenly items-center">
            <Link to={"/resume"}><h3>Resume</h3></Link>
            <Link to={"/project"}><h3>Project</h3></Link>
            <Link to={"/about"}><h3>About Us</h3></Link>
            <Link to={"/contact"}><h3>Contact</h3></Link>
          </div>
        </div>
        <Outlet/>
    </div>
    )
}
