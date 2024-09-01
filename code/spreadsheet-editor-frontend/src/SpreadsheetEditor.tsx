import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'
import './App.css'
import axios from './api/axios'
import {
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective,
  SpreadsheetComponent,
} from '@syncfusion/ej2-react-spreadsheet'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SpreadsheetEditor() {
  const [flag, setFlag] = useState(true)
  const [file, setFile] = useState(Object)
  const [loading, setLoading] = useState(false)
  const [hidden, setHidden] = useState('hidden')
  const spreadsheetRef = useRef<SpreadsheetComponent>(null)

  const navigate = useNavigate()
  const { id } = useParams()

  // const [user, setUser] = useState(Object)
  const [user, setUser] = useState<object>(() => {
    setLoading(true)

    axios
      .get('/users', { withCredentials: true })
      .then(data => {
        console.log({ data })
        if (data.status === 401) {
          navigate('/signup')
          return
        }
        setUser(data.data.message)
      })
      .catch(err => {
        setUser({})
        console.log(err)
        if (err.status === 401) {
          navigate('/signup')
          return
        }
      })
      .finally(() => setLoading(false))
  })

  // useEffect(() => {
  //   setLoading(true)

  //   axios
  //     .get('/users', { withCredentials: true })
  //     .then(data => {
  //       console.log({ data })
  //       if (data.status === 401) {
  //         navigate('/signup')
  //         return
  //       }
  //       setUser(data.data.message)
  //     })
  //     .catch(err => {
  //       setUser({})
  //       console.log(err)
  //       if (err.status === 401) {
  //         navigate('/signup')
  //         return
  //       }
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [])

  const socket = io('http://localhost:3001')

  socket.on('take-action', message => {
    // const spreadsheet = spreadsheetRef.current!

    console.log(message)
    // axios.get(`/files/${id}`, { withCredentials: true }).then(res => {
    //   setFile(res.data)
    //   spreadsheet.openFromJson({ file: res.data })
    // })
    setFlag(true)
  })

  socket.on('unauthorized', message => {
    if (loading) return
    console.log(user)
    if (user && user._id && message.id === user._id) {
      setHidden('')
      setFlag(true)
    } else {
      console.log(message)
      if (hidden === 'hidden') setHidden('')
    }
  })

  useEffect(() => {
    if (!flag) return
    const spreadsheet = spreadsheetRef.current!
    axios.get(`/files/${id}`, { withCredentials: true }).then(res => {
      console.log(res.data)
      setFile(res.data)
      spreadsheet.openFromJson({ file: res.data })
      setFlag(false)
    })
  }, [flag])

  // const data: DataManager = new DataManager({
  //   url: `http://localhost:3000/files/${id}`,
  //   adaptor: new WebApiAdaptor(),
  //   crossDomain: true,
  // })

  const handleClick = () => {
    setHidden('hidden')
    const spreadsheet = spreadsheetRef.current!
    spreadsheet?.saveAsJson().then(data => {
      console.log(data.jsonObject)
      setFile(data.jsonObject)
      console.log(file)
      axios
        .post(
          '/files',
          { data: JSON.stringify(data.jsonObject), id },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            withCredentials: true,
          }
        )
        .then(res => {
          console.log(res)
          socket.emit('update-file', user._id)
        })

      spreadsheet.openFromJson({ file })
    })
  }

  // const spreadsheet: Spreadsheet = new Spreadsheet({ sheets: file })

  return (
    <>
      <button
        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ml-4 mt-4'
        onClick={handleClick}
      >
        SAVE FILE
      </button>
      <span>
        After saving your changes will be <strong>live</strong> to
        collaborators!
      </span>
      <div
        className={`text-red-700 bg-red-200 border border-red-500 rounded-md text-center p-4 my-4 mx-4 ${hidden}`}
      >
        Ask permission to edit this from owner or edit permissions in the
        dashboard if you are the owner
      </div>
      <div
        className={`text-green-700 bg-green-200 border border-green-500 rounded-md text-center p-4 my-4 mx-4`}
      >
        <strong>Note: </strong>After done editing, click on an empty cell (this
        lets editor know that you are done with editing) and then click on the
        save button to save your data to DB!
      </div>
      <SpreadsheetComponent ref={spreadsheetRef}>
        <SheetsDirective>
          <SheetDirective>
            <RangesDirective>
              <RangeDirective></RangeDirective>
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </>
  )
}
