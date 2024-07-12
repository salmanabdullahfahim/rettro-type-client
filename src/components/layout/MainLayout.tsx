import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAppSelector } from "@/redux/hooks";
import useUnloadWarning from "@/hooks/useUnloadWarning";

const MainLayout = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  // Use the hook only if there are items in the cart and reload the page
  useUnloadWarning(
    cartItems.length > 0
      ? "Are you sure you want to leave? Your cart data will be lost."
      : null
  );
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
