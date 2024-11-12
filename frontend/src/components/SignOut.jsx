import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Rimuovi i dati dell'utente dal localStorage
    localStorage.removeItem("userToken");

    // Reindirizza alla pagina di login
    navigate("/login");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-gray-700">Stai effettuando il logout...</p>
    </div>
  );
};

export default SignOut;
