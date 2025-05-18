import "./App.css";
import { About } from "./components/section/About";
import { CaseStudy } from "./components/section/CaseStudy";
import { Experience } from "./components/section/Experience";
import { Home } from "./components/section/Home";

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
