Blockly.Python['import_pokemons'] = function (block) {
	var code = 'from pokemons import Pokemon\n';
	return code;
};

Blockly.Python['pokemon_init'] = function (block) {
	var pokemon = Blockly.Python.nameDB_.getName(block.getFieldValue('pokemon'), Blockly.VARIABLE_CATEGORY_NAME);
	var code = `${pokemon} = Pokemon()\n`;
	return code;
};

Blockly.Python['pokemon_get_stats'] = function (block) {
	var poke_name = Blockly.Python.nameDB_.getName(block.getFieldValue('poke_name'), Blockly.VARIABLE_CATEGORY_NAME);
	var pokemon = Blockly.Python.nameDB_.getName(block.getFieldValue('pokemon'), Blockly.VARIABLE_CATEGORY_NAME);
	var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
	var code = `${poke_name} = ${pokemon}.get_stats(${parameters})\n`;
	return code;
};

Blockly.Python['pokemon_get_property'] = function (block) {
	var poke_name = Blockly.Python.nameDB_.getName(block.getFieldValue('poke_name'), Blockly.VARIABLE_CATEGORY_NAME);
	var property = block.getFieldValue('property');
	var code = `${poke_name}.${property}`;
	return code;
};  