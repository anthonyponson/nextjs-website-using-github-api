import Link from 'next/link'
import { Suspense } from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import RepoDirs from '@/app/component/RepoDirs'

async function getRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/anthonyponson/${name}`,
    {
      next:{
        revalidate: 60,
      },
    }
  )
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await getRepo(name)

  return (
    <>
      
        <div className='w-[70%] mx-auto flex flex-col justify-center bg-neutral-50 rounded-md mt-6 px-6 py-8 space-y-3'>
          <Link
            className='bg-neutral-300 text-center text-black px-2 w-40 py-2 text-sm rounded-md hover:bg-blue-800 hover:text-white'
            href='/code/repos'
          >
            Back To Repository
          </Link>
          <h2 className='text-black'>{repo.name}</h2>
          <p className='text-gray-600'>{repo.description}</p>
          <div className='flex space-x-4'>
            <span className='text-black'>
              <FaStar className='' />
              {repo.stargazers_count}
            </span>

            <span className='text-black'>
              <FaCodeBranch className='' />
              {repo.forks_count}
            </span>

            <span className='text-black'>
              <FaEye className='' />
              {repo.watchers_count}
            </span>
          </div>
          <Suspense fallback={<div className='text-black'>Loading files</div>}>
            <div className='text-black pt-16'>
              <RepoDirs name={name} />
            </div>
          </Suspense>
        </div>

    </>
  )
}

export default Repo
