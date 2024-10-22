// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './my-sass.scss';

// const Header = () => {
//   return (
//     <>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!.</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    const [count, setCount] = useState(100);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count - 1);
        }, 1000);
    });

    return <h1>I have rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);