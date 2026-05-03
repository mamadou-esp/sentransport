import './StatReseau.css';

function StatReseau({ lignes }) {
    const totalLignes = lignes.length;
    const totalArrets = lignes.reduce((acc, ligne) => acc + ligne.arrets, 0);
    const ligneMaxArrets = lignes.reduce((max, ligne) => (ligne.arrets > max.arrets ? ligne : max), lignes[0]);

    return (
        <div className="stat-reseau">
            <div className="stat-item">Total Lignes: {totalLignes}</div>
            <div className="stat-item">Total Arrêts: {totalArrets}</div>
            <div className="stat-item">Ligne avec le plus d'arrêts: {ligneMaxArrets.numero} ({ligneMaxArrets.arrets} arrêts)</div>
        </div>
    );
}

export default StatReseau;