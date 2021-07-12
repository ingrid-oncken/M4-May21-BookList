import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyJumbo from "./components/MyJumbo"
// import LatestRelease from "./components/LatestRelease"
// import WarningSign from "./components/WarningSign"
// import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
// import horrorBooks from "./data/horror.json"
import romanceBooks from "./data/romance.json"

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyJumbo />
      {/* <ModalFoo /> */}
      {/* <WarningSign color="danger" text="THIS IS AN ALERT" /> */}
      {/* <SingleBook {...horrorBooks[0]} /> */}
      {/* <LatestRelease /> */}
      <BookList pizza={romanceBooks} />
      <MyFooter />
    </div>
  )
}

export default App
