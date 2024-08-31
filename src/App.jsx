import './App.css'
import Header from './HeaderComponent/Header.jsx';
import ProjectsWidget from './ProjectsWidgetComponent/ProjectsWidget.jsx';

function App() {
  //agregar lista autogenerada de proyectos
  return (
    <>
      <Header />
      <main>
        <ul id='projects'>

        </ul>
      </main>
    </>
  )
}

export default App