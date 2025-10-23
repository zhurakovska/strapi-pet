import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
	const [contacts, setContacts] = useState([]);

	console.log(contacts, "contacts")

	useEffect(() => {
		fetch("http://localhost:1337/api/contacts")
			.then((res) => res.json())
			.then((data) => setContacts(data.data));
	}, []);

	return (
		<div>
			<h1>My Contacts</h1>
			<ul>
				{contacts.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
