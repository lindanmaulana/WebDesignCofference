const SectionLayouts = (props) => {
  const { flexLayouts, children } = props;
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container px-10">
          <div className={`flex w-full ${flexLayouts}`}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionLayouts;
