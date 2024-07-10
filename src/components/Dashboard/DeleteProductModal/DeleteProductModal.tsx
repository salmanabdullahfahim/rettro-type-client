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

export function DeleteProductModal({ id }: { id: string }) {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteProduct(id).unwrap();
      if (res?.success) {
        toast.success(res?.message);
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
          <DialogTitle>Delete This Product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this product?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
