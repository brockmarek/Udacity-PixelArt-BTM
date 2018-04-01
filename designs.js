//Pixel Project V1.0
const table = $('#pixelCanvas');

// Call make grid on submission.
$('#submitGrid').on('click', function(event) {
	makeGrid();
	event.preventDefault();
});

//Display grid based on: inputHeight & inputWeight.
function makeGrid() {
	const inputHeight = parseInt($('#inputHeight').val());
	const inputWeight = parseInt($('#inputWeight').val());
	for (n = 0; n < inputHeight; n++) {
		$(table).append('<tr></tr>');
		for (m = 0; m < inputWeight; m++) {
			$('tr').last().append('<td></td>');
		}
	}
}

// Change color on click.
$(table).delegate('td', 'click', function() {
	const colorPicker = $('#colorPicker').val();
	$(this).css('background-color', colorPicker);
});