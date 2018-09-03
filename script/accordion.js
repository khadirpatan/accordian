$(document).ready( () => {

	 	$("#paragraph1").hide();
 	$("#paragraph2").hide();
 	$("#paragraph3").hide();


	$("#item1Btn").click( function(){

		$("#paragraph1").toggle(300);

		var plus;
		plus=$("#plus1").html();
		if(plus == '<i class="fa fa-plus" style="font-size:16px"></i>'){

			$("#plus1").html('<i class="fa fa-minus" style="font-size:16px"></i>');
			$("#plus2").html('<i class="fa fa-plus" style="font-size:16px"></i>');
			$("#plus3").html('<i class="fa fa-plus" style="font-size:16px"></i>');


		}

		else{
			$("#plus1").html('<i class="fa fa-plus" style="font-size:16px"></i>');
		}

		$("#paragraph2").hide();
		$("#paragraph3").hide();

	});


$("#item2Btn").click( function(){

		$("#paragraph2").toggle(300);
		$("#paragraph3").hide();
		$("#paragraph1").hide();



var plus;
		plus=$("#plus2").html();
		if(plus == '<i class="fa fa-plus" style="font-size:16px"></i>'){

			$("#plus2").html('<i class="fa fa-minus" style="font-size:16px"></i>');
			$("#plus1").html('<i class="fa fa-plus" style="font-size:16px"></i>');
			$("#plus3").html('<i class="fa fa-plus" style="font-size:16px"></i>');


		}

		else{
			$("#plus2").html('<i class="fa fa-plus" style="font-size:16px"></i>');
		}
	

	});
$("#item3Btn").click( function(){

		$("#paragraph3").toggle(300);
		$("#paragraph2").hide();
		$("#paragraph1").hide();



var plus;
		plus=$("#plus3").html();
		if(plus == '<i class="fa fa-plus" style="font-size:16px"></i>'){

			$("#plus3").html('<i class="fa fa-minus" style="font-size:16px"></i>');
			$("#plus2").html('<i class="fa fa-plus" style="font-size:16px"></i>');
			$("#plus1").html('<i class="fa fa-plus" style="font-size:16px"></i>');


		}

		else{
			$("#plus3").html('<i class="fa fa-plus" style="font-size:16px"></i>');
		}

	});







})