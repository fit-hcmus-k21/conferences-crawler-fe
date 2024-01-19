import React from 'react';
import Conf_Item from '../interfaces/Conf_Item';

interface ConfCardProps {
  conference: Conf_Item;
}

const Conf_Card: React.FC<ConfCardProps> = ({ conference }) => {
  return (
    <div className="conf-card">
      <h2>{conference.name}</h2>
      <p>Start Date: {conference.start_date}</p>
      <p>Location: {conference.location}</p>
      <p>Topic: {conference.topic}</p>
      <p>URL: {conference.url}</p>

      <h3>Speakers:</h3>
      <ul>
        {conference.speakers.map((speaker, index) => (
          <li key={index}>{speaker.name}</li>
        ))}
      </ul>

      {/* Render Timeline and Track similarly */}
      
      <p>Register URL: {conference.register_url}</p>
    </div>
  );
};

export default Conf_Card;
