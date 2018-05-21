function resetAccountInfo(){

    console.log("HEy");
    $ ("#accountName").val('');
    $ ("#accNo").val('');
    $ ("#currencyType").val('0');
    $ ("#accType").val('');
}
;

function addAccountInformation(number){

        var accountName= $("#accountName").val();
        var accountNo= $("#accNo").val();
        var currencyType= $("#currencyType").val();
        var accountType= $("#accType").val();
        console.log("currencyType"+currencyType );
        var accountInfoId= $("#accinfoId").val();
        var smsAlert= $("#smsAlert").val();
        var mailingAddress= $("#mailingAddress").val();
        var currentOutstanding= $("#currentOutstatnding").val();
        var percentageofOutstanding= $("#percentageOfOutstanding").val();
        var loanId= $("#LoanId").val();
        var customerId = $('#customerId' + number).val();
        //var customerId= $("#customerId").val();

    var accountInformationData = {
        'accountInfoId' :accountInfoId,
        'accountName' : accountName,
        'accountNo' : accountNo,
        'accountType': accountType,
        'smsAlert': smsAlert,
        'mailingAddress': mailingAddress,
        'currentOutstanding' : currentOutstanding,
        'percentageofOutstanding' : percentageofOutstanding,
        'enabled' :true,
        'currencyType':currencyType,
        'loanId':loanId,
        'customerId':customerId,


    };


        var JsonObjectForAccount = JSON.stringify(accountInformationData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/accountInfo/create',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JsonObjectForAccount,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    header, token);
            },

            success: function (data) {

            	 $('#modal-account-information').modal('hide');
            	if(true){
            		 $("#specialAlert").text("SuccessFully Saved");
                     $("#exampleModalLong").modal("toggle");
                    
            		
            	}
            	
                    var accRow='<tr>'+
                        '<td><label style="display: none">'+data.accountInfoId+'</label>'+
                        '<label>'+data.accountName+'</label></td>'+
                        '<td><label>'+data.accountNo+'</label></td>'+
                        '<td><label>'+data.currencyType+'</label></td>'+
                        '<td><label>'+data.accountType+'</label></td>'
                        +'</tr>';


                    $ ("#accInfoTable").append(accRow);

                resetAccountInfo();


            },
            error: function (err) {
                alert(err);
            }
        });


}
;

$("#currentOutstatnding").change(function()
{
    if($(this).val() == "Percentage of Current Outstanding")
    {
        $(".conditioncls").show();
    }
    else
    {
        $(".conditioncls").hide();
    }
});