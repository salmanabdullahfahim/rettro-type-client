/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableCell, TableRow } from "@/components/ui/table";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";

export type TTodoCartProps = {
  cart: {
    _id: string;
    image: string;
    name: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number;
    description: string;
    cartQuantity: number;
  };
};

const SingleCart = ({ cart }: TTodoCartProps) => {
  console.log(cart);
  const dispatch = useAppDispatch();

  const handleDelete = (cartId: string) => {
    Swal.fire({
      title: "Remove from cart?",
      text: "Are you sure you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(cartId));
        Swal.fire(
          "Removed!",
          "The item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleIncrease = (cartId: string) => {
    dispatch(incrementQuantity(cartId));
  };

  const handleDecrease = (cartId: string) => {
    dispatch(decrementQuantity(cartId));
  };

  return (
    <TableRow key={cart._id}>
      <div className="flex justify-center">
        <TableCell className="text-center text-base">
          <img
            src={cart.image}
            alt={cart.name}
            className="w-24 h-30 object-cover rounded-2xl"
          />
        </TableCell>
      </div>
      <TableCell className="text-center text-base">{cart.name}</TableCell>

      <TableCell className="text-center text-base">
        {cart.cartQuantity}
      </TableCell>

      <TableCell className="text-center text-base">${cart.price}</TableCell>
      <TableCell className="text-center text-base">
        <div className="px-2 py-1 rounded-md flex items-center w-full  border border-darkText">
          <FaPlus
            onClick={() => handleIncrease(cart?._id)}
            className="text-darkText mx-2 text-sm cursor-pointer"
          />
          <div className="text-darkText  text-2xl">|</div>
          <FaMinus
            onClick={() => handleDecrease(cart?._id)}
            className="text-darkText mx-2  text-sm cursor-pointer"
          />
        </div>
      </TableCell>

      <TableCell className="text-center text-base">
        <button
          onClick={() => handleDelete(cart?._id)}
          className="bg-red-500 p-3 rounded-full"
        >
          <RxCross2 className="text-white text-lg" />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default SingleCart;
