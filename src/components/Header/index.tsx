import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <nav>
      <h1>React Filmes</h1>

      <Button outline onClick={handleNavigateToHome}>
        Home
      </Button>
    </nav>
  );
};
