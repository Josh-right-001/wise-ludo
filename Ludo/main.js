document.addEventListener('DOMContentLoaded', function() {
    // Preloader logic
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // 3 seconds

    // Option selection logic
    document.querySelectorAll('input[name="option"]').forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'player') {
                document.getElementById('main-content').style.display = 'none';
                document.getElementById('player-form').style.display = 'block';
            }
        });
    });

    // Form submission logic
    document.getElementById('submit-btn').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        const datetime = document.getElementById('datetime').value;
        const motif = document.getElementById('motif').value;
        const paymentMethod = document.getElementById('payment-method').value;

        const popupContent = `
            <p>Name: ${name}</p>
            <p>Amount: ${amount} fc</p>
            <p>Date/Time: ${datetime}</p>
            <p>Motif: ${motif}</p>
            <p>Payment Method: ${paymentMethod}</p>
            <br>
            <p>ce jeux à été développer par <a class="mer" href="https://josh-right-congo.netlify.app">Josh right</a> </P>
            <br>
            <p>Commentaire sur le jeux via <a class="mer" href="https://api.whatsapp.com/send?phone=+243974156933&text=Salut Josh, Moi ce {{{name}}} Voici mon commentaire sur l'application!" target="blank">Whatsapp</a>
            <br> Ou m'appeler directement <a href="tel:+243903045830">Sur appel</a> </P>
        `;

        document.getElementById('popup-content').innerHTML = popupContent;
        document.getElementById('player-form').style.display = 'none';
        document.getElementById('popup').style.display = 'block';
    });

    // Continue button logic
    document.getElementById('continue-btn').addEventListener('click', function() {
        window.location.href = './Game/index.html';
    });
});