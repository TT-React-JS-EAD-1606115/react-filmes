import { Header } from "./components/Header";
import { Details } from "./page/Details";
import { Home } from "./page/Home";

function App() {
  return (
    <>
      <Header />

      <div className="body">
        <Home />
        {/* <Details /> */}
      </div>
    </>
  );
}

export default App;
