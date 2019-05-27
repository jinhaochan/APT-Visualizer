from pymongo import MongoClient

def connect():
    client = MongoClient('localhost:27017')
    db = client.mitre

    return db

def insert(data, collection):
    db = connect()

    col = db[collection]

    col.insert_many(data)


