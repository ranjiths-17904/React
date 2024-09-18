// import image from '../assets/img/photo3.jpg'

const Login = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-pink-700  hover:bg-blue-600 " >
      {/* <img src={image} className=" h-[100%] w-[100%] " ></img> */}
      <div className="h-5/6 w-[30%] flex flex-col justify-center items-center bg-white rounded-md drop-shadow-2xl">
      <h1 className='text-lg subpixel-antialiased font-sans font-semibold'>LOGIN</h1>
      <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
      <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:bg-gray-500 rounded-md" />
            <input type="text" name="" id="" placeholder="Email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:bg-gray-500 rounded-md" />
            <input type="number" name="" id="" placeholder="Phone" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:bg-gray-500 rounded-md" />
            <input type="password" name="" id="" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:bg-gray-500 rounded-md" />
            <button type="submit" className="w-full bg-pink-700 text-white p-3 rounded-2xl  hover:bg-blue-600 shadow-md font-serif"> LOGIN</button>
          </form>
      </div>
    </div>
  )
}

export default Login
