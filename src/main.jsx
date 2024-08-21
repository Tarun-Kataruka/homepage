import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// <div className="flex space-x-4">
            
//               <div className="w-1/2">
//                 <label className="block text-gray-700 font-medium mb-2">Type</label>
//                 <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700">
//                   <option>Select Category</option>
                  
//                 </select>
//               </div>

             
//               <div className="w-1/2">
//                 <label className="block text-gray-700 font-medium mb-2">Location</label>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full p-3 border border-gray-300 rounded-lg text-gray-700"
//                 />
//               </div>