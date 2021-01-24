import { Route, Switch } from 'react-router-dom';
import './App.css';
import CreatePages from './Components/CreatePages';
import Page from './Components/Page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CreatePages} />
        <Route path="/:name" component={Page}/>
      </Switch>
    </div>
  );
}

export default App;
