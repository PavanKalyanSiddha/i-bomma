import AddOns from "./Components/AddOns";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import ForeignDub from "./Components/ForeignDub";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import WebSeries from "./Components/WebSeries";



function App() {
  return (
    <div className="  bg-[#1d1d1d] h-full ">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />

      {/* Cards */}
      <Cards />

      {/* SearchBar */}
      <SearchBar />

      {/* WebSeries */}
      <WebSeries />
      
      {/* ForeignDub */}
      <ForeignDub  />

      {/* AddOns  */}
      <AddOns />

      {/* Footer */}
      <Footer />
      
      

    
    </div>
  );
}

export default App;
