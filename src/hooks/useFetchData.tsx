import { useState, useEffect, useRef, useCallback } from "react";
import axiosInstance from "../api/axiosInstance"; // Import Axios instance (or directly import axios)
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import useDeepCompareMemoize from "./deepCompareMemoize";

function useFetchData(
  url: string,
  method: string = "get",
  options: AxiosRequestConfig = {}
) {
  // Accepts URL, method (GET, POST, etc.), and optional options
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const cancel = useRef<AbortController | null>(null); // Holds the cancel token (if used)
  // const abortControllerRef = useRef<AbortController | null>(null);

  const wasCalled = useRef(false);

  // const propsVariablesMemoized = useDeepCompareMemoize(options);
  //   const urlMemoized = useDeepCompareMemoize(options);

  const isSleeping = wasCalled.current;

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null); // Reset error on each request
      cancel.current?.abort();
      cancel.current = new AbortController();
      options.signal = cancel.current.signal;
      try {
        console.log("making api call");
        const response = await axiosInstance({ method, url, ...options }); // Use lowercase method for flexibility
        setData(response.data);
      } catch (error: any) {
        console.log(error);
        if (axios.isCancel(error)) {
          console.warn("Request cancelled"); // Handle cancellation gracefully
          return;
        } else {
          setError(error);
        }
      } finally {
        // console.log("al");
        setLoading(false);
        cancel.current = null;
      }
    })();

    return () => {
      console.log("return from use effect");

      cancel.current?.abort();
      // Cleanup function to cancel requests on unmount
      // if (cancel.current) {
      //   console.log(url, "cancle the api request if exist");
      //   cancel.current?.abort();
      // }
    };
  }, []); // Re-run only when dependencies change

  return { data, error, loading }; // Return the state for data, loading, error, and cancel (if applicable)
}

export default useFetchData;
