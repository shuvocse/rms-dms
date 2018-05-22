function numberOnly() {
	if(event.charCode >= 48 && event.charCode <= 57){
		return true;
	}
	else{
		return false;
	}
}

// zunied
//function UpperCaseAndNumber
function DownSideUp(e){
	
		
			
      console.log(e.value[e.value.length-1]);
	  var numb=e.value[e.value.length-1];
		
	
	
		e.value=e.value.toUpperCase();
	
	
	
}

	$('#applicationType').change(function(event) {

				if($(this).val()==='single'){
					$('#noOfBorrower').val('1').attr('readonly', 'readonly').removeClass('has-error');
				}

				if($(this).val()==='joint'){

					$('#noOfBorrower').val('1').removeAttr('readonly').addClass('has-error');

				}


				event.preventDefault;
			});


function floatOnly(txtId){
	if(event.keyCode > 47 && event.keyCode < 58 || event.keyCode == 46)
    {
       var txtbx=document.getElementById(txtId);
       var amount = document.getElementById(txtId).value;
       var present=0;
       var count=0;

       if(amount.indexOf(".",present)||amount.indexOf(".",present+1));
       {
      // alert('0');
       }

      /*if(amount.length==2)
      {
        if(event.keyCode != 46)
        return false;
      }*/
       do
       {
       present=amount.indexOf(".",present);
       if(present!=-1)
        {
         count++;
         present++;
         }
       }
       while(present!=-1);
       if(present==-1 && amount.length==0 && event.keyCode == 46)
       {
            event.keyCode=0;
            //alert("Wrong position of decimal point not  allowed !!");
            return false;
       }

       if(count>=1 && event.keyCode == 46)
       {

            event.keyCode=0;
            //alert("Only one decimal point is allowed !!");
            return false;
       }
       if(count==1)
       {
        var lastdigits=amount.substring(amount.indexOf(".")+1,amount.length);
        if(lastdigits.length>=2)
                    {
                      //alert("Two decimal places only allowed");
                      event.keyCode=0;
                      return false;
                      }
       }
            return true;
    }
    else
    {
            event.keyCode=0;
            //alert("Only Numbers with dot allowed !!");
            return false;
    }
}


function dateOnly(){

}

function emailOnly(value){
    if(typeof value!="undefined") {
        return value.match(/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/);
    }
    return false;
}

function nidOnly(){

}

function phoneOnly(value){
	if(typeof value!="undefined") {
        return value.match(/^(?:\+?88)?01[15-9]\d{8}$/);
    }
    return false;
}

function isRequired(txtId){
	if(typeof txtId!="undefined"){
	var fieldValue=$('#'+txtId).val().trim();

	if($.isNumeric(fieldValue)){
		fieldValue=parseInt(fieldValue);
	}
	//alert(fieldValue);
	if(fieldValue == null || fieldValue == '' || fieldValue < 0 || fieldValue == '.'){
		return false;
	} else {
		return true;
	}
	}
}

function actionTest(e){
    alert("Action Updater with Event test");
    e.preventDefault();

}

function getRequiredFieldIdByLabel(className){
	var labelText=[];
	var hasValue=new Map();


	$('.required.'+className).each(function(){
		var inputId=$(this).attr('for');
		if(isRequired(inputId)){
			$("#"+inputId).removeClass("has-error");
			hasValue.set(inputId, true);
		}else {
			labelText.push($(this).text());
			$("#"+inputId).addClass("has-error");
			hasValue.set(inputId, false);
		}
//		i++;
	});
	$('#errorGen').empty();
	if(labelText.length > 0){
		$(".closeAlert").parent("div").show();
	}
	labelText.forEach(function(entry){
		console.log(entry + " is Required");
		var li='<li>'+entry + " is Required";
		$('#errorGen').append(li);
	});

	/*console.log(hasValue);
	console.log(hasValue.size);*/
	try{
		hasValue.forEach(function(value,key){
			console.log(key+": "+value);
			if(value=== false){
				throw BreakException;
			}
		});
		return true;
	}
	catch(e){
		return false;
	}
}

function getRequiredFieldIdByLabelUsingClass(className){
	var labelText=[];
	var hasValue=new Map();


	$('.required.'+className).each(function(){
		var inputId=$(this).attr('for');
		if(isRequired(inputId)){
			$("#"+inputId).removeClass("has-error");
			hasValue.set(inputId, true);
		}else {
			labelText.push($(this).text());
			$("#"+inputId).addClass("has-error");
			hasValue.set(inputId, false);
		}
//		i++;
	});
	$('.errorGen').empty();
	if(labelText.length > 0){
		$(".closeAlert").parent("div").show();
	}
	labelText.forEach(function(entry){
		console.log(entry + " is Required");
		var li='<li>'+entry + " is Required";
		$('.errorGen').append(li);
	});

	/*console.log(hasValue);
	console.log(hasValue.size);*/
	try{
		hasValue.forEach(function(value,key){
			console.log(key+": "+value);
			if(value=== false){
				throw BreakException;
			}
		});
		return true;
	}
	catch(e){
		return false;
	}
}

function removeErrorMessage(className){
	$('.errorGen li').remove();
	$('.required.'+className).each(function(){
        var inputId=$(this).attr('for');
    	$("#"+inputId).removeClass("has-error");
	});
	
    
}

function hideSpouse(number){
	if($("#maritalStatus"+ number).val()==='single'){
		$("#bSpouseId"+number).hide();

	}
	else{
		$("#bSpouseId"+number).show();
	}
}

function checkPassword(value) {
	if(typeof value!="undefined") {
        return value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/);
    }
    return false;
}


function formVal(e){
	var v=$('email').val()
	consol.log(v);
	if(v=="" || v==null || v==undefined){
		
		$("#pform").submit(function(e) {
		    e.preventDefault();
		});
		$('#pemail').show();
		//document.getElementById('pemail').innerHTML="must not be empty";
	}
}


function getRequiredFieldIdByLabel(className){
	var labelText=[];
	var hasValue=new Map();
//	var i=0;

	$('.required.'+className).each(function(){
		var inputId=$(this).attr('for');
		if(isRequired(inputId)){
			$("#"+inputId).removeClass("has-error");
			hasValue.set(inputId, true);
		}else {
			labelText.push($(this).text());
			$("#"+inputId).addClass("has-error");
			hasValue.set(inputId, false);
		}
//		i++;
	});
	
	$('#errorGen').empty();
	labelText.forEach(function(entry){
		console.log(entry + " is Required");
		var li='<li>'+entry + " is Required";
		$('#errorGen').append(li);
		$("#pform").submit(function(e) {
		    e.preventDefault();
		});
		$('#errorGen').show();
	});

	console.log(hasValue);
	console.log(hasValue.size);
	try{
		hasValue.forEach(function(value,key){
			console.log(key+": "+value);
			if(value=== false){
				throw BreakException;
			}
		});
		return true;
	}
	catch(e){
		return false;
	}
}

function hideSpouse(number){
	if($("#maritalStatus"+ number).val()==='single'){
		$("#bSpouseId"+number).hide();
		$("#noOfChildren"+number).attr('readonly', true).val(0);
	}
	else{
		$("#bSpouseId"+number).show();
		$("#noOfChildren"+number).attr('readonly', false).val(0);
	}
}
//dider

// //dider
// $(document).ready(function () {
//     $("#queryTypeform").validate({
//         rules: {
//             "name": {
//                 required: true,
//                 minlength: 5
//             },
// //            "email": {
// //                required: true,
// //                email: true
// //            }
//         },
//         messages: {
//             "name": {
//                 required: "Please, enter a name"
//             },
// //            "email": {
// //                required: "Please, enter an email",
// //                email: "Email is invalid"
// //            }
//         },
//
//
// //        submitHandler: function (form) { // for demo
// //            alert('valid form submitted'); // for demo
// //            return false; // for demo
// //        }
//
//
//
//     });
//
// });



function getMatchedFieldIdByLabel (className,functionName){
	var labelText=[];
	var hasValue=new Map();


	$('.'+className+'.'+functionName).each(function(){
		var inputId=$(this).attr('for');
		var fn = window[functionName];
		if(typeof fn==='function'){
			
			if(fn($("#"+inputId).val())){
				$("#"+inputId).removeClass("has-error");
				hasValue.set(inputId, true);
			}else {
				labelText.push($(this).text());
				$("#"+inputId).addClass("has-error");
				hasValue.set(inputId, false);
			}
		}
	});
	$('#errorGen').empty();
	if(labelText.length > 0){
		$(".closeAlert").parent("div").show();
	}
	labelText.forEach(function(entry){
		/*console.log(entry + " is Required");*/
		var li='<li>'+entry + " is not Valid";
		$('#errorGen').append(li);
	});

	/*console.log(hasValue);
	console.log(hasValue.size);*/
	try{
		hasValue.forEach(function(value,key){
			console.log(key+": "+value);
			if(value=== false){
				throw BreakException;
			}
		});
		return true;
	}
	catch(e){
		return false;
	}
}
/*LoanType form validation Start, field:interestrate*/
$(document).ready(function(){
$('#loanTypeValidation').click(function(event) {
	var code=$('#loanType_codeId').val();
	var loanName=$('#loanType_name').val();
	var interestrate= $("#loanType_interestrate").val();
	
	console.log("LOAN_TYPE"+code);
	
	if(	(code === '' || code === null || code === undefined)){
		
		$('#codeForShow').css('display','block'); 
		 
		 return false;
       
	}
	
	else if((loanName === '' || loanName === null || loanName === undefined)){
		
		$('#nameForShow').css('display','block'); 
		
		 return false;
       
	}
	
	else if((interestrate === '' || interestrate === null || interestrate === undefined)){
		
		$('#interestForShow').css('display','block');   
		
		 return false;
        
	}
	
	else{
		return true;
		
	}
	
});

});

/*LoanType form validation End, field:interestrate*/


/*Add New Country start here*/
$(document).ready(function(){
	$('#createCountry_Id_submit').click(function(event) {
		//var name_error = document.getElementById('#name');
		var name = $("#county_name").val();
		console.log(name);
		var shortname= $("#shortname").val();
		console.log(shortname);
		var phoneCode= $("#phonecode").val();
		
		if((name === '' || name === null || name === undefined)){
			
		/*	alert(" Name cannot be empty"); */
			$("#hideTheDiv_name").show();
			 return false;
	        
		}
		else if((shortname === '' || shortname === null || shortname === undefined)){
			
			// alert("Short Name cannot be empty");
			/*$("hideTheDiv_shortname").show();*/
			$("#hideTheDiv_shortName").show();
			 return false;
	        
		}
		else if((phoneCode === '' || phoneCode === null || phoneCode === undefined)){
			
			// alert("PhoneCode should be filled");  
		/*	$("#hideTheDiv_phoneCode").show();*/
			$("#hideTheDiv_phoneCode").show();
			
			 return false;
	        
		}
		else{
			
		}
		
	});

	});

/*Add New Country End here*/




