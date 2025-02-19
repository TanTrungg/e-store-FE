// import { AuthProvider } from "./providers/AuthProvider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavigateAction } from "./redux/actions/navigateAction";
import AppRoutes from "./routes/AppRoutes";

// save navigate to redux
const NavigationHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(NavigateAction(navigate));
  }, [dispatch, navigate]);

  return null;
};

function App() {
  return (
    <>
      <NavigationHandler />
      <AppRoutes />
    </>
    // <AuthProvider>
    //   <div className="bg-primary text-white text-center p-8">
    //     <h1 className="text-2xl font-bold">Hello, TailwindCSS!</h1>
    //     <p className="text-xl mt-4">TailwindCSS đã hoạt động thành công!</p>
    //   </div>
    // </AuthProvider>
  );
}

export default App;
