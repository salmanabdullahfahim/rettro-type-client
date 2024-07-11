/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useGetProductsQuery } from "@/redux/api/api";
import SingleCart from "@/components/SingleCart/SingleCart";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    // Check stock availability
    const outOfStockItems = cartItems.filter((cartItem) => {
      const product = products.data.find(
        (item: any) => item._id === cartItem._id
      );
      return product
        ? cartItem.availableQuantity > product.availableQuantity
        : true;
    });

    setIsButtonDisabled(outOfStockItems.length > 0);
  }, [cartItems, products, isLoading]);

  const handleProceedCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="md:px-12 w-full p-4 mt-12 mb-12  rounded-md ">
      <div>
        {cartItems.length > 0 && (
          <h2 className="text-3xl mb-7 font-bold text-center">
            My Product Cart - <span className=""> {cartItems.length}</span>
          </h2>
        )}

        {cartItems?.length > 0 ? (
          <div className="bg-gray-100  w-full h-full space-y-3 rounded-md p-[5px] ">
            <div className="bg-white rounded-md p-4  space-y-3  w-full h-full ">
              <Table className="">
                <TableHeader>
                  <TableRow className="rounded-lg">
                    <TableHead className="bg-gray-100 text-lg w-3/12 text-center">
                      Image
                    </TableHead>
                    <TableHead className="bg-gray-100 text-lg w-3/12  text-center">
                      Name
                    </TableHead>
                    <TableHead className="bg-gray-100 text-lg w-3/12 text-center">
                      Quantity
                    </TableHead>
                    <TableHead className="bg-gray-100 text-lg w-3/12 text-center">
                      Price
                    </TableHead>
                    <TableHead className="bg-gray-100 text-lg w-3/12 text-center">
                      Actions
                    </TableHead>
                    <TableHead className="bg-gray-100 text-lg w-3/12 text-center"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems?.length > 0 &&
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    cartItems?.map((cart: any) => <SingleCart cart={cart} />)}
                </TableBody>
              </Table>
            </div>
            <div>
              <h2 className=" text-end mx-12 text-lg font-medium">
                Total Price: ${totalOrderPrice.toFixed(2)}
              </h2>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
            <p className="border-[1px] border-darkText w-full p-2 text-center rounded-md">
              Your product cart is empty
            </p>
            <Link to="/products">
              <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-black/75 duration-200">
                Return to Shop
              </button>
            </Link>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-end mx-auto mt-8">
          <button
            onClick={handleProceedCheckout}
            className={`text-white text-sm font-semibold mx-auto rounded px-3 py-2 bg-black ${
              isButtonDisabled
                ? "opacity-50 bg-gray-300 cursor-not-allowed"
                : ""
            }`}
            disabled={isButtonDisabled ? true : false}
          >
            Proceed To Checkout{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
