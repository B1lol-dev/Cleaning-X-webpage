// components
import { useState } from "react";
import { Header } from "./components/ui/Header";

function App() {
  const [cartCount, setCartCount] = useState(0);

  (() => {
    setCartCount(0);
  })();

  return (
    <>
      <Header cartCount={cartCount} />
    </>
  );
}

export default App;
