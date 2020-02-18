import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
// import DataTable from './components/Table/Table';
import DataTable from './components/Table/DataTable';

const API_URL: string = 'http://localhost:3000/shipments';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      let responseData = res.data;
      let filteredData = responseData.filter((result: any) => {
        let searchValue = searchTerm.toLowerCase();
        return result.id.toLowerCase().indexOf( searchValue.toLowerCase() ) !== -1
      });
      setData(filteredData);
      setLoading(false);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div className="wrapper">
      <Header />
      {loading && (
        <div className="loading-container">
          <h6>Loading data....</h6>
        </div>
      )}
      <Search serachTerm={searchTerm} handleChange={handleChange} />
      <DataTable data={data} />
      {/* <DataTable data={data} /> */}
    </div>
  );
};

export default App;
