import axios from "axios";
import { useState } from "react";

const useGetParams = () => {
  const [params, setParams] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getParams = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:5000/nombres-columnas"
      );

      if (response.status !== 200) {
        throw new Error("Error uploading file.");
      }

      // File uploaded successfully
      //   console.log("Params here successfully.");
      //   console.log(response.data);
      setParams(response.data.columnas_principales);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, params, getParams };
};

export default useGetParams;
