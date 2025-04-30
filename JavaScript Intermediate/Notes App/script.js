function loadNotes() //loads all notes from localStorage and shows them on the page
{
    // gets notes from localStorage, or start with an empty object if none found
    let notes = JSON.parse(localStorage.getItem('notes')) || {};
  
    let notesList = document.getElementById('notesList'); // gets HTML element where notes will be shown
    notesList.innerHTML = ''; 
  
    for (let title in notes) 
    {
        let noteItem = document.createElement('div'); // create a new div for each note
        noteItem.className = 'noteItem';

        // sets inner HTML of the note with a title and two buttons
        noteItem.innerHTML = `<strong>${title}</strong><br>
        <button onclick="viewNote('${title}')">View</button>
        <button onclick="deleteNote('${title}')">Delete</button>`;
  
        notesList.appendChild(noteItem); // adds note to the list
    }
}

function addNote() // adds new note
{
    let title = document.getElementById('noteTitle').value.trim();
    let content = document.getElementById('noteContent').value.trim();
  
    if (title === '' || content === '') // checks whether both fields are filled and alerts 
    {
        alert('Please enter both title and content.');
        return;
    }
  
    let notes = JSON.parse(localStorage.getItem('notes')) || {};
  
    // saves the new note
    notes[title] = content;
    localStorage.setItem('notes', JSON.stringify(notes));
  
    // clears the input fields
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
  
    loadNotes(); // reload the notes to update the list
}
  
function viewNote(title) // shows saved notes content via view button
{
    let notes = JSON.parse(localStorage.getItem('notes')) || {};
    let content = notes[title];
  
    document.getElementById('displayTitle').innerText = title;
    document.getElementById('displayContent').innerText = content;
    document.getElementById('noteDisplay').classList.remove('hidden');
}
  
function closeNote() // closes view of an open saved note
{
    document.getElementById('noteDisplay').classList.add('hidden');
}
  
function deleteNote(title) // deletes a saved note
{
    let notes = JSON.parse(localStorage.getItem('notes')) || {};
    delete notes[title]; 
    localStorage.setItem('notes', JSON.stringify(notes)); 
    loadNotes(); 
}
  
window.onload = loadNotes; // run loadNotes when the page loads

  