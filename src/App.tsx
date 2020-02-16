import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Search from './components/Search/Search';
import DataTable from './components/Table/Table';

const API_URL: string = 'http://localhost:3000/shipments';

export interface IState {
  data: any;
}

export interface IProps {}

class App extends Component<IProps, IState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch(API_URL)
      .then(res => res.json())
      .then(response => this.setState({ data: response }));
  }

  render() {
    
    return (
      <div className="wrapper">
        <Header />
        <Search />
        <DataTable data={this.state.data} />
      </div>
    );
  }
}

export default App;
