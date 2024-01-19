import React from 'react';
import { useState } from 'react';
import Conf_Item from '../interfaces/Conf_Item';
import CustomModal from './CustomModal';

interface ConfCardProps {
  conference: Conf_Item;
}

const Conf_Card: React.FC<ConfCardProps> = ({ conference }) => {

    const [isTracksModalOpen, setTracksModalOpen] = useState(false);
    const [isSpeakersModalOpen, setSpeakersModalOpen] = useState(false);
    const [isTimelineModalOpen, setTimelineModalOpen] = useState(false);

    // handle some case click button
    const handleViewTracks = () => {
        console.log('view tracks')
        setTracksModalOpen(true)
    }

    const handleViewSpeakers = () => {
        console.log('view speakers')
        setSpeakersModalOpen(true)
    }

    const handleViewTimeline = () => {
        console.log('view timeline')
        setTimelineModalOpen(true)
    }



  return (
    <div className="conf-card">
      <p style={{backgroundColor: 'coral', padding: '2px', borderRadius: '5px', margin: '0px 20px 0px 20px'}} >{conference.topic}</p>

      <h2 style={{color: '#00868B', fontWeight: '600', fontSize: '20px', marginBottom: '0'}} >{conference.name}</h2>
      <ul style={{textAlign: 'left'}}>
        <li>Start: {conference.start_date}</li>
        <li>Region: {conference.region} </li>
        <li>Location: {conference.location}</li>
    
      </ul>

      <ul>
      <li className='conference-inf' style={{alignItems: 'center', display: 'flex'}} >
         
            <span style={{alignSelf: 'center'}}>Tracks: </span>
            <button className='card-button' 
            onClick={() => handleViewTracks()}
            >
                view</button>
        </li>
        <li className='conference-inf' style={{alignItems: 'center', display: 'flex'}} >
           
            <span style={{alignSelf: 'center'}}>Speakers: </span>
            <button className='card-button' 
            onClick={() => handleViewSpeakers()}
            >
                view</button>
        </li>
        <li className='conference-inf' style={{alignItems: 'center', display: 'flex'}} >
           
            <span style={{alignSelf: 'center'}}>Timeline: </span>
            <button className='card-button' 
            onClick={() => handleViewTimeline()}
            >
                view</button>
        </li>
      </ul>

      <ul style={{textAlign: 'left'}}>
        <li>Link website: 
            <a href={conference.url} target='_blank' rel="noreferrer" style={{color: 'blue', marginLeft: '30px', textDecoration: 'underline'}} >go here</a>
        </li>
        <li>Link register: 
            < a href={conference.register_url} target='_blank' rel="noreferrer" style={{color: 'blue', marginLeft: '30px', textDecoration: 'underline'}} >go here</a>
        </li>
    
      </ul>

      <CustomModal
        isOpen={isTracksModalOpen}
        onRequestClose={() => setTracksModalOpen(false)}
        content={{
            tracks: conference.track,
            type: 'tracks'
        }}
      />

      <CustomModal
        isOpen={isSpeakersModalOpen}
        onRequestClose={() => setSpeakersModalOpen(false)}
        content={{
            speakers: conference.speakers,
            type: 'speakers'
        }}
      />

      <CustomModal
        isOpen={isTimelineModalOpen}
        onRequestClose={() => setTimelineModalOpen(false)}
        content={{
            timeline: conference.timeline,
            type: 'timeline'
        }}
      />


    </div>
  );
};

export default Conf_Card;
