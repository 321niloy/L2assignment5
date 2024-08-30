const Milestone = () => {
  return (
    <div>
      <section className="py-16">
        <div className=" mx-auto px-6">
          <h2 className="text-4xl italic font-bold text-center text-[#00A2E2] mb-8">
            Our History & Milestones
          </h2>
          <div className="relative">
            <div className="border-l-2 border-[#00A2E2] absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-[#00A2E2] text-white flex items-center justify-center rounded-full">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-white">
                    Founding Year
                  </h3>
                  <p className="mt-2 text-white dark:text-gray-400">
                    In 2021, we embarked on a journey to revolutionize the
                    industry by offering innovative solutions and exceptional
                    service.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-[#00A2E2] text-white flex items-center justify-center rounded-full">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-white">
                    Major Milestone
                  </h3>
                  <p className="mt-2 text-white dark:text-gray-400">
                    In 2022, we reached a significant milestone by launching our
                    flagship product, which quickly gained market recognition
                    and acclaim.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-[#00A2E2] text-white flex items-center justify-center rounded-full">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-white">
                    Expansion
                  </h3>
                  <p className="mt-2 text-white dark:text-gray-400">
                    By 2023, we expanded our operations to new markets and
                    formed strategic partnerships that solidified our position
                    as an industry leader.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-[#00A2E2] text-white flex items-center justify-center rounded-full">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-white">
                    Recent Achievements
                  </h3>
                  <p className="mt-2 text-white dark:text-gray-400">
                    In 2024, we celebrated our latest achievements with the
                    launch of new initiatives and the expansion of our product
                    line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Milestone;
