import Chat from './views/chat/Chat'
import Sign from './views/sign/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './sass/main.scss'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/chat" component={Chat}/>
      <Route path="/"  component={Sign}/>
    </Switch>
    </BrowserRouter>
  );
}
export default App;
