import { VerifiedUserOutlined } from "@mui/icons-material";
import { Icon } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-1 text-light fixed bottom-8">
      <Icon component={VerifiedUserOutlined} color="disabled" />{" "}
      <p>Pagamento 100% seguro via:</p>
      <Image width={57} height={18} src="/logo2.png" alt="Woovi Logo" />
    </div>
  );
};

export default Footer;
