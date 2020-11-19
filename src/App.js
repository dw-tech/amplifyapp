import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Secured React App</h1>
        <p>Nobody gives a shit, dude.</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
