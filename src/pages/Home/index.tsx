import { useContext } from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="mb-10">HOME</div>
      <Link
        className="border p-3 border-gray-200 bg-gray-300 text-gray-900"
        to="/privado"
      >
        Privado
      </Link>
    </>
  );
}
