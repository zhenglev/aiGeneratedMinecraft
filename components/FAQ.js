export default function FAQ() {
  
    return (
      <>
        <section  className="mx-auto w-10/12  py-14">
            <h2 className="text-2xl font-bold mb-10">Questions? We have answers.</h2>   
            <div className="collapse collapse-plus bg-lime-200 rounded mb-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content bg-white border-t border-black">
                <p className="my-2">hello</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-lime-200 rounded mb-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content bg-white border-t border-black">
                <p className="my-2">hello</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-lime-200 rounded">
            <input type="checkbox"/>
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content bg-white border-t border-black">
                <p className="my-2">hello</p>
            </div>
            </div>
        </section>
      </>
    )
  }