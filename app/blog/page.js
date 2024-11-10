
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

export const runtime = "edge";

export default function Blog() {
  return (
    <div className="bg-white h-screen flex flex-col">
      <Header />
        <div className="grow">
            blog
        </div>
      <Footer />
    </div>
  )
}
