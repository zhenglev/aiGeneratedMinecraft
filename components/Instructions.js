export default function Instructions() {
  
    return (
      <>
        <section className="bg-[#f5f5f5]" >
        <div className=" mx-auto w-10/12  py-14">
            <h2 className="px-4 text-2xl font-bold">How to xxxx</h2>
            <p className="px-4 py-5 text-lg">Learn how to xxxx online:</p>
            <ol>
            <li className="py-4 px-4 flex items-center border-b"><span className="serial-number mr-4 flex-shrink-0">1</span><div>Click the <span className="bg-lime-200 strong">Select a file</span> button above or drag and drop files into the drop zone.</div></li>
            <li className="py-4 px-4 flex items-center border-b"><span className="serial-number mr-4 flex-shrink-0">2</span><div>Select the PDF file you want to crop.</div></li>
            <li className="py-4 px-4 flex items-center border-b"><span className="serial-number mr-4 flex-shrink-0">3</span><div>After Acrobat uploads the PDF, sign in to crop pages in your file.</div></li>
            <li className="py-4 px-4 flex items-center border-b"><span className="serial-number mr-4 flex-shrink-0">4</span><div>Acrobat automatically outlines the first PDF page with a rectangular cropping border. Drag the border handles to resize the page as desired.</div></li>
            <li className="py-4 px-4 flex items-center border-b"><span className="serial-number mr-4 flex-shrink-0">5</span><div>Select <span className="bg-lime-200 strong">Crop</span> to save your cropped file.</div></li>
            <li className="py-4 px-4 flex items-center border-b"><span className="serial-number mr-4 flex-shrink-0">6</span><div>Apply your crop settings to additional pages by setting the page range or click All under Page Range.</div></li>
            <li className="py-4 px-4 flex items-center border-b"><span className="serial-number mr-4 flex-shrink-0">7</span><div>Click OK and save your file.</div></li>
            </ol>
        </div>
        </section>
      </>
    )
  }