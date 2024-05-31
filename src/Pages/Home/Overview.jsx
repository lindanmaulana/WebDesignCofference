import OverviewImg from "../../components/fragments/Home/Overview/OverviewImg";
import OverviewText from "../../components/fragments/Home/Overview/OverviewText";
import SectionLayouts from "../../components/layouts/SectionLayouts";

const Overview = () => {
  return (
    <SectionLayouts flexLayouts="flex-row">
      <OverviewText />
      <OverviewImg />
    </SectionLayouts>
  );
};

export default Overview;

// <section className="py-[140px]">
//   <div className="container px-10">
//     <div className="flex w-full">
//       <OverviewText/>
//       <div className="w-1/2 px-4">
//         <img
//           src="/src/assets/img/banner/conferences.jpg"
//           alt="Confferences"
//           className="w-full h-full pb-[32px]"
//         />
//       </div>
//     </div>
//   </div>
// </section>
