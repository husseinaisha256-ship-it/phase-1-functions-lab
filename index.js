// Code your solution in this file!
// Alternative with constants
const HQ_STREET = 42;
const FEET_PER_BLOCK = 264;

function distanceFromHqInBlocks(street) {
  return Math.abs(street - HQ_STREET);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * FEET_PER_BLOCK;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) return 0;
  if (distance <= 2000) return (distance - 400) * 0.02;
  if (distance <= 2500) return 25;
  return 'cannot travel that far';
}