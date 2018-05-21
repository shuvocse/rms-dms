var suppRowIndex=1;
var i=0;
function resetSupplimentaryCardInfo(){
	removeErrorMessage('suppCardInfo');
    $("#suppName").val('');
    $("#accNo").val('');
    $("#relApplicant").val('');
    $("#prefName").val('');
    $("#spendinglimit").val('');
    $("#supDOB").val('');
    $("#Supage").val('');
    $("#usd").val('');
    $("#bdt").val('');
    $("#nationalId").val('');
    $("#percreditlimit").val('');
    $("#passportNo").val('');
    $("#supMobileNo").val('');
    $("#passportExdate").val('');
    $("#supDobDay").val('')
    $("#supDobMonth").val('');
    $("#subDobYear").val('');
    $("#passportExdateDay").val('');
    $("#passportExdateMonth").val('');
    $("#passportExdateYear").val('');
    $('#is_editedSupInfo').text('0');
    $('#rowIndexSuppInfo').text('');
    //$('.spendinglimitcls').css("display:none");
    $(".spendinglimitcls").css("display", "none");


    console.log("reset edit: "+ $('#is_editedSupInfo').text());
}
;
/*function fillSupplimentaryCardInfo(){

    $("#suppName").val('Zahid');
    //$("#accNo").val('');
    $("#relApplicant").val('Brother');
    $("#prefName").val('Hamid');
    //$("#spendinglimit").val('');
    $("#supDobDay").val('5')
    $("#supDobMonth").val('02');
    $("#subDobYear").val('2001');
    $("#passportExdateDay").val('14');
    $("#passportExdateMonth").val('06');
    $("#passportExdateYear").val('1999');
    $("#supMobileNo").val('01621');
    //$("#Supage").val('5');
    $("#usd").val('2');
    $("#bdt").val('8');
    $("#nationalId").val('125487');
    $("#percreditlimit").val('6');
    $("#passportNo").val('458');


}
;*/

function addSupplimentaryCardInformation(number){
	
	if(getRequiredFieldIdByLabelUsingClass('suppCardInfo')){
		
		var name= $("#suppName").val();
	    //var accountNo= $("#accNo").val();
	    var relwithApp= $("#relApplicant").val();
	    var preferrenceName= $("#prefName").val();
	    var supplimentaryCardInfo= $("#suppcardinfoId").val();
	    var spendingLimit= $("#spendinglimit").val();
	    var dob = $('#supDobDay').val() + "/" + $('#supDobMonth').val()+ "/" + $('#subDobYear').val();
	    var passportExdate = $('#passportExdateDay').val() + "/" + $('#passportExdateMonth').val()+ "/" + $('#passportExdateYear').val();
	    var Supage= $("#Supage").val();
	    var usd= $("#usd").val();
	    var bdt= $("#bdt").val();
	    var nationalId= $("#nationalId").val();
	    var percreditlimit= $("#percreditlimit").val();
	    var passportNo= $("#passportNo").val();
	    var mobileNo= $("#supMobileNo").val();
	    var loanId= $("#LoanId").val();
	    //var customerId= $("#customerId1").val();
	    var customerId= $("#customerId"+number).val();
	    console.log("Customer Id : "+customerId );
	    var is_editSupInfo= $('#is_editedSupInfo').text();
	    var rowIndexSupInfo = $('#rowIndexSuppInfo').text();
	    var supplimentaryInformationData = {
	        'supplimentaryCardInfoId' :supplimentaryCardInfo,
	        'name' : name,
	        'relationWithApplication' : relwithApp,
	        'preferredName': preferrenceName,
	        'spendingLimit': spendingLimit,
	        'supDobDate': dob,
	        'supage' : Supage,
	        'supUsd' : usd,
	        'subBdt' : bdt,
	        'supNationalId' : nationalId,
	        'supPerCreditlimit' : percreditlimit,
	        'enabled' :true,
	        'passportNo':passportNo,
	        'subMobileNo':mobileNo,
	        'supPassportexDate':passportExdate,
	        'supLoanId':loanId,
	        'supCustomerId':customerId


	    };


	    var jsonSupplimentaryInformationData = JSON.stringify(supplimentaryInformationData);
	    var token = $("meta[name='_csrf']").attr("content");
	    var header = $("meta[name='_csrf_header']").attr("content");

	    $.ajax({
	        url: '/supplimentarycardInfo/create',
	        type: 'POST',
	        contentType: 'application/json; charset=utf-8',
	        dataType: 'json',
	        data: jsonSupplimentaryInformationData,
	        beforeSend: function (xhr) {
	            xhr.setRequestHeader(
	                header, token);
	        },

	        success: function (data) {
	        	$('#modal-supplimentary-card-info').modal('hide'); 
	            alert("File Successfully saved");
	            console.log("Supplimentary Edit: "+is_editSupInfo);
	            if(is_editSupInfo==0) {
	                var suppRow = '<tr>' +
	                    '<td><label id="tabSupId' + suppRowIndex + '"style="display: none">' + data.supplimentaryCardInfoId + '</label>' +
	                    '<label id="name' + suppRowIndex + '">' + data.name + '</label></td>' +
	                    '<td><label id="age' + suppRowIndex + '">' + data.supage + '</label></td>' +
	                    '<td><label id="relationship' + suppRowIndex + '">' + data.relationWithApplication + '</label>' +
	                    '<label id="prefName' + suppRowIndex + '"style="display: none">' +data.preferredName +'</label>' +
	                    '<label id="spendinglimit' + suppRowIndex + '"style="display: none">'+data.spendingLimit + '</label>' +
	                    '<label id="supDobMonth' + suppRowIndex + '"style="display: none">' + $('#supDobMonth').val() + '</label>' +
	                    '<label id="supDobDay' + suppRowIndex + '"style="display: none">' +  $('#supDobDay').val() + '</label>' +
	                    '<label id="subDobYear' + suppRowIndex + '"style="display: none">' + $('#subDobYear').val() + '</label>' +
	                    '<label id="bdt' + suppRowIndex + '"style="display: none">' + data.subBdt + '</label>' +
	                    '<label id="usd' + suppRowIndex + '"style="display: none">'+ data.supUsd + '</label>' +
	                    '<label id="nationalId' + suppRowIndex + '"style="display: none">'+ data.supNationalId + '</label>' +
	                    '<label id="percreditlimit' + suppRowIndex + '"style="display: none">'+data.supPerCreditlimit + '</label>' +
	                    '<label id="passportNo' + suppRowIndex + '"style="display: none">'+data.passportNo + '</label>' +
	                    '<label id="supMobileNo' + suppRowIndex + '"style="display: none">'+data.subMobileNo + '</label>' +
	                    '<label id="passportExdateMonth' + suppRowIndex + '"style="display: none">'+$('#passportExdateMonth').val() + '</label>' +
	                    '<label id="passportExdateDay' + suppRowIndex + '"style="display: none">' +$('#passportExdateDay').val()+ '</label>' +
	                    '<label id="passportExdateYear' + suppRowIndex + '"style="display: none">'+$('#passportExdateYear').val() + '</label>' +
	                    '</td>' +
	                    '<td><a href="#" onclick="editSupplimentraryInformation(this,' + suppRowIndex + ')" data-toggle="modal" data-target="#modal-supplimentary-card-info"><i class="fa fa-pencil" ></i></a>' +
	                    '<a href="#" onclick="removeSupRow(this,' + suppRowIndex + ')"><i class="fa fa-times"></i></a></td>' +
	                    +'</tr>';


	                $("#supplimentaryCardInfo").append(suppRow);
	                suppRowIndex++;
	            }else{
	                $('#tabSupId' + rowIndexSupInfo).text(data.supplimentaryCardInfoId);
	                $('#name' + rowIndexSupInfo).text(data.name);
	                $('#age' + rowIndexSupInfo).text(data.supage);
	                $('#relationship' + rowIndexSupInfo).text(data.relationWithApplication);
	                $('#prefName' + rowIndexSupInfo).text(data.preferredName );
	                $('#spendinglimit' + rowIndexSupInfo).text(data.spendingLimit);
	                $('#supDobMonth' + rowIndexSupInfo).text($('#supDobMonth').val());
	                $('#supDobDay' + rowIndexSupInfo).text( $('#supDobDay').val() );
	                $('#subDobYear' + rowIndexSupInfo).text($('#subDobYear').val());
	                $('#bdt' + rowIndexSupInfo).text(data.subBdt);
	                $('#usd' + rowIndexSupInfo).text(data.supUsd);
	                $('#nationalId' + rowIndexSupInfo).text(data.supNationalId);
	                $('#percreditlimit' + rowIndexSupInfo).text(data.supPerCreditlimit);
	                $('#passportNo' + rowIndexSupInfo).text(data.passportNo);
	                $('#supMobileNo' + rowIndexSupInfo).text(data.subMobileNo);
	                $('#passportExdateMonth' + rowIndexSupInfo).text($('#passportExdateMonth').val());
	                $('#passportExdateDay' + rowIndexSupInfo).text($('#passportExdateDay').val());
	                $('#passportExdateYear' + rowIndexSupInfo).text($('#passportExdateYear').val());


	            }
	            resetSupplimentaryCardInfo();


	        },
	        error: function (err) {
	            alert(err);
	            resetSupplimentaryCardInfo();
	        }
	    });
		
	}

    


};


function removeSupRow(i,supplimentaryRowIndex){

    if (confirm('Want to delete?')) {

        var supplimentaryCardInfo=$('#tabSupId' + supplimentaryRowIndex).text();
        var name=$('#name' + supplimentaryRowIndex).text();
        var Supage=$('#age' + supplimentaryRowIndex).text();
        var relwithApp=$('#relationship' + supplimentaryRowIndex).text();
        var preferrenceName=$('#prefName' + supplimentaryRowIndex).text();
        var spendingLimit=$('#spendinglimit' + supplimentaryRowIndex).text();
        var dobmonth=$('#supDobMonth' + supplimentaryRowIndex).text();
        var dobday=$('#supDobDay' + supplimentaryRowIndex).text();
        var dobyear=$('#subDobYear' + supplimentaryRowIndex).text();
        var bdt=$('#bdt' + supplimentaryRowIndex).text();
        var usd=$('#usd' + supplimentaryRowIndex).text();
        var nationalId=$('#nationalId' + supplimentaryRowIndex).text();
        var percreditlimit=$('#percreditlimit' + supplimentaryRowIndex).text();
        var passportNo=$('#passportNo' + supplimentaryRowIndex).text();
        var mobileNo=$('#supMobileNo' + supplimentaryRowIndex).text();
        var passportExMonth=$('#passportExdateMonth' + supplimentaryRowIndex).text();
        var passportExday=$('#passportExdateDay' + supplimentaryRowIndex).text();
        var passportExyear=$('#passportExdateYear' + supplimentaryRowIndex).text();
        var dob=dobday+ "/" +dobmonth+ "/" +dobyear;
        var passportExdate = passportExday + "/" + passportExMonth+ "/" + passportExyear;
        var loanId= $("#LoanId").val();
        var customerId= $("#customerId1").val();
        var supplimentaryInformationData = {
            'supplimentaryCardInfoId' :supplimentaryCardInfo,
            'name' : name,
            'relationWithApplication' : relwithApp,
            'preferredName': preferrenceName,
            'spendingLimit': spendingLimit,
            'supDobDate': dob,
            'supage' : Supage,
            'supUsd' : usd,
            'subBdt' : bdt,
            'supNationalId' : nationalId,
            'supPerCreditlimit' : percreditlimit,
            'enabled' :false,
            'passportNo':passportNo,
            'subMobileNo':mobileNo,
            'supPassportexDate':passportExdate,
            'supLoanId':loanId,
            'supCustomerId':customerId


        };


        var jsonSupplimentaryInformationData = JSON.stringify(supplimentaryInformationData);
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/supplimentarycardInfo/create',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: jsonSupplimentaryInformationData,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    header, token);
            },
            success: function (data) {
                alert("Deleted");
                removeRow(i);
            }
        });
    }

}
;
function editSupplimentraryInformation(i,supplimentaryRowIndex) {
    var supId=$('#tabSupId' + supplimentaryRowIndex).text();
    var supname=$('#name' + supplimentaryRowIndex).text();
    var supage=$('#age' + supplimentaryRowIndex).text();
    var suprelationship=$('#relationship' + supplimentaryRowIndex).text();
    var preferenceName=$('#prefName' + supplimentaryRowIndex).text();
    var spendingLimit=$('#spendinglimit' + supplimentaryRowIndex).text();
    var dobmonth=$('#supDobMonth' + supplimentaryRowIndex).text();
    var dobday=$('#supDobDay' + supplimentaryRowIndex).text();
    var dobyear=$('#subDobYear' + supplimentaryRowIndex).text();
    var bdt=$('#bdt' + supplimentaryRowIndex).text();
    var usd=$('#usd' + supplimentaryRowIndex).text();
    var nationalId=$('#nationalId' + supplimentaryRowIndex).text();
    var percentCreditLimit=$('#percreditlimit' + supplimentaryRowIndex).text();
    var passportNo=$('#passportNo' + supplimentaryRowIndex).text();
    var mobileNo=$('#supMobileNo' + supplimentaryRowIndex).text();
    var passportExMonth=$('#passportExdateMonth' + supplimentaryRowIndex).text();
    var passportExday=$('#passportExdateDay' + supplimentaryRowIndex).text();
    var passportExyear=$('#passportExdateYear' + supplimentaryRowIndex).text();



    //fill id with data

    $("#suppName").val(supname);
    //var accountNo= $("#accNo").val();
    $("#relApplicant").val(suprelationship);
    $("#prefName").val(preferenceName);
    $("#suppcardinfoId").val(supId);
    $("#spendinglimit").val(spendingLimit);
    $('#supDobDay').val(dobday) ;
    $('#supDobMonth').val(dobmonth);
    $('#subDobYear').val(dobyear);
    $('#passportExdateDay').val(passportExday) ;
    $('#passportExdateMonth').val(passportExMonth)
    $('#passportExdateYear').val(passportExyear);
    $("#Supage").val(supage);
    $("#usd").val(usd);
    $("#bdt").val(bdt);
    $("#nationalId").val(nationalId);
    $("#percreditlimit").val(percentCreditLimit);
    $("#passportNo").val(passportNo);
    $("#supMobileNo").val(mobileNo);
    $('#is_editedSupInfo').text('1');
    $('#rowIndexSuppInfo').text(supplimentaryRowIndex);

}


$( "#Supage" ).focus(function() {
    var dob = $('#supDobMonth').val()+ "/" + $('#supDobDay').val() + "/" +  $('#subDobYear').val();
    console.log(getAge(dob));
    $("#Supage").val(getAge(dob) + ' Years');

});
function getAge(getbirthDate) {
    var now = new Date();
    var birthDate= new Date(getbirthDate);
    function isLeap(year) {
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }

    // days since the birthdate
    var days = Math.floor((now.getTime() - birthDate.getTime())/1000/60/60/24);
    var age = 0;
    // iterate the years
    for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++){
        var daysInYear = isLeap(y) ? 366 : 365;
        if (days >= daysInYear){
            days -= daysInYear;
            age++;
            // increment the age only if there are available enough days for the year.
        }
    }
    return age;
}
function removeRow(t) {
    t.parentNode.parentNode.remove();
}
;

$("#spendinglimit").change(function()
    {
        if($(this).val() == "Yes")
        {
            $(".spendinglimitcls").show();
        }
        else
        {
            $(".spendinglimitcls").hide();
        }
    });
/*$("#suppbtn").click(function () {
    console.log("hey");
    var i=0;
    //variableArray[100];
    $('#suppliDiv').find('input select').each(function() {
        variableArray[i] = this.value();
        i++;
    });
    var userJson = JSON.stringify(variableArray.serialize());
    console.log(userJson);

});*/

/*function fillSupplimentaryCardInfo(){
	
	if(getRequiredFieldIdByLabelUsingClass('refInfo')){
		
	}
}*/


