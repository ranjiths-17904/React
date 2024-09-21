

const Contactm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="container mx-auto p-6 md:flex md:justify-between md:items-start space-y-6 md:space-y-0">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Get In Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>

      
        {/* <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 space-y-4"> */}
      </div>
    </div>
  );
};

export default Contactm;
