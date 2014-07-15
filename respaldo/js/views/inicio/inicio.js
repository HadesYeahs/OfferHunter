define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/inicio/index.html'
], function($, _, Backbone, inicioPageTemplate){
  var InicioPage = Backbone.View.extend({
    el: '.page',
	initialize: function () {
		selff = this;
		selff.template =  _.template($(inicioPageTemplate).filter('#offerIniTemplate').html());
    },
    render: function () {
		
			$.ajax({
				url: 'http://michellhdz.com/offerhunter/laravel/public/index.php/oferta',
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
				var ofertas = res.data;
				for(var key in ofertas)
				{
					var oferta = ofertas[key];
					selff.$el.append(
						selff.template(
						{
							offerId:oferta.id_oferta,
							offerName:"Nombre de la oferta",
							offerDec:oferta.descripcion,
							offerVig:oferta.vigencia_cer
						})
					);
				}
		});
//		for(var i=0; i<15;i++)
//		{
//			this.$el.append(
//				this.template({offerId:i,offerName:"Nombre de la oferta", offerDec:"descropcion de la oderta", offerVig:"Vigencia"})
//			)
//		}
    }
  });
  return InicioPage;
});
