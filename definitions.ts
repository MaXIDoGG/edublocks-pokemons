const pokeColor = "#FF0000";

Blockly.Blocks['import_pokeapi'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Import PokeAPI tools");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(pokeColor);
		this.setTooltip("Imports necessary libraries for PokeAPI");
	}
};

Blockly.Blocks['get_pokemon_stats'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Get Pokemon")
			.appendField(new Blockly.FieldTextInput("pikachu"), "pokemon_name")
			.appendField("stats");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(pokeColor);
		this.setTooltip("Fetches basic stats for specified Pokemon");
	}
};

Blockly.Blocks['show_pokemon_stats'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Show Pokemon stats");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(pokeColor);
		this.setTooltip("Prints Pokemon stats to console");
	}
};