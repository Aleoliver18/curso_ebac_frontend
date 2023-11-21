$(document).ready(function() {
    let contador = 0
    $('form').on('submit', function(e) {
        e.preventDefault()

        const adicionaItem = $('input').val()
        const novaTarefa = $('<li></li>')
        let nomeId = `nome${contador.toString()}`

        $(`<a href="#" id="${nomeId}" class="item">${adicionaItem}</a>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul')
        contador++
        $('input').val('')

        $(`#${nomeId}`).click(function() {
            $(`#${nomeId}`).addClass('finalizado')
        })
    })

})