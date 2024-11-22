import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-12 bg-gray-100 min-h-[calc(100vh-296px)] flex items-center">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            We love to hear from you! Reach out to us for any inquiries or
            support.
          </p>
        </div>

        {/* Contact Info and Form Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-primary text-xl mr-3" />
                <span className="text-gray-700">
                  123 Main Street, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary text-xl mr-3" />
                <span className="text-gray-700">+880 123 456 789</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary text-xl mr-3" />
                <span className="text-gray-700">support@vocabvantage.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-14">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
