import { Route, Switch, useParams} from 'react-router-dom'
import Nav from './components/Nav';
import Movies from './components/Movie';
import './style/app.css'

function App() {


  return (
    <div className="App">
      < Nav />
      <Switch>
        <Route exact path="/" render={()=> <Movies />} />
      </Switch>
    </div>
  );
}

export default App;
