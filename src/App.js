import SignIn from './views/sign_in'
import Chat from './views/chat/Chat'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/chat" component={Chat}/>
      <Route path="/" exact component={SignIn}/>
    </Switch>
    </BrowserRouter>
  );
}
export default App;
