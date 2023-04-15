import { createContext, useState } from "react";

export const mycontext = createContext({
  data: [],
  setData: [],
  loading: [],
  steLoading: [],
  blog: [],
  setBlog: [],
});

const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, steLoading] = useState(true);
  const [blog, setBlog] = useState([]);

  return (
    <mycontext.Provider
      value={{ data, setData, loading, steLoading, blog, setBlog }}
    >
      {children}
    </mycontext.Provider>
  );
};

export default Contexts;
