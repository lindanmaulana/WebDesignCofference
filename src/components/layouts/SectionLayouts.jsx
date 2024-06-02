import { forwardRef } from "react";

const SectionLayouts = forwardRef((props, ref) => {
  const { flexLayouts, children } = props;
  return (
    <section className="py-[100px]" ref={ref}>
        <div className="container lg:px-10">
          <div className={`flex w-full ${flexLayouts}`}>{children}</div>
        </div>
    </section>
  );
});

SectionLayouts.displayName = "SectionLayouts"
export default SectionLayouts;
