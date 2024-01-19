// hooks
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import './styles/index.css'

// firebase
import firebaseConfig from './Firebase.ts'

// modules
import getAllConferenceData from './modules/FetchData.js'
import { initializeApp } from 'firebase/app';

// interfaces
import Conf_Item from './interfaces/Conf_Item.js';

// components
import Conf_Card from './components/Conf_Card.js'

function App() {

  // initialize firebase
  initializeApp(firebaseConfig);

  // connect to db realtime and get data
  const [conferences, setConferences] = useState([] as Conf_Item[])

  useEffect(() => {
    const fetchData = async () => {
      const data : Conf_Item[] = await getAllConferenceData();
      console.log(data)
      setConferences(data)
    }

    fetchData()

  }, [])

  return (
    <>

      <h1 style={{marginTop: '0px'}}>IT Conferences</h1>
      <div className="conferences-card_container">
        {conferences.map((conference, index) => (
          <Conf_Card key={index} conference={conference} />
        ))}
      </div>
    </>
  )
}

export default App
