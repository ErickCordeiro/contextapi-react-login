import { useContext, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | null>(null);
    const api = useApi();

  const signin = async (email:string, password:string) => {
    const {user, info_token} = await api.signin(email, password);
    
    if(user && info_token.original.access_token){
        setUser(user);
        localStorage.setItem('token', info_token.original.access_token);

        return true;
    }

    return false;
  }

  const signout = async() => {
    await api.signout();
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
