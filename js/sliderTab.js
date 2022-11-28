/*
File: sliderTab.js
HW 4 GUI Assignment: jQuery and Sliders
Steven Ceballos, UMass Lowell Computer Science, steven_ceballos@student.uml.edu
November 28, 2022 at 1:43 PM     
*/
$(function()
{

    // create the table
    CreateTable();
    // create the slider
    SliderInput();

    $(".button").click(function() {
        // create the subtab
        CreateTab();
        // create the button for deleting all tables
        var delet = '<button type="button">Delete All Tab</button>';
        document.getElementById("rm").innerHTML = delet;
    });

    $("#tabs").on("click", "span.ui-icon-close", function() {
        // removes the selected tab 
        var boxId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + boxId).remove();
        $("#tabs").tabs("refresh");
        // remove tab list and delete all button
        if($("#tabs ul li").length == 0) {
            $(".ui-tabs").tabs("destroy");
            document.getElementById("rm").innerHTML = "";
        }
    });

    // delete all existing tabs
    $("#rm").click(function() {
        document.getElementById("tabs").innerHTML = "<ul></ul>";
        $(".ui-tabs").tabs("destroy");
        document.getElementById("rm").innerHTML = "";
    });
});

// slider
function SliderInput() {
    // set range of slider
    $("#xBegin").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#row1").val(ui.value);
            CreateTable();
        }
    });
    $("#row1").on("keyup", function() {
        $("#xBegin").slider("value", this.value);
        CreateTable();
    });

    $("#xEnd").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#row2").val(ui.value);
            CreateTable();
        }
    });
    $("#row2").on("keyup", function() {
        $("#xEnd").slider("value", this.value);
        CreateTable();
    });

    $("#yBegin").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#col1").val(ui.value);
            CreateTable();
        }
    });
    $("#col1").on("keyup", function() {
        $("#yBegin").slider("value", this.value);
        CreateTable();
    });

    $("#yEnd").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#col2").val(ui.value);
            CreateTable();
        }
    });
    $("#col2").on("keyup", function() {
        $("#yEnd").slider("value", this.value);
        CreateTable();
    });
}

// create tab
function CreateTab()
{
    var num = $("#tabs ul li").length + 1;
    if(num > 20)
    {
        alert("Cannot create more than 20 tabs.");
        return false;
    }


    if($("#row1").valid() && $("#row2").valid() && $("#col1").valid() && $("#col2").valid())
    {
        $("#tabs").tabs();
        $("#tabs ul").append("<li><a href='#tab-" + num + "'>Tab " + num + "</a><span class='ui-icon ui-icon-close' role='presentation'></span></li>");
        $("#tabs").append("<div id='tab-" + num + "'>" + $("#table").html() + "</div>");
        $("#tabs").tabs("refresh");
        $("#tabs").tabs("option", "active", -1);
    }
    else
    {
        alert("Please check your input values!");
        return false;
    }
}