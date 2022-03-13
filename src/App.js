import Aside from "./components/aside";
import Main from "./components/main";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <Main />
      <Aside />
    </div>
  );
}

export default App;
