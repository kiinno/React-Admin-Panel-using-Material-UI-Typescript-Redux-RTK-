import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/admin/Index";
import Bar from "./pages/admin/Bar";
import Calender from "./pages/admin/Calender";
import Contacts from "./pages/admin/Contacts";
import FAQ from "./pages/admin/FAQ";
import Form from "./pages/admin/Form";
import Geography from "./pages/admin/Geography";
import Invoices from "./pages/admin/Invoices";
import Line from "./pages/admin/Line";
import Pie from "./pages/admin/Pie";
import Team from "./pages/admin/Team";
import Layout from "./pages/admin/Layout";
import Error from "./pages/admin/Error";
const routerMap = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Index /> }, //
      { path: "bar", element: <Bar /> }, //
      { path: "line", element: <Line /> },
      { path: "pie", element: <Pie /> },
      { path: "geography", element: <Geography /> },
      { path: "calender", element: <Calender /> },
      { path: "invoices", element: <Invoices /> },
      { path: "form", element: <Form /> },
      { path: "faq", element: <FAQ /> },
      { path: "contacts", element: <Contacts /> },
      { path: "team", element: <Team /> },
    ],
  },
]);

export default routerMap;
