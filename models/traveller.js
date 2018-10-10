const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total,journey) => {
    return total+journey.distance;
  },0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = [];
  // this.journeys.forEach((journey) => {
  //   if(!modesOfTransport.includes(journey.transport)){modesOfTransport.push(journey.tranport)}
  // });
  // return modesOfTransport;

  for(let journey of this.journeys){
    if(modesOfTransport.includes(journey.transport) == false){
      modesOfTransport.push(journey.transport);
    };
  }
    return modesOfTransport;
};


module.exports = Traveller;
