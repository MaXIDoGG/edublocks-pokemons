import requests

class Property:
  def __init__(self, hp, attack, defense, speed):
    self.hp = hp
    self.attack = attack
    self.defense = defense
    self.speed = speed


class Pokemon:
    def __init__(self):
        self.base_url = "https://pokeapi.co/api/v2/pokemon/"
        self.current_pokemon = None

    def get_stats(self, pokemon_name):
        try:
            response = requests.get(f"{self.base_url}{pokemon_name.lower()}")
            if response.status_code == 200:
                data = response.json()
                
                hp = data['stats'][0]['base_stat']
                attack = data['stats'][1]['base_stat']
                defense = data['stats'][2]['base_stat']
                speed = data['stats'][5]['base_stat']
                
                return Property(hp, attack, defense, speed)
            else:
                return {"error": "Pokemon not found"}
        except Exception as e:
            return {"error": str(e)}