// App.js
import React from 'react';
import Sidebar from './component/navbar/Sidebar';
import './App.css';
import './component/navbar/Sidebar.css';
import { Routes, Route } from 'react-router-dom'; 
import ProductGet from './component/product/ProductGet';
import ProductPost from './component/product/ProductPost';
import MachineGet from './component/machine/MachineGet';
import MachinePost from './component/machine/MachinePost';
import MaterialPost from './component/material/MaterialPost';
import MaterialGet from './component/material/MaterialGet';
import ProcessGet from './component/process/ProcessGet';
import ProcessPost from './component/process/ProcessPost';
import ProcessMachinePost from './component/process/ProcessMachinePost';
import ProductEdit from './component/product/ProductEdit';
import ProcessEdit from './component/process/ProceesEdit';
import MachineEdit from './component/machine/MachineEdit';
import MaterialEdit from './component/material/MaterialEdit';
import ProcessMachineGet from './component/process/ProcessMachineGet';
function App() {
  return (
    <div className= "hero">
      <Sidebar />
      <Routes>
        <Route path="/all/products/" element={<ProductGet/>} />
        <Route path = "/add/products/" element = {<ProductPost/>}/>
        <Route path="/all/machine/" element={<MachineGet/>} />
        <Route path = "/add/machine/" element = {<MachinePost/>}/>
        <Route path="/all/material/" element={<MaterialGet/>} />
        <Route path = "/add/material/" element = {<MaterialPost/>}/>
        <Route path="/all/process/" element={<ProcessGet/>} />
        <Route path = "/add/process/" element = {<ProcessPost/>}/>
        <Route path = "/all/processmachine/:id" element = {<ProcessMachinePost/>}/>
        <Route path = "/all/processmachine/" element = {<ProcessMachineGet/>}/>
        <Route path = "/edit/products/:id" element = {<ProductEdit/>}/>
        <Route path = "/edit/process/:id" element = {<ProcessEdit/>}/>
        <Route path = "/edit/material/:id" element = {<MaterialEdit/>}/>
        <Route path = "/edit/machine/:id" element = {<MachineEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
