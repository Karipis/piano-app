let tiles = document.querySelectorAll('.tile');

// Implement clicking the keys
tiles.forEach(tile => {
    tile.addEventListener('click', function () {
        tile.classList.toggle('clicked');

        setTimeout(() => {
            tile.classList.toggle('clicked');
        }, 225);

        if (tile.classList.contains('black')) {
            event.stopPropagation(); // Prevent bubbling to white tile underneath
        }

        let note = tile.getAttribute('data-note');
        console.log(note);
        playNote(note);
    });
});

// Implement clicking buttons for the keys
const keyToNote = {
    'q': 'c',
    'Q': 'c',
    '2': 'c-sharp',
    'w': 'd',
    'W': 'd',
    '3': 'd-sharp',
    'e': 'e',
    'E': 'e',
    'r': 'f',
    'R': 'f',
    '5': 'f-sharp',
    't': 'g',
    'T': 'g',
    '6': 'g-sharp',
    'y': 'a',
    'Y': 'a',
    '7': 'a-sharp',
    'u': 'b',
    'u': 'b',
    'i': 'c1',
    'I': 'c1',
    '9': 'c-sharp1',
    'o': 'd1',
    'O': 'd1',
    '0': 'd-sharp1',
    'p': 'e1',
    'p': 'e1',
    'z': 'f1',
    'Z': 'f1',
    's': 'f-sharp1',
    'S': 'f-sharp1',
    'x': 'g1',
    'X': 'g1',
    'd': 'g-sharp1',
    'D': 'g-sharp1',
    'c': 'a1',
    'C': 'a1',
    'f': 'a-sharp1',
    'F': 'a-sharp1',
    'v': 'b1',
    'V': 'b1'
};

// Keyboard press event listener
document.addEventListener('keydown', function (event) {
    // Get the note corresponding to the pressed key
    let note = keyToNote[event.key];
    
    // If the note exists, find the tile corresponding to it and trigger the note
    if (note) {
        // Loop through each tile
        tiles.forEach(tile => {
            let noteTile = tile.getAttribute('data-note');
            if (noteTile === note) {
                // Toggle the 'clicked' class
                tile.classList.add('clicked');

                // Set a timeout to remove the 'clicked' class after 225ms
                setTimeout(() => {
                    tile.classList.remove('clicked');
                }, 225);

                // Play the corresponding note sound
                playNote(noteTile);
            }
        });
    } else{
        console.log('Note does not exist');
    }
});

// Function to play the note sound
function playNote(note) {
    let audio = new Audio(`./sounds/${note}.mp3`);
    audio.play();
}
