import "./App.css"
import MyNav from "./components/MyNav"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./components/MyFooter"
import MyJumbo from "./components/MyJumbo"
import LatestRelease from "./components/LatestRelease"

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyJumbo />
      <LatestRelease />
      <MyFooter />
    </div>
  )
}

export default App
