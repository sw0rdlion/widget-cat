# name:  widget-category
# about: A category widget that works with discourse-layouts
# version: 0.1.1
# authors: Evg

register_asset 'stylesheets/widget-cat.scss'


DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::WidgetHelper.add_widget('widget-cat', position: 'right', order: '1')
end
