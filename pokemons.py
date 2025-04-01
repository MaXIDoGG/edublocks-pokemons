import requests

class Pokemon:
    def __init__(self):
        self.base_url = "https://pokeapi.co/api/v2/pokemon/"
    
    def get_stats(self, pokemon_name):
        try:
            response = requests.get(f"{self.base_url}{pokemon_name.lower()}")
            if response.status_code == 200:
                data = response.json()
                
                # Создаем объект с атрибутами
                class PokemonStats:
                    def __init__(self, data):
                        self.hp = data['stats'][0]['base_stat']
                        self.attack = data['stats'][1]['base_stat']
                        self.defense = data['stats'][2]['base_stat']
                        self.special_attack = data['stats'][3]['base_stat']
                        self.special_defense = data['stats'][4]['base_stat']
                        self.speed = data['stats'][5]['base_stat']
                        self.name = data['name']
                        self.image = data['sprites']['front_default']
                
                return PokemonStats(data)
            else:
                return {"error": "Pokemon not found"}
        except Exception as e:
            return {"error": str(e)}