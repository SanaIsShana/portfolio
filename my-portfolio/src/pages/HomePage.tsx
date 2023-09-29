import { Header } from "../components/Header";
import { Main } from "../components/Main";

export const HomePage = () => {
  return (
    <div className="bg-olive flex flex-col h-full">
      <Header />
      <Main />
      <div className="h-10 w-full flex-none sticky"></div>
    </div>
  );
};
