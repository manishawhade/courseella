import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Login from "./views/Login";

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Login />
      <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Footer />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
