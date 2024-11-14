const maincase = {
    src: 'https://www.youtube.com/embed/tdwxQpC3G80?si=Uiczlq5R_RHNMYIN', title: 'ai generated minecraft is insane...'
};
const somecases = [
    { src: 'https://www.youtube.com/embed/0A2-jvQfjUo?si=OQxXG8UCR__F_50Q', title: 'ai generated minecraft is kinda creepy' },
    { src: 'https://www.youtube.com/embed/XF2nC3lI70A?si=IBHWH6kWrq4by6LD', title: 'the new ai generated mineecraft game everyone is talking about right now' },
    { src: 'https://www.youtube.com/embed/Z_0ffn7H038?si=cHREBy9iKm3laT4z', title:'ai generated minecraft biomes' },
    { src: 'https://www.youtube.com/embed/SMoSgXPLub0?si=bQSP2HmM_7mOEr4a', title: 'realtime generative minecraft down to the pixel' }
]


export default function Showcase() {
    return (
      <>
        <section  className="mx-auto w-10/12  py-14">
            <h2 className="text-2xl font-bold mb-8 text-center">Some examples of playing ai generated Minecraft</h2>   
            <div class="video-container rounded-xl overflow-hidden mt-6 mb-6 relative">
                <div class="bg-white rounded-lg overflow-hidden">
                    <iframe class="w-full h-[270px] bg-gray-200 md:h-[558px]" src={maincase.src} title={maincase.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {somecases.map((item, index) => (
                    <div class="bg-white rounded-lg overflow-hidden" key={index}>
                        <iframe class="w-full h-[270px] bg-gray-200 md:h-[274px]" src={item.src} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    </div>
                ))}
            </div>         
        </section>
      </>
    )
  }