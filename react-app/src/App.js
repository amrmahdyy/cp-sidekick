import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Text from 'react'
import CustomNavbar from './components/navbar/CustomNavbar'
import EditorPage from './components/editorPage/EditorPage'
function App() {


  return (

    
      <div className="App">
        <CustomNavbar/>
        <Switch>
          <Route path="/editor">
          <EditorPage />
        </Route>
        </Switch>


      </div>
  );
}

export default App;
