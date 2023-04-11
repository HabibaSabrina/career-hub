// add data to local storage
const addToDb = id =>{
    let appliedJobsCart = getStoredCart()
    const checking = appliedJobsCart[id]
    if(checking){
        alert('already applied to this job')
    }
    else{
        appliedJobsCart[id] = 1
    }
    localStorage.setItem('jobs-cart',JSON.stringify(appliedJobsCart))
    
}
// get stored data from local storage cart
const getStoredCart = () =>{
    let appliedJobsCart = {};
    // get previous data from local storage
    const storedCart = localStorage.getItem('jobs-cart')
    if(storedCart){
        appliedJobsCart = JSON.parse(storedCart)
    } 
    return appliedJobsCart

}
export {addToDb, getStoredCart}