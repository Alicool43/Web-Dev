from models import Vehicle, ElectricCar, Truck

def main():
    my_old_sedan = Vehicle("Toyota", "Camry", 2010)
    my_tesla = ElectricCar("Tesla", "Model S", 2023, 100)
    my_f150 = Truck("Ford", "F-150", 2022, 13000)

    fleet = [my_old_sedan, my_tesla, my_f150]

    print("--- 🚗 Modern Fleet Management 🚗 --- \n")

    for vehicle in fleet:
        print(f"Vehicle: {vehicle}")
        
        print(f"Action: {vehicle.start_engine()}")
        
        if isinstance(vehicle, ElectricCar):
            print(f"Update: {vehicle.charge()}")
        elif isinstance(vehicle, Truck):
            print(f"Update: {vehicle.haul(5000)}")
            
        print("-" * 30)

if __name__ == "__main__":
    main()