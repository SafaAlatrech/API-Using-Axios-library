import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component /Navigation';
import UserList from './Component /UserList';
import { Route, Switch } from 'react-router';
import Profile from './Component /Profile';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Switch>
     <Route exact path="/" component={UserList}/>
     <Route exact path="/profil/:id" 
      render ={
           (props)=><Profile {...props }/>
              }
      />
     <UserList/>
     </Switch>
    </div>
  );
}

export default App;
