
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import Hero from "@/components/Hero"
import Instructions from "@/components/Instructions"
import FAQ from "@/components/FAQ"

export const runtime = "edge";

export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col">
      <Header />
        <div className="grow">
          <Hero />
          <div id="instruction">
            <Instructions />
          </div>
          <div id="faq">
            <FAQ/>
          </div>
        </div>
      <Footer />
    </div>
  )
}
