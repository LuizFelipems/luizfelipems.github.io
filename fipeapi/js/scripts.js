$(document).ready(function() {
	
	var tipo = $("#tip_veiculo").val();
	var idMarca = 0;
	var anoModVeiculo = 0;
	var anoVeiculo = 0;

	/* Montando select MARCA */
	$.getJSON("https://fipeapi.appspot.com/api/1/" + tipo + "/marcas" + ".json",
		function(json) {
			$.each(json, function(i, valo) {
				 $("#marc_veiculo").append(('<option value="' + this.id + '">' + this.fipe_name + '</option>'));
			});
		});

	/* Select MODELO */
	$("#marc_veiculo").change(function() {
		$("#mod_veiculo").empty(); // Apago os dados anteriores
		idMarca = $("#marc_veiculo").val(); // capturo o novo id selecionado
		
		/* Montando select MODELO */
		$.getJSON("https://fipeapi.appspot.com/api/1/" + tipo + "/veiculos/" + idMarca + ".json", 
			//{param1: 'value1'}, 
			function(json) {

				$.each(json, function(i, valo) {
					 $("#mod_veiculo").append(('<option value="' + this.id + '">' + this.fipe_name + '</option>'));
				});
		});
	});	
	
	/* Select Ano Mod Veiculo */
	$("#mod_veiculo").change(function() {
		$("#ano_mod_veiculo").empty(); // Apago os dados anteriores
		anoModVeiculo = $("#mod_veiculo").val(); // capturo o novo id selecionado

		/* Montando select Ano Mod Veiculo */
		$.getJSON("https://fipeapi.appspot.com/api/1/" + tipo + "/veiculo/" + idMarca + "/" + anoModVeiculo + ".json",
		function(json) {
			$.each(json, function(i, valo) {
				 $("#ano_mod_veiculo").append(('<option value="' + this.id + '">' + this.fipe_codigo + '</option>'));
			});
		});

	});


	$("#pesq").click(function() {

			anoVeiculo = $("#ano_mod_veiculo").val();
			//console.log(anoVeiculo);


			$.getJSON("https://fipeapi.appspot.com/api/1/" + tipo + "/veiculo/" + idMarca + "/" + anoModVeiculo + "/" + anoVeiculo + ".json", 
			//{param1: 'value1'}, 
			function(json) {
					$("#resposta").append(('<li>' + json.name + " | " 
													+ json.combustivel + " | " 
													+ json.marca + " | " 
													+ json.ano_modelo + " | " 
													+ json.preco + '</li>'));
		});
	});

	$("#limpar").click(function(event) {
		$("#resposta").empty();
	});

});