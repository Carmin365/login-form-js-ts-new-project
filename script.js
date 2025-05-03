const loginForm = document.getElementById('login-form');
const app = document.getElementById('app');
const projectList = document.getElementById('project-list');

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        loginForm.style.display = 'none';
        app.style.display = 'block';     
       } else {
        alert('Usuário ou senha inválidos');
    }
    <script>
        var exibirNome = function(){
        var meuLabel = document.getElementById("resultado");
        var meuInput = document.getElementById("nome");
        meuLabel.innerHTML = meuInput.value;
    };
    </script>
    
}