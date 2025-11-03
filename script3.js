const tableDivs = document.querySelectorAll('.table');

tableDivs.forEach(div => {
    const tds = div.querySelectorAll('td');
    tds.forEach((td, index) => {
        if ((index + 1) % 2 == 0) {
            td.classList.add('selected');
        }
    });
});
