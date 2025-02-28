export default function Overview() {
  return (
    <div className="h-60 mt-16 w-full flex justify-center p-4  ">
      <div className="flex flex-col  justify-center w-2xl">
        <h3
          className="text-center text-3xl font-bold my- from-green-500 bg-clip-text bg-gradient-to-br to-green-500 text-transparent"
          style={{
            textShadow:
              "0px 0px 10px rgba(50, 205, 50, 0.8), 0px 0px 20px rgba(50, 205, 50, 0.5)",
          }}
        >
          About me
        </h3>

        <p className="mt-3 text-left bg-clip-text font-light bg-gradient-to-t from-zinc-700 to-gray-100 text-transparent text-pretty ">
          Disciplined junior programmer eager to continue growing in the world
          of software development. I consider myself self-taught and I'm always
          looking to learn something new. Despite the challenges, I keep going,
          because I know that every mistake and every line of code brings me
          closer to my best version.
        </p>
      </div>
    </div>
  );
}
