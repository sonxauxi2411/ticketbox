import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGlobalLoading } from "../../redux/loading/loadingSlice";
import PropTypes from "prop-types";

const PageWrapper = ({ path, children }) => {
  const displatch = useDispatch();
  const { globalLoading } = useSelector((state) => state.loading);
  useEffect(() => {


    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {

    const timer = setTimeout(() => {
      displatch(setGlobalLoading(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  console.log("globalLoading", globalLoading);
  return <>{children}</>;
};

export default PageWrapper;
