import { BarChart, FolderKanban, DiamondPlus } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-1/5 flex-col  border-r bg-[#242424] px-5 py-8 sticky top-0 left-0">
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="" className="w-24 h-24" />
        <span className=" text-xl font-bold text-white italic">
          Rettro Type
        </span>
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              analytics
            </label>
            <NavLink
              className={({ isActive }) =>
                `flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700 ${
                  isActive ? "bg-gray-50 text-gray-700" : ""
                }`
              }
              to="/dashboard"
              end
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </NavLink>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              content
            </label>
            <NavLink
              className={({ isActive }) =>
                `flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700 ${
                  isActive ? "bg-gray-50 text-gray-700" : ""
                }`
              }
              to="/dashboard/all-products"
            >
              <FolderKanban className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">All Products</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700 ${
                  isActive ? "bg-gray-50 text-gray-700" : ""
                }`
              }
              to="/dashboard/add-product"
            >
              <DiamondPlus className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Add Product</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  );
}
