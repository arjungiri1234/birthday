import Hero from './components/Hero'
import Gallery from './components/Gallery'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <div className="bg-[#FAF7F2] text-[#2C1810] selection:bg-[#D4A843]/25 selection:text-[#2C1810]">
      <Hero />
      <main className="mx-auto max-w-7xl">
        <Gallery />
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App
