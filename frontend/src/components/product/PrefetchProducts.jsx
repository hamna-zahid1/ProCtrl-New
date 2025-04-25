import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductsQuery } from "@/features/product/productThunks.js";
import { toast } from "react-toastify";

const PrefetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const toastId = toast.info("Fetching products, Please wait..", { autoClose: false });
      try {
        await dispatch(fetchProductsQuery()).unwrap();
        toast.dismiss(toastId);
      } catch (err) {
        toast.dismiss(toastId);
        toast.error(err);
      }
    };
    fetchProducts();
  }, [dispatch]);
  

  return <Outlet />;
};

export default PrefetchProducts;