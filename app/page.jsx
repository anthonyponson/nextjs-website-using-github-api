import Link from "next/link";
import './globals.css'
import Courses from "./component/Courses";

const App = ()=> {
  return (
    <>
       <div className="bg-slate-900">
        <h1 className="text-neutral-50">welcome to leopixel</h1>
       <Courses/>
      </div>
    </>
  );
}

export default App;