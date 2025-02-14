function startEdit() {
    document.getElementById('mainEditBtn').style.display = 'none';
    document.getElementById('editButtons').classList.add('active');
    document.getElementById('dataTable').classList.add('editing');
    
    const rows = document.querySelectorAll('#dataTable tbody tr');
    rows.forEach(row => makeEditable(row));
}

function cancelEdit() {
    location.reload();
}

function submitChanges() {
    // In the future, this would submit changes to server
    location.reload();
}

function deleteRow(button) {
    button.closest('tr').remove();
}

function addNewRow(nextId, makeEditableFn) {
    const tbody = document.querySelector('#dataTable tbody');
    const newRow = document.createElement('tr');
    
    // Create base structure
    newRow.innerHTML = `
        <td class="delete-column"><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
        <td>${nextId}</td>
    `;
    
    // Add empty cells based on table structure
    const headerCount = document.querySelectorAll('#dataTable thead th').length;
    for (let i = 2; i < headerCount; i++) {
        newRow.innerHTML += '<td></td>';
    }
    
    tbody.appendChild(newRow);
    makeEditableFn(newRow);
}
