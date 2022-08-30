import Drawer from "./components/Drawer/Drawer"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import { useEffect } from "react";
import { setTheme } from "./store/AppState";
import { getData } from './store/LoadDataFromServer';
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

const App = () => {
  const dispatch = useDispatch();
  const AppState = useSelector(store => store.AppState);
  const user = useSelector( store => store.LoadData);
  useEffect(() => {
    dispatch(getData());
    const theme = localStorage.getItem('theme');
    if(theme){
      dispatch(setTheme(theme));
    }
  },[]);


  return (
    <>
      <div class="drawer" data-theme={AppState.theme}>
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* For non logged user */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login">
              <Route path=""  element={<Login />} />
              <Route path="forgotpassword"  element={<ForgotPassword />} />
            </Route>
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
          {/* For logged user */}
        </div>
        <Drawer />
    </div>
    </>
  )
}

export default App