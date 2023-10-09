
    $(document).ready(function() {
        // Add click event listener to all selectable cells
        $('#activitiesTable td.selectable').on('click', function() {
            // Check if the cell is selectable and not "Not Available"
            if (!$(this).hasClass('selected') && $(this).text() !== 'Not Available') {
                // Toggle selection state
                $(this).toggleClass('selected');
            } else if ($(this).hasClass('selected')) {
                // Deselect the cell if it's already selected
                $(this).removeClass('selected');
            }
        });
    });
