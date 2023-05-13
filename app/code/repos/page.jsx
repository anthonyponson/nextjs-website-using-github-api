import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/anthonyponson/repos',
    {
      next:{
        revalidate: 60,
      },
    }
  )
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const repos = await response.json()
  return repos
}

const ReposPage = async () => {
  const repos = await fetchRepos()
//   console.log(repos)
  return (
    <>
    <div className='bg-slate-800'>
      <h2 className='text-gray text-2xl font-bold'>Respositoreis</h2>
      <div className='flex flex-col'>
        {repos.map((item, i) => (
            <>
          <div key={i} className='w-[90%] bg-white p-4 my-2 rounded-md mx-auto md:w-[60%]'>
            <Link className='space-y-3' href={`/code/repos/${item.name}`}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className='flex justify-around space-x-12 '>
                <span>
                  <FaStar />
                  {item.stargazers_count}
                </span>

                <span>
                  <FaCodeBranch /> {item.forks_count}
                </span>

                <span>
                  <FaEye /> {item.watchers_count}
                </span>
              </div>
            </Link>
          </div>
          </>
        ))}
      </div>
      </div>
    </>
  )
}

export default ReposPage
