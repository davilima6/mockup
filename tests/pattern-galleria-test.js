// tests for Base
//
// @author Davi Lima
// @version 1.0
// @licstart  The following is the entire license notice for the JavaScript
//            code in this page.
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
// @licend  The above is the entire license notice for the JavaScript code in
//          this page.
//

/*jshint bitwise:true, curly:true, eqeqeq:true, expr:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  regexp:true, undef:true, strict:true, trailing:true, browser:true */
/*global buster:false, define:false, describe:false, it:false, expect:false,
  beforeEach:false, afterEach:false */

define([
  'chai',
  'jquery',
  'mockup-registry',
  'mockup-patterns-galleria'
], function(chai, $, registry, Galleria) {
  "use strict";

  var expect = chai.expect,
      mocha = window.mocha;

  mocha.setup('bdd');
  $.fx.off = true;

/* ==========================
   TEST: Galleria
  ========================== */

  describe("Galleria", function () {
    beforeEach(function() {
      this.$el = $('' +
          '<div class="pat-galleria" data-pat-galleria="autoplay: false" id="galleria">' +
          '<img src="placeholder.gif" />' +
          '<img src="placeholder.gif" />' +
          '<img src="placeholder.gif" />' +
        '</div>');
    });
    it("test class is set", function() {
      var galeria = new Galleria(this.$el);
   });
  });

});
