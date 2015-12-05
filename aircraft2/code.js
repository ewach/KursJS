(function (global) {
    var mapArray;

    if (!global.UAM) {
        global.UAM = {};
    }
    
    global.UAM.aircrafts = [];
    
    global.UAM.notAdded = function(name) {
        for(var i = 0; i< global.UAM.aircrafts.length; i++){
            if (global.UAM.aircrafts[i].code === name) {
                return false;
            }
        }
        return true;
    }

    global.UAM.addAircraft = function (newAircraftCode) {
        var aircraft = {
            code: newAircraftCode,
            services: []
        };
        global.UAM.aircrafts.push(aircraft);
        return aircraft;
        // function should return new aircraft object
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        var index = global.UAM.aircrafts.indexOf(aircraftObj);
        if (index > -1) {
            global.UAM.aircrafts.splice(index, 1);
        };
        // !!!
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExxecute) {
        var index = global.UAM.aircrafts.indexOf(aircraftObj);
        if (index > -1) {          
            global.UAM.aircrafts[index].services.push({
                name: name,
                timeToExecute: timeToExxecute
            });
        };
        // !!!
    };
        
    global.UAM.reduceTimeToExecute = function(aircraftObj, time) {
        var index = global.UAM.aircrafts.indexOf(aircraftObj);
        if (index > -1 && global.UAM.aircrafts[index].services) {
            for (var i = 0; i < global.UAM.aircrafts[index].services.length; i++) {
                global.UAM.aircrafts[index].services[i].timeToExecute -= time;
            };
            var i = 0;
            while(i < global.UAM.aircrafts[index].services.length) {
                if(global.UAM.aircrafts[index].services[i].timeToExecute <= 0) {
                    global.UAM.aircrafts[index].services.splice(i, 1);
                }
                else{
                    i++;
                }
            };
        };     
        // !!!
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        returnList = [];
        for (var index = 0; index < global.UAM.aircrafts.length; index ++) {
            var aircraft = global.UAM.aircrafts[index];
            var toRepair = false;
            var i = 0;
            if (aircraft.services) {
                while ((i < aircraft.services.length) && !toRepair) {
                    if (aircraft.services[i].timeToExecute <= maxTimeToExecute) {
                        returnList.push(aircraft);
                        toRepair = true;
                    };
                    i ++;
                };
            };
        };
        return returnList;
        // !!!
    };

}(window));
