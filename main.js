$(document).ready(function() {
    $('#nome-tarefa').change(function() {
        const nomeTarefa = $(this).val();
        $('ul').append('<li>' + nomeTarefa + '</li>');
        $(this).val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).addClass('checked');
    });
});