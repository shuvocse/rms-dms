$(document).ready(function () {
    $("#saveCollectionAgent").click(function () {
        var collectionAgentRowIndex=$('#collectionagentTbl tr:last').attr('id').split("collectionAgentRow_").join("");
        collectionAgentRowIndex=parseInt(collectionAgentRowIndex);
        collectionAgentRowIndex+=1;
        var cbsloanId= $("#odLoanId").val();
        var collectionAgentloanAccountNo  = $("#collectionAgentloanAccountNo").val();
        var collectionAgentId= $("#collectionAgentId").val();
        var iseditAgent= $("#is-edit-Agent").text();
        var rowIndexAgentInfo = $("#rowIndexAgentInfo").text();
        var collectionAgentName = $("#collectionAgentName").val();
        var collectionRate = $("#collectionRate").val();
        var CollectionAgentAssignDate = $("#CollectionAgentAssignDate").val();
        var collectionAgentRemarks = $("#collectionAgentRemarks").val();
        var collectionOfficer =$('#generalInfocollectionOfficer').text();

        var collectionAgentData= {
            'id':collectionAgentId,
            'cbsLoanId':cbsloanId,
            'agentName':collectionAgentName,
            'collectionRate':collectionRate,
            'strAssignDate':CollectionAgentAssignDate,
            'agentRemarks':collectionAgentRemarks,
            'loanAccountNo':collectionAgentloanAccountNo,
            'collectionOfficer':collectionOfficer,
            'enabled':true,
            'deleted':false

        };
        var JsonCollectionAgentDetails=JSON.stringify(collectionAgentData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/collection-agent-details/save',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonCollectionAgentDetails,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);

            },
            success:function (data) {
                $("#alertMessageCM").text('');
                $("#CMError").val('');
                var message = "<ul style='list-style-type:disc'><li>Successfully Saved</li></ul>";
                $("#alertMessageCM").append(message);
                $("#CMError").modal("toggle");
              if(iseditAgent==0) {
                  var newRow = '<tr id="collectionAgentRow_' + collectionAgentRowIndex + '">' +
                      '<td><label id="collectionAgent_createdDate_' + collectionAgentRowIndex + '">' + data.strCreatedDate + '</label></td>' +
                      '<td><label id="collectionAgent_ModifiedDate_' + collectionAgentRowIndex + '"style="display: none">' + data.strModifiedDate + '</label></td>' +
                      '<td><label id="collectionAgentName_' + collectionAgentRowIndex + '">' + data.agentName + '</label>' +

                      '<label id="collectionAgentId_' + collectionAgentRowIndex + '"style="display: none">' + data.id + '</label>' +
                      '<label id="collectionAgentloanAccountNo_' + collectionAgentRowIndex + '"style="display: none">' + data.loanAccountNo + '</label></td>' +
                      '<td><label id="collectionRate_' + collectionAgentRowIndex + '">' + data.collectionRate + '</label></td>' +

                      '<td><label id="collectionAssignDate_' + collectionAgentRowIndex + '">' + data.strAssignDate + '</label></td>' +
                      '<td><label id="collectionOfficer_' + collectionAgentRowIndex + '">' + data.collectionOfficer + '</label></td>' +
                      '<td><label id="collectionAgentRemarks_' + collectionAgentRowIndex + '">' + data.agentRemarks + '</label></td>' +

                      '<td><button href="#" class="btn-success" onclick="editCollectionAgentDetails('+collectionAgentRowIndex +')" data-toggle="modal" data-target="#modal-collection-agent-details"><i class="fa fa-pencil" ></i></button>' +
                      '<button href="#" onclick="deleteCollectionAgent(this,' + collectionAgentRowIndex + ')"><i class="fa fa-times"></i></button></td>' +
                      '</tr>';

                  $("#collectionagentTbl").append(newRow);
              }else{
                  $('#collectionAgent_ModifiedDate_'+rowIndexAgentInfo).css("display", "block");
                  $('#collectionAgent_createdDate_'+rowIndexAgentInfo).text(data.strCreatedDate);
                  $('#collectionAgent_ModifiedDate_'+rowIndexAgentInfo).text(data.strModifiedDate);
                  $('#collectionAgentName_'+rowIndexAgentInfo).text(data.agentName);
                  $('#collectionAgentId_'+rowIndexAgentInfo).text(data.id);
                  $('#collectionRate_'+rowIndexAgentInfo).text(data.collectionRate);
                  $('#collectionAssignDate_'+rowIndexAgentInfo).text(data.strAssignDate);
                  $('#collectionOfficer_'+rowIndexAgentInfo).text(data.collectionOfficer);
                  $('#collectionAgentRemarks_'+rowIndexAgentInfo).text(data.agentRemarks);

              }
                resetCollectionAgentDetails();
              $('#saveCollectionAgent').attr("data-dismiss","modal");

            },
            error:function (err) {
                alert(err);

            }
        });
    })
});
function editCollectionAgentDetails(collectionAgentRowIndex) {
    var collectionAgentName=$('#collectionAgentName_'+collectionAgentRowIndex).text();
    var collectionAgentId =$('#collectionAgentId_'+collectionAgentRowIndex).text();
    var collectionRate=$('#collectionRate_'+collectionAgentRowIndex).text();
    var collectionAssignDate=$('#collectionAssignDate_'+collectionAgentRowIndex).text();
    var collectionOfficer=$('#collectionOfficer_'+collectionAgentRowIndex).text();
    var collectionAgentRemarks=$('#collectionAgentRemarks_'+collectionAgentRowIndex).text();
    // flood modal Input with value

    $("#is-edit-Agent").text('1');
    $("#rowIndexAgentInfo").text(collectionAgentRowIndex);
    $("#collectionAgentId").val(collectionAgentId);
    $("#collectionRate").val(collectionRate);
    $("#CollectionAgentAssignDate").val(collectionAssignDate);
    $("#collectionOfficer").val(collectionOfficer);
    $("#collectionAgentRemarks").val(collectionAgentRemarks);
    $("#collectionAgentName").val(collectionAgentName);

}
function resetCollectionAgentDetails() {
    $("#collectionAgentId").val('');
    $("#collectionRate").val('');
    $("#collectionAgentName").val('');
    $('#CollectionAgentAssignDate').val('');
    $("#collectionOfficer").val('');
    $("#collectionAgentRemarks").val('');
    $("#is-edit-Agent").text('0');
    $("#rowIndexAgentInfo").text('');

};
function deleteCollectionAgent(i,collectionAgentRowIndex) {
    var collectionAgentName=$('#collectionAgentName_'+collectionAgentRowIndex).text();
    var collectionAgentId =$('#collectionAgentId_'+collectionAgentRowIndex).text();
    var collectionRate=$('#collectionRate_'+collectionAgentRowIndex).text();
    var collectionAssignDate=$('#collectionAssignDate_'+collectionAgentRowIndex).text();
    var collectionOfficer=$('#collectionOfficer_'+collectionAgentRowIndex).text();
    var collectionAgentRemarks=$('#collectionAgentRemarks_'+collectionAgentRowIndex).text();
    var loanAccountNo= $('#collectionAgentloanAccountNo_'+collectionAgentRowIndex).text();
    var cbsloanId= $("#odLoanId").val();

    var collectionAgentData= {
        'id':collectionAgentId,
        'cbsLoanId':cbsloanId,
        'agentName':collectionAgentName,
        'collectionRate':collectionRate,
        'strAssignDate':collectionAssignDate,
        'agentRemarks':collectionAgentRemarks,
        'loanAccountNo':loanAccountNo,
        'collectionOfficer':collectionOfficer,
        'enabled':true,
        'deleted':true

    };
    var JsonCollectionAgentDetails=JSON.stringify(collectionAgentData);
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    $.ajax({
        url: '/collection-agent-details/save',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JsonCollectionAgentDetails,
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


};

$("#btn_vcad").click(function () {
    var expandButton=$(this).find('i').attr('class').split("fa fa-").join("");
    var collecionSupervisorID=$("#collecionSupervisorID").text();
    var cbsloanId= $("#forShow").text();
    if(collecionSupervisorID=='Collection Supervisor' && expandButton=='plus'){
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        $.ajax({
            url: '/supervisorseen/collectionAgentdetails/?cbsLoanId=' + cbsloanId,
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
        $('#collectionagentTbl tr').each(function() {
            $('#collectionagentTbl tr').removeClass('highlightfirsttablerow');
        });


    }



});
