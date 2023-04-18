import background from "../assets/background.mp4"


export const Home = () => {

  return (
    <div className="text-white relative h-screen">
      <video
        className="w-full h-full object-cover"
        src={background}
        autoPlay
        loop
        muted
      />

      <div className="bg-blue-50 flex flex-col py-[270px] items-center absolute w-full h-full top-0 left-0 bg-gray-900/30 text-center cursor-pointer">
        <h1>Hello</h1>
      </div>
    </div>
  );
};
