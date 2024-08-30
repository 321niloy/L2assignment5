
const ContactInformation = () => {
  return (
    <section className="pb-16">
      <div className=" mx-auto px-6">
        <h2 className="text-4xl italic font-bold text-center text-[#00A2E2] mb-8">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#00A2E2] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">
              Office Address
            </h3>
            <p className="text-white dark:text-gray-400">
              123 Business Avenue, Suite 400
              <br />
              Business City, BC 12345
              <br />
              Country
            </p>
          </div>
          <div className="bg-[#00A2E2] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">
              Phone Number
            </h3>
            <p className="text-white dark:text-gray-400">
              <a href="tel:+1234567890" className="text-white">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          <div className="bg-[#00A2E2] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">
              Email
            </h3>
            <p className="text-white dark:text-gray-400">
              <a href="mailto:info@yourcompany.com" className="text-white">
                info@yourcompany.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
