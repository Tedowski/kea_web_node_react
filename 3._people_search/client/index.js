
$('#search').on('keyup', (event) => {
    const value = $('#search').val();

    const keyCode = (event.keyCode ? event.keyCode : event.which)
    
    if (keyCode === 13) {
        search(value);
    }
})

$('#button').on('click', () => {
    const value = $('#search').val();
    search(value)
})

// function enterPressed(value) {
//     console.log(value)
// }

function search(value) {
    console.log(value)
}