export default function Contact() {
    return (
    
        <section className="bg-gradient-to-r from-purple-900 to-pink-400 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-900 to-pink-400 text-white py-3 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  