// executed while compiling by the bootstrap wpt-module
//  to get the (by-default) required bootstrap scripts and styles
// you can ever require("bootstrap/xxx"), i.e. require("bootstrap/affix")
//  to include more scripts, that are not included by default

// modify to your wishes
module.exports = {
	scripts: {
		affix:		false,
		alert:		false,
		button:		false,
		carousel:	false,
		collapse:	false,
		dropdown:	false,
		modal:		false,
		popover:	false,
		scrollspy:	false,
		tab:		false,
		tooltip:	false,
		transition:	false,
		typeahead:	false
	},
	styles: {
		accordion:					false,
		alerts:						false,
		breadcrumbs:				false,
		"button-groups":			false,
		buttons:					true,
		carousel:					false,
		close:						false,
		code:						false,
		"component-animations":		false,
		dropdowns:					false,
		forms:						true,
		grid:						true,
		"hero-unit":				false,
		"labels-badges":			true,
		layouts:					true,
		mixins:						true,
		modals:						false,
		navbar:						true,
		navs:						false,
		pager:						false,
		pagination:					false,
		popovers:					false,
		"progress-bars":			false,
		"responsive-1200px-min":	true,
		"responsive-767px-max":		true,
		"responsive-768px-979px":	true,
		"responsive-navbar":		true,
		"responsive-utilities":		true,
		scaffolding:				true,
		sprites:					false,
		tables:						false,
		thumbnails:					false,
		tooltip:					false,
		type:						true,
		utilities:					true,
		wells:						false
	}
}