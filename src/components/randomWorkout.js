function randomWorkout(workoutList){
    return workoutList[Math.floor((Math.random() * workoutList.length))];
    // console.log(workoutList)
}

export {randomWorkout}