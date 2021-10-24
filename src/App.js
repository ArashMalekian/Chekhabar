import {Switch , Route} from "react-router-dom"

//Components
import { ChatPage } from "./Components/ChatPage";
import { Login } from "./Components/Login";

//Contexts
import { AuthContextProvider } from "./Contexts/AuthContextProvider";


function App() {
  return (
    <div >
      <AuthContextProvider>
      <Switch>
        <Route path="/chatpage"  component={ChatPage} />
        <Route path="/" component={Login} />
      </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
