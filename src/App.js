import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Accommodation from './components/accommodation';
import Dhome from './routes';

function App() {
  return (
    <div>
      <Dhome />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Dhome />}>
    //       {/* Other routes can be nested here */}
    //       {/* <Route path="accommodation" element={<Accommodation />} /> */}
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;