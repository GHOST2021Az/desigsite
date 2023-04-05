 import logo from './logo.svg';
  import './App.css';
 
  import Users from './API/users';
import Amber from './site-Task/clas2';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import Tag from './tag';
 import Sam from './site-Task/class3';
 import Hello from './site-Task/Navbar';
import { Navbar } from 'react-bootstrap';
import Alex from './site-Task/class1';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Basic from './API/designCard';
import Cardlist from './API/cardlist';
  function App() {
  
   return (
     <div className="App">
       <Routes>
         <Route exact path="/" element={<Hello />} />
         <Route path="/class3" element={<Sam />} />
         <Route path="/clas2" element={<Amber />} />
         <Route path="/clas1" element={<Alex />} />
   
         <Route path="/cardlist" element={<Cardlist />} />
       </Routes>
     </div>
   );
 }
 export default App

//  import ReactDOM from "react-dom/client";
//  import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import Layout from "./API/Layout";
//  import Home from "./API/Home";
//  import Blogs from "./API/Blogs";
// import Contact from "./API/Contact";
//  import NoPage from "./API/NoPage";
// import Info from "./API/Info";
//  export default function App() {
//    return (
//      <BrowserRouter>
//        <Routes>
//          <Route path="/" element={<Layout />}>
//            <Route index element={<Home />} />
//            <Route path="blogs" element={<Blogs />} />
//            <Route path="contact" element={<Contact />} />
//            <Route path="info" element={<Info />} />
//            <Route path="*" element={<NoPage />} />
//          </Route>
//        </Routes>
//      </BrowserRouter>
//    );
//  }

//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<App />);