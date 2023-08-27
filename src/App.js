// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // const number = 80;
  // const students = [
  //   {id: 1, name: "Shawapon", job: "Developer"},
  //   {id: 2, name: "Iqbal Hossain", job: "Developer"},
  //   {id: 3, name: "Arafat", job: "Developer"},
  //   {id: 4, name: "Shaowriar", job: "Developer"},
  //   {id: 5, name: "Sanjida Yeasmin", job: "Developer"},
  //   {id: 6, name: "Habibur Rahman", job: "Developer"}
  // ]
  // const myStyles = {
  //   color: "black",
  //   backgroundColor: "aqua",
  //   fontSize: "30px",
  //   padding: "20px",
  //   borderRadius: "10px"
  // }

  // const [users, setUsers] = useState([])

  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(res => res.json())
  // .then(data => setUsers(data))

  // const users = [
  //   {id: 1, name: "Sakib", email: "sakib@gmail.com"},
  //   {id: 2, name: "Mushfiq", email: "mushfiq@gmail.com"},
  //   {id: 3, name: "Taskin", email: "taskin@gmail.com"},
  //   {id: 4, name: "Lition", email: "lition@gmail.com"},
  //   {id: 5, name: "Soumya", email: "soumya@gmail.com"}
  // ]

  return (
    <div className='app-component'>
      {/* <h2>I got A+. My number is: {number}</h2>
      {
        // students.map(student => <li>{student.name}</li>)
        students.map(student => <Person key={student.id} student={student}></Person>)
      } */}

      {/* <Person number={number}></Person>
      <Person></Person>
      <Person number = "90"></Person>
      <Person></Person> */}

      {/* <Person></Person> */}

      {/* <h1 style={{color: "red", backgroundColor: "yellow"}}>Hello World, This is my first React App</h1>
      <p style={myStyles}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum animi nulla dignissimos, blanditiis dolorem culpa porro, numquam doloribus reprehenderit quasi est autem obcaecati id sint! Sequi inventore debitis dolorem!</p>
      <h3>Our Batch N232-1</h3> */}
      {/* <img alt=""/> */}

      {/* {
        users.map(user => <User key={user.email} user={user}></User>)
      } */}
      {/* <User></User>
      <User></User>
      <User></User>
      <User></User> */}

      <Counter></Counter>
    </div>
  );
}

// function Person(props) {
//   // console.log(props);
//   // console.log(props.number);
//   // const number = props.number;
//   return <div>
//     <h2>This is Person Component: {props?.student?.name}</h2>
//   </div>
// }

// function User(props){

//   return (
//     <div>
//       <h5>User Name: {props.user.name}</h5>
//       <p>Email: {props.user.email}</p>
//     </div>
//   )
// }

function Counter(){
  // const number = 0;
  const [number, setNumber] = useState(0);

  const increaseCount = () =>{
    // console.log("Increase");
    const newCount = number + 1;
    setNumber(newCount);
  }

  const decreaseCount = () =>{
    // console.log("Decrease");
    setNumber(number -1);
  }

  return (
    <div>
      <h1>Count: {number}</h1>
      <button onClick={increaseCount}>Increase +</button>
      <button onClick={decreaseCount}>Decrease -</button>
    </div>
  )
}

export default App;
