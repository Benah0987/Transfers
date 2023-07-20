import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Player() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/players/${id}`)
      .then((response) => response.json())
      .then((data) => setPlayer(data))
      .catch((error) => {
        console.error('Error fetching player:', error);
        // Handle error, show a message, or redirect to an error page if needed
      });
  }, [id]);

  if (player === null) {
    return <p>Loading player data...</p>;
  }

  return (
    <div className= 'mt-5 mx-auto'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col md-8 mt-5 pt-5'>
            <div className='row z-depth-3'>
              <div className='col-sm-4 bg-info rounded-left'>
                <div className='card-block text-center text-white'>
                  <h4>{player.name}</h4>
                  <img src={player.image} alt={player.name} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
              <div className='col-sm-8 bg-white rounded-right'>
                <h3 className='mt-3 text-center'>Player Stats</h3>
                <hr className='badge-primary mt-0 w-25 align-center' />
                <div className='row mx-5'>
                  <div className='col-sm-6'>
                    <p className='fw-bold'>Stamina:</p>
                    <h5 className='text-muted'>{player.stamina}</h5>
                  </div>
                  <div className='col-sm-6'>
                    <p className='fw-bold'>Pace:</p>
                    <h5 className='text-muted'>{player.pace}</h5>
                  </div>
                  <div className='col-sm-6'>
                    <p className='fw-bold'>Current Team:</p>
                    <h5 className='text-muted'>{player.current_team}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
