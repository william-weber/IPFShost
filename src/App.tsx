import './App.css'
import { useState } from 'react'
import ConnectWalletButton from './components/ConnectWalletButton'
import Home from './pages/Home'

function App() {
  const [page, setPage] = useState('home')

  function currentPage() {
    if (page === 'home') {
      return <Home goToUpload={() => setPage('upload')} />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>IPFS Host</h1>
          <ConnectWalletButton />
      </header>
      <div className="App-body">
        {currentPage()}
      </div>
    </div>
  )
}

export default App
