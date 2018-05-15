import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import { number } from 'discourse/lib/formatter';

createWidget('cat-category', {
  tagName: 'div.cat-link',

 
  html(c) {
    
    var results=''; 
    
    if (c.parent_category_id) {
      this.tagName += '.subcategory';
    }
 
    this.tagName += '.category-' + Discourse.Category.slugFor(c, '-');

    if (c.notification_level !== 0) { results = [ this.attach('category-link', { category: c, allowUncategorized: true }) ]; }
    
    const unreadTotal = parseInt(c.get('unreadTopics'), 10) + parseInt(c.get('newTopics'), 10);
    if (unreadTotal) {
      results.push(h('a.badge.badge-notification', {
        attributes: { href: c.get('url') }
      }, number(unreadTotal)));
    }

    if (!this.currentUser) {
      results.push(h('b.topics-count', number(c.get('topic_count'))));
    }

    return results;
  }
});

export default createWidget('cat-categories', {
  tagName: 'div.category-links.clearfix',

  html(attrs) {
    const href = Discourse.getURL('/categories');
    const result = [h('div.qa-cat', I18n.t('filters.categories.title') )];

    const categories = attrs.categories;
    if (categories.length === 0) { return; }
    return result.concat(categories.map(c => this.attach('cat-category', c)));
  }
});
