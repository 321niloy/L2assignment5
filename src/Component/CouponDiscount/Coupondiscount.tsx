const CouponDiscount = () => {
  return (
    <div>
      <section className="py-16 ">
        <div className=" mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#00A2E2] mb-6 italic">
            Coupons & Discounts
          </h2>
          <p className="text-center text-white mb-12">
            Don't miss out on our exclusive discounts! Apply these coupon codes
            at checkout to save big.
          </p>

          {/* Promotions Section */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Summer Sale - 20% Off
              </h3>
              <p className="text-gray-600 mb-4">
                Use code{" "}
                <span className="font-bold text-[#00A2E2]">SUMMER20</span> at
                checkout.
              </p>
              <p className="text-gray-500">
                Valid until: <span className="font-bold">August 31, 2024</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                New Customers - 10% Off
              </h3>
              <p className="text-gray-600 mb-4">
                Use code{" "}
                <span className="font-bold text-[#00A2E2]">WELCOME10</span> on
                your first purchase.
              </p>
              <p className="text-gray-500">
                Valid until:{" "}
                <span className="font-bold">December 31, 2024</span>
              </p>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-[#00A2E2] mb-4">
              How to Apply Coupons
            </h3>
            <p className="text-white">
              1. Choose your products and add them to your cart.
              <br />
              2. Proceed to checkout.
              <br />
              3. Enter the coupon code in the "Promo Code" box.
              <br />
              4. Click "Apply" to see your discount!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CouponDiscount;
