import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import CustomizedButtons from "./customButton";
import MaskedTextField from "./masked-input-styled";

import React from "react";

const DataCard = () => {
  const [parcel, setParcel] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setParcel(event.target.value as string);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiOutlinedInput-root": {
          fontSize: 18,
          color: "var(--secondary)",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "var(--primary)",
          },
        "& .MuiInputBase-input": { color: "var(--secondary)" },
        "& .MuiInputLabel-root": { color: "var(--secondary)" },
        "& .MuiInputLabel-root.Mui-focused": { color: "var(--primary)" },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "2px solid",
          borderColor: "var(--base-200)",
        },
        "& .MuiSelect-select": { color: "var(--secondary)", fontSize: 18 },
      }}
    >
      <div className="flex flex-col space-y-7 mb-5">
        <TextField
          fullWidth
          id="outlined-name"
          label="Nome Completo"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <MaskedTextField
          fullWidth
          id="outlined-cpf-input"
          label="CPF"
          mask="000.000.000-00"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <MaskedTextField
          fullWidth
          id="outlined-number"
          label="Número do cartão"
          mask="0000 0000 0000 0000"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className="flex gap-4">
          <MaskedTextField
            id="outlined-search"
            label="Vencimento"
            mask="00/0000"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <MaskedTextField
            id="outlined-helperText"
            label="CVV"
            mask="000"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <FormControl className="">
          <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={parcel}
            label="Parcelas"
            onChange={handleChange}
          >
            <MenuItem value={1}>1x de R$ 15.300,00</MenuItem>
            <MenuItem value={2}>2x de R$ 10.196,66</MenuItem>
            <MenuItem value={3}>3x de R$ 7.725,00</MenuItem>
          </Select>
        </FormControl>
      </div>
      <CustomizedButtons text={"Pagar"} />
    </Box>
  );
};

export default DataCard;
