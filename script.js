const fileInput = document.getElementById('file-input');
const table = document.getElementById('table');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const csv = reader.result;
    const rows = csv.split('\n');

    // Remove any existing table rows
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }

    // Create table headers
    const headers = rows[0].split(',');
    const headerRow = table.insertRow();
    headers.forEach((header) => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });

    // Create table rows
    for (let i = 1; i < rows.length; i++) {
      const rowCells = rows[i].split(',');
      const row = table.insertRow();
      rowCells.forEach((cell) => {
        const td = document.createElement('td');
        td.textContent = cell;
        row.appendChild(td);
      });
    }
  };
});
