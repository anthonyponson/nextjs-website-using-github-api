import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div>
        <header className='header flex items-center py-2'>
          <div className='container flex flex-col items-center justify-between px-4 md:flex-row'>
            <div className='logo'>
              <Link href='/'>LeoPixel</Link>
            </div>
            <div className='py-2 px-4 space-x-4'>
              <Link href="about">About</Link>
              <Link href="about/contact">Contact</Link>
              <Link href="code/repos">Repos</Link>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
