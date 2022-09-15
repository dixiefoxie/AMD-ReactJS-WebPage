import './App.css';
import {Route, Routes} from 'react-router-dom';

import { NavBar } from './components/NavBar';

import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import { Edit } from './components/pages/Edit';
import { Project } from './components/pages/Project';
import { BlogWrite } from './components/pages/BlogWrite';
import { BlogDelete } from './components/pages/BlogDelete';

import {AboutAdd} from './components/pages/addpages/AboutAdd'
import { HomeAdd } from './components/pages/addpages/HomeAdd';
import { ProjectAdd } from './components/pages/addpages/ProjectAdd';

import {AboutEdit} from './components/pages/editpages/AboutEdit';
import { HomeEdit } from './components/pages/editpages/HomeEdit';
import {ProjectEdit} from './components/pages/editpages/ProjectEdit';

import {Footer} from './components/Footer';




function App() {


  return (
    <div className='app'>
  
      <NavBar />

      
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/aboutAdd" element={<AboutAdd/>} />
        <Route path="/homeAdd" element={<HomeAdd/>} />

        <Route path="/projectAdd" element={<ProjectAdd/>} />
        <Route path="/aboutEdit" element={<AboutEdit/>} />
        <Route path="/homeEdit" element={<HomeEdit/>} />


        <Route path="/projectEdit" element={<ProjectEdit/>} />
        <Route path="/blogWrite" element={<BlogWrite/>} />
        <Route path="/blogDelete" element={<BlogDelete/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
