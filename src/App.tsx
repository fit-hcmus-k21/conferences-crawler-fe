import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import firebaseConfig from './Firebase.js'
import { getDatabase } from "firebase/database";

import getAllConferenceData from './modules/FetchData.js'
import { initializeApp } from 'firebase/app';

function App() {

  // initialize firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // connect to db realtime and get data
  const [conferences, setConferences] = useState([
    {
      id: 1,
      name: 'React Conf',
      city: 'London',
      date: '2021-10-01',
      attendance: 300,
    },
    {
      id: 2,
      name: 'Angular Conf',
      city: 'Tokyo',
      date: '2021-10-01',
      attendance: 500,
    },
    {
      id: 3,
      name: 'Vue Conf',
      city: 'New York',
      date: '2021-10-01',
      attendance: 200,
    },
  ])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllConferenceData()
      console.log(data)
      setConferences(data)
    }

    fetchData()

  }, [])

  return (
    <>
     
      <h1>IT Conferences</h1>
      <div className="card">
        {conferences.map((conference, index) => (
          <div key={index}>
            <h2>{conference.name}</h2>
            <p>{conference.url}</p>
            <p>{conference.start_date}</p>
            <p>{conference.location}</p>

            </div>
        ))}
      </div>
    </>
  )
}

export default App
