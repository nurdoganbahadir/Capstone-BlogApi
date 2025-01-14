import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

const useApiRequests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const login = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      toastSuccessNotify("The login process is successful.");
      dispatch(loginSuccess(data));
      navigate("/blogs");
    } catch (error) {
      toastErrorNotify("Login failed. Please try again.");
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    console.log(userInfo);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        userInfo
      );
      console.log(data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("The register process is successful.");
      navigate("/blogs");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
        headers: { Authorization: `Token ${token}` },
      });
      toastSuccessNotify("Logout. OK.");
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login, register, logout };
};

export default useApiRequests;
