"use client";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CustomAlert from "../_components/customAlert";

interface Installment {
  quantity: number;
  price: number;
  cashback?: number;
  total?: number;
}

interface PaymentOption {
  type: string;
  installments: Installment[];
}

const paymentOptions: PaymentOption[] = [
  {
    type: "Pix",
    installments: [{ quantity: 1, price: 30500, cashback: 300 }],
  },
  {
    type: "Pix Parcelado",
    installments: [
      { quantity: 2, price: 15300, total: 30600 },
      { quantity: 3, price: 10196.66, total: 30620 },
      { quantity: 4, price: 7725, total: 30900 },
      { quantity: 5, price: 6300, total: 31500 },
      { quantity: 6, price: 5283.33, total: 31699.98 },
      { quantity: 7, price: 4542.85, total: 31800 },
    ],
  },
];

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState<Installment | null>(
    null
  );

  const handleSelect = (installment: Installment) => {
    setSelectedOption(installment);
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="p-4">
      {paymentOptions.map((option) => (
        <div key={option.type} className="mb-9 relative">
          <h3 className="text-lg font-extrabold bg-secondary w-fit px-5 rounded-full absolute -top-4 left-4 z-10 text-secondary">
            {option.type}
          </h3>
          <div className={` border-base200 `}>
            {option.installments.map((installment, index) => (
              <div
                key={index}
                className={`p-5 ${
                  selectedOption === installment
                    ? "border-primary bg-primaryTransparent border-2"
                    : `border-base200 border`
                } ${installment.quantity === 2 ? "rounded-t-xl" : ""} ${
                  installment.quantity === 7 ? "rounded-b-xl" : ""
                } ${option.type === "Pix" ? "rounded-xl" : ""}`}
                onClick={() => handleSelect(installment)}
              >
                <div className="items-center flex justify-between">
                  <p className="text-secondary text-2xl">
                    <span className="font-extrabold">
                      {installment.quantity}x{" "}
                    </span>
                    {formatCurrency(installment.price)}
                  </p>

                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={selectedOption === installment}
                    sx={{
                      color: "var(--secondary)",
                      "&.Mui-checked": {
                        color: "var(--primary)",
                      },
                    }}
                  />
                </div>
                {option.type === "Pix" && (
                  <p className="text-primary">
                    Ganhe <span className="font-extrabold">3%</span> de Cashback
                  </p>
                )}
                {installment.cashback && (
                  <CustomAlert
                    emoji="&#129297;"
                    cashback={formatCurrency(installment.cashback)}
                    text={"de volta no seu Pix na hora"}
                  />
                )}

                {installment.total && (
                  <p className="text-light pb-2">
                    Total: {formatCurrency(installment.total)}
                  </p>
                )}
                {installment.quantity === 4 && (
                  <CustomAlert
                    cashback="-3% de juros:"
                    text={"Melhor opção de parcelamento"}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedOption && (
        <div className="absolute right-9">
          <IconButton
            aria-label="arrow rigth"
            sx={{
              color: "var(--primary)",
            }}
          >
            <ArrowCircleRightOutlinedIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
