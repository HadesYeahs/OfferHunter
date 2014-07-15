define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/ofertas/ofertas.html'
], function($, _, Backbone, ofertasPageTemplate){
  var OfertaPage = Backbone.View.extend({
    el: '.page',
	initialize: function () {
		this.template =  _.template($(ofertasPageTemplate).filter('#oferta').html());
    },
    render: function () {
		
		this.$el.append(
			this.template()
		);
    }
  });
  return OfertaPage;
});
