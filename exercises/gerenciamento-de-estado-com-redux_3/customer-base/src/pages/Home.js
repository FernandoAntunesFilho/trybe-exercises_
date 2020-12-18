import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends React.Component {
  render() {
    return(
      <div className='centered'>
        <span>
         <Link to='/login'>Faça seu Login para acessar o sistema</Link>
        </span>
      </div>
    )
  }
}

export default Home;
