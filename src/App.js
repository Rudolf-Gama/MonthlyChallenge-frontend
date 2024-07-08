
import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList  from './components/ChallengeList';
import axios from 'axios';
import Addchallenge from './components/Addchallenge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const[challenges,setchallenges]=useState([
]);
    
   useEffect(()=>{
     fetchChallenges();
    }, []);
    
    const fetchChallenges = async () => {
      try {
        const response= await axios.get('http://localhost:9090/challenges');   
        setchallenges(response.data);
      } catch (error) {
        console.error("Error faced while fetching challenges: ", error);
      }
    };
    
    const handlechallenge=() =>{
      fetchChallenges();
    };

  return (
    <div className="container mt-5">
      <h1 className='text-center mb-4'>Monthly Challenges</h1>
      <Addchallenge onChallengeAdded={handlechallenge}/>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}


export default App;
