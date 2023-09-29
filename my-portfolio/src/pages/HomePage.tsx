import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export const HomePage = () => {
  return (
    <div className="bg-dustyPink h-screen p-5">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
