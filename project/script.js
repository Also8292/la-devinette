/**
 * function aleatoire
 */

var nbr = Math.round(Math.random() * 100);//valeur aléatoire compris entre 0 et 100

var essai = 0;//nombre d'essais initialisé à 0

function aleatoire() {

    essai = essai + 1;//incrémentation du nombre d'essai

    //Si le nombre d'essai est inferieur à 6

    if(essai < 6) {

        //valeur saisi par l'utilisateur
        var valeur_saisi = document.querySelector('#id_chiffre').value;

        //Conversion de la valeur entré en entier
        var chiffre_saisi = parseInt(valeur_saisi);

        if(chiffre_saisi != NaN && chiffre_saisi > 0 && chiffre_saisi <= 100) {
            // Si le chiffre entré est inferieur à la valeur aléatoire
            if(chiffre_saisi < nbr) {
                document.querySelector('#resultat').innerHTML = "Ce chiffre est trop petit !!!";
                document.querySelector('#essai').innerHTML = 6 - essai;
                return false;
            }


            //Si le chiffre entré est suppérieur à la valeur aléatoire
            else if(chiffre_saisi > nbr) {
                document.querySelector('#resultat').innerHTML = "Ce chiffre est trop grand !!!";
                document.querySelector('#essai').innerHTML = 6 - essai;
                return false;
            }


            /**
             * Si le chiffre est égal à la valeur aléatoire 
             * Affichage du message "Bravo"
             * Et affichage du bouton "Recommencer"
             */

            else {
                document.querySelector('#resultat').innerHTML = "Bravo !!!";
                document.querySelector('#reessayer').style.visibility = 'visible';
                document.querySelector('#reessayer').value = 'Recommencer';
                return false;
            }
        }

        else {
            document.querySelector('#resultat').innerHTML = "La valeur entrée n'est pas valide";
            document.querySelector('#reessayer').style.visibility = 'visible';
            document.querySelector('#reessayer').value = 'Réessayer';
        }
    }


    /**
     * Si le nombre d'essai est suppérieur à 6
     * Affichage du message "oups vous avez perdu"
     * Et affichage du bouton "Réessayer"
     */

    else {
    document.querySelector('#resultat').innerHTML = "Oups vous avez perdu. La solution est : " + nbr;
    document.querySelector('#essai').innerHTML = 0;
    document.querySelector('#reessayer').style.visibility = 'visible';
    document.querySelector('#reessayer').value = 'Réessayer';
    return true;
    } 
}




/**By @!$0 from AccessCodeSchool / Kéloumak :: <never give up!/>*/