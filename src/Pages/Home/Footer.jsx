import { Link } from "react-router-dom";
import FooterListIcons from "../../components/fragments/Home/FooterListIcons";

const Footer = () => {
  return (
    <div className="container px-10">
      <div className="flex-col w-full text-center flexbox-center">
        <h2 className="text=[14px] text-[#707070]">
          Copyright © 2016 Your Company | Design:{" "}
          <Link className="text-[#337AB7] hover:opacity-100 cursor-pointer">
            Templatemo
          </Link>
        </h2>
        <FooterListIcons/>
      </div>
    </div>
  );
};

export default Footer;
