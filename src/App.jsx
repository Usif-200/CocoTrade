import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
const App = () => {
  return <div className="text-zinc-100 bg-black p-4">
    <NavBar/>
    <div>
      <HomePage/>
    </div>
    <Footer/>
  </div>;
};

export default App;
