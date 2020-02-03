import React, { Component }from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = React.lazy(() => import('./views/Pages/Login'));
const Home = React.lazy(() => import('./views/Pages/Home'));

class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>

        <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
        <Route exact path="/home" name="Home Page" render={props => <Home {...props}/>} />
        </React.Suspense>
      </HashRouter>
    );
  }
}
export default App;

//   class PersonList extends React.Component {
//   state = {
//     persons: []
//   }


//   componentDidMount() {
//     axios.get(`https://my-json-server.typicode.com/typicode/demo/posts`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
//     .catch(error => console.log(error));
//   }

//   render() {
//     return(
//     <ul>
//     { this.state.persons.map(person => <li>{person.id}</li>)}
//     { this.state.persons.map(person => <li>{person.title}</li>)}
//   </ul>
//     )
//   }
// }
// export default PersonList;
