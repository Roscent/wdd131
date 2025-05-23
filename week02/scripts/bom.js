const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

buttonElement.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button');
        li.textContent = input.ariaValueMax;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    }
    input.focus();
});

