// galleria pattern.
//
// Author: Davi Lima & Felipe Duardo
// Contact: davilima6@gmail.com & felipeduardo@gmail.com
// Version: 1.0
//
// Description:
//
// License:
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


define([
  'jquery',
  'mockup-patterns-base',
  'galleria'
], function($, Base) {
  "use strict";

  var Galleria = Base.extend({
    name: "galleria",
    defaults: {
      autoplay: 7000,
      carousel: true,
      transition: "fade",
      imageCrop: false
    },
    init: function() {
      var self = this;
      console.log("galleria pattern initialized");
    }

  });

  return Galleria;

});
