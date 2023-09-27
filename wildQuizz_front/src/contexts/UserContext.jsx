import { createContext, useContext, useMemo } from "react";
import { toast } from "react-toastify";

import useLocalStorage from "./useLocalStorage";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const logout = () => {
    setUser(null);

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/logout`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data === "logout") {
          toast.info("A bientôt ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <UserContext.Provider
      value={useMemo(() => ({
        user,
        setUser,
        logout,
      }))}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
