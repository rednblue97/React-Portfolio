import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import About from './components/about/About';
import ProjectList from './components/projectList/Project';
import Contact from './components/conatct/Contact'

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
