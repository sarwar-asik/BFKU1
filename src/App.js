import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import Loader from "./Pages/Shared/Loader/Loader";
import router from "./Routers/MainRouter";

function App() {
  const [spin, setSpain] = useState(true);

  useEffect(() => {
    setSpain(true);
    setTimeout(() => {
      setSpain(false);
    }, 3000);
  }, [setSpain]);

  return (
    <div>
      {spin ? (
        <Loader></Loader>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}

export default App;
