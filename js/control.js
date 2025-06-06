

        // JavaScript (opcional para interatividade futura)
        const links = document.querySelectorAll('.insight-content a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Redirecionando para mais detalhes...');
            });
        });
   

       
        // JavaScript (opcional para interatividade futura, se desejado)
        const button = document.querySelector('button');
        button.addEventListener('click', () => {
            alert('Redirecionando para mais informações...');
        });

           
        