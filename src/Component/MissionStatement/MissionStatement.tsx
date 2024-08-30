const MissionStatement = () => {
  return (
    <section className="py-16 ">
      <div className=" mx-auto px-6 text-center">
        <h2 className="text-4xl italic font-bold text-[#00A2E2] mb-4">
          Our Mission
        </h2>
        <p className="text-white mb-12 text-lg ">
          At [Your Company Name], our mission is to provide [specific service or
          product] that [describe the core value or impact you aim to achieve].
          We are committed to [mention commitment, e.g., quality, innovation,
          customer satisfaction], and we strive to [state your aspiration, e.g.,
          make a difference, lead the industry].
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-[#00A2E2] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Purpose</h3>
            <p>
              We aim to [describe your purpose, e.g., solve a problem, fulfill a
              need] by [briefly explain how you achieve this purpose].
            </p>
          </div>

          <div className="bg-[#00A2E2] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Values</h3>
            <p>
              Our core values include [mention key values, e.g., integrity,
              excellence, collaboration]. These guide us in everything we do.
            </p>
          </div>

          <div className="bg-[#00A2E2] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Commitment</h3>
            <p>
              We are dedicated to [state your commitment, e.g., delivering
              high-quality products, providing exceptional service] to our
              customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
