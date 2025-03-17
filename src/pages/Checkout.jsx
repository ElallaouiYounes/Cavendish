import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 my-12 mt-28">
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="lg:w-3/5 bg-white rounded-lg shadow-md p-2">
            <CheckoutForm onSubmit={onSubmit} />
          </div>
          <div className="lg:w-2/5">
            <OrderSummary />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
