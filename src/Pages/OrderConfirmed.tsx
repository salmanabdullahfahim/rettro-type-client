import { FaCheck } from "react-icons/fa";

const OrderConfirmed = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="flex justify-center items-center flex-col mt-24">
        <div className="flex justify-center items-center bg-headerText rounded-full w-32 h-32">
          <FaCheck className="text-white  text-4xl" />
        </div>
        <h2 className="text-xl font-medium mt-2">
          Your order has been confirmed!
        </h2>
      </div>
    </div>
  );
};

export default OrderConfirmed;
