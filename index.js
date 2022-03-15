// Code your solution in this file!
function distanceFromHqInBlocks(pickupSpot){
    if (pickupSpot > 42){
        return pickupSpot-42;
    }
    else{
        return 42 - pickupSpot;
    }
}

function distanceFromHqInFeet (pickupSpot){
    return 264 * distanceFromHqInBlocks(pickupSpot);

}

function distanceTravelledInFeet(start, destination){
    return destination > start ? ((destination - start)*264) : ((start - destination)*264);
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination) <= 400) {
        return 0;
    }
    
    else if (distanceTravelledInFeet(start,destination) >= 2500){
        return 'cannot travel that far';
    }

    else if (distanceTravelledInFeet(start,destination) <= 2000){
        return .02 *(distanceTravelledInFeet(start,destination) - 400);
    }
    else {
        return 25;
    }
}