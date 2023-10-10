import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Mailchimp from './Pages/Subscribe/Mailchimp'
import Layout from './components/Layout'
import Ebook from './Pages/Ebook/Ebook'
import Booking from './Pages/Booking/Booking'
import "@stripe/stripe-js";
import Cancel from './Pages/Stripe/Cancel'
import Success from './Pages/Stripe/Success'
import Stripe from './components/Stripe'

import './fonts/TanAegeanRegular.ttf';

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/subscribe" element ={<Mailchimp />} />
        <Route path= "/ai-training-for-realtors" element={<Ebook />} />
        <Route path= "/book-a-consultation" element={<Booking />} />
        <Route path= "/checkout" element={<Stripe />} />
        <Route path= '/cancel' element ={<Cancel />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      </Layout>
    </>
  )
}

export default App;
