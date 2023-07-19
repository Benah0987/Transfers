import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


function Home() {
  
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/players') 
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching players:', error));
  }, []);

  return (
    <div>
      <div className=" container  mb-5" style={{"height":"60vh"}}>
        <div className="landing row mt-6">
          <div className="col d-flex justify-content-center align-items-center">
            <div>
              <h2 > Get all the News </h2>
              <p className='fs-8'>
              These messages can be used to provide feedback to users after they perform transfer-related actions on your frontend application. <br />
              Customize them as needed to match the context and user experience of your application.<br/>
               Remember to use clear and user-friendly language to enhance the overall usability of your interface.
                
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0325%2Fr1149798_1296x729_16%2D9.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      {/* Player  */}

      <div className="container mt-10">
        <p className="text-center fw-bold fs-3 text-danger">Player News</p>
        <div className="row gy-3">
                {players.map((player) => (
          <div className="col-12 col-md-6 col-lg-4" key={player.id}>
            <div className="card shadow">
              <img
                src={player.image}
                className="card-img-tops"
                alt=""
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex justify-content-center flex-column">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">{player.description}</p>
                <div className="d-flex justify-content-center">
                  <Link to={`/players/${player.id}`} className="btn btn-success mt-2 w-70">Player Profile</Link>
                </div>
              </div>
            </div>
          </div>
        ))}

</div>

      </div>
    </div>
  );
}

export default Home;