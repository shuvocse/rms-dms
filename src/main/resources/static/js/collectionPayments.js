$(document).ready(function () {
    var seenonce=0;
    $("#collectionDetailsSavebtn").click(function () {
        var paymentRowIndex=$('#collectionPaymentDetailstbl tr:last').attr('id').split("payment_row_id_").join("");
        paymentRowIndex=parseInt(paymentRowIndex);
        paymentRowIndex+=1;
        var paymentId = $("#paymentId").val();
        var cbsloanId= $("#odLoanId").val();
        var loanaccno = $('#loanaccno').text();
        var colpaydetailsfromdate = $("#colpaydetailsfromdate").val();
        var colpaydetailstodate = $("#colpaydetailstodate").val();
        var coldetailscolMonth = $("#coldetailscolMonth").val();
        var coldetailspaymentstatus = $("#coldetailspaymentstatus").val();
        var coldetailsBalanceamount = $("#coldetailsBalanceamount").val();
        var is_editpaymentInfo = $("#is_editpaymentInfo").text();
        var rowIndexpaymentInfo = $("#rowIndexpaymentInfo").text();
        var paymentDetailsData = {
            'id': paymentId,
            'loanAccountNumber': loanaccno,
            'strFromDate': colpaydetailsfromdate,
            'strToDate': colpaydetailstodate,
            'collectionMonth': coldetailscolMonth,
            'paymentStatus': coldetailspaymentstatus,
            'balanceAmount': coldetailsBalanceamount,
            'deleted':false,
            'cbsLoanId':cbsloanId
        };
        var JsonpaymentDetails = JSON.stringify(paymentDetailsData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/collection-payment-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonpaymentDetails,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);

            },
            success: function (data) {

                $("#alertMessageCM").text('');
                $("#CMError").val('');
                var message = "<ul style='list-style-type:disc'><li>Successfully saved</li></ul>";
                $("#alertMessageCM").append(message);
                $("#CMError").modal("toggle");
                console.log(data);
                if (is_editpaymentInfo == 0) {
                    var newRow = '<tr id="payment_row_id_' + paymentRowIndex +'">' +
                        '<td><label id="payment_createdDate_' + paymentRowIndex + '">' + data.strCreatedDate + '</label></td>' +
                        '<td><label id="payment_modifiedDate_' + paymentRowIndex + '"style="display: none">' + data.strModifiedDate + '</label></td>' +
                        '<td><label id="paymentId_' + paymentRowIndex + '"style="display: none">' + data.id + '</label>' +
                        '<label id="coldetailscolMonth_' + paymentRowIndex + '"style="display: none">' + data.collectionMonth + '</label>' +
                        '<label id="loanaccno_' + paymentRowIndex + '">' + data.loanAccountNumber + '</label></td>' +
                        '<td><label id="colpaydetailsfromdate_' + paymentRowIndex + '">' + data.strFromDate + '</label></td>' +
                        '<td><label id="colpaydetailstodate_' + paymentRowIndex + '">' + data.strToDate + '</label></td>' +
                        '<td><label id="coldetailsBalanceamount_' + paymentRowIndex + '">' + data.balanceAmount + '</label></td>' +
                        '<td><label id="coldetailspaymentstatus_' + paymentRowIndex + '">' + data.paymentStatus + '</label></td>' +
                        '<td><button href="#" class="btn-success" onclick="editPaymentDetails( ' +paymentRowIndex + ' )" data-toggle="modal" data-target="#modal-collection-payment-details"><i class="fa fa-pencil" ></i></button>' +
                        '<button href="#" onclick="deletePaymentDetails(this,' +paymentRowIndex + ')"><i class="fa fa-times"></i></button></td>' +
                        '</tr>';
                    $("#collectionPaymentDetailstbl").append(newRow);

                    //callRegRowIndex++;
                }else{
                    $('#payment_modifiedDate_'+rowIndexpaymentInfo).css("display", "block");
                    $('#paymentId_'+rowIndexpaymentInfo).text(data.id);
                    $('#payment_createdDate_'+rowIndexpaymentInfo).text(data.strCreatedDate);
                    $('#payment_modifiedDate_'+rowIndexpaymentInfo).text(data.strModifiedDate);
                    $('#loanaccno_'+rowIndexpaymentInfo).text(data.loanAccountNumber);
                    $('#colpaydetailsfromdate_'+rowIndexpaymentInfo).text(data.strFromDate);
                    $('#colpaydetailstodate_'+rowIndexpaymentInfo).text(data.strToDate);
                    $('#coldetailsBalanceamount_'+rowIndexpaymentInfo).text(data.balanceAmount);
                    $('#coldetailspaymentstatus_'+rowIndexpaymentInfo).text(data.paymentStatus);

                }
                resetPaymentInfo();
                $('#collectionDetailsSavebtn').attr("data-dismiss","modal");


            },
            error:function (err) {
                alert(err);

            }

        });

    });


});
function editPaymentDetails(paymentRowIndex) {


    var paymentId = $('#paymentId_'+paymentRowIndex).text();
    var loanaccno = $('#loanaccno_'+paymentRowIndex).text();
    var colpaydetailsfromdate = $('#colpaydetailsfromdate_'+paymentRowIndex).text();
    var colpaydetailstodate = $('#colpaydetailstodate_'+paymentRowIndex).text();
    var coldetailsBalanceamount = $('#coldetailsBalanceamount_'+paymentRowIndex).text();
    var coldetailspaymentstatus = $('#coldetailspaymentstatus_'+paymentRowIndex).text();
    var coldetailscolMonth = $('#coldetailscolMonth_'+paymentRowIndex).text();
    //flood Id with value
    $("#paymentId").val(paymentId);
    $("#loanaccno").val(loanaccno);
    $("#colpaydetailsfromdate").val(colpaydetailsfromdate);
    $("#colpaydetailstodate").val(colpaydetailstodate);
    $("#coldetailscolMonth").val(coldetailscolMonth);
    $("#coldetailspaymentstatus").val(coldetailspaymentstatus);
    $("#coldetailsBalanceamount").val(coldetailsBalanceamount);
    $("#is_editpaymentInfo").text('1');
    $("#rowIndexpaymentInfo").text(paymentRowIndex);

}

function resetPaymentInfo() {
    $("#paymentId").val('');
    $("#loanaccno").val('');
    $("#colpaydetailsfromdate").val('');
    $("#colpaydetailstodate").val('');
    $("#coldetailscolMonth").val('');
    $("#coldetailspaymentstatus").val('');
    $("#coldetailsBalanceamount").val('');
    $("#is_editpaymentInfo").text('0');
    $("#rowIndexpaymentInfo").text('');


}
function deletePaymentDetails(i,paymentRowIndex){
    if(confirm('Want to delete')){
        var paymentId = $('#paymentId_'+paymentRowIndex).text();
        var loanaccno = $('#loanaccno_'+paymentRowIndex).text();
        var colpaydetailsfromdate = $('#colpaydetailsfromdate_'+paymentRowIndex).text();
        var colpaydetailstodate = $('#colpaydetailstodate_'+paymentRowIndex).text();
        var coldetailsBalanceamount = $('#coldetailsBalanceamount_'+paymentRowIndex).text();
        var coldetailspaymentstatus = $('#coldetailspaymentstatus_'+paymentRowIndex).text();
        var coldetailscolMonth = $('#coldetailscolMonth_'+paymentRowIndex).text();
        var cbsloanId= $("#odLoanId").val();
        var paymentDetailsData = {
            'id': paymentId,
            'loanAccountNumber': loanaccno,
            'strFromDate': colpaydetailsfromdate,
            'strToDate': colpaydetailstodate,
            'collectionMonth': coldetailscolMonth,
            'paymentStatus': coldetailspaymentstatus,
            'balanceAmount': coldetailsBalanceamount,
            'deleted':true,
            'cbsLoanId':cbsloanId
        };
        var JsonpaymentDetails = JSON.stringify(paymentDetailsData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/collection-payment-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonpaymentDetails,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);

            },
            success: function (data) {
                $("#alertMessageCM").text('');
                $("#CMError").val('');
                var message = "<ul style='list-style-type:disc'><li>Deleted</li></ul>";
                $("#alertMessageCM").append(message);
                $("#CMError").modal("toggle");
                removeRow(i);
            }
        });

    }

}
$("#btn_vcpd").click(function () {
    var expandButton=$(this).find('i').attr('class').split("fa fa-").join("");
    var collecionSupervisorID=$("#collecionSupervisorID").text();
    var cbsloanId= $("#forShow").text();
    if(collecionSupervisorID=='Collection Supervisor' && expandButton=='plus' ){
        console.log(" collecionSupervisorID"+collecionSupervisorID);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/supervisorseen/collectinpaymentdetails/?cbsLoanId=' + cbsloanId,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data) {
                console.log(data);

            }
        });
    }
    if(expandButton=='minus'){
        $('#collectionPaymentDetailstbl tr').each(function() {
            $('#collectionPaymentDetailstbl tr').removeClass('highlightfirsttablerow');
        });


    }



});
