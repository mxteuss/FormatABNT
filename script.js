  document.addEventListener('DOMContentLoaded', () => {
    document
      .querySelector('.modern-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();

        const dados = {
          curso: document.getElementById('curso').value,
          titulo: document.getElementById('titulo').value,
          nome: document.getElementById('nome').value,
          instituicao: document.getElementById('instituicao').value,
          ano: document.getElementById('ano').value,
          cidade: document.getElementById('cidade').value,
        };


        try {
          const response = await fetch('http://localhost:8080/gerar-pdf', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
          });

          if (!response.ok) {
            console.log(`Erro HTTP! Status: ${response.status}`);
          }

          const blob = await response.blob();

          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'abnt.pdf';
          a.click();

        } catch (error) {
          console.error('ERRO:', error);
        }
      });
  });
