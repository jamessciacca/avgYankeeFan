import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const sendPlayer = async () => {
      try {
        const newPlayer = {
          name: 'Aaron Judge',
          team: 'Yankees',
          position: 'RF'
        };

        const res = await axios.post('http://localhost:5050/api/players', newPlayer);
        console.log('✅ Player added:', res.data);
      } catch (err) {
        console.error('❌ Failed to add player:', err);
      }
    };

    sendPlayer();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Adding player to backend from code...</h1>
    </div>
  );
}

export default App;