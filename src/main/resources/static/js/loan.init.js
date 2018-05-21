/**
 * Emon Hossain
 */

$(document).ready(function () {
    callTabs();


    $('a[href="#next"]').click(function (event) {
        //alert('sdfsdf');
        callTabs();
    });
    $("#widget-1-t-4").click(function () {

        callTabs();
    });


});
function callTabs() {
    var nbr = $('#noOfBorrower').val();
    $('#li-panels1').addClass('active');

    for (var i = 2; i <= nbr; i++) {
        $('#panels' + i).removeClass('active');
    }

    var caseNumber = $('#caseNumber').text();
    if (caseNumber != "") {
        $('#all-loan-info').removeAttr('hidden');
    }

    $('#gi-save').click(function (event) {
        $('#all-loan-info').removeAttr('hidden');
    });

}