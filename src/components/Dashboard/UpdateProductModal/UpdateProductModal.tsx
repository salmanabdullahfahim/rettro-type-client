import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdEdit } from "react-icons/md";
import { TProduct } from "../AllProducts/AllProducts";
import { useUpdateProductMutation } from "@/redux/api/api";
import { toast } from "sonner";

type FormData = {
  name: string;
  brand: string;
  price: number;
  description: string;
  availableQuantity: number;
  rating: number;
  image: string;
};

export function UpdateProductModal({ product }: { product: TProduct }) {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: product.name,
      brand: product.brand,
      price: product.price,
      description: product.description,
      availableQuantity: product.availableQuantity,
      rating: product.rating,
      image: product.image,
    },
  });

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await updateProduct({ id: product._id, data }).unwrap();
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
      toast.error(error?.data?.errorSources[0]?.message, {
        duration: 1500,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="ml-4 bg-blue-500 hover:bg-blue-600 rounded-lg p-1"
        >
          <MdEdit size={22} className="text-white" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-xl">
        <DialogHeader>
          <DialogTitle>Update {product.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Input
              id="brand"
              {...register("brand", { required: "Brand is required" })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="availableQuantity" className="text-right">
              Available Quantity
            </Label>
            <Input
              id="availableQuantity"
              type="number"
              {...register("availableQuantity", {
                required: "Available Quantity is required",
                valueAsNumber: true,
              })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              id="rating"
              type="number"
              step="0.01"
              {...register("rating", {
                required: "Rating is required",
                valueAsNumber: true,
              })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image URL
            </Label>
            <Input
              id="imageLink"
              {...register("image", { required: "Image URL is required" })}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
