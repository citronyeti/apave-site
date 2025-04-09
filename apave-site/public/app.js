// Charger la liste des appareils depuis l’API
fetch('/api/appareils')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.devices .category-grid');

        // Effacer les anciens appareils
        container.innerHTML = '';

        // Créer une carte pour chaque appareil
        data.forEach(appareil => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <h3>${appareil.nom}</h3>
                <ul>
                    ${appareil.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des appareils:', error));
