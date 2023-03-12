import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function Privacy() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () =>{
    await auth.signout();
    navigate("/");
  }

  return (
    <>
      <div className="mb-10">Privado</div>

      <span className="block mb-4">Olá, {auth.user?.name}, seja bem vindo!</span>  

      <Link
        className="border p-3 border-gray-200 bg-gray-300 text-gray-900"
        to="/"
      >
        back to home
      </Link>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
