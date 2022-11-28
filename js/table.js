/*
File: table.js
HW 4 GUI Assignment: jQuery and Sliders
Steven Ceballos, UMass Lowell Computer Science, steven_ceballos@student.uml.edu
November 28, 2022 at 1:43 PM     
*/

function TableStart() {
    clearInvalid();
    clearTable();
    /* get data of multiplier and multiplicand from user input */
    var row1 = $('#row1').val();
    var row2 = $('#row2').val();
    var col1 = $('#col1').val();
    var col2 = $('#col2').val();

    /* get row and column length */
    var rowlength = row2 - row1 + 1;
    var columnlength = col2 - col1 + 1;

    var TableFormat = "<table>";
    var i, j;

    TableFormat += "<tr><th></th>";
    for (i = 0; i < rowlength; i++) {
        TableFormat += "<th>";
        var num = Number(row1) + i;
        TableFormat += num;
        TableFormat += "</th>";
    }
    TableFormat += "</tr>";

    /* add table data to html */
    for (i = 0; i < columnlength; i++) {
        TableFormat += "<tr>";
        var column = Number(col1) + i;
        for (j = 0; j < rowlength + 1; j++) {
            TableFormat += "<td>";
            if (j == 0) {
                TableFormat += column;
            } else {
                var rownum = Number(row1) + j - 1;
                var num = column * rownum;
                TableFormat += num;
            }
            TableFormat += "</td>";
        }
        TableFormat += "</tr>";
    }
    TableFormat += "</table>";

    /* output whole table to screen */
    document.getElementById('table').innerHTML = TableFormat;
}

function addInvalid(className, text) {
    var el = document.getElementsByClassName(className);
    console.log(el, text)
    el[0] && (el[0].innerText = text);
}

function clearInvalid() {
    addInvalid('row1Text', '');
    addInvalid('row2Text', '');
    addInvalid('col1Text', '');
    addInvalid('col2Text', '');
}

function clearTable() {
    document.getElementById('table').innerHTML = '';
}