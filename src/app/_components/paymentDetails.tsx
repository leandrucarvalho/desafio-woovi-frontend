import { Stepper, Step, StepLabel, Divider } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";

interface PaymentDetailsProps {
  date: string;
  amount: string;
  total: string;
  identifier: string;
  icon: React.ReactNode;
  icon2: React.ReactNode;
}
const steps = [{ label: "1ª entrada no Pix" }, { label: "2ª no cartão" }];

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  date,
  amount,
  total,
  identifier,
  icon,
  icon2,
}) => {
  return (
    <div className="text-center">
      <p className="text-light">Prazo de pagamento:</p>
      <p className="font-extrabold text-secondary mb-5">{date}</p>
      <div className="flex items-center justify-between gap-36 text-lg mb-5">
        <Stepper activeStep={0} orientation="vertical">
          {steps.map((step) => (
            <Step key={step.label} sx={{ padding: "0px" }}>
              <StepLabel
                StepIconComponent={(props) => (props.active ? icon : icon2)}
                sx={{
                  "& .MuiStepLabel-label": {
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                    color: "var(--secondary)",
                  },
                }}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="text-nowrap flex flex-col gap-9 font-extrabold text-secondary">
          <span>{amount}</span>
          <span>{amount}</span>
        </div>
      </div>
      <Divider sx={{ borderBottomWidth: 2, marginBottom: 2 }} />
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm">CET: 0,5%</p>
        <p className="text-lg">Total: {total}</p>
      </div>
      <Divider sx={{ borderBottomWidth: 2, marginBottom: 2 }} />
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-extrabold">Como funciona?</p>
        <p className="text-lg">
          <ExpandLess />
        </p>
      </div>
      <Divider sx={{ borderBottomWidth: 2, marginBottom: 2 }} />
      <div className="flex flex-col items-center text-sm">
        <p className="text-light">Identificador:</p>
        <p className="font-extrabold">{identifier}</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
