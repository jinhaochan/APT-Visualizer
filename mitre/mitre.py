import requests
import json
from mongowriter import *

def pull_mitre():

    # Initialize dictionary to hold Enterprise ATT&CK content
    attack = {}
    tactics = {}
    
    print("Pulling data from MITRE TAXII server...")

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

if __name__ == "__main__":
    attack = pull_mitre()

    mitre_data = []
    tactic_data = []

    for tech in attack["techniques"]:
        mitre_data.append(tech)

    for tactic in attack["tactics"]:
        tactic_data.append(tactic)

    tactics = {}
    mitre_info = {}

    print("Massaging data...")

    for item in tactic_data:
        tactic_name = item["name"].lower().replace(" ", "_")

        tactics[tactic_name] = item["external_references"][0]["external_id"]
        mitre_info[tactic_name] = []

    print("Inserting data to MongoDB...")

    for technique in mitre_data:
        for kill_chain in technique["kill_chain_phases"]:
            tactic = kill_chain["phase_name"].replace("-","_")
            mitre_info[tactic].append(technique)

    for tactic in tactics:
        insert(mitre_info[tactic], tactic)

        
    insert(tactic_data, "mitre_tactics")

    print("Done!")

