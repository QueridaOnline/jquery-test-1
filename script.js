// Imagem do Kayn
$(document).ready(function() {
    $("img.kayn-red").on("click", function() {
        $(this).siblings("p").slideToggle("slow");
    });

    $("img.kayn-blue").on("click", function() {
        $(this).siblings("p").slideToggle("slow");
    });
});

// Michelly solteire
$(document).ready(function() {
    function showPopup() {
        $('.ads').fadeIn();
    }

    function hidePopup() {
        $('.ads').fadeOut();
    }

    setInterval(showPopup, 10000);

    $('.fechar').click(function(event) {
        hidePopup();
        event.preventDefault();
    });

    $('.ads img').click(function() {
        $(this).fadeOut();
    });
});
