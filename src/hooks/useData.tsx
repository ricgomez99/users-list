import { useEffect, useReducer } from "react";

interface State<T> {
  data?: T;
  error?: Error;
}

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export function useData<T = unknown>(url: string): State<T> {
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const json = (await response.json()) as T;
      dispatch({ type: "fetched", payload: json });
    } catch (error) {
      dispatch({ type: "error", payload: error as Error });
    }
  };

  return state;
}
