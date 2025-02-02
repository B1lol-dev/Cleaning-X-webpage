import { useEffect, useState } from "react";

// components
import { Header } from "./components/ui/Header";

import { CartModal } from "./components/modals/CartModal";
import { Container } from "./components/defaults/Container";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    setCartCount(0);
  }, []);

  return (
    <>
      <Header
        cartCount={cartCount}
        setIsCartModalOpen={setIsCartModalOpen}
        isCartModalOpen={isCartModalOpen}
      />
      {isCartModalOpen && (
        <CartModal
          setCartCount={setCartCount}
          cartCount={cartCount}
          setIsCartModalOpen={setIsCartModalOpen}
        />
      )}
    </>
  );
}

export default App;
