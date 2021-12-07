import './App.css'
import ConnectWalletButton from './components/ConnectWalletButton'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>IPFS Host</h1>
          <ConnectWalletButton />
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
