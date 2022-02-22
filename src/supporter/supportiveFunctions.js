const shorten = (title) => {
    const splitTitle = title.split(' ')
    const newTitle = `${splitTitle[0]} ${splitTitle[1]}`
    return newTitle

    //This function will split the title after reaching to an empty string ' ' . It will do this two times.
    //The first time when it reaches to an empty string ' ' => this will be the end of the first index => [0].
    //The second time it reaches to the empty string ' ' it will be the second index => index[1] , and this is the end of the second string.

    //Finally the shorten form (the first two strings) of the title will be returned
} 

 //If the id of the selected item is true then it will return us that specific item that user selected
 const existsInCart = (state , id) => {
     const result = !!state.selectedItems.find(item => item.id === id)
     return result
}
 
//quantityCountIndex function will find if there is more repeated same id selected or not
const quantityCountIndex = (state , id) => {
     const index = state.selectedItems.findIndex(item => item.id === id)
     if(index === -1) {
       return false
     } else {
       return state.selectedItems[index].quantity
     }
    /*
      this if statement will check if there is repeated item selected and
      if an item is selected just more than one time then beside the plus(+) icon,
      the Remove button will appear too
    */
}
   
export {shorten , existsInCart, quantityCountIndex}