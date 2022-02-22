import { useState, useReducer } from "react";

import MyContext from "./MyContext";
import { dataReducer } from "../reducers/dataReducer";

const MyProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(dataReducer, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [headerLogo] = useState("This is my logo");
  const [footerName] = useState("Omar Al-Ezzi");

  return (
    <MyContext.Provider
      value={{
        data,
        dispatchData,
        loading,
        setLoading,
        error,
        setError,
        headerLogo,
        footerName
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
