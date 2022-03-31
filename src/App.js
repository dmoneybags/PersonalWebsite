import logo from './logo.svg';
import './App.css';
import { MainSection} from './index.js'
import { MainOverview} from './index.js'
import { Article, ExtracurricularArticle } from './article.js'
import { GoalData } from './articleDefs';
import { WorkData } from './articleDefs';
import { PLTWData } from './articleDefs';
import { HatcheryData } from './articleDefs';
import { EcgData } from './articleDefs';
import { Data2048 } from './articleDefs';
import { PkmnData } from './articleDefs';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
6         <Route path="/" element = {<MainSection view={<MainOverview/>}/>}/>
          <Route path="/Goals" element = {<ExtracurricularArticle article = {GoalData}/>}/>
          <Route path="/Work" element = {<ExtracurricularArticle article = {WorkData}/>}/>
          <Route path="/PLTW" element = {<ExtracurricularArticle article = {PLTWData}/>}/>
          <Route path="/Hatchery" element = {<ExtracurricularArticle article = {HatcheryData}/>}/> 
          <Route path="/ECGNET" element = {<ExtracurricularArticle article = {EcgData}/>}/>   
          <Route path="/2048" element = {<ExtracurricularArticle article = {Data2048}/>}/>
          <Route path="/PokemonAi" element = {<ExtracurricularArticle article = {PkmnData}/>}/>          
      </Routes>
7   </BrowserRouter>
  );
}

export default App;
