import logo from './logo.svg';
import './App.css';
import { ConnectButton } from "360dialog-connect-button";
import styled, { css } from 'styled-components';


function App() {
  const handleCallback = (callbackObject) => {
    /* The callback function returns the client ID as well as all channel IDs, for which you're enabled to fetch the API key via the Partner API */

    console.log("client ID: "+callbackObject.client)
    console.log("channel IDs: " + callbackObject.channels);
  }

  const StyledConnectButton = styled(ConnectButton)`
    outline: none;
    background: #ff4369;
    color: white;
    padding: 8px 16px;
    border-radius: 3px;
    margin-top: 32px;
    border: none;
  `;

  return (
    <div className="App">
      
      <div>
        <StyledConnectButton 
          partnerId={'1L1aTJPA'}
          callback={handleCallback}
        />
      </div>
    </div>
  );
}

export default App;
