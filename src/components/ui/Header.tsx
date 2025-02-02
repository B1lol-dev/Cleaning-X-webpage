import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../defaults/Container";

// assets
import logo from "../../assets/logo.svg";

export const Header = ({ cartCount }: { cartCount: number }) => {
  const navLinks = ["home", "about", "services", "pages", "contact"];

  return (
    <header className="py-9">
      <Container>
        <nav className="flex items-center text-x-black">
          <a href="#">
            <img src={logo} alt="Cleaning X" />
          </a>
          <ul className="flex gap-12 ml-10 max-lg:gap-6 max-[950px]:gap-3! max-[900px]:hidden">
            {navLinks.map((link) => {
              return (
                <li
                  key={uuidv4()}
                  className="capitalize transition hover:text-x-blue text-lg"
                >
                  <a href={`#${link}`}>{link}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex ml-auto gap-6 items-center">
            <h2 className="text-lg">Cart ({cartCount})</h2>
            <button
              type="button"
              className="bg-x-blue text-white text-lg font-medium px-6 py-5 rounded-[14px] max-sm:hidden"
            >
              Get a free quote
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
