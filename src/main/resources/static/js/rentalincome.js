function saveRental(number){
    	if(getRequiredFieldIdByLabel('rental'+number)){
    	
	
	/* //Importantdata */
	var caseNo=$('#caseId').val();
	var loanId=$('#LoanId').val();
	var customerId = $('#customerId'+number).val();
	var branchCode = $('#branchCode').val();

	/* //BusinessVerification */
	var rentalIncomeId= $('#rentalIncomeId'+number).val();
	var siteVisited = $('#siteVisited'+number).val();
	var visitConductedBy = $('#visitCOnductedByRental'+number).val();
	var visitDate = $('#visitDateDayForRental'+number).val()+"/"+$('#visitDateMonthForRental'+number).val()+"/"+$('#visitDateYearForRental'+number).val();
	console.log("site visited:"+ siteVisited);
	console.log("visitConductedBy: "+ visitConductedBy);
	console.log("visited Date:"+visitDate);
	//alert($('#visitDateDay'+number).val());
	//alert('#visitDateDay'+number);
	var officeSetup = $('#officeSetup'+number).val();
	var comments = $('#overallComments'+number).val();
	console.log("office setup: "+ officeSetup);
	console.log("comments: "+comments);
	var JsonRentalIncome = {
			
			'caseNo' : caseNo ,
			'loanId' : loanId,
			'customerId':customerId,
			'branchCode':branchCode,
			
			'rentalIncomeId' : rentalIncomeId,
			'siteVisited' :siteVisited ,
			'visitConductedBy' :visitConductedBy ,
			'visitDate' :visitDate ,			
			'officeSetup':officeSetup ,	
			'comments':comments,
			'customerId':customerId,		
			};			
			var JsonObject = JSON.stringify(JsonRentalIncome);
	
			var token = $("meta[name='_csrf']").attr("content");
			var header = $("meta[name='_csrf_header']").attr("content");
	

	$.ajax({
		url: '/loan/rentalIncome',
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JsonObject,
		beforeSend: function(xhr){
    					xhr.setRequestHeader(header, token);
					},
		success:function(data){
			
			$('#customerId'+number).val(data.customerId);
			if(data.isError != 1){
                $('#rentalIncomeId' + number).val(data.rentalIncomeId);
                alert("File Successfully Saved");
            	}
		},
		error: function (err) {
            alert(err);
        }
	});
    }
	
}
;
var rentalRowIndex=1;
var i = 1;

function addExistingRentalData(number){
	//if(getRequiredFieldIdByLabel('refInfo')){
	
	
	var customerId = $('#customerId'+number).val();
	var existingRentalIncomeId = $("#existingRentalIncomeId").val();
	var is_editexitingRentalincomeInfo= $('#is_editexitingRentalincomeInfo').text();
	var propertyAdd = $ ("#propertyAdd").val();
	console.log("customer ID : "+ customerId);
	var propertyType = $ ("#propertyType").val();
	var ownerName = $ ("#ownerName").val();
	var floorLevel = $ ("#floorLevel").val();
	var builtUpArea = $ ("#builtUpArea").val();
	var unitNo = $ ("#unitNo").val();
	//var professionName = $('#proId option[value="'+ proId +'"]').text(); 
	//var companyName=  $('#comName option[value="'+ comName +'"]').text();
	
	var perUnitRent= $ ("#perUnitRent").val();
	var totalRent= $ ("#totalRent").val();
	var projectedRentalIncome=$("#projectedRentalIncome").val();
	var loanRenId = $('#LoanId').val();
	var rowIndexRentalInfo = $('#rowIndexRentalInfo').text();
	console.log("propertyAddress: "+ propertyAdd);
	console.log("total Rent : "+ totalRent);
	console.log("loan id : "+loanRenId );
	
	 var exsistingRentalIncomeFormData = {
			'existingRentalIncomeId' :existingRentalIncomeId,
			'propertyAdd' : propertyAdd,
			'customerId': customerId,
			'propertyType' : propertyType,
			'ownerName': ownerName,
			'floorLevel': floorLevel,
			'builtUpArea': builtUpArea,
			'unitNo' : unitNo,
			'perUnitRent' : perUnitRent,
			'totalRent': totalRent,
			'projectedRentalIncome':projectedRentalIncome,
			'enabled' :true        			
			
	};
	var JsonObjectForRental = JSON.stringify(exsistingRentalIncomeFormData);
	var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
	
    $.ajax({
        url: '/existingRentalincome/save',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JsonObjectForRental,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                header, token);
        },

        success: function (data) {
            
        	console.log(data);
            alert("File Successfully saved");
            console.log()
            if(is_editexitingRentalincomeInfo==0){
      
            	var newRow = '<tr>' +
                '<td><label id="existingRentalIncomeId'+ rentalRowIndex + '"style="display: none">' + data.existingRentalIncomeId + '</label>' +
                '<label id="propertyType' +rentalRowIndex + '">' + propertyType  + '</label></td>' +
                '<td><label id="propertyAdd' +rentalRowIndex + '">' + propertyAdd  + '</label></td>' +
                '<td><label id="ownerName' +rentalRowIndex + '">' + ownerName + '</label></td>' +
                '<td><label id="floorLevel' +rentalRowIndex + '">'+ floorLevel +'</label></td>'+
                '<td><label id="builtUpArea' + rentalRowIndex +'">'+ builtUpArea +'</label></td>' +
                '<td><label id="unitNo' +rentalRowIndex + '">'+ unitNo +'</label></td>' +
                '<td><label id="perUnitRent' + rentalRowIndex +'">'+ perUnitRent +'</label></td>' +
                '<td><label id="totalRent' +rentalRowIndex + '">'+ totalRent +'</label>' +
                '<label id="customerId' +rentalRowIndex + '"style="display: none">'+ customerId +'</label>' +
                '<label id="projectedRentalIncome' +rentalRowIndex + '"style="display: none">'+ projectedRentalIncome +'</label></td>' +
               /* '<label id="officeTelNo' +rentalRowIndex + '"style="display: none">'+ officeTelNo +'</label>' +
                '<label id="ext' +rentalRowIndex + '"style="display: none">'+ extId +'</label></td>' +*/
                '<td><a href="#" onclick="editRentalRow(this,' +rentalRowIndex + ')" data-toggle="modal" data-target="#modal-existingRentalIncome_info"><i class="fa fa-pencil" ></i></a>' +
                '<a href="#" onclick="removeRentalRow(this,' +rentalRowIndex + ')"><i class="fa fa-times"></i></a></td>' +
                '</tr>';
                $ ("#existingRentalIncome_info").append(newRow);  
                
                rentalRowIndex++;
            }
            else{
            	 $('#existingRentalIncomeId' + rowIndexRentalInfo).text(data.existingRentalIncomeId); 
            	 $('#propertyAdd' + rowIndexRentalInfo).text(propertyAdd); 
            	 $('#propertyType' + rowIndexRentalInfo).text(propertyType); 
            	 $('#ownerName' + rowIndexRentalInfo).text(ownerName); 
            	 $('#floorLevel' + rowIndexRentalInfo).text(floorLevel); 
            	 $('#builtUpArea' + rowIndexRentalInfo).text(builtUpArea); 
            	 $('#unitNo' + rowIndexRentalInfo).text(unitNo); 
            	 $('#perUnitRent' + rowIndexRentalInfo).text(perUnitRent); 
            	 $('#projectedRentalIncome' + rowIndexRentalInfo).text(projectedRentalIncome);
            	 $('#totalRent' + rowIndexRentalInfo).text(totalRent);
            	/* $('#totalRent' + rowIndexRefInfo).text(totalRent);
            	 $('#totalRent' + rowIndexRefInfo).text(totalRent);*/
            	
            	
            }
            resetRentalInfo();
            $('#ERIncome').attr("data-dismiss","modal");
      
        },
        error: function (err) {
            alert(err);
        }
    }); 
	//}
       	
}
;
function resetRentalInfo(){
	
	$ ("#propertyAdd").val('');
	$ ("#propertyType").val('');
	$ ("#ownerName").val('');
	$ ("#floorLevel").val('');
	$ ("#builtUpArea").val('');
	$ ("#unitNo").val('');
	$ ('#perUnitRent').val('');
	$ ("#totalRent").val('');
	$ ("#projectedRentalIncome").val('');
	$ ("#is_editexitingRentalincomeInfo").text('0');
	$ ("#rowIndexRentalInfo").text('');

	
}
;

function editRentalRow(i,refRowIndex){
	
	var existingRentalIncomeId= $('#existingRentalIncomeId'+refRowIndex).text();
	var propertyAdd = $ ("#propertyAdd" +refRowIndex).text();
 	var propertyType = $ ('#propertyType' +refRowIndex).text();
 	var ownerName = $ ('#ownerName' +refRowIndex).text();
 	var floorLevel = $ ('#floorLevel' +refRowIndex).text();
 	var builtUpArea = $ ('#builtUpArea' +refRowIndex).text();
 	var unitNo = $ ('#unitNo' +refRowIndex).text();
 	var perUnitRent = $ ('#perUnitRent' +refRowIndex).text();
 	var totalRent= $ ('#totalRent' +refRowIndex).text();
 	var projectedRentalIncome= $ ('#projectedRentalIncome' +refRowIndex).text();
 	
    //flood fields with value
    $('#existingRentalIncomeId').val(existingRentalIncomeId);
    $('#propertyAdd').val(propertyAdd);
    $('#propertyType').val(propertyType);
    $('#ownerName').val(ownerName);
    $('#floorLevel').val(floorLevel);
    $('#builtUpArea').val(builtUpArea);
    $('#unitNo').val(unitNo);
    $('#perUnitRent').val(perUnitRent);
    $('#totalRent').val(totalRent);
    $('#projectedRentalIncome').val(projectedRentalIncome);
    $('#is_editexitingRentalincomeInfo').text(1);
    $('#rowIndexRentalInfo').text(refRowIndex); 
}
;
function removeRentalRow(i,refRowIndex){
	 
	if (confirm('Want to delete?')) {
	      
        	var existingRentalIncomeId= $('#existingRentalIncomeId'+refRowIndex).text();
        	var propertyAdd = $ ("#propertyAdd" +refRowIndex).text();
        	var propertyType = $ ('#propertyType' +refRowIndex).text();
         	var ownerName = $ ('#ownerName' +refRowIndex).text();
         	var floorLevel = $ ('#floorLevel' +refRowIndex).text();
         	var builtUpArea = $ ('#builtUpArea' +refRowIndex).text();
         	var unitNo = $ ('#unitNo' +refRowIndex).text();
         	var perUnitRent = $ ('#perUnitRent' +refRowIndex).text();
         	var totalRent= $ ('#totalRent' +refRowIndex).text();
         	var customerId = $('#customerId'+refRowIndex).text();
         	var projectedRentalIncome=$("#projectedRentalIncome"+refRowIndex).text();
         	var renFormData = {
         			'existingRentalIncomeId' :existingRentalIncomeId,
         			'propertyAdd' : propertyAdd,
         			'customerId': customerId,
        			'propertyType' : propertyType,
        			'ownerName': ownerName,
        			'floorLevel': floorLevel,
        			'builtUpArea': builtUpArea,
        			'unitNo' : unitNo,
        			'perUnitRent' : perUnitRent,
        			'projectedRentalIncome':projectedRentalIncome,
        			'totalRent': totalRent,
         			'enabled' :false       			
         			
         	};
         	//console.log("before delete: " + data);
         	
         	var JsonObjectForRen = JSON.stringify(renFormData);
        	var token = $("meta[name='_csrf']").attr("content");
            var header = $("meta[name='_csrf_header']").attr("content");
             $.ajax({
                url: '/existingRentalincome/save',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JsonObjectForRen,
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