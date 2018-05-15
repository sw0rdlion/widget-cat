# name:  widget-cat
# about: A category widget that works with discourse-layouts
# version: 0.1
# authors: Evg

register_asset 'stylesheets/widget-cat.scss'

enabled_site_setting : widget-cat


# after_initialize do
#   DiscourseLayouts::WidgetHelper.add_widget('widget-cat')
# end

 DiscourseEvent.on(:layouts_ready) do
   DiscourseLayouts::WidgetHelper.add_widget('widget-cat', position: 'left', order: 'start')
 end
