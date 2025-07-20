import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const user = {
    name: "2TS",
    isLogin: false,
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div>
        {user.name} -&gt; {user.isLogin ? <span style={{ backgroundColor: "blue" }}>login</span> : <span style={{ backgroundColor: "red" }}>logout</span>}
      </div>
    </>
  );
}

export default App;
