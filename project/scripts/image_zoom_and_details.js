function initImageZoom() {
    const images = document.querySelectorAll('.art-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${image.src.replace('thumbnail', 'large')}" alt="${image.alt}">
                    <div class="image-details">
                        <h3>${image.dataset.title}</h3>
                        <p>Artist: ${image.dataset.artist}</p>
                        <p>${image.dataset.description}</p>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
        });
    });
}