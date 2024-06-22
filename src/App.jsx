import gambar from './assets/Kagura_Special.jpg';
import './App.css'

function App() {
  return (
    <>
      <div class="card">
        <img class="gambar" src={gambar} alt="Kagura"/>
        <div class="text">
          <h2>Kagura</h2>
          <p>Upon the Cadia Riverlands, there exists a mysterious profession called Onmyouji Master that uses the yin yang arts to control spirits and see into the future. The Great Dragon bestowed this special power to channel yin and yang on people of the Cadia Riverlands, and one of his own disciples became the first-ever Onmyouji Master.</p>
        </div>
      </div>
    </>
  )
}

export default App
