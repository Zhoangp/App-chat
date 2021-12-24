import Chat from './views/chat/Chat'
import Sign from './views/sign/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './sass/main.scss'
import Loading from './loading/index'
function App() {
  return (
    <BrowserRouter>
    <Loading></Loading>
    <Switch>
      <Route path="/chat" component={Chat}/>
      <Route path="/"  component={Sign}/>
    </Switch>
    </BrowserRouter>
  );
}
export default App;
