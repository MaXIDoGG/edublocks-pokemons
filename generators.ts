Blockly.Python['import_pokeapi'] = function (block) {
	return 'import requests\n' +
		'import json\n\n' +
		'class PokeAPI:\n' +
		'    def __init__(self):\n' +
		'        self.base_url = "https://pokeapi.co/api/v2/"\n' +
		'        self.current_pokemon = None\n\n' +
		'    def get_pokemon(self, name):\n' +
		'        response = requests.get(f"{self.base_url}pokemon/{name.lower()}")\n' +
		'        if response.status_code == 200:\n' +
		'            self.current_pokemon = response.json()\n' +
		'            return True\n' +
		'        return False\n\n' +
		'    def get_stats(self):\n' +
		'        if not self.current_pokemon:\n' +
		'            return None\n' +
		'        stats = {}\n' +
		'        for stat in self.current_pokemon["stats"]:\n' +
		'            stats[stat["stat"]["name"]] = stat["base_stat"]\n' +
		'        return stats\n\n' +
		'poke_api = PokeAPI()\n';
};

Blockly.Python['get_pokemon_stats'] = function (block) {
	const pokemonName = block.getFieldValue('pokemon_name');
	return `poke_api.get_pokemon("${pokemonName}")\n`;
};

Blockly.Python['show_pokemon_stats'] = function (block) {
	return 'stats = poke_api.get_stats()\n' +