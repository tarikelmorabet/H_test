// On attend que tout le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', () => {

    // On sélectionne nos deux boutons grâce à leur ID
    const btnHelpNeeded = document.getElementById('btn-help-needed');
    const btnCanHelp = document.getElementById('btn-can-help');

    // Fonction pour gérer l'effet de clic
    function addClickEffect(button) {
        button.classList.add('button-clicked'); // On ajoute la classe CSS

        // On retire la classe après 150 millisecondes pour pouvoir cliquer à nouveau
        setTimeout(() => {
            button.classList.remove('button-clicked');
        }, 150);
    }

    // On attache un "écouteur d'événement" au premier bouton
    btnHelpNeeded.addEventListener('click', () => {
        // 1. On ouvre le lien dans un nouvel onglet
        window.open('https://www.google.com', '_blank');
        // 2. On lance l'animation de clic
        addClickEffect(btnHelpNeeded);
    });

    // On fait la même chose pour le deuxième bouton
    btnCanHelp.addEventListener('click', () => {
        // 1. On ouvre le lien dans un nouvel onglet
        window.open('https://www.wikipedia.org/', '_blank');
        // 2. On lance l'animation de clic
        addClickEffect(btnCanHelp);
    });

});