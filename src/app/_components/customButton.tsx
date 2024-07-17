import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface Props {
  text: string;
  onClick?: () => void;
}

const BootstrapButton = styled(Button)({
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.4)",
  textTransform: "none",
  fontSize: 18,
  border: "1px solid",
  borderRadius: 8,
  lineHeight: 1.5,
  backgroundColor: "var(--info)",
  borderColor: "#000000",
  width: "100%",
  "&:hover": {
    backgroundColor: "var(--info)",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  marginBottom: 20,
});

export default function CustomizedButtons({ text, onClick }: Props) {
  return (
    <BootstrapButton onClick={onClick} variant="contained" disableRipple>
      {text}
    </BootstrapButton>
  );
}
