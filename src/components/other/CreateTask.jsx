export const CreateTask=()=>{
    return(
        <>
         <div className="flex  rounded-s p-10 bg-neutral-800">
              <form className="flex items-baseline justify-between w-[70rem] text-[1.07rem]">
                <div className="flex flex-col gap-10 ">
                  <div>
                    <h3>Task Title</h3>
                    <input
                      className="w-[20rem] border-1 border-amber-50 p-3 rounded-[.6rem]"
                      type="text"
                      placeholder="make a ui design"
                    />
                    
                  </div>

                  <div>
                    <h3>Date</h3>
                    <input
                      className="w-[20rem] border-1 border-amber-50 p-3 rounded-[.6rem]"
                      type="date"
                    />
                  </div>

                  <div>
                    <h3>Assign To </h3>
                    <input
                      className="w-[20rem] border-1 border-amber-50 p-3 rounded-[.6rem]"
                      type="text"
                      placeholder="Employee name"
                    />
                  </div>

                  <div>
                    <h3>Category</h3>
                    <input
                      className="w-[20rem] border-1 border-amber-50 p-3 rounded-[.6rem]"
                      type="text"
                      placeholder="design,dev"
                    />
                  </div>
                </div>

                <div className="flex  flex-col items-start gap-10">
                  <h3>Descriptiom</h3>
                  <textarea name="" id="" rows="10" cols="50" className="p-10 border-2 border-white-700" ></textarea>

                  <button className="bg-blue-500 rounded-2xl px-5 py-3 text-3xl">Create</button>
                </div>
              </form>
            </div>
        
        </>
    )
}