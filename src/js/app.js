// Selecting essential elements
const addNoteBtn = document.getElementById('addNoteBtn');
const noteText = document.getElementById('noteText');
const notesSection = document.getElementById('notesSection');

// Function to create a new note
function createNoteElement(noteContent, noteId) {
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'relative', 'flex', 'flex-col', 'gap-4');
  noteDiv.setAttribute('data-id', noteId);

  // Add note content
  noteDiv.innerHTML = `
    <h3 class="text-blue-800 text-2xl font-bold">Note</h3>
    <p class="text-gray-700">${noteContent}</p>
    <div class="absolute top-4 right-4 flex gap-2">
      <span class="material-symbols-outlined cursor-pointer text-blue-800 editBtn">edit</span>
      <span class="material-symbols-outlined cursor-pointer text-red-600 deleteBtn">delete</span>
    </div>
  `;

  // Add the new note to the DOM
  notesSection.appendChild(noteDiv);

  // Activate edit and delete buttons
  activateButtons(noteDiv);
}

// Add note functionality
addNoteBtn.addEventListener('click', function () {
  const noteContent = noteText.value.trim();
  if (noteContent === '') {
    alert('Please write something before adding a note!');
    return;
  }

  // Create a new note with a unique ID
  const noteId = Date.now(); // Unique ID based on timestamp
  createNoteElement(noteContent, noteId);

  // Clear the textarea after adding the note
  noteText.value = '';
});

// Function to activate edit and delete buttons
function activateButtons(noteElement) {
  const deleteBtn = noteElement.querySelector('.deleteBtn');
  const editBtn = noteElement.querySelector('.editBtn');
  const noteContentElem = noteElement.querySelector('p');

  // Delete button functionality
  deleteBtn.addEventListener('click', function () {
    noteElement.remove();
  });

  // Edit button functionality
  editBtn.addEventListener('click', function () {
    const newContent = prompt('Edit your note:', noteContentElem.textContent);
    if (newContent !== null && newContent.trim() !== '') {
      noteContentElem.textContent = newContent;
    }
  });
}
