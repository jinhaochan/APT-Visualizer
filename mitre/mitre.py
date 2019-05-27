import requests
import json
from mongowriter import *

def pull_mitre():

    # Initialize dictionary to hold Enterprise ATT&CK content
    attack = {}
    tactics = {}

    # Establish TAXII2 Collection instance for Enterprise ATT&CK collection
    url = "https://cti-taxii.mitre.org/stix/collections/95ecc380-afe9-11e4-9b6c-751b66dd541e/objects"
    headers = {'Accept': 'application/vnd.oasis.stix+json; version=2.0'}
    response = requests.get(url, headers=headers)

    mitre_info = response.json()

    techniques = []
    tactics = []

    for item in mitre_info["objects"]:
        mitre_type = item["type"]

        if mitre_type == "attack-pattern":
            techniques.append(item)
        elif mitre_type == "x-mitre-tactic":
            tactics.append(item)

    attack["techniques"] = techniques
    attack["tactics"] = tactics

    return attack

def write_to_file(filename, array):
    with open(filename, "w") as f:
        f.write("[")

        for idx, item in enumerate(array, start=1):
            f.write("%s\n" % json.dumps(item))
            if idx < len(array):
                f.write(",")

        f.write("]")

if __name__ == "__main__":
    read_from_file = 1 

    if read_from_file:
        with open("header_info.json", "r") as f:
            tactic_data = json.load(f)

        with open("mitre_info.json", "r") as f:
            mitre_data = json.load(f)

        tactics = {}
        mitre_info = {}

        for item in tactic_data:
            tactic_name = item["name"].lower().replace(" ", "")

            tactics[tactic_name] = item["external_references"][0]["external_id"]
            mitre_info[tactic_name] = []

        for technique in mitre_data:
            for kill_chain in technique["kill_chain_phases"]:
                tactic = kill_chain["phase_name"].replace("-","")
                mitre_info[tactic].append(technique)

        for tactic in tactics:
            insert(mitre_info[tactic], tactic)
    
    else:
        attack = pull_mitre()

        mitre_array = []
        header_array = []

        for tech in attack["techniques"]:
            mitre_array.append(tech)

        for header in attack["tactics"]:
            header_array.append(header)

        write_to_file("mitre_info.json", mitre_array)
        write_to_file("header_info.json", header_array)

