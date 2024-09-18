      

const Navbar = () =>
    {
        return(
        <nav className='h-16 w-full flex flex-row items-center bg-pink-800 px-6'>
        <div className="text-blue-200 font-bold text-lg">Portfolio</div>
        <div className="flex flex-grow justify-end">
            <ul className="flex space-x-8">
                <li className="text-blue-100 font-medium hover:text-white cursor-pointer active:outline-none focus:border-b-10  hover:bg-blue-400">Home</li>
                <li className="text-blue-100 font-medium hover:text-white cursor-pointer">About</li>
                <li className="text-blue-100 font-medium hover:text-white cursor-pointer">Contact</li>
            </ul>
        </div>
</nav>

        )
    }

export default Navbar