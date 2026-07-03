//Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  // Write your code here
  let health_after_dmg = health - damage
  return health_after_dmg < 0 ? 0 : health_after_dmg
}

console.log(combat(10, 4))