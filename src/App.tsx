import { Header } from "./components/Header";
import { Home } from "./page/Home";

function App() {
  return (
    <>
      <Header />

      <div className="body">
        <Home />
      </div>
    </>
  );
}

export default App;
