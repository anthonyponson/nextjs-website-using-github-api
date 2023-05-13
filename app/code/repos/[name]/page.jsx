import Link from "next/link"
import { Suspense } from "react"
import Repo from "@/app/component/Repo"


const RepoPage = ({ params: { name } }) => {
  return (
    <>
      <div className='bg-slate-900 flex justify-center items-center h-screen w-[100%]'>
        <div className='card text-white w-full'>
          
          <Suspense fallback={<div className="text-black">Loading repo</div>}>
          <Repo name={name} />
          </Suspense>
         
        </div>
      </div>
    </>
  )
}

export default RepoPage
