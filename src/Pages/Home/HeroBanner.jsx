
const HeroBanner = () => {
  return (
    <section>
          <div className="bg-[url('/public/assets/img/bg/banner.jpg')] bg-cover bg-center">
            <div className="bg-black/60">
              <div className="container px-10">
                <div className="flex-col w-full h-screen text-center flexbox-center">
                  <h3 className="text-[24px] text-[#FFFFFF] font-semibold">
                    July 22 - 26 in San Francisco, CA
                  </h3>
                  <h2 className="text-[40px] font-semibold text-[#FFFFFF] mb-[42px]">
                    Web Design Conference
                  </h2>
                  <div className="flex gap-x-[12px]">
                    <button className="hidden md:block text-[12px] text-[#FFFFFF] border-2 px-[42px] py-[14px] hover:bg-[#FFFFFF] font-medium hover:text-[#000000] transition-global">
                      LEARN MORE
                    </button>
                    <button className="bg-[#F2545F] text-[12px] text-[#FFFFFF] px-[42px] border-2 border-[#F2545F] py-[14px] font-medium hover:border-[#FFFFFF] hover:bg-transparent transition-global">
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroBanner
