import requests

class PokemonStats:
    def __init__(self, data):
        self._hp = data['stats'][0]['base_stat']
        self._attack = data['stats'][1]['base_stat']
        self._defense = data['stats'][2]['base_stat']
        self._speed = data['stats'][5]['base_stat']
        self.name = data['name']
        self.image = data['sprites']['front_default']
    
    # Геттеры
    @property
    def hp(self):
        return self._hp
    
    @property
    def attack(self):
        return self._attack
    
    @property
    def defense(self):
        return self._defense
    
    @property
    def speed(self):
        return self._speed
    
    # Сеттеры
    @hp.setter
    def hp(self, value):
        self._hp = int(value)
    
    @attack.setter
    def attack(self, value):
        self._attack = int(value)
    
    @defense.setter
    def defense(self, value):
        self._defense = int(value)
    
    @speed.setter
    def speed(self, value):
        self._speed = int(value)
    
    def __str__(self):
        return f"{self.name}: HP={self.hp}, ATK={self.attack}, DEF={self.defense}, SPD={self.speed}"

class Pokemon:
    def __init__(self):
        self.base_url = "https://pokeapi.co/api/v2/pokemon/"
    
    def get_stats(self, pokemon_name):
        try:
            response = requests.get(f"{self.base_url}{pokemon_name.lower()}")
            response.raise_for_status()
            return PokemonStats(response.json())
        except Exception as e:
            print(f"Error: {e}")
            return None