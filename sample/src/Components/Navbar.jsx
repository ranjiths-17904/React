import {Link} from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';      

const Navbar = () =>
    {
        return(
        <nav className='h-12 w-88 flex flex-row items-center bg-pink-700 px-6 m-3 rounded-md shadow-xl'>
        <div className="text-gray-300 font-bold  text-lg">Portfolio</div>
        <div className="flex flex-grow justify-end">
            <ul className="flex space-x-8">
                <Link to = {'/Profile'}>
                <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">Home</li>
                </Link>
                <Link to = {'/About'}>
                <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">About</li>
                </Link>
                <Link to = {'/Skills'}>
                <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer  hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">Skills</li>
                </Link>
                <Link to = {'/Contactm'}>
                <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer  hover:bg-sky-600 p-2 rounded-sm pl-3 pr-3">Contact</li>
                </Link>
                <CircleUserRound className= 'text-blue-100 font-medium hover:text-gray-800 cursor-pointer h-[100%] w-[100%] hover:bg-sky-600 p-2 pl-5 pr-5 rounded-md justify-center items-center'/>
            </ul>
        </div>
</nav>

        )
    }

export default Navbar