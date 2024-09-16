
// import { Loader } from 'lucide-react'
import './App.css'

function App() {

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-pink-600">
        <div className="h-5/6 w-[30%] flex flex-col justify-center items-center bg-white rounded-md shadow-2xl">
        <h1>Form</h1>
          <form className="w-[80%] h-[100%] flex flex-col justify-center items-center gap-4">
            <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[#987585] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-pink-500 rounded-md" />
            <input type="text" name="" id="" placeholder="email" className="p-3 bg-[#987585] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-pink-500 rounded-md" />
            <input type="number" name="" id="" placeholder="phone" className="p-3 bg-[#987585] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-pink-500 rounded-md" />
            <input type="password" name="" id="" placeholder="password" className="p-3 bg-[#987585] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-pink-500 rounded-md" />
            <button type="submit" className="w-full bg-pink-600 text-white p-3 rounded-md justify-center items-center">  Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
