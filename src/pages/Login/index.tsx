import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function Login() {
const auth = useContext(AuthContext);
const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
        const isLogged = await auth.signin(email, password);
    
        if(isLogged) {
            return navigate("/privado");
        } else {
            alert("Error: User or password incorrect");
            return;
        }
    }

    alert("Error: User or Password is empty, verify!");
    return;
  };

  return (
    <>
      <h2>Login</h2>

      <div className="block p-2 m-auto max-w-md">
        <input
          className="w-full p-2 mt-4 border border-gray-200"
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mt-4 border border-gray-200"
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="mt-2 p-2 bg-gray-600 text-white w-full"
          onClick={handleLogin}
        >
          Logar
        </button>
      </div>
    </>
  );
}
