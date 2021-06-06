import { ImageSlider } from "./components/ImageSlider";
import { images } from "./utils/dev-data";

function App() {
  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
