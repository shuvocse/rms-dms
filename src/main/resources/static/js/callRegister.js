$(document).ready(function () {
    $("#savecallregister").click(function () {
        var callRegRowIndex=$('#callRegisterTable tr:last').attr('id').split("callRegTabRowId_").join("");
        callRegRowIndex=parseInt(callRegRowIndex);
        callRegRowIndex+=1;
        var callRegisterId = $("#callRegisterId").val();
        var cbsloanId= $("#odLoanId").val();
        var collectionMonth = $("#collectionMonth").val();
        var calledTo = $("#calledTo").val();
        var calledToOfficer = "";
        if (calledTo != "") {
            var calledToOfficer = $('#calledTo').find('option[value="' + calledTo + '"]').text();
        }
        console.log("called to officer : " + calledToOfficer);
        var calledPersonName = $("#calledPersonName").val();
        var calledDateTime = $("#calledDateTime").val();
        var promiseDate = $("#promiseDate").val();
        var collectionOfficer = $('#generalInfocollectionOfficer').text();
        var callFeedback = $("#callFeedback").val();
        var callRegisterRemarks = $("#callRegisterRemarks").val();
        var is_editcalRegInfo = $("#is_editcalRegInfo").text();
        var rowIndexcallRegInfo = $("#rowIndexcallRegInfo").text();
        var callRegisterData = {
            'callRegisterId': callRegisterId,
            'collectionMonth': collectionMonth,
            'calledTo': calledTo,
            'calledPersonName': calledPersonName,
            'calledDateTime': calledDateTime,
            'promiseDate': promiseDate,
            'collectionOfficer': collectionOfficer,
            'callFeedback': callFeedback,
            'callRegisterRemarks': callRegisterRemarks,
            'deleted':false,
            'cbsloanId':cbsloanId
            /*'modifiedDate':modifiedDate*/
        };
        console.log("after call Register data ");
        var JsoncallRegister = JSON.stringify(callRegisterData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/callregister/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsoncallRegister,
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
                if (is_editcalRegInfo == 0) {
                    var newRow = '<tr id="callRegTabRowId_' + callRegRowIndex +'">' +
                        '<td><label id="createdDate_' + callRegRowIndex + '">' + data.recordOn + '</label></td>' +
                        '<td><label id="modifiedDate_' + callRegRowIndex + '"style="display: none">' + data.modifiedOn + '</label></td>' +
                        '<td><label id="callRegisterId_' + callRegRowIndex + '"style="display: none">' + data.callRegisterId + '</label>' +
                        '<label id="calledTo_' + callRegRowIndex + '"style="display: none">' + calledTo + '</label>' +
                        '<label id="collectionMonth_' + callRegRowIndex + '"style="display: none">' + collectionMonth + '</label>' +
                        '<label id="calledToOfficer_' + callRegRowIndex + '">' + calledToOfficer + '</label></td>' +
                        '<td><label id="calledPersonName_' + callRegRowIndex + '">' + calledPersonName + '</label></td>' +
                        '<td><label id="calledDateTime_' + callRegRowIndex + '">' + calledDateTime + '</label></td>' +
                        '<td><label id="promiseDate_' + callRegRowIndex + '">' + promiseDate + '</label></td>' +
                        '<td><label id="collectionOfficer_' + callRegRowIndex + '">' + collectionOfficer + '</label></td>' +
                        '<td><label id="callFeedback_' + callRegRowIndex + '">' + callFeedback + '</label></td>' +
                        '<td><label id="callRegisterRemarks_' + callRegRowIndex + '">' + callRegisterRemarks + '</label></td>' +
                        '<td style="width:20px"><button style="width: 45%" href="#" class="btn-success" onclick="editCallRegister( ' +callRegRowIndex + ' )" data-toggle="modal" data-target="#modal-call-register-details"><i class="fa fa-pencil" ></i></button>' +
                        '<button href="#" onclick="deleteCallReg(this,' +callRegRowIndex + ')"><i class="fa fa-times"></i></button></td>' +
                        '</tr>';
                    $("#callRegisterTable").append(newRow);

                    //callRegRowIndex++;
                }else{
                    console.log("Modidifed date : " +data.modifiedOn );
                    $('#modifiedDate_'+rowIndexcallRegInfo).css("display", "block");
                    $('#callRegisterId_'+rowIndexcallRegInfo).text(data.callRegisterId);
                    $('#createdDate_'+rowIndexcallRegInfo).text(data.recordOn);
                    $('#modifiedDate_'+rowIndexcallRegInfo).text(data.modifiedOn);
                    $('#calledTo_'+rowIndexcallRegInfo).text(calledTo);
                    $('#calledToOfficer_'+rowIndexcallRegInfo).text(calledToOfficer);
                    $('#calledPersonName_'+rowIndexcallRegInfo).text(calledPersonName);
                    $('#calledDateTime_'+rowIndexcallRegInfo).text(calledDateTime);
                    $('#promiseDate_'+rowIndexcallRegInfo).text(promiseDate);
                    $('#collectionOfficer_'+rowIndexcallRegInfo).text(collectionOfficer);
                    $('#callFeedback_'+rowIndexcallRegInfo).text(callFeedback);
                    $('#callRegisterRemarks_'+rowIndexcallRegInfo).text(callRegisterRemarks);
                    $('#collectionMonth_'+rowIndexcallRegInfo).text(collectionMonth);

                }
                resetCallRegInfo();
                $('#savecallregister').attr("data-dismiss","modal");


            },
            error:function (err) {
                alert(err);

            }

        });

    });


});
function editCallRegister(callRegRowIndex) {
    var callRegisterId=$('#callRegisterId_'+callRegRowIndex).text();
    console.log("call Register Id : "+callRegisterId);
    var collectionMonth = $('#collectionMonth_'+callRegRowIndex).text();
    var calledTo = $('#calledTo_'+callRegRowIndex).text();
    var calledPersonName = $('#calledPersonName_'+callRegRowIndex).text();
    var calledDateTime = $('#calledDateTime_'+callRegRowIndex).text();
    var promiseDate = $('#promiseDate_'+callRegRowIndex).text();
    var callFeedback = $('#callFeedback_'+callRegRowIndex).text();
    var callRegisterRemarks = $('#callRegisterRemarks_'+callRegRowIndex).text();


    $("#callRegisterId").val(callRegisterId);
    $("#collectionMonth").val(collectionMonth);
    $("#calledTo").val(calledTo);
    $("#calledPersonName").val(calledPersonName);
    $("#calledDateTime").val(calledDateTime);
    $("#promiseDate").val(promiseDate);
    $("#callFeedback").val(callFeedback);
    $("#callRegisterRemarks").val(callRegisterRemarks);
    $("#is_editcalRegInfo").text('1');
    $("#rowIndexcallRegInfo").text(callRegRowIndex);

}
function resetCallRegInfo() {
    $("#callRegisterId").val('');
    $("#collectionMonth").val('');
    $("#calledTo").val('');
    $("#calledPersonName").val('');
    $("#calledDateTime").val('');
    $("#promiseDate").val('');
    $("#callFeedback").val('');
    $("#callRegisterRemarks").val('');
    $("#is_editcalRegInfo").text('0');
    $("#rowIndexcallRegInfo").text('');


}
function deleteCallReg(i,callRegRowIndex){
    if(confirm('Want to delete')){
        var callRegisterId=$('#callRegisterId_'+callRegRowIndex).text();
        console.log("call Register Id : "+callRegisterId);
        var collectionMonth = $('#collectionMonth_'+callRegRowIndex).text();
        var calledTo = $('#calledTo_'+callRegRowIndex).text();
        var calledPersonName = $('#calledPersonName_'+callRegRowIndex).text();
        var calledDateTime = $('#calledDateTime_'+callRegRowIndex).text();
        var promiseDate = $('#promiseDate_'+callRegRowIndex).text();
        var collectionOfficer = $('#collectionOfficer_'+callRegRowIndex).text();
        var callFeedback = $('#callFeedback_'+callRegRowIndex).text();
        var callRegisterRemarks = $('#callRegisterRemarks_'+callRegRowIndex).text();
        var cbsloanId= $("#odLoanId").val();
        var callRegisterData = {
            'callRegisterId': callRegisterId,
            'collectionMonth': collectionMonth,
            'calledTo': calledTo,
            'calledPersonName': calledPersonName,
            'calledDateTime': calledDateTime,
            'promiseDate': promiseDate,
            'collectionOfficer': collectionOfficer,
            'callFeedback': callFeedback,
            'callRegisterRemarks': callRegisterRemarks,
            'cbsloanId':cbsloanId,
            'deleted':true

        };
        var JsoncallRegister = JSON.stringify(callRegisterData);
        console.log(JsoncallRegister);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/callregister/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsoncallRegister,
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
$( "#calledTo" ).change(function() {
    var calledTOInformation= $("#calledTo").val();
    var cbsloanId= $("#odLoanId").val();
    if(calledTOInformation=='1'){
        $("#calledPersonName").val($("#guarantorName").text());
    }if(calledTOInformation=='2'){
        $("#calledPersonName").val($("#referrenceName").text());
    }if(calledTOInformation=='3'){
        $("#calledPersonName").val($("#borrowerName").text());
    }


});

$("#btn_vcrd").click(function () {

    var expandButton=$(this).find('i').attr('class').split("fa fa-").join("");
    var collecionSupervisorID=$("#collecionSupervisorID").text();
    var cbsloanId= $("#forShow").text();
    if(collecionSupervisorID=='Collection Supervisor' && expandButton=='plus' ){
        console.log(" collecionSupervisorID"+collecionSupervisorID);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/supervisorseen/callRegisterDetails/?cbsLoanId=' + cbsloanId,
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
        $('#callRegisterTable tr').each(function() {
            $('#callRegisterTable tr').removeClass('highlightfirsttablerow');
        });


    }



});

