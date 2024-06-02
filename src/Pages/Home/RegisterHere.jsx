
const RegisterHere = () => {
  
  return (
    <section className="bg-[url('/public/assets/img/bg/register.jpg')] bg-center bg-cover">
      <div className="bg-black/80 py-[140px]">
        <div className="container px-10">
          <div className="flex flex-col items-center justify-center w-full lg:flex-row">
            <div className="px-[15px] w-full lg:w-3/5">
              <h2 className="text-[30px] mt-[20px] mb-[10px] text-[#FFFFFF] font-semibold">
                REGISTER HERE
              </h2>
              <p className="text-[24px] mt-[20px] mb-[10px] pb-[12px] text-[#FFFFFF]">
                Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed
                pulvinar est sit amet tellus iaculis hendrerit.
              </p>
              <p className="text-[14px] mb-[10px] text-[#707070]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                aliquam erat volutpat. Lorem ipsum dolor sit amet consectetuer
                diam nonummy.
              </p>
            </div>
            <div className="px-[15px] w-full lg:flex-1">
              <form action="" className="flex flex-col gap-y-[16px]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-[12px] bg-transparent border-2 py-[6px] outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-[12px] bg-transparent border-2 py-[6px] outline-none"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="px-[12px] bg-transparent border-2 py-[6px] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-[12px] bg-transparent border-2 py-[6px] outline-none"
                />
                <button className="bg-[#F2545F] self-end py-[6px] px-[12px] rounded-[100px] mt-[12px] mb-[16px] tracking-[2px] min-w-[198px] h-[50px] text-[14px] text-[#FFFFFF]">
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterHere;
