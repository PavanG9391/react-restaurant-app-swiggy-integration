import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        {/* Customer Service Message */}
        <p className="text-lg text-gray-700 text-center mb-8">
          We’re here to help you with any questions or concerns you may have.
          Please reach out to us using the form below, or feel free to call us
          directly.
        </p>

        {/* Contact Information */}
        <div className="text-center mb-8">
          <p className="text-gray-800 font-semibold">Phone: +1 234 567 890</p>
          <p className="text-gray-800 font-semibold">Email: support@foodapp.com</p>
          <p className="text-gray-800 font-semibold">Address: 123 Food Street, Flavor Town</p>
        </div>

        {/* Contact Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;