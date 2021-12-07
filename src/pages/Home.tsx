import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h2>What would you like to do?</h2>
      <ul>
        <li>
          <Link to="upload">Upload an image from my computer</Link>
        </li>
        {/*<li>Upload an image from the web</li>
        <li>Publish some text</li>
        <li>Save a webpage to a PDF on IPFS</li>
        <li>Make a copy of a file on IPFS</li>
        <li>Copy a video from YouYube to IPFS</li>*/}
      </ul>
    </>
  )
}
