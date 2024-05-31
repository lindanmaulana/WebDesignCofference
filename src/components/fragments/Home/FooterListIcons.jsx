import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import FooterList from "../../elements/FooterList";


const FooterListIcons = () => {
  return (
    <div className="flex gap-x-[5px]">
      <FooterList>
        <FaFacebookF className="self-center text-[#707070] group-hover:text-[#FFFFFF]" />
      </FooterList>
      <FooterList>
        <FaTwitter className="self-center text-[#707070] group-hover:text-[#FFFFFF]" />
      </FooterList>
      <FooterList>
        <FaInstagram className="self-center text-[#707070] group-hover:text-[#FFFFFF]" />
      </FooterList>
      <FooterList>
        <FaWhatsapp className="self-center text-[#707070] group-hover:text-[#FFFFFF]" />
      </FooterList>
    </div>
  );
};

export default FooterListIcons;
