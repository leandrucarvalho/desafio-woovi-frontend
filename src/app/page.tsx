import Header from "./_components/header";
import PaymentMethod from "./payment-method/page";
import PixCreditCard2 from "./pix-credit-card2/page";

const Home = () => {
  return (
    <>
      <Header text="João, como você quer pagar?"></Header>
      <PaymentMethod />
    </>
  );
};

export default Home;
