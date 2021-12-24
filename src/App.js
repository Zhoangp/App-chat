import SignIn from './views/sign_in'
import Chat from './views/chat/Chat'
import SignUp from './views/sign_up/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './sass/main.scss'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/chat" component={Chat}/>
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={SignIn}/>
    </Switch>
    </BrowserRouter>
  );
}
export default App;
