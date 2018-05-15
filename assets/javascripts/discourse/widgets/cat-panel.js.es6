import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';

createWidget('cat-panel', {
  tagName: 'div.cat-panel',

  buildAttributes(attrs) {
    if (attrs.maxWidth) {
      return { 'data-max-width': attrs.maxWidth };
    }
  },

  html(attrs) {
    return h('div.panel-body', h('div.panel-body-contents.clearfix', attrs.contents()));
  }
});
