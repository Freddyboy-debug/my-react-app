import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./pages/Navbar";

export default function App() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route index element={<Contact />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="home" element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);