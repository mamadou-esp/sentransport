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


/**Code Principale */
// import './App.css';
// import Header from './Header';
// import Footer from './Footer';
// import Statistique from './Statistique';

import './App.css';
import Header from './Header';
import ListeLignes from './ListeLignes';
import Footer from './Footer';

function App() {
  const lignes = [
    { id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14 },
    { id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18 },
    { id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12 },
    { id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10 },
    { id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16 },
    { id: 6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11 },
  ];

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <ListeLignes lignes={lignes} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

// export default App;

/**Code temporaire */
// import './App.css';
// import Header from './Header';
// import LigneBus from './LigneBus';

// function App() {
//   return (
//     <div className="App">
//       <Header />
      
//       <main className="contenu">
//         <LigneBus
//           numero="15"
//           depart="Parcelles Assainies"
//           arrivee="Plateau"
//           arrets={14}
//         />
        
//         <LigneBus
//           numero="7"
//           depart="Guediawaye"
//           arrivee="Place Obe"
//           arrets={18}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;