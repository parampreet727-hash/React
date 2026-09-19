// import React, { Suspense } from "react";
// import { UserProvider } from "./UserContext";
// import Parent from "./contextComponent/Parent";
// import DerviedState from "./component/DerviedState";
// import ReactPropsChildern from "./component/ReactPropsChildern";
// import ObjectUseState from "./component/ObjectUseState";
// import UseMemo from "./component/UseMemo";
// import ReactMemo from "./component/ReactMemo";
// import FrowardRef from "./component/FrowardRef";
// import FunctionAsProps from "./component/FunctionAsProps";
// import BootStrap from './component/BootStrap'
// import UseEffectProps from './component/UseEffectProps'
// import UseEffects from './component/UseEffects'
// import FilterMap from './component/FilterMap'
// import Map from './component/Map'

import Api from "./api/Api";

// import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./routes/lazyLoading/Home";
// import LocationInfo from "./routes/lazyLoading/LocationInfo";
// import Product from "./routes/lazyLoading/Product";

// const Home = React.lazy(() => import("./routes/lazyLoading/Home"));
// const LocationInfo = React.lazy(
//   () => import("./routes/lazyLoading/LocationInfo"),
// );
// const Product = React.lazy(() => import("./routes/lazyLoading/Product"));

// import Login from "./routes/pages/Login";
// import Dashboard from "./routes/pages/Dashboard";
// import Home from "./routes/pages/Home";
// import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  // const channelName = (name) => {
  //   alert(name);
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/locationInfo",
  //     element: <LocationInfo />,
  //   },
  //   {
  //     path: "/product",
  //     element: <Product />,
  //   },
  // ]);

  return (
    <>
      {/* <Map/> */}
      {/* <FilterMap/> */}
      {/* <UseEffects/> */}
      {/* <UseEffectProps/> */}
      {/* <BootStrap/>
      <FunctionAsProps channelName={channelName} name="Parampreet"/>
      <FunctionAsProps channelName={channelName} name="Harpreet"/>
      <FunctionAsProps channelName={channelName} name="Amrit"/>
      <FunctionAsProps channelName={channelName} name="Deepa"/> */}

      {/* <FrowardRef/> */}
      {/* <ReactMemo/> */}
      {/* <UseMemo/> */}
      {/* <ObjectUseState/> */}
      {/* <ReactPropsChildern/> */}
      {/* <DerviedState quantity={4} price={50} /> */}
      {/* 
      <div className="bg-dark p-5">
        <h1 className="text-primary">App Component</h1>
        <UserProvider>
          <Parent />
        </UserProvider>
      </div> */}
{/*       
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense> */}

      <Api/>
    </>
  );
}
