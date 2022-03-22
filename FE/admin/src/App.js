import './App.scss';
import TabNav from './component/TabNav';
import TabContent from './component/TabContent';
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/users')
  }, [])

  return (
    <div className="admin">
      <TabNav/>
      <TabContent/>
    </div>
  );
}

export default App;
