import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'
import Magasin from './magasin'
import Contact from './contact'
import NotFound from './NotFound'
import Panier from './panier'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		 <Router>
    	<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/magasin" element={<Magasin />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router> 
	</>
)