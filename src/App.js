import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './header';
import SearchComp from './searchcomp';
import Errordisp from './Errordisp';


function App() {
  return (
    <Router>
      <div className='outer-container'>
        <div className='box-container'>
          <Header></Header>
          <SearchComp></SearchComp>
          

        <Switch>
          <Route path = "/error">
            <Errordisp></Errordisp>
          </Route>
          <Route path = "/:username">
          {/* <SearchResult></SearchResult> */}
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
    
     
  );
}

export default App;
