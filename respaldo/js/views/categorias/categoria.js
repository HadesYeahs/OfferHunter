define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/categoria/categoria.html'
], function($, _, Backbone, categoriaPageTemplate){
  var CategoriasPage = Backbone.View.extend({
    el: '.page',
	initialize: function () {
		selff = this;
		
		selff.template =  _.template($(categoriaPageTemplate).filter('#cliente').html());
    },
    render: function (id) {
		var id = id.substring(id.length, id.length-1);
		$.ajax({
				url: 'http://michellhdz.com/offerhunter/laravel/public/index.php/cliente/t/'+id,
				dataType: 'jsonp',
				data: ""/*,
				complete: function(objeto, exito){
					alert("Me acabo de completar")
					if(exito=="success"){
						alert("Y con éxito");
					}
				},
				success: function (res) {
					var ofertas = res.data;
					console.log("LOGGGGGGGGGGGGG");
					console.log(self.$el);
					for(var key in ofertas)
					{
						var oferta = ofertas[key];
						alert(oferta.descripcion);
						self.$el.append(
							self.template(
							{
								offerId:oferta.id_oferta,
								offerName:"Nombre de la oferta",
								offerDec:oferta.descripcion,
								offerVig:oferta.vigencia_cer
							})
						);
					}
				},
				error: function(objeto, quepaso, otroobj){
					alert("Estas viendo esto por que fallé");
					alert("Pasó lo siguiente: "+quepaso);
				}*/
			}).then(function(res){
				var clientes = res.data;
				selff.$el.empty();
				for(var key in clientes)
				{
					var cliente = clientes[key];
					selff.$el.append(
						selff.template(
							{
								clienteId:cliente.id,
								clienteName:cliente.nombre,
								clienteDir:cliente.direccion
							}
						)
					);
					$(".clienteId_"+cliente.id).click(function() {
						var idCliente = $(this).attr("data-idcliente");
						window.location.href="#/cliente/"+cliente.id;
					})
				}
		});
    }
  });
  return CategoriasPage;
});
