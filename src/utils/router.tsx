import AppLayout from "@/components/Layout";
import { createBrowserRouter, Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen flex items-center justify-center">
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    ),
  },
  {
    Component: AppLayout,
    children: [
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
    ],
  },
]);
