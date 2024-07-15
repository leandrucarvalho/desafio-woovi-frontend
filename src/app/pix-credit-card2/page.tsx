"use client";

import DataCard from "../_components/dataCard";
import Header from "../_components/header";
import PaymentDetails from "../_components/paymentDetails";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const PixCreditCard2 = () => {
  return (
    <div className="px-5">
      <Header text={`João, pague o restante em 1x no cartão`} />
      <DataCard />
      <PaymentDetails
        date={"15/12/2021 - 08:17"}
        amount={"R$ 15.300,00"}
        total={"R$ 31.500,00"}
        identifier={"2c1b951f356c4680b13ba1c9fc889c47"}
        icon={<CheckCircleIcon sx={{ color: "var(--primary)" }} />}
        icon2={<RadioButtonUncheckedIcon sx={{ color: "var(--primary)" }} />}
      />
    </div>
  );
};

export default PixCreditCard2;
