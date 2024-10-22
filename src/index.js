// import ReactDOM from "react-dom/client";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Layout from "./pages/Layout";
// // import Home from "./pages/Home";
// // import Blogs from "./pages/Blogs";
// // import Contact from "./pages/Contact";
// // import NoPage from "./pages/NoPage";

// // export default function App() {
// //     return (
// //         <BrowserRouter>
// //             <Routes>
// //                 <Route path="/" element={<Layout />}>
// //                     <Route index element={<Contact />} />
// //                     <Route path="blogs" element={<Blogs />} />
// //                     <Route path="home" element={<Home />} />
// //                     <Route path="*" element={<NoPage />} />
// //                 </Route>
// //             </Routes>
// //         </BrowserRouter>
// //     );
// // }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// //root.render(<App />);
//import { useState } from "react";
import ReactDOM from "react-dom/client";
// import Todos from "./Todos";
// import './styles.css';

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState(["todo 1", "todo 2"]);

//     const increment = () => {
//         setCount((c) => c + 1);
//     };

//     return (
//         <>
//             <Todos todos={todos} />
//             <hr />
//             <div>
//                 Count: {count}
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// const Header = () => {
//     return (
//         <>
//             <h1>Hello Style!</h1>
//             <p>Add a little style!.</p>
//         </>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);