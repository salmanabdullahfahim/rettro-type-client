import { Skeleton } from "@/components/ui/skeleton";

function SkeletonTable() {
  const rows = Array.from({ length: 5 }).map((_, index) => (
    <tr key={index}>
      <td className="whitespace-nowrap px-4 py-4">
        <Skeleton className="h-10 w-10 rounded-md" />
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <Skeleton className="h-6 w-24" />
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <Skeleton className="h-6 w-16" />
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <Skeleton className="h-6 w-16" />
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
        <Skeleton className="h-8 w-8 rounded-md inline-block mr-2" />
        <Skeleton className="h-8 w-8 rounded-md inline-block" />
      </td>
    </tr>
  ));

  return (
    <section className="mx-auto w-full max-w-4xl py-10">
      <div className="flex flex-col space-y-4 space-x-3 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <Skeleton className="h-6 w-32 md:h-8 md:w-48" />
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                    >
                      <Skeleton className="h-6 w-16" />
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                    >
                      <Skeleton className="h-6 w-24" />
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                    >
                      <Skeleton className="h-6 w-16" />
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                    >
                      <Skeleton className="h-6 w-16" />
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-middle text-md font-semibold text-gray-700"
                    >
                      <Skeleton className="h-6 w-16" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {rows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkeletonTable;
