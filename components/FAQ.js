export default function FAQ() {
  
    return (
      <>
        <section  className="mx-auto w-10/12  py-14">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>   
            <div className="collapse collapse-plus bg-violet-200 rounded mb-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Is Minecraft AI-generated?</div>
              <div className="collapse-content bg-white border-t border-black">
                  <p className="my-2">No, Minecraft is not AI-generated, but AI technology is being used in various ways to create new experiences and enhance the game. These implementations showcase the potential of AI in game development and player experience enhancement.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-violet-200 rounded mb-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Do I need to download or install anything to play Oasis AI Minecraft?</div>
              <div className="collapse-content bg-white border-t border-black">
                  <p className="my-2">No, you don&apos;t need to download anything. You can play ai generated minecraft directly through your web browser. </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-violet-200 rounded mb-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">How do I play ai generated minecraft?</div>
              <div className="collapse-content bg-white border-t border-black">    
                    <ul className="my-2">
                      <li>1、play ai generated minecraft in your browser without any downloads</li>
                      <li>2、select from various AI-generated map themes</li>
                      <li>3、use standard Minecraft controls (WASD to move, space to jump, mouse to look around) to explore world in game</li>
                    </ul>
              </div>
            </div>
            <div className="collapse collapse-plus bg-violet-200 rounded mb-2">
              <input type="checkbox"/>
              <div className="collapse-title text-xl font-medium">What are the minimum system requirements for playing ai generated minecraft?</div>
              <div className="collapse-content bg-white border-t border-black">
                  <p className="my-2">To play ai generated minecraft smoothly, you need a modern browser, a dedicated graphics card, and a stable internet connection with minimum 10Mbps speed. </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-violet-200 rounded mb-2">
              <input type="checkbox"/>
              <div className="collapse-title text-xl font-medium">Can I download and play ai generated minecraft on my PC?</div>
              <div className="collapse-content bg-white border-t border-black">
                  <p className="my-2">Yes, you&apos;ll need to download and set up specific AI models and dependencies. you can download from <a className="text-indigo-600 bg-indigo-200 strong" href="https://github.com/etched-ai/open-oasis" target="_blank" >open-oasis</a>.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-violet-200 rounded mb-2">
              <input type="checkbox"/>
              <div className="collapse-title text-xl font-medium">Is Oasis an app?</div>
              <div className="collapse-content bg-white border-t border-black">
                  <p className="my-2">Oasis is not an app, but an AI-driven interactive video game model that can be experienced in real-time.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-violet-200 rounded">
              <input type="checkbox"/>
              <div className="collapse-title text-xl font-medium">How does Oasis AI work?</div>
              <div className="collapse-content bg-white border-t border-black">
                  <p className="my-2">Oasis AI works by leveraging advanced AI techniques like transformer models and diffusion training to create a real-time, interactive video game experience that simulates a dynamic game world based on user inputs. </p>
              </div>
            </div>
        </section>
      </>
    )
  }