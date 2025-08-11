import "./App.css";
import { BrowserRouter } from "react-router";
import { AppRoute } from "./route/AppRoute";
function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <AppRoute/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
