import React, { useEffect } from "react";
import Routes from "./components/routes";
import { initMouseEffect } from "./utils/mouseEffect";

function App() {
  useEffect(() => {
    initMouseEffect();
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
