/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer){
  if (timer === undefined || timer === null) {
    return 'You forgot to set the timer.';
  } else if (timer === 0) {
    return 'Lasagna is done.';
  } else if (timer > 0){ 
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, time) {
  if(time){
    return layers.length * time;
  }else{
    return layers.length * 2;
  }
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
        noodles += 50;      
    } else if (layers[i] === 'sauce'){
      sauce += 0.2;
    }
  }
  return {
    noodles: noodles,
    sauce: sauce
  }
}

export function addSecretIngredient(friendsList, myList) {
  const secret = friendsList[friendsList.length - 1]
  myList.push(secret);  
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * portions / 2;
  }
  return scaledRecipe;
}
