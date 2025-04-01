import requests

class Pokemon:
    def __init__(self):
        self.base_url = "https://pokeapi.co/api/v2/pokemon/"
        self.current_pokemon = None

    def get_stats(self, pokemon_name):
        try:
            response = requests.get(f"{self.base_url}{pokemon_name.lower()}")
            if response.status_code == 200:
                data = response.json()
                self.current_pokemon = {
                    'hp': data['stats'][0]['base_stat'],
                    'attack': data['stats'][1]['base_stat'],
                    'defense': data['stats'][2]['base_stat'],
                    'special-attack': data['stats'][3]['base_stat'],
                    'special-defense': data['stats'][4]['base_stat'],
                    'speed': data['stats'][5]['base_stat'],
                    'name': data['name'],
                    'image': data['sprites']['front_default']
                }
                return self.current_pokemon
            else:
                return {"error": "Pokemon not found"}
        except Exception as e:
            return {"error": str(e)}