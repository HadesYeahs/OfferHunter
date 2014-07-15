define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/cliente/cliente.html'
], function($, _, Backbone, clientePageTemplate){
  var ClientePage = Backbone.View.extend({
    el: '.page',
	initialize: function () {
		selff = this;
		selff.template =  _.template($(clientePageTemplate).filter('#cliente').html());
    },
    render: function (id) {
		var id = id.substring(id.length, id.length-1);
		selff.$el.empty();
		$.ajax({
				url: 'http://michellhdz.com/offerhunter/laravel/public/index.php/cliente/'+id,
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
				var cliente = res.data;
				var horario = cliente.horario_aper + cliente.horario_cierre;
				selff.$el.empty();
					selff.$el.append(
						selff.template(
							{
								idCli:cliente.id,
								nomCli:cliente.nombre,
								esloganCli:cliente.eslogan,
								horarioCli:horario,
								resenaCli:cliente.resena,
								dirCli:cliente.direccion
							})
					);
		});
    }
  });
  return ClientePage;
});
