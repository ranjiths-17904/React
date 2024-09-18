import {Link} from 'react-router-dom';      

const Navbar = () =>
    {
        return(
        <nav className='h-12 w-88 flex flex-row items-center bg-pink-700 px-6 m-3 rounded-md shadow-xl'>
        <div className="text-gray-300 font-bold text-lg">Portfolio</div>
        <div className="flex flex-grow justify-end">
            <ul className="flex space-x-8">
                <Link to = {'/Login'}>
                <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer">Home</li>
                </Link>
                <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer">About</li>
                <Link to = {'/Contact'}>
                <li className="text-blue-100 font-medium hover:text-gray-800 cursor-pointer">Contact</li>
                </Link>
            </ul>
        </div>
</nav>

        )
    }

export default Navbar