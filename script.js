
// Imagem do Kayn
$( "img" ).on( "click", function() {
    $(this).siblings("p").slideToggle("slow");
});

// Michelly solteire
$(document).ready(function() {
    function showPopup() {
        $('.ads').fadeIn();
    }

    function hidePopup() {
        $('.ads').fadeOut();
    }

    // Mostra o popup a cada 5 segundos
    setInterval(showPopup, 10000);

    $('.fechar').click(function(event) {
        hidePopup();
        event.preventDefault();
    });

    // Adiciona evento de clique à imagem para escondê-la
    $('img').click(function() {
        $(this).fadeOut();
    });
});
