document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIQUE POUR LA PAGE D'ACCUEIL (index.html) ---
    const btnHelpNeeded = document.getElementById('btn-help-needed');
    const btnCanHelp = document.getElementById('btn-can-help');

    if (btnHelpNeeded && btnCanHelp) {
        function addClickEffect(button) {
            button.classList.add('button-clicked');
            setTimeout(() => button.classList.remove('button-clicked'), 150);
        }

        btnHelpNeeded.addEventListener('click', () => {
            window.location.href = 'need_help.html';
            addClickEffect(btnHelpNeeded);
        });

        // MODIFICATION : Le bouton "I can Help" mène maintenant à la nouvelle page
        btnCanHelp.addEventListener('click', () => {
            window.location.href = 'can_help.html';
            addClickEffect(btnCanHelp);
        });
    }

    // --- LOGIQUE POUR LES BOUTONS DE RETOUR ---
    const backButton = document.getElementById('back-button');

    // On vérifie si le bouton de retour existe sur la page actuelle
    if (backButton) {
        backButton.addEventListener('click', () => {
            // Redirige vers la page d'accueil
            window.location.href = 'index.html';
        });
    }


    // --- LOGIQUE POUR LA PAGE "I need help" (need_help.html) ---
    const functionSelect = document.getElementById('function-select');
    const optionSelect = document.getElementById('option-select');
    const selectionResult = document.getElementById('selection-result');

    if (functionSelect && optionSelect) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const allOptions = data.options;

                functionSelect.addEventListener('change', () => {
                    const selectedFunction = functionSelect.value;
                    optionSelect.innerHTML = '<option value="">--Choose an option--</option>';
                    selectionResult.textContent = '';

                    if (selectedFunction && allOptions[selectedFunction]) {
                        optionSelect.disabled = false;
                        const options = allOptions[selectedFunction];
                        options.forEach(optionText => {
                            const option = document.createElement('option');
                            option.value = optionText.toLowerCase().replace(/\s+/g, '-');
                            option.textContent = optionText;
                            optionSelect.appendChild(option);
                        });
                    } else {
                        optionSelect.disabled = true;
                    }
                });

                optionSelect.addEventListener('change', () => {
                    if (optionSelect.value) {
                        const selectedOptionText = optionSelect.options[optionSelect.selectedIndex].text;
                        selectionResult.textContent = `Vous avez choisi : ${selectedOptionText}`;
                    } else {
                        selectionResult.textContent = '';
                    }
                });
            })
            .catch(error => console.error('Erreur de chargement du JSON:', error));
    }
});