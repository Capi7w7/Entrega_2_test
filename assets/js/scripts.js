document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8001/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('cards-container');
            data.vehiculos.forEach(vehiculo => {
                const card = document.createElement('div');
                card.classList.add('col-md-4');
                
                const cardInner = document.createElement('div');
                cardInner.classList.add('card', 'mb-4');
                
                const img = document.createElement('img');
                img.src = '...';
                img.classList.add('card-img-top');
                img.alt = `Imagen de ${vehiculo.marca}`;
                
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                
                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = vehiculo.modelo;
                
                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.textContent = `Año: ${vehiculo.year}`;
                
                const cardButton = document.createElement('a');
                cardButton.href = '#';
                cardButton.classList.add('btn', 'btn-primary');
                cardButton.textContent = 'Ver más';
                
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardButton);
                
                cardInner.appendChild(img);
                cardInner.appendChild(cardBody);
                
                card.appendChild(cardInner);
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});