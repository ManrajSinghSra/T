import { Header } from "../other/Header"
import { TaskListNumber } from "../other/TaskListNumbers"
import { TaskList } from "../TaskList/TaskList"
 
export const EmployeDashBoard=()=>{
    return(<>
        <div className="w-screen h-screen bg-[#1C1C1C]">
        <div className="!p-10 ">
            <Header/>
            <TaskListNumber /> 
             <TaskList /> 
        </div>
      </div>
    </>)
}