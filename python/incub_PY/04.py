# Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

def combat(health, damage):
    #your code here
    health -= damage
    if health > 0:
        return health
    else:
        return 0
    
print(combat(5, 3))