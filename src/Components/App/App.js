import "./App.css";
import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Feed from "../Feed/Feed.js";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App BOdy */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
