// import logo from './logo.svg';
// import './App.css';

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

// export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Bienvenue sur SenTransport</h1>
//       <p>Le transport en commun a Dakar</p>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <p>Bienvenue ! Cette application vous aide a trouver
        votre ligne de bus a Dakar.</p>
        <div className="statistiques">
          <Statistique />
          <Statistique />
          <Statistique />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;