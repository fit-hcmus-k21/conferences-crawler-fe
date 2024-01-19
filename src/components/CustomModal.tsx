// Modal.js
import React from 'react';
import Modal from 'react-modal';

// Import interfaces
import { Speaker, Track, Agenda_Day } from '../interfaces/Conf_Item';

interface CustomModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    content: {
        type: string;
        tracks?: Track[];
        speakers?: Speaker[];
        timeline?: {
            link_detail: string;
            agenda_days?: Agenda_Day[];
        };
    }
    }

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%'
        },
      }}
    >
      {content.type === 'tracks' && (
        <ul>
            <h2 >Track</h2>
          {content.tracks?.map((track: Track, index : number) => (
            <li key={index}>{track.track_title}</li>
          ))}
        </ul>
      )}
      {content.type === 'speakers' && (
        <>
            <h2>Speaker</h2>

        <ul style={{ display: 'flex', flexWrap: 'wrap'}}>
          {content.speakers?.map((speaker: Speaker, index : number) => (
            <ul key={index} style={{
                listStyleType: 'none',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#CAE1FF',
                margin: '10px',
                padding: '10px',
                borderRadius: '5px',
                columnGap: '10px',
                width: '30%',
            
            }}>
              <li>Name: {speaker.name}</li>
              <li>Major: {speaker.major}</li>
              <li>Bio detail: 
                    <a href={speaker.bio_detail} target='_blank' rel="noreferrer" style={{color: 'blue', marginLeft: '10px', textDecoration: 'underline'}} >go here</a>
              </li>
            </ul>
          ))}
        </ul>
        </>
      )}

{content.type === 'timeline' && (
         <ul>
            <h2>Timeline</h2>
           <React.Fragment>
           <li>Link detail: 
                    <a href={content.timeline?.link_detail} target='_blank' rel="noreferrer" style={{color: 'blue', marginLeft: '10px', textDecoration: 'underline'}} >{content.timeline?.link_detail}</a>
             </li>
             <ul>
               {(content.timeline?.agenda_days ?? []).map((agenda: Agenda_Day, index : number) => (
                 <li key={index}>{agenda.day}</li>
               ))}
             </ul>
           </React.Fragment>
       </ul>
      )}

    </Modal>
  );
};

export default CustomModal;
