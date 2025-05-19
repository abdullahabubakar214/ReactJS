import Login from "./component/Login";
import Profile from "./component/Profile";
import { contextProvider } from "../src/context/contextProvider";

function App() {
  return (
    <contextProvider>
      <Login />
      <Profile />
    </contextProvider>
  );
}

export default App;
