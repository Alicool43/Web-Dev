class Vehicle:
    """The Base Class representing a generic vehicle."""
    
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The {self.brand} engine is starting with a generic roar."

    def get_maintenance_status(self):
        return f"Checking oil and tire pressure for the {self.model}."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class ElectricCar(Vehicle):
    """Child Class representing an Electric Vehicle (Inheritance)."""
    
    def __init__(self, brand, model, year, battery_capacity):
        super().__init__(brand, model, year)
        self.battery_capacity = battery_capacity

    def charge(self):
        return f"The {self.model} is now charging its {self.battery_capacity}kWh battery."

    def start_engine(self):
        return f"The {self.brand} {self.model} powers on silently. Shhh..."


class Truck(Vehicle):
    """Child Class representing a Heavy Duty Truck (Inheritance)."""
    
    def __init__(self, brand, model, year, towing_capacity):
        super().__init__(brand, model, year)
        self.towing_capacity = towing_capacity

    def haul(self, load_weight):
        if load_weight <= self.towing_capacity:
            return f"The {self.model} is successfully hauling {load_weight}lbs."
        return f"That's too heavy! {load_weight}lbs exceeds the capacity."

    def start_engine(self):
        return f"The {self.brand} {self.model}'s diesel engine rumbles to life!"