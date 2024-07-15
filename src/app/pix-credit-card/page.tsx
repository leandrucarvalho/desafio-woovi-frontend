"use client";

import { Box } from "@mui/material";
import Header from "../_components/header";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
import React from "react";
import PaymentDetails from "../_components/paymentDetails";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const PixCreditCard = () => {
  return (
    <div className="flex items-center flex-col p-6 mb-5">
      <Header text={"João, pague a entrada de R$ 15.300,00 pelo Pix"} />
      <Box
        className="border-2 border-primary rounded-lg p-2 mb-5"
        width={332}
        height={332}
      >
        <Image width={332} height={332} src={"/qrcode.png"} alt={"qrcode"} />
      </Box>
      <div className="flex items-center flex-col text-center">
        <p className="bg-info px-5 py-1 rounded-lg text-base100 text-lg flex items-center gap-2 mb-5">
          Clique para copiar QR CODE <FaCopy />
        </p>
        <PaymentDetails
          date={"15/12/2021 - 08:17"}
          amount={"R$ 15.300,00"}
          total={"R$ 30.600,00"}
          identifier={"2c1b951f356c4680b13ba1c9fc889c47"}
          icon={<RadioButtonUncheckedIcon sx={{ color: "var(--primary)" }} />}
          icon2={
            <RadioButtonUncheckedIcon sx={{ color: "var(--secondary)" }} />
          }
        />
      </div>
    </div>
  );
};

export default PixCreditCard;
