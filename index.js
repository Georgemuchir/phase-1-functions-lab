// Code your solution in this file!
function distanceFromHqInBlocks(somenumber) {
    const headquaters = 42;
    return Math.abs(somenumber-headquaters);
}

function distanceFromHqInFeet(somenumber) {
    const headquarters = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(somenumber - headquarters);
    return distanceInBlocks * feetPerBlock;
}

// function distanceTravelledInFeet(somenumber){
//     const headquarters=42;
//     const feetPerBlock=1320;
//     const distanceTravelledInFeet=2640;
//     return distanceInBlocks*feetPerBlock;
// }

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * feetPerBlock;
}


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

