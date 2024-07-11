import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteProductMutation } from "@/redux/api/api";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import { TProduct } from "../AllProducts/AllProducts";

export function DeleteProductModal({ product }: { product: TProduct }) {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteProduct(id).unwrap();
      if (res?.success) {
        toast.success(res?.message, {
          duration: 1500,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="ml-4 bg-red-500 hover:bg-red-600 rounded-lg p-1"
        >
          <MdDelete size={22} className="text-white" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete {product.name}</DialogTitle>
          <DialogDescription>
            Are you sure to delete this product?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => handleDelete(product._id)}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
