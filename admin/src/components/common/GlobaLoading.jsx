import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./loading.scss";

const GlobalLoading = () => {
  const { globalLoading } = useSelector((state) => state.loading);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
    }
  }, [globalLoading]);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalLoading;
