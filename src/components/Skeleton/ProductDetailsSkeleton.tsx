import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailsSkeleton() {
  return (
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <Skeleton className="h-[300px] w-full rounded-lg object-cover md:h-[300px] lg:h-full" />
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <Skeleton className="h-6 w-3/4 md:h-8 xl:h-10" />
                <Skeleton className="mt-4 h-5 w-1/2" />
              </div>
              <div className="pt-0.5">
                <Skeleton className="mb-3 h-4 w-1/3" />
                <Skeleton className="mb-2 h-4 w-1/3" />
              </div>
              <div className="pb-2" />
              <div className="pt-3 xl:pt-8">
                <Skeleton className="mb-3 h-5 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-3/4" />
              </div>
              <div className="flex items-center mb-2 gap-1 my-4">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
