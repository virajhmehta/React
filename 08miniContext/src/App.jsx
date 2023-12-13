import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UsertContexProvider from "./context/UserContextProvider";

function App() {
  

  return (
    <UsertContexProvider>
      <h1>React with chai and Share</h1>
      <Login />
      <Profile />
    </UsertContexProvider>
  );
}

export default App;
