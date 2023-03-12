import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Home } from "./pages/Home";
import { Privacy } from "./pages/Privacy";

function App() {
  return (
    <div className="App">
      <header className="text-center p-6">
        <h1 className="font-semibold text-3xl pb-5">
          Vite + React + ContextApi
        </h1>
        <nav>
          <Link className="mx-3" to="/">
            Home
          </Link>
          <Link className="mx-3" to="/privado">
            Página Privada
          </Link>
        </nav>
      </header>
      <hr />
      <div className="card text-center p-24">
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route
            path="/privado"
            element={
              <RequireAuth>
                <Privacy />
              </RequireAuth>
            }
          >
            Privado
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
