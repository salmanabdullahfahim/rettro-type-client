import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

const FilterByPriceProduct = ({ onFilterChange }: any) => {
  const [filterPrice, setFilterPrice] = useState("");

  const handleFilterChange = (value: string) => {
    setFilterPrice(value);

    onFilterChange(value);
  };

  return (
    <Select onValueChange={handleFilterChange} value={filterPrice}>
      <SelectTrigger className="flex gap-1 items-center mt-3 mx-3 border-gray-400 border px-3 py-2 text-sm rounded-lg">
        <SelectValue placeholder="Price Range" />
      </SelectTrigger>
      <SelectContent className="w-44">
        <SelectGroup>
          <SelectItem value="10-100">$10-$100</SelectItem>
          <SelectItem value="100-500">$100-$500</SelectItem>
          <SelectItem value="500-1000">$500-$1000</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByPriceProduct;
