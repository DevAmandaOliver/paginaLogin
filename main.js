const form = document.getElementById("loginForm");//seção onde uma constante "form" recebe o valor do elemento html, chamado pelo id "login form", que é o formulário de login presente na página, permitindo que o JavaScript interaja com ele para validar os campos e controlar o comportamento do formulário durante a submissão.

form.addEventListener("submit", function (event) {//nesse formulario é adicionado um evento ao clicar no botão de submit"entrar", onde a função é acionada, e o evento é passado como argumento para a função, permitindo que o comportamento padrão do formulário seja controlado e personalizado.
    event.preventDefault();//essa linha impede que o formulário seja enviado de forma tradicional, ou seja, recarregando a página. Isso é útil para realizar validações personalizadas e controlar o processo de envio do formulário usando JavaScript, sem a necessidade de recarregar a página.

    const email = form.email.value;// a constante "email" recebe o valor do campo de email presente no formulário, permitindo que o JavaScript acesse e utilize o valor digitado pelo usuário para validação ou outras operações relacionadas ao email.
    const password = form.password.value;// a constante "password" recebe o valor do campo de senha presente no formulário, permitindo que o JavaScript acesse e utilize o valor digitado pelo usuário para validação ou outras operações relacionadas à senha.

    const emailError = document.getElementById("emailError");// a constante "emailError" recebe o valor do elemento html, chamado pelo id "emailError", que é o elemento onde serão exibidas as mensagens de erro relacionadas ao campo de email.
    const passwordError = document.getElementById("passwordError");// a constante "passwordError" recebe o valor do elemento html, chamado pelo id "passwordError", que é o elemento onde serão exibidas as mensagens de erro relacionadas ao campo de senha.

    emailError.textContent = "";//impede que as mensagens de erro anteriores sejam exibidas, garantindo que apenas as mensagens de erro atuais sejam mostradas ao usuário, evitando confusão e melhorando a experiência do usuário.
    passwordError.textContent = "";//impede que as mensagens de erro anteriores sejam exibidas, garantindo que apenas as mensagens de erro atuais sejam mostradas ao usuário, evitando confusão e melhorando a experiência do usuário.

    let valid = true;// a variavel valid recebe o valor bolleano de "true"
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//a constante emailPattern é um padrão para que o email seja valido apenas se tiver um formato de email, ou seja, conter um "@" e um domínio, garantindo que o email digitado pelo usuário seja válido e siga as convenções comuns de formatação de email.

    if (!emailPattern.test(email)) {//se  "emailPattern" com instruções do email ter (@, ., etc), ele ira testado , caso não contenhas as instruções do "emailPattern" uma mensagem de erro é mostrada e as bordas dela fica vermelha indicando erro para o usuario.
        emailError.textContent = "Digite um email válido";
        document.getElementById("email").style.border = "1px solid red";
        valid = false;// a variavel valid recebe o valor bolleano de "false"
    }else{
        document.getElementById("email").style.border = "1px solid green";//caso o email seja valido, as bordas dela fica verde indicando que o email é valido para o usuario.
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;//a constante passwordPattern é um padrão para que a senha seja valida apenas se tiver no mínimo 8 caracteres, pelo menos uma letra maiúscula e um número, garantindo que a senha digitada pelo usuário seja forte o suficiente para proteger a conta e siga as melhores práticas de segurança.

    if (!passwordPattern.test(password)) {//se  "passwordPattern" com instruções do senha ter (8 caracteres, 1 letra maiúscula e 1 número), ele ira testado , caso não contenhas as instruções do "passwordPattern" uma mensagem de erro é mostrada e as bordas dela fica vermelha indicando erro para o usuario.
        passwordError.textContent = "Senha precisa ter 8 caracteres, 1 maiúscula e 1 número";//essa mensagem de erro é exibida para o usuário, informando os requisitos que a senha deve atender para ser considerada válida, ajudando o usuário a criar uma senha forte e segura.
        document.getElementById("password").style.border = "1px solid red";//caso a senha seja invalida, as bordas dela fica vermelha indicando que a senha é invalida para o usuario.
        valid = false;// a variavel valid recebe o valor bolleano de "false"
    }else{
        document.getElementById("password").style.border = "1px solid green";//caso a senha seja valida, as bordas dela fica verde indicando que a senha é valida para o usuario.
    }

    if (valid==true) {//se o valor de "valid" for igual a "true", ou seja, verdadeiro significa que ambos os campos de email e senha passaram nas validações, então o código dentro desse bloco será executado, indicando que o processo de login pode prosseguir.
        const btn = document.querySelector("button[type='submit']");// a constante "btn" recebe o valor do elemento html, chamado pelo seletor "button[type='submit']", que é o botão de envio do formulário, permitindo que o JavaScript interaja com ele para alterar seu estado e comportamento durante o processo de login.
        btn.textContent = "Entrando...";//essa linha altera o texto do botão de envio para "Entrando...", indicando ao usuário que o processo de login está em andamento, proporcionando feedback visual sobre a ação que está sendo realizada.
        btn.disabled = true;//essa linha desabilita o botão de envio, impedindo que o usuário clique nele novamente enquanto o processo de login está em andamento, evitando múltiplos envios do formulário e melhorando a experiência do usuário durante o processo de autenticação.
        setTimeout(function () {//essa função define um temporizador que executa o código dentro dela após um atraso de 2000 milissegundos (2 segundos), simulando um processo de login assíncrono, como uma chamada a um servidor para autenticação, e permitindo que o feedback visual "Entrando..." seja exibido por um curto período antes de redirecionar o usuário para a próxima página.
            window.location.href = "https://google.com";//essa linha redireciona o usuário para a página "google"**pagina temporaria** após o processo de login simulado, indicando que o login foi bem-sucedido e levando o usuário para a próxima etapa da aplicação.
        }, 2000);
    }
});

function forgotPassword() {//essa função chama o "forgotPassword" quando o usuario clica em esqueci a senha.
    alert("Função de recuperação de senha ainda não implementada.");//o alert é disparado avisando sobre a recuperção de senha, **o interressante é implementar para redirecionar o usuario para sua caixa de e-mail
}

function showPassword() {// essa função chama o "showPassword" quando o usuario clica no icone de visibilidade de senha, tornando o site mais acessivel , com o usuario podendo saber o que esta difgitando caso queira(aperte o botão) 
    const passwordInput = document.getElementById("password");// essa constante "passwordInput" recebe o valor do elemento html, chamado pelo id "password", que é o campo de senha presente no formulário, permitindo que o JavaScript interaja com ele para mostrar ou ocultar a senha digitada pelo usuário quando o botão de visibilidade for clicado.
    const showPasswordBtn = document.getElementById("showPasswordBtn");// essa constante "showPasswordBtn" recebe o valor do elemento html, chamado pelo id "showPasswordBtn", que é o botão de visibilidade de senha presente no formulário, permitindo que o JavaScript interaja com ele para alterar seu estado e aparência quando a senha for mostrada ou ocultada.
    if (passwordInput.type === "password") {//se o tipo do campo de senha for "password", ou seja, a senha estiver oculta, o código dentro desse bloco será executado, alterando o tipo do campo para "text" para mostrar a senha e atualizando o ícone do botão para indicar que a senha está visível.
        passwordInput.type = "text";//essa linha altera o tipo do campo de senha para "text", permitindo que a senha digitada pelo usuário seja exibida em texto claro, tornando-a visível para o usuário.
        showPasswordBtn.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/visible.png" alt="visible"/>';//essa linha altera o conteúdo HTML do botão de visibilidade para exibir um ícone que indica que a senha está visível, proporcionando feedback visual ao usuário sobre o estado atual da senha.
    } else {
        passwordInput.type = "password";//essa linha altera o tipo do campo de senha para "password", ocultando a senha digitada pelo usuário e exibindo-a como pontos ou asteriscos, garantindo a privacidade da senha.
        showPasswordBtn.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/closed-eye.png" alt="closed-eye"/>';
    }           
}
document.getElementById("showPasswordBtn").addEventListener("click", showPassword);//essa linha adiciona um evento de clique ao botão de visibilidade de senha, chamando a função "showPassword" quando o botão for clicado, permitindo que o usuário mostre ou oculte a senha digitada no campo de senha.


