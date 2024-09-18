import { useState } from "react"


const Contact = () => {
  const [visible, setvisible] = useState(false)
  return (
    <>
      { visible && (
          <>
          <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
          <div className="h-[40%] w-[30%] bg-red z-50 flex flex-col bg-white">
            <div className="w-full h-[20%] flex flex-row justify-center items-center border-2">
              Login
          </div>
          <div className="w-full h-[60%] flex flex-row justify-center items-center">
            Welcome
          </div>
          <div className="w-full h-[60%] flex flex-row justify-center items-center ">
            <button onClick={() => setvisible(!visible)}
            className="bg-blue-400 p-3 text-white w-1/2 h-full rounded-md">
            <button onClick={() => setvisible(!visible)} 
            className="bg-pink-400 p-3 text-white w-1/2 h-full rounded-md">
              Close
              </button>
              </button>
            </div>
          </div>
          </div>

          </>
        )
      }
      <div className="h-[80vh] w-screen flex justify-center -z-10">
      <button onClick={() => setvisible(true)} className="bg-blue-400 p-3 text-white w-1/2 h-full rounded-md"> Delete </button>

      </div>
      <h1>Contact</h1>
    </>
  )
}

export default Contact
