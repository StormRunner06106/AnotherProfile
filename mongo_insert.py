import pymongo
from pymongo import MongoClient
from pprint import pprint

def connect_to_mongodb():
    """Connect to MongoDB and return the client"""
    # Connection string - replace with your actual connection string if needed
    connection_string = "mongodb://localhost:27017/"
    
    try:
        # Create a connection to MongoDB
        client = MongoClient(connection_string)
        
        # Test the connection
        client.admin.command('ping')
        print("✅ Connected successfully to MongoDB!")
        return client
    except Exception as e:
        print(f"❌ Connection failed: {e}")
        return None

def create_sample_data():
    """Create some sample data to insert"""
    products = [
        {
            "name": "Laptop",
            "category": "Electronics",
            "price": 999.99,
            "in_stock": True,
            "specs": {
                "brand": "TechPro",
                "model": "UltraBook X1",
                "ram": "16GB",
                "storage": "512GB SSD"
            }
        },
        {
            "name": "Smartphone",
            "category": "Electronics",
            "price": 699.99,
            "in_stock": True,
            "specs": {
                "brand": "MobiTech",
                "model": "Galaxy S22",
                "ram": "8GB",
                "storage": "256GB"
            }
        },
        {
            "name": "Coffee Maker",
            "category": "Kitchen Appliances",
            "price": 79.99,
            "in_stock": False,
            "specs": {
                "brand": "BrewMaster",
                "model": "Morning Brew 3000",
                "capacity": "12 cups"
            }
        },
        {
            "name": "Wireless Headphones",
            "category": "Audio",
            "price": 149.99,
            "in_stock": True,
            "specs": {
                "brand": "SoundWave",
                "model": "NoiseCancel Pro",
                "battery_life": "30 hours"
            }
        },
        {
            "name": "Fitness Tracker",
            "category": "Wearables",
            "price": 89.99,
            "in_stock": True,
            "specs": {
                "brand": "FitLife",
                "model": "Activity Plus",
                "water_resistant": True,
                "battery_life": "7 days"
            }
        }
    ]
    
    return products

def main():
    # Connect to MongoDB
    client = connect_to_mongodb()
    if not client:
        return
    
    # Create or access a database
    db = client["product_database"]
    
    # Create or access a collection
    products_collection = db["products"]
    
    # Create sample data
    products = create_sample_data()
    
    # Insert multiple documents
    try:
        result = products_collection.insert_many(products)
        print(f"✅ Inserted {len(result.inserted_ids)} documents")
        print(f"Inserted IDs: {result.inserted_ids}")
    except Exception as e:
        print(f"❌ Error inserting documents: {e}")
    
    # Query the collection to verify insertion
    print("\n📋 First 3 products in the collection:")
    for product in products_collection.find().limit(3):
        pprint(product)
    
    # Query by category
    print("\n📱 Electronics products:")
    electronics = products_collection.find({"category": "Electronics"})
    for product in electronics:
        pprint(product)
    
    # Query by price range
    print("\n💰 Products between $80 and $200:")
    price_range = products_collection.find({
        "price": {"$gte": 80, "$lte": 200}
    })
    for product in price_range:
        pprint(product)
    
    # Close the connection
    client.close()
    print("\n✅ MongoDB connection closed")

if __name__ == "__main__":
    main()
