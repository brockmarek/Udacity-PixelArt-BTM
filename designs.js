//Pixel Project V1.0

const inputHeight = parseInt($('#inputHeight').val());
const inputWeight = parseInt($('#inputWeight').val());
const submitGrid = $('#submitGrid');
const table = $('#pixelCanvas');
const colorPicker = $('#colorPicker').val();



// Call make grid on submission.

submitGrid.on('click', function(event) {
	console.log('submitted');
	makeGrid();
	event.preventDefault();
});

/**
Display grid based on: inputHeight & inputWeight.
Starting with (1,1) at bottom left representing the grid as a graph.
*/

function makeGrid() {
	let inputHeight = parseInt($('#inputHeight').val());
	let inputWeight = parseInt($('#inputWeight').val());
	console.log(inputHeight + ' x ' + inputWeight);
	for (n = inputHeight; n > 0; n--) {
		$(table).last().append('<tr></tr>');
		for (m = inputWeight; m > 0; m--) {
			$('tr').last().prepend('<td></td>');
		}
	}
}


// Change color on click

$(table).delegate('td', 'click', function() {
	let colorPicker = $('#colorPicker').val();
	console.log(colorPicker);
	$(this).css('background-color', colorPicker);
});

