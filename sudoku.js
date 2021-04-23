
const verifier = () => {
    //verifier que les nombres sont bien de un à neuf
    // recuperer les inputs
    const listeInput = document.querySelectorAll('input');
    
    for (const input of listeInput){
        //verifier si le champ est valide
        const validiteInput = input.checkValidity();
        
        if (validiteInput === false){
            //si pas valite on arrete le programme
            return
        }
    }
// tableau qui contien toutes les lignes
    const sudoku = []

// recuperer toutes les valeurs
    for (let ligne = 0; ligne < 9; ligne += 1){
        const sudokuLigne = []
    for (let col = 0; col < 9; col += 1){
        const identifiant = 'case' + ligne + '-' + col;
        const input = document.getElementById(identifiant);
        const valeur = input.value
        let nombre

        if (valeur === ''){
            nombre = ''
        } else {
            // si pas vide on transforme la valeur en nombre
            nombre = parseInt(valeur, 10)
        }
        // ajouter valeur à la ligne
        sudokuLigne.push(nombre)
    }
    //ajouter la ligne au sudoku
    sudoku.push(sudokuLigne)
    }
    console.log(sudoku);
}


const bouton = document.getElementById("bouton-verifier");

//asigner un evenement click à la fonction verifier

bouton.addEventListener('click', verifier);