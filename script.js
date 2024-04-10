let manche = 0;
let Victoire = 0;
let Victoirepc = 0;

function play(choij) {
    const choix = ['pierre', 'feuille', 'ciseaux'];
    const choipc = choix[Math.floor(Math.random() * 3)];
    
    manche++;
    
    let resultText = '';
    
    if (choij === choipc) {
        resultText = "Égalité!";
    } else if (
        (choij === 'pierre' && choipc === 'ciseaux') ||
        (choij === 'feuille' && choipc === 'pierre') ||
        (choij === 'ciseaux' && choipc === 'feuille')
    ) {
        resultText = "Vous avez gagné!";
        Victoire++;
    } else {
        resultText = "Vous avez perdu!";
        Victoirepc++;
    }
    
    document.getElementById('result').innerText = `Vous avez choisi ${choij}, l'ordinateur a choisi ${choipc}. ${resultText}`;
    document.getElementById('manche').innerText = manche;
    document.getElementById('Victoire').innerText = Victoire;
    document.getElementById('Victoirepc').innerText = Victoirepc;
}
