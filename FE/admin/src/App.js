import './App.scss';
import TabNav from './component/TabNav';
import TabContent from './component/TabContent';
import { useEffect } from 'react'
import { Routes, useNavigate, Route } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const isAdminLogin = localStorage.getItem('isAdminLogin')
    if (isAdminLogin) navigate('/users')
    else navigate('/login')
  }, [])

  return (
        <div className="admin">
          <TabNav/>
          <TabContent/>
        </div>
  );
}

export default App;
