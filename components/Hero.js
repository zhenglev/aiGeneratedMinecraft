export default function Hero() {
  
  return (
    <>
       <section className="hero mx-auto py-32 sm:py-48 lg:py-56 bg-[#ffffff]">
        <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">ai generated minecraft</h1>
            <p className="pt-6 pb-4">
              ai generated Minecraft is an open-world game generated by the AI model Oasis
            </p>
            <p className="py-4 text-gray-500">
              Click button to play ai generated Minecraft game
            </p>
            <div className="flex justify-center">
                <a href="https://oasis.decart.ai/starting-point" className="bg-violet-200 hover:bg-violet-100 neobrutal-raised py-2 px-3 rounded-md font-semibold">PLAY</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
