import { getStoredCart } from "../utilities/fakeDb"

export const appliedJobsCart = async () =>{
    const totalJobsData = await fetch('/jobs.json')
    const totalJobs = await totalJobsData.json()
    const savedCart = getStoredCart()
    let appliedJobsArr = []
    for(const id in savedCart){
        const foundJobs = totalJobs.find(job => job.id === id)
        if(foundJobs){
            appliedJobsArr.push(foundJobs)
        }
    }
    return {appliedJobsArr, totalJobs}
}