import App from "@/App";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>HOme</div>,
      },
    ],
  },
]);

export default router;
