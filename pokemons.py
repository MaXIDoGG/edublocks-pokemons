import requests

class PokemonStats:
    def __init__(self, data):
        self.hp = data['stats'][0]['base_stat']
        self.attack = data['stats'][1]['base_stat']
        self.defense = data['stats'][2]['base_stat']
        self.speed = data['stats'][5]['base_stat']
        self.name = data['name']
        self.image = data['sprites']['front_default']
    
    def __str__(self):
        return f"Pokemon {self.name} - HP: {self.hp}, Attack: {self.attack}, Defense: {self.defense}, Speed: {self.speed}"
    
    def to_dict(self):
        return {
            'hp': self.hp,
            'attack': self.attack,
            'defense': self.defense,
            'speed': self.speed,
            'name': self.name,
            'image': self.image
        }

class Pokemon:
    def __init__(self):
        self.base_url = "https://pokeapi.co/api/v2/pokemon/"
    
    def get_stats(self, pokemon_name):
        try:
            response = requests.get(f"{self.base_url}{pokemon_name.lower()}")
            response.raise_for_status()  # Генерирует исключение для кодов 4xx/5xx
            data = response.json()
            return PokemonStats(data)
        except requests.exceptions.RequestException as e:
            print(f"Error fetching Pokemon data: {e}")
            return None