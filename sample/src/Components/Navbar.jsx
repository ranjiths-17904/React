      

const Navbar = () =>
    {
        return(
                <nav className='h-10 w-100 flex flex-row bg-pink-700'>
                   <div className="text-blue-200 font-extrabold">Portfolio</div>
                    <div className="flex">
                        <ul className="flex space-x-10">
                            <li className="text-blue-100 hover:outline">Home</li>
                            <li className="text-blue-100 hover:outline">About</li>
                            <li className="text-blue-100 hover:outline gap-11">Contact</li>
                        </ul>
                   </div>
                </nav>
        )
    }

export default Navbar