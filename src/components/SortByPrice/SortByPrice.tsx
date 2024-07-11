import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SortByPrice({
  setSort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Select onValueChange={setSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Price" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By Price</SelectLabel>
          <SelectItem value="-price">High to Low</SelectItem>
          <SelectItem value="price">Low to High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
