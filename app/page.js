
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import Hero from "@/components/Hero"
import Instructions from "@/components/Instructions"
import FAQ from "@/components/FAQ"


export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col">
      <Header />
        <div className="grow">
          <Hero />
          <Instructions></Instructions>
          <FAQ></FAQ>
        </div>
      <Footer />
    </div>
  )
}
