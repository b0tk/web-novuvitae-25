 // Configura el Cliente ID y el Redirect URI de tu aplicación Discord
    const clientId = 'TU_CLIENT_ID';
    const redirectUri = 'TU_REDIRECT_URI';

    // Botón de inicio de sesión con Discord
    document.getElementById('login-button').addEventListener('click', function() {
      // Redirige al usuario a la página de autorización de Discord
      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify%20email`;
    });

    // Función para enviar un comentario (simulación)
    function submitComment() {
      const commentText = document.getElementById('comment-text').value;
      if (commentText.trim() === '') {
        alert('El comentario no puede estar vacío');
        return;
      }

      alert('Comentario enviado: ' + commentText);
      document.getElementById('comment-text').value = '';
    }