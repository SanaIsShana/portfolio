import "../../public/css/animation.css";

export const Text = () => {
  return (
    <>
      <div className="absolute inset-0 justify-center">
        <div className="bg-shape1 bg-teal opacity-60 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-60 bg-blur"></div>
        <div className="bg-shape1 bg-purple opacity-60 bg-blur"></div>

        <div className="fixed w-full p-5">
          <div className="border p-4 flex flex-row justify-between">
            <div className="flex flex-col">
              <h4>Hi, I'm Sana.</h4>
            </div>
            <div className="flex flex-col">
              <button>About</button>
              <button>Projects</button>
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
