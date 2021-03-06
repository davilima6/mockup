// Author: Ryan Foster
// Contact: ryan@rynamic.com
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
  'backbone',
  'underscore',
  'js/ui/views/button',
  'text!js/patterns/structure/templates/selection_button.tmpl'
  ],
  function($, Backbone, _, ButtonView, tpl_button) {
  "use strict";

  var SelectionButton = ButtonView.extend({
    collection: null,
    template: tpl_button,
    initialize: function() {
      ButtonView.prototype.initialize.call(this);

      if (this.collection !== null) {
        this.collection.on('add remove reset', function() {
          this.render();
          if (this.collection.length === 0) {
            this.$el.removeClass('active');
          }
        }, this);
      }
    },
    serializedModel: function() {
      var obj = {icon: '', title: this.options.title, length: 0};
      if (this.collection !== null) {
        obj.length = this.collection.length;
      }
      return obj;
    }
  });

  return SelectionButton;
});
