import { useEffect, useState, FormEvent } from 'react'
import axios from './api/axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(Object)
  const [permissions, setPermissions] = useState(false)
  const [flag, setFlag] = useState(false)
  const [files, setFiles] = useState([]!)
  const [fileName, setFileName] = useState('')

  useEffect(() => {
    axios.get('/files/all', { withCredentials: true }).then(res => {
      setFiles(res.data)
      console.log({ files })
    })
  }, [])

  useEffect(() => {
    axios
      .get('/users', { withCredentials: true })
      .then(data => {
        console.log({ data })
        if (data.status === 401) {
          navigate('/signup')
          return
        }
        setUser(data.data.message)
        setPermissions(data.data.message.permissions)
      })
      .catch(err => {
        setUser({})
        console.log(err)
        if (err.status === 401) {
          navigate('/signup')
          return
        }
      })
  }, [])

  useEffect(() => {
    // if (user.permissions === true && permissions === false)
    //   setPermissions(user.permissions)
    if (flag) {
      axios
        .post(
          '/users/permissions',
          { permissions: permissions },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            withCredentials: true,
          }
        )
        .then(res => {
          console.log(res)
          setFlag(false)
        })
    }
  }, [flag])

  const handleClick = () => {
    if (permissions) setPermissions(false)
    else setPermissions(true)
    setFlag(true)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    axios
      .post(
        '/files/create',
        { name: fileName },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          withCredentials: true,
        }
      )
      .then(res => {
        setFileName('')
        axios
          .get('/files/all', { withCredentials: true })
          .then(res => setFiles(res.data))
      })
  }

  return (
    <section className='py-8 px-4'>
      <h1 className='text-4xl ml-4'>Your dashboard</h1>
      <div className='relative overflow-x-auto mt-8'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                File name
              </th>
              <th scope='col' className='px-6 py-3'>
                File ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {files.length > 0 &&
              files.map((file: any) => (
                <tr className='bg-white border-b ' key={file._id}>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                  >
                    <Link to={`/file/${file._id}`}>{file.name}</Link>
                  </th>
                  <td className='px-6 py-4'>{file._id}</td>
                  <td className='px-6 py-4'>{file.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <form className='mt-4' onSubmit={handleSubmit}>
          <h2 className='mb-2 ml-4 text-lg'>Make file</h2>
          <label
            htmlFor='submit'
            className='mb-2 text-sm font-medium text-gray-900 sr-only '
          >
            Submit
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              onChange={e => setFileName(e.target.value)}
              value={fileName}
              type='text'
              id='submit'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
              placeholder='File name...'
              required
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 '
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className='mt-8 p-4 bg-white border'>
        <h1 className='text-4xl ml-4'>File Permissions</h1>
        <label className='inline-flex items-center cursor-pointer mt-8'>
          {permissions ? (
            <input
              type='checkbox'
              value=''
              className='sr-only peer'
              onClick={handleClick}
              checked
            />
          ) : (
            <input
              type='checkbox'
              value=''
              className='sr-only peer'
              onClick={handleClick}
            />
          )}

          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          <span className='ms-3 text-sm font-medium text-gray-900 '>
            Allow everyone to edit these spreadsheets
          </span>
        </label>
      </div>
    </section>
  )
}

export default Dashboard
