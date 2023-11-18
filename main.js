document.addEventListener("DOMContentLoaded", () => {

    /*async function loadHTML(filename) {
        const response = await fetch(`http://localhost:5000/api/resource/${filename}`, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        });

        if (response.ok) {
          const html = await response.text();
          const mainContainer = document.getElementById('rooms');
          mainContainer.innerHTML = html;
        } else {
          console.error('Ошибка:', response.status);
        }
    }*/

    document.getElementById('file_selector').addEventListener('change', function() {
        console.log('working')
        const selectedFile = this.value;
        loadHTML(selectedFile);
    });

    function loadHTML(selectedFile) {
      fetch('/api/resource?filename=${selectedFile}')
        .then(response => response.json())
        .then(data => {
          const htmlContent = data.html;
          // Обработка полученного HTML кода
          console.log(htmlContent);
        })
        .catch(error => {
          console.error('Ошибка:', error);
        });
    }

    /*function loadHTML(filename) {
        fetch(`https://f5aa-85-249-165-157.ngrok-free.app/html/${filename}`)
        .then(response => response.text())
        .then(html => {
          const mainContainer = document.getElementById('rooms');
          mainContainer.innerHTML = html;
        })

          .catch(error => {
            console.error('Ошибка:', error);
          });
    }*/


})