var config = require("./config.json");
var jmpressPackage = require("jmpress.js/package.json");

function getComponent(component) {
	return require("!raw!jmpress.js/src/components/"+component+".js");
}

function getPlugin(plugin) {
	return require("!raw!jmpress.js/src/plugins/"+plugin+".js");
}

function getHeader() {
	return '/*!\n' +
		' * jmpress.js v' + jmpressPackage.version + '\n' +
		' * ' + jmpressPackage.homepage + '\n' +
		' *\n' +
		' * ' + jmpressPackage.description + '\n' +
		' *\n' +
		' * Copyright ' + new Date().getYear() + ' ' + jmpressPackage.author.name + '\n' +
		' * Licensed ' + jmpressPackage.licenses.map(function(l) { return l.type }).join(", ") + '\n' +
		' * ' + jmpressPackage.licenses.map(function(l) { return l.url }).join(", ") + '\n' +
		' *\n' +
		' * Based on the foundation laid by Bartek Szopka @bartaz\n' +
		' */';
}

function build(options) {
	var usedComponents = {};
	function addComponent(component) {
		usedComponents[component.name] = true;
		if(component.dependencies) {
			component.dependencies.forEach(addComponent);
		}
	}
	config.components.forEach(function(component) {
		if(options[component.name]) {
			addComponent(component);
		}
	});
	var file = [getHeader(), getComponent("core"), getComponent("near")];
	config.components.forEach(function(component) {
		if(usedComponents[component.name])
			file.push(component.plugin ? getPlugin(component.name) : getComponent(component.name));
	});
	return file.join("\n");
}

module.exports = build;
