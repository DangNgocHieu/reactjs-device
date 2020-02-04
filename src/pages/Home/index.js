import React, { Component } from 'react';
// import { Form, Container} from 'reactstrap';
import Header from './../../component/Header';
import Content from './../../component/Content'
import Footer from './../../component/Footer' 

class Home extends Component {

  handle(i){
    this.props.history.push(`${i}`) //truyền string
  }
  render() {
    return (    
         
      <div id="home">
         <Header />
         <Content />
         <Footer />
      </div>
    );
  }
}

export default Home;
