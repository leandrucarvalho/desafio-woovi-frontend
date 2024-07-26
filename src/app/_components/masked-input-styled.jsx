import React from "react";
import { IMaskInput } from "react-imask";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const MaskedInputStyled = styled(IMaskInput)({
  '& input': {
    fontSize: '18px',
    padding: '10.5px 14px',
    borderRadius: '4px',
    border: '2px solid',
    borderColor: 'var(--base-200)',
    color: 'var(--secondary)',
  },
  '& input:focus': {
    borderColor: 'var(--primary)',
  },
  '& label': {
    color: 'var(--secondary)',
  },
  '& label.Mui-focused': {
    color: 'var(--primary)',
  },
});

const MaskedTextField = ({ mask, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: MaskedInputStyled,
        inputProps: { mask },
      }}
    />
  );
};

export default MaskedTextField;
