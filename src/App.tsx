import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import Info from "./components/Info";
import Location from "./components/Location";
import Footer from "./components/Footer";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <MantineProvider>
        <div id="home">
          <HomeCarousel />
        </div>
      </MantineProvider>

      <div id="info">
        <Info />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="location">
        <Location />
      </div>
      <Footer />
    </>
  );
}

export default App;
