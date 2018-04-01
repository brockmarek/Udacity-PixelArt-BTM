//Pixel Project V1.0
const inputHeight = parseInt($('#inputHeight').val());
const inputWeight = parseInt($('#inputWeight').val());
const submitGrid = $('#submitGrid');
const table = $('#pixelCanvas');
const colorPicker = $('#colorPicker').val();

// Call make grid on submission.
submitGrid.on('click', function(event) {
	makeGrid();
	event.preventDefault();
});


//Display grid based on: inputHeight & inputWeight.
function makeGrid() {
	let inputHeight = parseInt($('#inputHeight').val());
	let inputWeight = parseInt($('#inputWeight').val());
	for (n = 0; n < inputHeight; n++) {
		$(table).append('<tr></tr>');
		for (m = 0; m < inputWeight; m++) {
			$('tr').last().append('<td></td>');
		}
	}
}

// Change color on click.
$(table).delegate('td', 'click', function() {
	let colorPicker = $('#colorPicker').val();
	$(this).css('background-color', colorPicker);
});