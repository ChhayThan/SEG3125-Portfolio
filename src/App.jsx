import "./App.css";
import { About } from "./components/About";
import { CaseStudy } from "./components/CaseStudy";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen gap-1 bg-stone-50 text-black">
      <Home />
      <About />
      <CaseStudy />
      <Experience />
    </div>
  );
}

export default App;
