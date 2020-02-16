import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DataTable from './components/Table/Table';

const API_URL: string = 'http://localhost:3000/shipments';


const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      setData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="wrapper">
      <Header />
      {loading && (
        <div className="loading-container">
          <h6>Loading data....</h6>
        </div>
      )}
      <Search />
      <DataTable data={data} />
    </div>
  );
};

export default App;
