import { Mmain } from './main.js';


for (let display of Mmain) {
    showMessage(display);
}

function showMessage(display) {
    const div1 = document.createElement('div');
    div1.className = 'display';

    const img = document.createElement('img');
    img.src = display.src;
    img.alt = `Photo of ${display.src}`;
    const mname = document.createElement('p');
    mname.className = 'yeab';
    mname.innerText = display.name;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = display.email;

    div1.append(img, mname, email);
    document.querySelector('.photo').append(div1);
}


const searchInput = document.querySelector('.search-container input[type="text"]');


searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const allPhotos = document.querySelectorAll('.display');

    allPhotos.forEach(photo => {
        const name = photo.querySelector('.yeab').innerText.toLowerCase();
        const email = photo.querySelector('.email').innerText.toLowerCase();

        if (name.includes(searchTerm) || email.includes(searchTerm)) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
});