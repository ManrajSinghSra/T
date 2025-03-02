import { Header } from "../other/Header"
import { CreateTask } from "../other/CreateTask";
import { AllTask } from "../other/AllTask";

export const AdminDashboard = () => {
    return (
      <>
        <div className=" m-10 max-w-screen bg-[#1C1C1C]">
          <div className="p-5 flex flex-col gap-4 ">
            <Header />
             <CreateTask/>
             <AllTask/>

          </div>
        </div>
      </>
    );
}