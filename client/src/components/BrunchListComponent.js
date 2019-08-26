import React from 'react';
import axios from 'axios';
import BrunchItemList from './BrunchList';

class BrunchListComponent extends React.Component {
  constructor() {
    super() 
    this.state = {
      data: []
    };
    this.collectData = this.collectData.bind(this);
  }
  componentDidMount() {
    this.collectData();
  }
  async collectData() {
    const response = await axios.get('/brunch')
    this.setState({
      data: response.data.businesses
    })
  }
  render() {
    return (
      <div>
        
        BrunchList Component
        <BrunchItemList data={this.state.data}/>
      </div>
    )
  }
}

export default BrunchListComponent;