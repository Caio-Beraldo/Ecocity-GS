document.querySelector(".login button").addEventListener("click", function () {
    const username = document.querySelector(".login input[type='text']").value.trim();
    const password = document.querySelector(".login input[type='password']").value.trim();

    if (username === "admin" && password === "admin") {
      alert("Login efetuado com sucesso!");
    } else {
      alert("Usuário ou senha incorretos");
    }
  });


  document.querySelector(".formaDecontato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.querySelector(".formaDecontato input[type='text']").value.trim();
    const email = document.querySelector(".formaDecontato input[type='email']").value.trim();
    const mensagem = document.querySelector(".formaDecontato textarea").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Todos os campos devem ser preenchidos.");
    } else {
      alert(`Obrigado pelo contato, ${nome}!`);
    }
  });


  const toggleThemeButton = document.createElement("button");
  toggleThemeButton.textContent = "Modo Noturno";
  toggleThemeButton.style.cssText = "position: fixed; bottom: 20px; right: 20px; padding: 0.5em 1em; background: #00ff00; color: black; border: none; border-radius: 5px; cursor: pointer;";
  document.body.appendChild(toggleThemeButton);

  toggleThemeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleThemeButton.textContent = "Modo Claro";
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";     
    
    } else {
      toggleThemeButton.textContent = "Modo Noturno";
      document.body.style.backgroundColor = "#111";
      document.body.style.color = "#fff";
    }
  });