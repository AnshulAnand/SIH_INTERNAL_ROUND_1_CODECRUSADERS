import { FormEvent, useState } from 'react'
import axios from './api/axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    axios
      .post('/users/signin', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true,
      })
      .then(res => {
        console.log(res)
        navigate('/')
      })
  }

  return (
    <div className='flex h-screen py-12 px-4'>
      <form onSubmit={handleSubmit} className='max-w-sm w-screen mx-auto'>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={e =>
              setFormData(prevData => ({
                ...prevData,
                [e.target.name]: e.target.value,
              }))
            }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='name@flowbite.com'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Your password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={e =>
              setFormData(prevData => ({
                ...prevData,
                [e.target.name]: e.target.value,
              }))
            }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
