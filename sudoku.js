
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
// recuperer toutes les valeurs
    for (let ligne = 0; ligne < 9; ligne += 1){
    for (let col = 0; col < 9; col += 1){
        const identifiant = 'case' + ligne + '-' + col;
        const input = document.getElementById(identifiant);
        console.log(identifiant);
    }
    
    }
}


const bouton = document.getElementById("bouton-verifier");

//asigner un evenement click à la fonction verifier

bouton.addEventListener('click', verifier);