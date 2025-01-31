import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getBlogSuccess } from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useBlogRequests = () => {
  const { axiosPublic, axiosToken } = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getBlog = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(path);
      dispatch(getBlogSuccess({ data: data, path }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postBlog = async (path, values) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(path, values);
      getBlog(path);
      toastSuccessNotify("The splicing was successful.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Insertion failed.");
    }
  };

  const deleteBlog = async (path, id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`${path}/${id}`);
      getBlog(path);
      navigate(-1);
      toastSuccessNotify("The deletion was successful.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("The deletion failed.");
    }
  };

  const updateBlog = async (path, data) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`${path}/${data._id}`, data);
      getBlog(path);
      toastSuccessNotify("The information has been successfully updated.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("The update of the information failed.");
    }
  };

  const postLike = async (path, values) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(path, values);
      toastSuccessNotify("The Like was successful.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Insertion failed.");
    }
  };

  return { getBlog, postBlog, deleteBlog, updateBlog, postLike };
};

export default useBlogRequests;
