function showContent(contentId) {
  const content = document.getElementById(contentId);
  const contentContainer = document.getElementById('content-container');

  contentContainer.style.display = 'block';
  content.style.display = 'block';

  for (const otherContent of contentContainer.children) {
      if (otherContent !== content) {
          otherContent.style.display = 'none';
      }
  }
}

function showForm() {
  const form = document.getElementById('contact');
  const contentContainer = document.getElementById('content-container');

  // Certificar de que o formulário está visível
  form.style.display = 'block';

  // Ocultar outros conteúdos, se necessário
  for (const content of contentContainer.children) {
      if (content !== form) {
          content.style.display = 'none';
      }
  }
}
