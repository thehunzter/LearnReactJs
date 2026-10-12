

import "./App.css";
import Header from "./components/Header/Header.tsx";
import Examples from "./components/MainContent/Examples.tsx";
import MainContents from "./components/MainContent/MainContents.tsx";


function App() {


  return (
    <>
      <Header />

      <main>
       <MainContents />
        <Examples/>
        
      </main>
    </>
  );
}

export default App;
