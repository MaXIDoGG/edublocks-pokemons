const pokeColor = "#FF0000";

Blockly.Blocks['import_pokemons'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("from pokemons import Pokemon");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(pokeColor);
	}
};

Blockly.Blocks['pokemon_init'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("pokemon"), "pokemon")
			.appendField(" = Pokemon()");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(pokeColor);
	}
};

Blockly.Blocks['pokemon_get_stats'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("pikachu"), "poke_name")
			.appendField(" = ")
			.appendField(new Blockly.FieldVariable("pokemon"), "pokemon")
			.appendField(".get_stats(");
		this.appendValueInput("parameters")
			.setCheck(null);
		this.appendDummyInput()
			.appendField(")");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(pokeColor);
	}
};

Blockly.Blocks['pokemon_get_property'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("pikachu"), "poke_name")
			.appendField(".")
			.appendField(new Blockly.FieldDropdown([["hp", "hp"], ["defense", "defense"], ["attack", "attack"], ["speed", "speed"]]), "property");
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(pokeColor);
	}
};

Blockly.Blocks['pokemon_set_property'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("pikachu"), "poke_name")
			.appendField(".")
			.appendField(new Blockly.FieldDropdown([
				["hp", "hp"],
				["attack", "attack"],
				["defense", "defense"],
				["speed", "speed"]
			]), "property")
			.appendField(" = ");
		this.appendValueInput("value")
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT);  // Выравнивание по правому краю

		this.setInputsInline(true);  // Ключевая строка - делаем в одну линию
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#FF0000');
		this.setTooltip("Set Pokemon's property value");
	}
};