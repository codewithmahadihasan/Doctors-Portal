import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Auth/AuthProvider";

const useAdmin = (email) => {
  const [isAdmin, setAdmin] = useState(false);
  const { setLoading } = useContext(AuthContext);
  console.log(isAdmin);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/user/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data?.idAdmin);
      });
  }, [email]);
  setLoading(false);
  return [isAdmin];
};

export default useAdmin;
