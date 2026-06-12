// Write a function that adds a named property to an object. 
// It must be possible to set the property to a new value. 
// If the property already exists on the object, and error should be thrown.


function addProperty(obj, prop, value) {
    if(prop in obj){

        throw new Error(" mistake")
    } else
        obj[prop] = value
  return obj
}

const obj2 = { name: 'John' }



console.log(addProperty(obj2, 'color', 'grey'))