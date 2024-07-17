"use client";

import { Box } from "@mui/material";
import Header from "../_components/header";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
import React, { useState } from "react";
import PaymentDetails from "../_components/paymentDetails";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useRouter } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CustomizedButtons from "../_components/customButton";
import Snackbar from "@mui/material/Snackbar";

const PixCreditCard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (agree: boolean) => {
    setOpenDialog(false);
    if (agree) {
      router.push("/pix-credit-card2");
    }
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCopyClick = () => {
    handleOpenDialog();
    handleOpenSnackbar();
  };
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
        <p
          onClick={() => handleCopyClick()}
          className="bg-info px-5 py-1 rounded-lg text-base100 text-lg flex items-center gap-2 mb-5"
        >
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
      <Dialog
        open={openDialog}
        onClose={() => handleCloseDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja continuar para etapa final?"}
        </DialogTitle>

        <DialogActions>
          <CustomizedButtons
            onClick={() => handleCloseDialog(false)}
            text={"Cancelar"}
          />

          <CustomizedButtons
            text={"Continuar"}
            onClick={() => handleCloseDialog(true)}
          />
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message="QR CODE Copiado com sucesso"
      />
    </div>
  );
};

export default PixCreditCard;
