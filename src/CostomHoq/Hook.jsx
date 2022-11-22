import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Auth/AuthProvider";

const useAdmin = (email, head) => {
  const { logOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
      
          if (!data.idAdmin && !head) {
            navigate("/");
          }
          setIsAdmin(data?.idAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email, navigate, logOut, head]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
