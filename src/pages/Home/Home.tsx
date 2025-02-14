import { useEffect, useState } from "react";

// components
import { Header } from "../../components/ui/Header";

import { CartModal } from "../../components/modals/CartModal";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Info } from "./components/Info";
import { ProServices } from "./components/ProServices";
import { Sanitization } from "./components/Sanitization";
import { HouseServices } from "./components/HouseServices";
import { Difference } from "./components/Difference";
import { Blog } from "./components/Blog";
// import { Container } from "./components/defaults/Container";

export const Home = () => {
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
      <Hero />
      <Services />
      <Info />
      <ProServices />
      <Sanitization />
      <HouseServices />
      <Difference />
      <Blog />
      {isCartModalOpen && (
        <CartModal
          setCartCount={setCartCount}
          cartCount={cartCount}
          setIsCartModalOpen={setIsCartModalOpen}
        />
      )}
    </>
  );
};
