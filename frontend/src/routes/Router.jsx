import Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import DoctorList from "../components/Doctors/DoctorList"
import DoctorCard from "../components/Doctors/DoctorCard"

import { Routes, Route } from 'react-router-dom'

const Router = () => {
    return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Doctor" element={<DoctorList />} />
            <Route path="/Doctor/:id" element={<DoctorCard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
};

export default Router;
