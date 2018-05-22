$(document).ready(function () {

    $("#overallSaveBtn").click(function () {
        var overallDetailsRowIndex=$('#overallCollectionDetails tr:last').attr('id').split("overallCollectionDetailRow_").join("");
        overallDetailsRowIndex=parseInt(overallDetailsRowIndex);
        overallDetailsRowIndex+=1;
        var collectionOfficer= $('#generalInfocollectionOfficer').text();
        var overallcollectionDetailsId = $("#overallcollectionDetailsId").val();
        var cbsloanId= $("#odLoanId").val();
        var overallLoanAccountNo = $("#overallLoanAccountNo").text();
        var overallCollectionNature = $("#overallCollectionNature").val();
        var overallCollectionNatureType = "";
        if (overallCollectionNature != "") {
            var overallCollectionNatureType = $('#overallCollectionNature').find('option[value="' + overallCollectionNature + '"]').text();
        }

        var overallCollectionReasonforOverdue=$('#overallCollectionReasonforOverdue').val();
        var overallCollectionReasonforOverdueName = "";
        if (overallCollectionReasonforOverdue != "") {
            var overallCollectionReasonforOverdueName = $('#overallCollectionReasonforOverdue').find('option[value="' + overallCollectionReasonforOverdue + '"]').text();
        }

        var overallCollectionPromiseKept=$('#overallCollectionPromiseKept').val();

        var overallCollectionPromiseKeptName = "";
        if (overallCollectionPromiseKept != "") {
            var overallCollectionPromiseKeptName = $('#overallCollectionPromiseKept').find('option[value="' + overallCollectionPromiseKept + '"]').text();
        }

        var overallComments = $("#overallComments").val();

        var is_editOverallCollectionInfo = $("#is_editOverallCollectionInfo").text();
        var rowIndexOverallCollectionInfo = $("#rowIndexOverallCollectionInfo").text();
        var overallCollectionData = {
            'id': overallcollectionDetailsId,
            'loanAcountNumber': overallLoanAccountNo,
            'collectionNature': overallCollectionNature,
            'resoanForOverdue': overallCollectionReasonforOverdue,
            'promiseKept': overallCollectionPromiseKept,
            'comments': overallComments,
            'collectionOfficer':collectionOfficer,
            'deleted':false,
            'cbsLoanId':cbsloanId
        };
        var JsonoverallCollection = JSON.stringify(overallCollectionData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/overall-collection-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonoverallCollection,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);

            },
            success: function (data) {
                $("#alertMessageCM").text('');
                $("#CMError").val('');
                var message = "<ul style='list-style-type:disc'><li>Successfully Saved</li></ul>";
                $("#alertMessageCM").append(message);
                $("#CMError").modal("toggle");
                console.log(data);
                if (is_editOverallCollectionInfo == 0) {
                    var newRow = '<tr id="overallCollectionDetailRow_' + overallDetailsRowIndex +'">' +
                        '<td><label id="overallDetails_createdDate_' + overallDetailsRowIndex + '">' + data.strCreatedDate + '</label>' +
                        '<label id="overallDetails_modifiedDate_' + overallDetailsRowIndex + '"style="display: none">' + data.strModifiedDate + '</label></td>' +
                        '<td><label id="collectionOfficer_' + overallDetailsRowIndex + '">' + data.collectionOfficer + '</label>' +

                        '<label id="overallcollectionDetailsId_' + overallDetailsRowIndex + '"style="display: none">' + data.id + '</label></td>' +
                        '<td><label id="overallDetailsMonth_' + overallDetailsRowIndex + '">' + data.collectionMonth + '</label></td>' +

                        '<td><label id="overallCollectionNature_' + overallDetailsRowIndex + '"style="display: none">' + data.collectionNature + '</label>' +
                        '<label id="overallCollectionNatureType_' + overallDetailsRowIndex + '">' + overallCollectionNatureType + '</label></td>' +

                        '<td><label id="overallCollectionReasonforOverdue_' + overallDetailsRowIndex + '"style="display: none">' + data.resoanForOverdue + '</label>' +

                        '<label id="overallCollectionReasonforOverdueType_' + overallDetailsRowIndex + '">' +overallCollectionReasonforOverdueName+ '</label></td>' +

                        '<td><label id="overallCollectionPromiseKept_' + overallDetailsRowIndex + '"style="display: none">' + data.promiseKept + '</label>' +
                        '<label id="overallCollectionPromiseKeptType_' + overallDetailsRowIndex + '">' + overallCollectionPromiseKeptName + '</label></td>' +

                        '<td><label id="overallComments_' + overallDetailsRowIndex + '">' + data.comments + '</label></td>' +

                        '<td><button href="#" class="btn-success" onclick="editOverallCollectionDetails( ' +overallDetailsRowIndex + ' )" data-toggle="modal" data-target="#modal-overall-cllection-status-details"><i class="fa fa-pencil" ></i></button>' +
                        '<button href="#" onclick="deleteOverallCollectionDetails(this,' +overallDetailsRowIndex + ')"><i class="fa fa-times"></i></button></td>' +
                        '</tr>';
                    $("#overallCollectionDetails").append(newRow);
                    //callRegRowIndex++;

                }else{
                    $('#overallcollectionDetailsId_'+rowIndexOverallCollectionInfo).text(data.id);
                    $('#overallDetailsMonth_'+rowIndexOverallCollectionInfo).text(data.collectionMonth);
                    $('#overallDetails_createdDate_'+rowIndexOverallCollectionInfo).text(data.strCreatedDate);
                    $('#overallCollectionNature_'+rowIndexOverallCollectionInfo).text(data.collectionNature);
                    $('#overallCollectionNatureType_'+rowIndexOverallCollectionInfo).text(overallCollectionNatureType);
                    $('#overallCollectionReasonforOverdue_'+rowIndexOverallCollectionInfo).text(data.resoanForOverdue);
                    $('#overallCollectionReasonforOverdueType_'+rowIndexOverallCollectionInfo).text(overallCollectionReasonforOverdueName);
                    $('#overallCollectionPromiseKept_'+rowIndexOverallCollectionInfo).text(data.promiseKept);
                    $('#overallCollectionPromiseKeptType_'+rowIndexOverallCollectionInfo).text(overallCollectionPromiseKeptName);
                    $('#overallComments_'+rowIndexOverallCollectionInfo).text(data.comments);

                }
                resetOverallCollection();
                $('#collectionDetailsSavebtn').attr("data-dismiss","modal");


            },
            error:function (err) {
                alert(err);

            }

        });

    });


});
function editOverallCollectionDetails(overallDetailsRowIndex) {


    var overallcollectionDetailsId=$('#overallcollectionDetailsId_'+overallDetailsRowIndex).text();
    var overallCollectionNature=$('#overallCollectionNature_'+overallDetailsRowIndex).text();
    var overallCollectionReasonforOverdue=$('#overallCollectionReasonforOverdue_'+overallDetailsRowIndex).text();
    var overallCollectionPromiseKept=$('#overallCollectionPromiseKept_'+overallDetailsRowIndex).text();
    var overallComments=$('#overallComments_'+overallDetailsRowIndex).text();


    //flood Id with value
    $("#is_editOverallCollectionInfo").text('1');
    $("#rowIndexOverallCollectionInfo").text(overallDetailsRowIndex);
    $("#overallcollectionDetailsId").val(overallcollectionDetailsId);
    $("#overallCollectionNature").val(overallCollectionNature);
    $("#overallCollectionReasonforOverdue").val(overallCollectionReasonforOverdue);
    $("#overallComments").val(overallComments);
    $("#overallCollectionPromiseKept").val(overallCollectionPromiseKept);
}

function resetOverallCollection() {
    $("#is_editOverallCollectionInfo").text('0');
    $("#rowIndexOverallCollectionInfo").text('');
    $("#overallcollectionDetailsId").val('');
    $("#overallCollectionNature").val('');
    $("#overallCollectionReasonforOverdue").val('');
    $("#overallComments").val('');
    $("#overallCollectionPromiseKept").val('');



}
function deleteOverallCollectionDetails(i,overallDetailsRowIndex){
    if(confirm('Want to delete')){
        var overallcollectionDetailsId=$('#overallcollectionDetailsId_'+overallDetailsRowIndex).text();
        var overallCollectionNature=$('#overallCollectionNature_'+overallDetailsRowIndex).text();
        var overallCollectionReasonforOverdue=$('#overallCollectionReasonforOverdue_'+overallDetailsRowIndex).text();
        var overallCollectionPromiseKept=$('#overallCollectionPromiseKept_'+overallDetailsRowIndex).text();
        var overallComments=$('#overallComments_'+overallDetailsRowIndex).text();
        var overallLoanAccountNo = $("#overallLoanAccountNo").text();
        var cbsloanId= $("#odLoanId").val();
        var collectionOfficer= $('#generalInfocollectionOfficer').text();
        var overallCollectionData = {
            'id': overallcollectionDetailsId,
            'loanAcountNumber': overallLoanAccountNo,
            'collectionNature': overallCollectionNature,
            'resoanForOverdue': overallCollectionReasonforOverdue,
            'promiseKept': overallCollectionPromiseKept,
            'comments': overallComments,
            'collectionOfficer':collectionOfficer,
            'deleted':true,
            'cbsLoanId':cbsloanId
        };
        console.log("ovarallCollectionData "+ overallCollectionData);
        var JsonoverallCollection = JSON.stringify(overallCollectionData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");


        $.ajax({
            url: '/overall-collection-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonoverallCollection,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);

            },
            success: function (data) {
                $("#alertMessageCM").text('');
                $("#CMError").val('');
                var message = "<ul style='list-style-type:disc'><li>Deleted</li></ul>";
                $("#alertMessageCM").append(message);
                $("#CMError").modal("toggle");
                alert("Deleted");
                console.log(data);
                removeRow(i);
            }
        });

    }

}
$("#btn_voc").click(function () {
    var expandButton=$(this).find('i').attr('class').split("fa fa-").join("");
    var collecionSupervisorID=$("#collecionSupervisorID").text();
    var cbsloanId= $("#forShow").text();
    if(collecionSupervisorID=='Collection Supervisor' && expandButton=='plus'){
        console.log(" collecionSupervisorID"+collecionSupervisorID);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/supervisorseen/overallcollectindetails/?cbsLoanId=' + cbsloanId,
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
        $('#overallCollectionDetails tr').each(function() {
            $('#overallCollectionDetails tr').removeClass('highlightfirsttablerow');
        });


    }



});
