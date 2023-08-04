import React, { useState } from "react";
import data from "./data";
import List from "./List";


function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Remaining</h3>
        <List people={people} />
        <button className="clear-all"
          onClick={()=>{setPeople([])}}
        >
          Clear All
        </button>
      </section>
    </main>
    </>

  );
}

export default App;

// import React from "react";
// import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";
// // minified version is also included
// // import 'react-toastify/dist/ReactToastify.min.css';

// function App() {
//   const notify = () => toast.success("Wow so easy !");

//   return (
//     <div>
//       <button onClick={notify}>Notify !</button>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// }

// export default App;
