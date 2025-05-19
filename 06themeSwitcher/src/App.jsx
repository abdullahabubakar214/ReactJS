import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/context";
import Themebtn from "./component/themebtn";
import Card from "./component/Card";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const darkMode = () => {
    setthemeMode("dark");
  };

  const lightMode = () => {
    setthemeMode("light");
  };

  // Actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
