import React, {useState} from 'react';
// import Buttons from './Components/Buttons'
import Search from './Components/Search'
import Cards from './Components/Cards'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CardDetails from './Components/CardDetails';

const App = () => {

  const [search, setSearch] = useState("");

  const setMySearchSate = (event) => {
    setSearch(event.target.value);
  };


  return (
    <Router>
    <div className='container pt-4 mt-4 '>
    <Switch>
      <Route path="/">
      <Header/>
        <Search searchKey={search} onSearchChange={setMySearchSate} />
      <Cards searchedName={search}/>
      </Route>
    </Switch>
    <Switch>
      <Route path="/detail/:id">
      <CardDetails></CardDetails>
      </Route>
      <Redirect to="/home" />
    </Switch>
    </div>
    </Router>
   
  );
}

export default App;
