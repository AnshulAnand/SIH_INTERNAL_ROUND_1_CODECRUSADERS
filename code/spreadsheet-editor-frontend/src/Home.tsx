import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import axios from './api/axios'
import { useEffect, useState } from 'react'

function Home() {
  const [user, setUser] = useState(Object)

  useEffect(() => {
    axios
      .get('/users', { withCredentials: true })
      .then(data => setUser(data.data.message))
      .catch(err => {
        setUser({})
        console.log(err)
      })
  }, [])

  useEffect(() => console.log(user))

  return (
    <>
      {/* Header */}
      <header className='flex align-center justify-center py-4'>
        <div className='max-w-5xl w-screen flex align-center justify-between p-4 max-md:flex-col gap-4'>
          <h1 className='font-semibold text-xl text-center'>CodeCrusaders</h1>
          <ul className=' flex align-center justify-center gap-8'>
            <li>
              {user && user.email ? (
                <p>{user.email.replace(/@.*$/, '')}</p>
              ) : (
                <Link to='signup'>Sign in</Link>
              )}
            </li>
            <li>
              <Link
                className='bg-blue-600 px-4 py-2 text-white rounded-md'
                to='dashboard'
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero section */}
      <section className='flex flex-col items-center justify-center py-12 md:pt-24'>
        <div className='max-w-5xl w-screen flex flex-col align-center justify-center p-4'>
          <h1 className='text-6xl font-bold text-center'>
            Edit Spreadsheets & <br />
            <span className='text-6xl'>
              <span className='text-blue-700'>collaborate</span> others live.
            </span>
          </h1>
          <p className='text-slate-600 text-center mt-6 text-lg'>
            Our platform allows you to make & edit spreadsheets while
            collaborating <br /> with others live. Simply make an account & get
            started.
          </p>
          <div className='flex items-center justify-center'>
            <Link
              className='flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 text-white rounded-md mt-4'
              to='dashboard'
            >
              Get started <IoIosArrowRoundForward size={28} />
            </Link>
          </div>
          {/* <div className='bg-gradient-to-tr from-[#1c05eb] to-[#a6a1f0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] opacity-30'></div>
          <div className='bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] opacity-30'></div> */}
          <div>
            <div className='relative isolate'>
              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                />
              </div>

              <div>
                <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                  <div className='mt-16 flow-root sm:mt-24'>
                    <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                      <img
                        src='/hero.png'
                        alt='product preview'
                        className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className='flex flex-col items-center justify-center py-12 pt-24'>
        <h1 className=' text-center font-bold text-4xl'>
          Start editing & collaborating in minutes
        </h1>
        <div className='max-w-7xl w-screen flex gap-2 flex-wrap align-center justify-center p-4 mt-8'>
          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <span>Step 1</span>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 '>
              Make an account
            </h5>
            <p className='mb-3 font-normal text-gray-500 '>
              Make an account in order to start editing your files &
              collaborate.
            </p>
            <Link
              to='signup'
              className='inline-flex font-medium items-center text-blue-600 hover:underline'
            >
              Sign up
              <svg
                className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
                />
              </svg>
            </Link>
          </div>
          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <span>Step 2</span>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 '>
              Create a file
            </h5>
            <p className='mb-3 font-normal text-gray-500 '>
              Go to your dashboard and start editing with a file.
            </p>
            <Link
              to='dashboard'
              className='inline-flex font-medium items-center text-blue-600 hover:underline'
            >
              Dashboard
              <svg
                className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
                />
              </svg>
            </Link>
          </div>
          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <span>Step 3</span>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 '>
              Collaborate
            </h5>
            <p className='mb-3 font-normal text-gray-500 '>
              Grant permissions and share the file for collaborating.
            </p>
            <Link
              to='signup'
              className='inline-flex font-medium items-center text-blue-600 hover:underline'
            >
              Start
              <svg
                className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='rounded-lg shadow m-4 py-2 bg-gray-800'>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm sm:text-center text-gray-400'>
            © 2024{' '}
            <a href='/' className='hover:underline'>
              CodeCrusaders
            </a>
            . All Rights Reserved.
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0'>
            <li>
              <a
                href='https://github.com/AnshulAnand/spreadsheet-editor-frontend'
                target='_blank'
                className='hover:underline me-4 md:me-6'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='https://github.com/AnshulAnand/spreadsheet-editor-frontend'
                target='_blank'
                className='hover:underline me-4 md:me-6'
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href='https://github.com/AnshulAnand/spreadsheet-editor-frontend'
                target='_blank'
                className='hover:underline me-4 md:me-6'
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href='https://github.com/AnshulAnand/spreadsheet-editor-frontend'
                target='_blank'
                className='hover:underline'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className='h-1' />
    </>
  )
}

export default Home
