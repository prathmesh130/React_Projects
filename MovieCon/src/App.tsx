import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Movie Con
      </h1>
    </>
  )
}

export default App
