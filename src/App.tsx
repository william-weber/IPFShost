import './App.css'
import ConnectWalletButton from './components/ConnectWalletButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>G Host</h1>
          <ConnectWalletButton />
      </header>
      <div className="App-body"></div>
    </div>
  );
}

export default App
