const SectionLayouts = (props) => {
  const { flexLayouts, children } = props;
  return (
    <section className="py-[100px]">
        <div className="container lg:px-10">
          <div className={`flex w-full ${flexLayouts}`}>{children}</div>
        </div>
    </section>
  );
};

export default SectionLayouts;
