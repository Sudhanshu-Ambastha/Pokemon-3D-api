import json
import os

def merge_pokemon_data(json_dir, output_file, model_url_base):
    merged_data = {"pokemon": []}
    pokemon_map = {}
    acceptable_forms = ["regular", "shiny", "gmax", "alolan", "galar", "hisuian", "mega", "xy", "unique", "primal", "origin", "multiform"]

    # First process regular.json (case-insensitive) to establish base Pokemon
    for filename in os.listdir(json_dir):
        if filename.lower() == "regular.json":
            regular_file = os.path.join(json_dir, filename)
            if os.path.exists(regular_file):
                process_regular_json(regular_file, pokemon_map, model_url_base)
            break  # Stop after finding regular.json

    # Then process other forms
    for filename in os.listdir(json_dir):
        form_name = os.path.splitext(filename)[0].lower()
        if filename.endswith(".json") and form_name in acceptable_forms and form_name != "regular":
            filepath = os.path.join(json_dir, filename)
            process_form_file(filepath, pokemon_map, model_url_base)

    # Convert map to sorted list
    merged_pokemon_list = []
    sorted_ids = sorted(pokemon_map.keys())
    for pokemon_id in sorted_ids:
        merged_pokemon_list.append(pokemon_map[pokemon_id])

    merged_data["pokemon"] = merged_pokemon_list

    with open(output_file, "wt") as f:
        json.dump(merged_data, f, indent=2)

def process_regular_json(filepath, pokemon_map, model_url_base):
    """Processes regular.json to establish base Pokemon entries."""
    try:
        with open(filepath, "r") as f:
            data = json.load(f)
            if "pokemon" in data and isinstance(data["pokemon"], list):
                for pokemon in data["pokemon"]:
                    pokemon_id = pokemon.get("id")
                    pokemon_name = pokemon.get("name")
                    if pokemon_id is not None:
                        pokemon_map[pokemon_id] = {
                            "id": pokemon_id,
                            "forms": [{"name": pokemon_name, "model": f"{model_url_base}/regular/{pokemon_id}.glb", "formName": "regular"}]
                        }
                    else:
                        print(f"Warning: Pokemon with missing 'id' found in {os.path.basename(filepath)}")
            else:
                print(f"Warning: 'pokemon' key not found or not a list in {os.path.basename(filepath)}")
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error processing {os.path.basename(filepath)}: {e}")

def process_form_file(filepath, pokemon_map, model_url_base):
    """Processes a single JSON file containing Pokémon form data."""
    form_name = os.path.splitext(os.path.basename(filepath))[0].lower()
    try:
        with open(filepath, "r") as f:
            data = json.load(f)
            if "pokemon" in data and isinstance(data["pokemon"], list):
                for pokemon in data["pokemon"]:
                    pokemon_id = pokemon.get("id")
                    pokemon_name = pokemon.get("name")
                    model_url = pokemon.get("model")

                    if pokemon_id is not None and model_url is not None:
                        if form_name == "xy" and ("Mega Charizard Y" in pokemon_name or "Mega Charizard X" in pokemon_name or "Mega Mewtwo" in pokemon_name or "Mega Blastoise" in pokemon_name):
                            if "/x/" in model_url:
                                actual_form_name = "x"
                            elif "/y/" in model_url:
                                actual_form_name = "y"
                            else:
                                continue  # Skip if neither x nor y is found
                            model_url = f"{model_url_base}/{actual_form_name}/{pokemon_id}.glb"
                            form_name = actual_form_name
                        else:
                            # Extract form name from model url if it exists.
                            if "/mega/" in model_url:
                                form_name = "mega"
                            elif "/gmax/" in model_url:
                                form_name = "gmax"
                            elif "/shiny/" in model_url:
                                form_name = "shiny"
                            model_url = f"{model_url_base}/{form_name}/{pokemon_id}.glb"

                        if pokemon_id in pokemon_map:
                            existing_pokemon = pokemon_map[pokemon_id]
                            existing_pokemon["forms"].append({"name": pokemon_name, "model": model_url, "formName": form_name})
                        else:
                            pokemon_map[pokemon_id] = {
                                "id": pokemon_id,
                                "forms": [{"name": pokemon_name, "model": model_url, "formName": form_name}]
                            }
                    else:
                        print(f"Warning: Pokemon with missing 'id' or 'model' found in {os.path.basename(filepath)}")
            else:
                print(f"Warning: 'pokemon' key not found or not a list in {os.path.basename(filepath)}")
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error processing {os.path.basename(filepath)}: {e}")

json_directory1 = "models/json"
output_json_file1 = "models/Merged.json"
model_url1 = "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb"

json_directory2 = "models/optJson"
output_json_file2 = "models/MergedOpt.json"
model_url2 = "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/opt"

merge_pokemon_data(json_directory1, output_json_file1, model_url1)
print(f"Merged JSON saved to {output_json_file1}")

merge_pokemon_data(json_directory2, output_json_file2, model_url2)
print(f"Merged JSON saved to {output_json_file2}")