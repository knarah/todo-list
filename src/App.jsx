import "./App.css";
import UIContainer from "./components/UIContainer";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <UIContainer />
    </DarkModeProvider>
  );
}

export default App;
