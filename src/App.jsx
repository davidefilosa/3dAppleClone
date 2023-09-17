import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import { useRef } from "react";

function App() {
  const webgiViwerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webgiViwerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Loader />
      <div id="contect" ref={contentRef}>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>

      <WebgiViewer ref={webgiViwerRef} contentRef={contentRef} />
    </div>
  );
}

export default App;
