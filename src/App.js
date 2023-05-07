import './App.css';
import RgForm from './Registraionform';
// import RegistrationForm from './Registraionform';
// import Functional from './components/functional';
// import { useState } from 'react';
// import ClassBased from './components/classBased';

// const userData = [
//   {
//     name: "Nitin",
//     gender: "male",
//     age: "27",
//   },
//   {
//     name: "Pooja",
//     gender: "female",
//     age: "25",
//   },
//   {
//     name: "Shams",
//     gender: "male",
//     age: "24",
//   },
// ]

function App() {
  return (
    <div className="App">
      {/* <Functional userData={userData} /> */}
      {/* <Functional user={userData}></Functional> */}
      {/* <ClassBased user={userData}></ClassBased> */}
      {/* <RegistrationForm></RegistrationForm> */}
      <RgForm></RgForm>
    </div>
  );
}

export default App;
