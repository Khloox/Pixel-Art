"use strict";

const $tableEl = $('#tableEl');
const $inputHt = $('#inputHt');
const $inputWd = $('#inputWd');
const $colorChooser = $('#colorChooser');

$('#sizeChooser').submit( event => {
    event.preventDefault();

    let width = $inputWd.val();
    let height = $inputHt.val();

    $tableEl.html('');

    makeGrid(height, width);
    addCellClickListener();
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableEl.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorChooser.val();
        $(event.currentTarget).css("background-color", color)
    });
};