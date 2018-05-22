$(document).ready(function () {

    $("#savelegal").click(function () {
        var legalDetailsRowIndex=$('#legalDetailstbl tr:last').attr('id').split("legalDetailRow_").join("");
        legalDetailsRowIndex=parseInt(legalDetailsRowIndex);
        legalDetailsRowIndex+=1;
        var legalDetailsId = $("#legalDetailsId").val();
        var cbsloanId= $("#odLoanId").val();
        var loanaccno = $("#overallCollectionloanAccountNo").val();
        var legalDetailsMonth = $("#OverallDetailsMonth").val();
        var actionDate = $("#").val();
        var legalDetailsLowFirmName = $("#legalDetailsLowFirmName").val();
        var legalDetailsActionType = $("#legalDetailsActionType").val();
        var legalDetailActionTypeName = "";
        if (legalDetailsActionType != "") {
            var legalDetailActionTypeName = $('#legalDetailsActionType').find('option[value="' + legalDetailsActionType + '"]').text();
        }
        var legalDetailsActionDate = $("#legalDetailsActionDate").val();
        var legalDetailsFeedbackDate = $("#legalDetailsFeedbackDate").val();
        var legalDetailsAmount = $("#legalDetailsAmount").val();
        var legalDetailsCaseType = $("#legalDetailsCaseType").val();
        var legalRemarks = $("#legalRemarks").val();
        var is_editlegalDetails = $("#is-edit-legalDetails").text();
        var rowIndexLegalDetailsInfo = $("#rowIndexlegalDetailsInfo").text();
        var legalDetailsData = {
            'id': legalDetailsId,
            'loanAccNumber': loanaccno,
            'actionType': legalDetailsActionType,
            'lawFirmName': legalDetailsLowFirmName,
            'collectionMonth': legalDetailsMonth,
            'caseType': legalDetailsCaseType,
            'strActionDate': legalDetailsActionDate,
            'strFeedbackDate': legalDetailsFeedbackDate,
            'amountClaimed': legalDetailsAmount,
            'legalRemarks': legalRemarks,
            'deleted':false,
            'cbsLoanId':cbsloanId
        };
        var JsonLegalDetails = JSON.stringify(legalDetailsData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        console.log(JsonLegalDetails);
        $.ajax({
            url: '/legal-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonLegalDetails,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);

            },
            success: function (data) {

                $("#alertMessageCM").text('');
                $("#CMError").val('');
                var message = "<ul style='list-style-type:disc'><li>Successfully saved</li></ul>";
                $("#alertMessageCM").append(message);
                $("#CMError").modal("toggle");

                if (is_editlegalDetails == 0) {
                    var newRow = '<tr id="legalDetailRow_' + legalDetailsRowIndex +'">' +
                        '<td><label id="legalDetails_createdDate_' + legalDetailsRowIndex + '">' + data.strCreatedDate + '</label></td>' +
                        '<td><label id="legalDetails_modifiedDate_' + legalDetailsRowIndex + '"style="display: none">' + data.strModifiedDate + '</label></td>' +
                        '<td><label id="legalDetailsId_' + legalDetailsRowIndex + '"style="display: none">' + data.id + '</label>' +
                        '<label id="legalDetailsMonth_' + legalDetailsRowIndex + '"style="display: none">' + data.collectionMonth + '</label>' +
                        '<label id="legalDetailsActionType_' + legalDetailsRowIndex + '"style="display: none">' + data.actionType + '</label>' +
                        '<label id="legalDetailActionTypeName_' + legalDetailsRowIndex + '">' + legalDetailActionTypeName + '</label></td>' +
                        '<td><label id="legalDetailsCaseType_' + legalDetailsRowIndex + '">' + data.caseType + '</label></td>' +
                        '<td><label id="legalDetailsLowFirmName_' + legalDetailsRowIndex + '">' + data.lawFirmName + '</label></td>' +
                        '<td><label id="legalDetailsActionDate_' + legalDetailsRowIndex + '">' + data.strActionDate + '</label></td>' +
                        '<td><label id="legalDetailsFeedbackDate_' + legalDetailsRowIndex + '">' + data.strFeedbackDate + '</label></td>' +
                        '<td><label id="legalDetailsAmount_' + legalDetailsRowIndex + '">' + data.amountClaimed + '</label></td>' +
                        '<td><label id="legalRemarks_' + legalDetailsRowIndex + '">' + data.legalRemarks+ '</label></td>' +
                        '<td><button href="#"  style="width: 47%" class="btn-success" onclick="editLegalDetails( ' +legalDetailsRowIndex + ' )" data-toggle="modal" data-target="#modal-legal-details"><i class="fa fa-pencil" ></i></button>' +
                        '<button href="#"  style="width: 45%" onclick="deleteLegalDetails(this,' +legalDetailsRowIndex + ')"><i class="fa fa-times"></i></button></td>' +
                        '</tr>';
                    $("#legalDetailstbl").append(newRow);

                }else{
                    $('#legalDetails_modifiedDate_'+rowIndexLegalDetailsInfo).css("display", "block");
                    $('#legalDetailsId_'+rowIndexLegalDetailsInfo).text(data.id);
                    $('#legalDetailsMonth_'+rowIndexLegalDetailsInfo).text(data.collectionMonth);
                    $('#legalDetails_createdDate_'+rowIndexLegalDetailsInfo).text(data.strCreatedDate);
                    $('#legalDetails_modifiedDate_'+rowIndexLegalDetailsInfo).text(data.strModifiedDate);
                    $('#legalDetailsActionType_'+rowIndexLegalDetailsInfo).text(data.actionType);
                    $('#legalDetailActionTypeName_'+rowIndexLegalDetailsInfo).text(legalDetailActionTypeName);
                    $('#legalDetailsCaseType_'+rowIndexLegalDetailsInfo).text(data.caseType);
                    $('#legalDetailsLowFirmName_'+rowIndexLegalDetailsInfo).text(data.lawFirmName);
                    $('#legalDetailsFeedbackDate_'+rowIndexLegalDetailsInfo).text(data.strFeedbackDate);
                    $('#legalDetailsActionDate_'+rowIndexLegalDetailsInfo).text(data.strActionDate);
                    $('#legalDetailsAmount_'+rowIndexLegalDetailsInfo).text(data.amountClaimed);
                    $('#legalRemarks_'+rowIndexLegalDetailsInfo).text(data.legalRemarks);

                }
                resetlegalDetails();
                $('#savelegal').attr("data-dismiss","modal");


            },
            error:function (err) {
                alert(err);

            }

        });

    });


});
function editLegalDetails(legalDetailsRowIndex) {
    console.log("Hey");

    var legalDetailsId=$('#legalDetailsId_'+legalDetailsRowIndex).text();
    var legalDetailsActionType=$('#legalDetailsActionType_'+legalDetailsRowIndex).text();
    var legalActionTypeName=$('#legalDetailActionTypeName_'+legalDetailsRowIndex).text();
    var legalActionCaseType=$('#legalDetailsCaseType_'+legalDetailsRowIndex).text();
    var legalActionLawFirmName=$('#legalDetailsLowFirmName_'+legalDetailsRowIndex).text();
    var legalAcionFeedBackDate=$('#legalDetailsFeedbackDate_'+legalDetailsRowIndex).text();
    var legalActionActionDate=$('#legalDetailsActionDate_'+legalDetailsRowIndex).text();
    var legalActionAmount=$('#legalDetailsAmount_'+legalDetailsRowIndex).text();
    var legalActionRemarks= $('#legalRemarks_'+legalDetailsRowIndex).text();
    var legalActionDetailsMonth=$('#legalDetailsMonth_'+legalDetailsRowIndex).text();


    //flood Id with value
    $("#is-edit-legalDetails").text('1');
    $("#rowIndexlegalDetailsInfo").text(legalDetailsRowIndex);
    $("#legalDetailsId").val(legalDetailsId);
    $("#legalDetailsMonth").val(legalActionDetailsMonth);
    $("#actionDate").val(legalActionActionDate);
    $("#legalDetailsLowFirmName").val(legalActionLawFirmName);
    $("#legalDetailsActionType").val(legalDetailsActionType);
    $("#legalDetailsActionDate").val(legalActionActionDate);
    $("#legalDetailsFeedbackDate").val(legalAcionFeedBackDate);
    $("#legalDetailsAmount").val(legalActionAmount);
    $("#legalDetailsCaseType").val(legalActionCaseType);
    $("#legalRemarks").val(legalActionRemarks);


}

function resetlegalDetails() {
    $("#is-edit-legalDetails").text('0');
    $("#rowIndexlegalDetailsInfo").text('');
    $("#legalDetailsId").val('');
    $("#legalDetailsMonth").val('');
    $("#actionDate").val('');
    $("#legalDetailsLowFirmName").val('');
    $("#legalDetailsActionType").val('');
    $("#legalDetailsActionDate").val('');
    $("#legalDetailsFeedbackDate").val('');
    $("#legalDetailsAmount").val('');
    $("#legalDetailsCaseType").val('');
    $("#legalRemarks").val('');


}
function deleteLegalDetails(i,legalDetailsRowIndex){
    if(confirm('Want to delete')) { 
    		var legalDetailsId=$('#legalDetailsId_'+legalDetailsRowIndex).text();
    	    var legalDetailsActionType=$('#legalDetailsActionType_'+legalDetailsRowIndex).text();
    	    var legalActionCaseType=$('#legalDetailsCaseType_'+legalDetailsRowIndex).text();
    	    var legalActionLawFirmName=$('#legalDetailsLowFirmName_'+legalDetailsRowIndex).text();
    	    var legalAcionFeedBackDate=$('#legalDetailsFeedbackDate_'+legalDetailsRowIndex).text();
    	    var legalActionDate=$('#legalDetailsActionDate_'+legalDetailsRowIndex).text();
    	    var legalActionAmount=$('#legalDetailsAmount_'+legalDetailsRowIndex).text();
    	    var legalActionRemarks= $('#legalRemarks_'+legalDetailsRowIndex).text();
    	    var legalActionDetailsMonth=$('#legalDetailsMonth_'+legalDetailsRowIndex).text();  
    	    var cbsloanId= $("#odLoanId").val();
    	    var loanaccno = $('#loanaccno').text();
    	   
        
        var legalDetailsData = {
            'id': legalDetailsId,
            'loanAccNumber': loanaccno,
            'actionType': legalDetailsActionType,
            'lawFirmName': legalActionLawFirmName,
            'collectionMonth': legalActionDetailsMonth,
            'caseType': legalActionCaseType,
            'strActionDate': legalActionDate,
            'strFeedbackDate': legalAcionFeedBackDate,
            'amountClaimed': legalActionAmount,
            'legalRemarks': legalActionRemarks,
            'deleted':true,
            'cbsLoanId':cbsloanId
        };
        var JsonLegalDetails = JSON.stringify(legalDetailsData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        console.log(JsonLegalDetails);
        $.ajax({
            url: '/legal-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonLegalDetails,
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
$("#btn_vld").click(function () {
    var expandButton=$(this).find('i').attr('class').split("fa fa-").join("");
    var collecionSupervisorID=$("#collecionSupervisorID").text();
    var cbsloanId= $("#forShow").text();
    if(collecionSupervisorID=='Collection Supervisor' && expandButton=='plus'){
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/supervisorseen/legaldetails/?cbsLoanId=' + cbsloanId,
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
        $('#legalDetailstbl tr').each(function() {
            $('#legalDetailstbl tr').removeClass('highlightfirsttablerow');
        });


    }



});

