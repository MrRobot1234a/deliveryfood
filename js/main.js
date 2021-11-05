const buttonAuth = document.querySelector('.button-auth'),
      buttonOut =  document.querySelector('.button-out'),
      userName = document.querySelector('.user-name'),
      modalAuth = document.querySelector('.modal-auth'),
      closeAuth = document.querySelector('.close-auth'),
      logInForm = document.getElementById('logInForm'),
      inputLogin = document.getElementById('login'),
      inputPassword = document.getElementById('password')


const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'flex';

    userName.style.display = 'flex';
    userName.textContent = user.name;

    modalAuth.style.display = 'none';
};

const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';

    userName.style.display = 'none';
    userName.textContent = '';

    localStorage.removeItem('user');

    modalAuth.style.display = 'none';
};

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
});

buttonOut.addEventListener('click', () => {
    logout();
});

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
});

logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    

    if (inputLogin.value === '' || inputPassword.value === '') {
        if (inputLogin.value === '') {
            alert('Заполните поле login');
            return
        }
    
        if (inputPassword.value === '') {
            alert('Заполните поле password');
            return
        }

        
        return
        
    } else {
        const user = {
            name: inputLogin.value,
            password: inputPassword.value
        }
    
        localStorage.setItem('user', JSON.stringify(user));
    
        login(user);
    }
});

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}