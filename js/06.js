const message = `Сообщение дня: ${getWelcomeMessage("Аня")}`
console.log(message)
function getWelcomeMessage(name) {
  return `Привет, ${name}!`
}
