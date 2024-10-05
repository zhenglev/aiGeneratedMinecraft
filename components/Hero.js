export default function Hero() {
  
  return (
    <>
       <section className="hero mx-auto py-32 sm:py-48 lg:py-56 bg-[#ffffff]">
        <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="flex justify-center">
                <a href="/dashboard" className="bg-lime-200 hover:bg-lime-100 neobrutal-raised py-2 px-3 rounded-md">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
