 $(document).ready(function(){
			$("#add_new_row").click(function(){
				var rowNum = parseInt($('.particular-assign >tbody >tr.main-particular').last().find(".ins-row-particular-val").val()) + 1; 
				//console.log("row number "+ rowNum); 
				previousRownum = rowNum - 1;
				//console.log("previous: " + previousRownum);
				var clone = $('.particular-assign >tbody >tr.main-particular').first().clone(true).prop("id","particularRowId_"+rowNum).removeAttr("style");
				clone.find(".row-particular-val").text(rowNum);
				clone.find(".ins-row-particular-val").val(rowNum);
				clone.addClass("serial-"+rowNum).removeClass("serial-0");
				clone.addClass("condition-div-clss-serial-"+rowNum).removeClass("condition-div-clss-serial-0");
				
				clone.find('#del-row-0').attr({id: "del-row-"+rowNum});
				clone.find('#particularId-0').attr({id: "particularId-"+rowNum});
				clone.find('#loanParticularId-0').attr({id: "loanParticularId-"+rowNum});
				clone.find('#maxId-0').attr({id: "maxId-"+rowNum});
				clone.find('#add-new-condition-0').attr({id:"add-new-condition-"+rowNum});
				clone.find('#condition-segment-0').attr({id:"condition-segment-"+rowNum});
				clone.find('#conditional-div-0').attr({id:"conditional-div-"+rowNum});
				clone.find('#conditional-div-'+rowNum).addClass("delete-condition-"+rowNum+"-1").removeClass("delete-condition-0-0");
				clone.find('#condition-0-0').attr({id:"condition-"+rowNum+"-1"});
				clone.find('#point-0-0').attr({id:"point-"+rowNum+"-1"});
				clone.find('#delCondition-0-0').attr({id:"delCondition-"+rowNum+"-1"});
				clone.find('#conditionPointId-0-0').attr({id:"conditionPointId-"+rowNum+"-1"});
				clone.find('.max-point-hidden').addClass("maxPoint-cls");
				clone.find('.con-main').removeClass("con-cls-0").addClass("con-cls-"+rowNum);
				clone.find('.point-main').removeClass("point-cls-0").addClass("point-cls-"+rowNum);
				$('#table-particular').append(clone);
			    
			});
		});
		
		function addNewCondition(conditionBtnId){
			var addButtonName = conditionBtnId.id;
			
			var splitAddButtonNameWithComma= addButtonName.split("add-new-condition-");
		    var ButtonNo = splitAddButtonNameWithComma.join("");
			var conditionRowNumber = parseInt($('.condition-div-clss-serial-'+ButtonNo).last().find(".ins-row-conditional-val").val()) + 1;
			var preConditionRowNumber = conditionRowNumber -1; 
			var maxPointAddCondition = parseInt($("#maxId-"+ButtonNo).val());
				
			/*var sum = 0;
			$('.point-cls-'+ButtonNo).each(function(){
				    sum += parseInt(this.value);
			});
			console.log("sum: "+ sum);
			if(sum>maxPointAddCondition ){
				$("#alertMessagePS").text('');
				$("#particularError").val('');
				var message = "<ul style='list-style-type:disc'><li>Max value exceed</li></ul>";
				$("#alertMessagePS").append(message);
				$("#particularError").modal("toggle");

			}
			else{*/
				var conditionClone = $('#conditional-div-0').first().clone(true).prop("id","conditional-div-"+conditionRowNumber);
				conditionClone.addClass("condition-div-clss-serial-"+ButtonNo).removeClass("condition-div-clss-serial-0");
				conditionClone.addClass("delete-condition-"+ButtonNo+"-"+conditionRowNumber).removeClass("delete-condition-0-0");
			    conditionClone.find('#condition-0-0').attr({id: "condition-"+ButtonNo+"-"+conditionRowNumber}).removeClass("con-clss-0");
			    conditionClone.find('#point-0-0').attr({id: "point-"+ButtonNo+"-"+conditionRowNumber});
			    conditionClone.find('#delCondition-0-0').attr({id: "delCondition-"+ButtonNo+"-"+conditionRowNumber});
			    conditionClone.find('#conditionPointId-0-0').attr({id: "conditionPointId-"+ButtonNo+"-"+conditionRowNumber});
			   	conditionClone.find('.con-main').removeClass("con-cls-0").addClass("con-cls-"+ButtonNo);
			    conditionClone.find('.point-main').removeClass("point-cls-0").addClass("point-cls-"+ButtonNo);
			  
			    conditionClone.find(".conditionLabel").text(conditionRowNumber);
			    conditionClone.find(".ins-row-conditional-val").val(conditionRowNumber);
			    
				$('#condition-segment-'+ButtonNo).append(conditionClone);
			//}
				
		}
		;
		
			$(document).ready(function(){
				$(".delete-row").click(function(){
					if (confirm('Want to delete?')) {
						var rowId=$(this).attr("value");
						if(!$(this).attr("value")){
							$(this).parent().parent().remove();	
						}else{
						
				          $.ajax({
				            type: "GET",
				            context: this,
				            url: "/creditscoringcriteria/delete/" + rowId,
				            success: function (data) {
				            	$(this).parent().parent().remove();	
				            },
				            error: function (jqXHR, exception) {
				                showUnivarsalErrorMsg(jqXHR, exception);
				            }
				        });  
						}
				    }
				});
				
			});
			
				$(document).ready(function(){
				
						$(".delete-condition").click(function(){
							if (confirm('Want to delete?')) {
							var conDlbtn= $(this).attr("id").split("delCondition").join("");
							console.log("delete Button " +conDlbtn);
							var rowId=$(this).attr("value");
							console.log("rowId "+rowId );
							if(!$(this).attr("value")){
								$(this).parent('div.delete-condition'+conDlbtn).remove();
								//alert("no thing condition");
							}else{
							$.ajax({
						            type: "GET",
						            context: this,
						            url: "/condition/delete/" + rowId,
						            success: function (data) {
						            		
						            	$(this).parent('div.delete-condition'+conDlbtn).remove();
						            },
						            error: function (jqXHR, exception) {
						                showUnivarsalErrorMsg(jqXHR, exception);
						            }
						        });  
							}
				    }
				});
				
			});
			
			function subloanType(loanTypeId){
						
				$("#subLoanType").empty();
				console.log($("#loanTypeId").val());
				var loanTypeId = $("#loanTypeId").val();
				var token = $("meta[name='_csrf']").attr("content");
				var header = $("meta[name='_csrf_header']").attr("content");
				$.ajax({
					url : '/loantype/subloantypelist?loanTypeId=' + loanTypeId,
					type : 'GET',
					contentType : 'application/json; charset=utf-8',
					beforeSend : function(xhr) {
						xhr.setRequestHeader(header, token);
					},
					success : function(data) {
						console.log(data.length);
						for (var key = 0; key < data.length; key++) {
							$("#subLoanType").append(
									"<option value='"+data[key][0]+"'>"
											+ data[key][1] + "</option>");

						}
					}
				});
				reset();

			};
			function saveParticularSelection() {
				
				var maxPointSum = 0;
				$('.maxPoint-cls').each(function(){
					//alert("maxpointclass");
					console.log("maxpointSumfore "+ maxPointSum);
					maxPointSum += parseInt(this.value);
					    
				});
				
				if(maxPointSum>100){
					$("#alertMessagePS").text('');
					$("#particularError").val('');
					var message = "<ul style='list-style-type:disc'><li>Maximum Point does not  exceed 100</li></ul>";
					$("#alertMessagePS").append(message);
					$("#particularError").modal("toggle");
					//alert("Maximum Point does not  exceed 100");
				}else{ 
				var loanTypeId = $("#loanTypeId").val();
				var subloanTypeId = $("#subLoanType").val();
				console.log("loanTypeId: "+ loanTypeId);
				var particularSelection = $("#particularSelection").val();
				var rowNumber= 1;
				var particularIdMaxPoint = [];
			    $('#table-particular > tbody  > tr').not(":first").each(function() {
			    	var conditionCounter=1;
			        var elementValues =[];
			        var loanParticularId= $("#loanParticularId-"+rowNumber).val();
			        var particularElementId = $("#particularId-"+rowNumber).val();
			        var maxElementId = $("#maxId-"+rowNumber).val();
			        console.log("LoanParticularId-"+rowNumber+": "+ loanParticularId);
			        rowNumber=rowNumber+1;
			        var conditionTemp;
		        	var pointTemp;
		        	var conditionPointIdTemp;
		        	var associativeArray=[];
			        $(this).find(".conditional-td input[type!='hidden'] ").each(function(){
			       			if(Number(conditionCounter)%3==1){
			       				conditionPointIdTemp=this.value;
			       			}
			        		if(Number(conditionCounter)%3==2){
			        			conditionTemp=this.value;
			        		}
			        		if(Number(conditionCounter)%3==0){
			        			pointTemp=this.value;
			        			
			        			associativeArray.push({
			                        "conditionPointId":conditionPointIdTemp,
			        				"point": pointTemp,
			                        "conditon": conditionTemp
			                    }); 
			        			
			        		}
						console.log("ConditonPointId-"+conditionCounter+": "+ conditionPointIdTemp);
						conditionCounter=conditionCounter+1;
					
			         });
			        particularIdMaxPoint.push({
			        	
			       			"loanParticularId":loanParticularId,
			        		"particularId": particularElementId, 
			        		"maxPoint": maxElementId,
			        		"conditionPointEntities" :associativeArray
			        }
			        		);
			      
			        //console.log(particularIdMaxPoint);
			       });
			    var loanParticularDTO={
			    	"loanTypeId":loanTypeId,
			    	"subloanTypeId":subloanTypeId,
			    	"loanParticularEntities":particularIdMaxPoint
			    };
			   	console.log(loanParticularDTO);
				var obj={"loanParticularDTO":loanParticularDTO};
			    var dto=JSON.stringify(loanParticularDTO);
			    var token = $("meta[name='_csrf']").attr("content");
				var header = $("meta[name='_csrf_header']").attr("content");
				$.ajax({
					url : '/particularselection/save',
					type : 'POST',
					contentType : 'application/json; charset=utf-8',
					dataType : 'JSON',
					data : JSON.stringify(loanParticularDTO),
					beforeSend : function(xhr) {
						xhr.setRequestHeader(header, token);
					},
					success : function(data) {
						$("#alertMessagePS").text('');
						$("#particularError").val('');
						var message = "<ul style='list-style-type:disc'><li>Successfully saved</li></ul>";
						$("#alertMessagePS").append(message);
						 $("#particularError").modal("toggle");
						
						console.log(data);
						
						$("#loanTypeId").val('');
						$("#subLoanType").val('');
						$("#loanTypeId").val(data.loanTypeId);
					    $("#subLoanType").val(data.subloanTypeId); 
						 for(var i=0;i<data.loanParticularEntities.length;i++){
							//var loanParticularCounter=parseInt(i)+1;
							 //console.log("i : "+(i+1));
							
							$("#loanParticularId-"+(i+1)).val('');
							$("#particularId-"+(i+1)).val('');
							$("#maxId-"+(i+1)).val('');
							$("#del-row-"+(i+1)).val('');
							$("#del-row-"+(i+1)).val(data.loanParticularEntities[i].loanParticularId);
							$("#loanParticularId-"+(i+1)).val(data.loanParticularEntities[i].loanParticularId);
							$("#particularId-"+(i+1)).val(data.loanParticularEntities[i].particularId);
							$("#maxId-"+(i+1)).val(data.loanParticularEntities[i].maxPoint); 
							 console.log("condition lenght: "+ data.loanParticularEntities[i].conditionPointEntities.length);
							 for(var j=0;j<data.loanParticularEntities[i].conditionPointEntities.length;j++){
								 
								 $("#conditionPointId-"+(i+1)+"-"+(j+1)).val('');
								 $("#condition-"+(i+1)+"-"+(j+1)).val('');
								 $("#point-"+(i+1)+"-"+(j+1)).val('');
								 $("#delCondition-"+(i+1)+"-"+(j+1)).val('');
								 $("#conditionPointId-"+(i+1)+"-"+(j+1)).val(data.loanParticularEntities[i].conditionPointEntities[j].conditionPointId);
								 $("#condition-"+(i+1)+"-"+(j+1)).val(data.loanParticularEntities[i].conditionPointEntities[j].conditon);
								 $("#point-"+(i+1)+"-"+(j+1)).val(data.loanParticularEntities[i].conditionPointEntities[j].point);
								 $("#delCondition-"+(i+1)+"-"+(j+1)).val(data.loanParticularEntities[i].conditionPointEntities[j].conditionPointId);
								 console.log("j"+j);
							 }
							
							
						}  

					},
					error : function(jqXHR, exception) {
						
						showUnivarsalErrorMsg(jqXHR, exception);
					}
				}); 
				}// else end
			};
			
		
			$('#table-particular').on('keyup', "input[type!='hidden'].point-tgr", function(ev){
				var parentTd=$(this).closest('td').attr('id');
				var allPointClssName = $(this).attr('class');
				var pointClassName = allPointClssName.split("form-control point-main point-tgr");
				var onlyPointclassName= pointClassName.join(""); 
				var classNameWithdot="."+onlyPointclassName.trim();
				var sequenceRowNo= onlyPointclassName.split("point-cls-");
				var sequenceRowNoWithoutComma=sequenceRowNo.join("");
				var maxPoint= $("#maxId-"+sequenceRowNoWithoutComma.trim()).val();
				var sum = 0;
				$(classNameWithdot).each(function(){
					//sum += parseInt(this.value);
				});
				//if(sum>maxPoint){
				if(parseInt(this.value)>maxPoint){
					$("#alertMessagePS").text('');
					$("#particularError").val('');
					var message = "<ul style='list-style-type:disc'><li>Particular point  doesnot exceed max Point</li></ul>";
					$("#alertMessagePS").append(message);
					$("#particularError").modal("toggle");
				
					//alert("Particular point  doesnot exceed max Point");
					
				}
				
			}); 
			function reset(){
				$('#table-particular > tbody  > tr').not(":first").each(function(){
					 $(this).find("input[type!='hidden'] ").each(function(){
						 $(this).val('');
					 });
					 $(this).find("option:selected").each(function(){
						 $(this).text('Select Particular');
					 });
				});
				
			}
			;