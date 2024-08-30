const ContactUs = () => {
  return (
    <section className="pb-16">
      <div className=" mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#00A2E2] mb-8 italic">
          Contact Us
        </h2>
        <p className="text-center text-white mb-12 text-xl">
          Have any questions? We'd love to hear from you. Send us a message
          using the form below.
        </p>

        <div className=" bg-black p-8 rounded-lg shadow-lg">
          <form>
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2E2]"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2E2]"
                placeholder="Your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2E2]"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="flex  w-full justify-center  px-6 py-2 text-white bg-[#00A2E2] rounded-lg hover:bg-[#0077b6] focus:outline-none focus:ring-4 focus:ring-[#00A2E2]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
