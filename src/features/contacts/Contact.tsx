import React from 'react'

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 pt-16 pb-24 px-8">
    <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <form className="max-w-md mx-auto">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" className="px-4 py-2 border w-full mb-6 rounded-md" />
  
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" className="px-4 py-2 border w-full mb-6 rounded-md" />
  
        <label htmlFor="message" className="block font-medium text-gray-700 mb-2">Message</label>
        <textarea id="message" name="message" rows={6} className="px-4 py-2 border w-full mb-6 rounded-md"></textarea>
  
        <button type="submit" className="bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">Send</button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <p className="mb-4 text-lg"><i className="fas fa-map-marker-alt mr-2"></i>123 Main St, Anytown USA 12345</p>
        <p className="mb-4 text-lg"><i className="fas fa-phone-alt mr-2"></i>(123) 555-1234</p>
        <p className="mb-4 text-lg"><i className="fas fa-envelope mr-2"></i>info@levelup237.com</p>
        <div className="flex space-x-4">
          <a href="#" target="_blank" className="text-3xl text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"><i className="fab fa-facebook"></i></a>
          <a href="#" target="_blank" className="text-3xl text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"><i className="fab fa-twitter"></i></a>
          <a href="#" target="_blank" className="text-3xl text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Contact