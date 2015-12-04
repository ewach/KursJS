(function (global) {
    aicraftID = 1;
    serviceID = 1;


    newAircraft = function() {
        var aircraftsElement = document.querySelector('#aircrafts_airport');
        var name = document.querySelector('#aircraft_name_input').value;
        if(name != ''  && global.UAM.notAdded(name)){
            aircraft = global.UAM.addAircraft(name);
            aircraftElement = createAircraftElement(aircraft);
            aircraftsElement.appendChild(aircraftElement); 
        };
    };



    createAircraftElement = function(aircraft) {
        var code = aircraft.code;
        var aircraftElement = document.createElement('div');
        aircraftElement.id = 'aircraft_' + code;
        aircraftElement.setAttribute('class', 'aircraft');
        aircraftElement.innerHTML =" <span> "+ code +" </span>"

        aircraftElement.appendChild(createDeleteAircraftButton(aircraft)); 

  
        aircraftElement.appendChild(createServicesVisibleButton (aircraftElement.id)); 
        aircraftElement.appendChild(createServicesElement(aircraft)); 
        
        return aircraftElement;
    };

    createDeleteAircraftButton = function(aircraft) {
        var aircraftsElement = document.querySelector('#aircrafts_airport');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', function() {
            var toRemove = document.querySelector('#aircraft_' + aircraft.code); 
            aircraftsElement.removeChild(toRemove)
            global.UAM.removeAircraft(aircraft); 
        });
        return removeButton
    }

    createServicesElement = function(aircraft) {

        var aircraftId = 'aircraft_' + aircraft.code;
        var servicesElement = document.createElement('div');
        servicesElement.id = 'services_element_' + aircraftId;
        servicesElement.style.display = "none"
        // servicesElement.setAttribute('style' ,'hidden');

        var newServiceNameInput = document.createElement('input');
        newServiceNameInput.id = 'service_name_input_' + aircraftId;
        newServiceNameInput.setAttribute('placeholder' ,'service name');
        servicesElement.appendChild(newServiceNameInput);

        var newServiceTimeInput = document.createElement('input');
        newServiceTimeInput.id = 'service_time_input_' + aircraftId;
        newServiceTimeInput.setAttribute('placeholder' ,'time');
        newServiceTimeInput.setAttribute('type' ,'number');
        servicesElement.appendChild(newServiceTimeInput);


        var services = document.createElement('div');
        services.id = 'services_' + aircraftId;

        var newServiceButton = document.createElement('button');
        newServiceButton.textContent = 'Add Service';
        newServiceButton.id = 'service_button_' + aircraftId;
        newServiceButton.addEventListener('click', function() {
            if(newServiceNameInput.value && newServiceTimeInput.value){
                service = newService(aircraft, newServiceNameInput.value, newServiceTimeInput.value)
                services.appendChild(service)
            }
        });
        servicesElement.appendChild(newServiceButton);
        servicesElement.appendChild(services);

        return servicesElement
    };

    newService = function(aircraft, name, time) {
        global.UAM.addWorkToAircraft(aircraft, name, time);
        return createServiceELement(name, time);
    };

    createServiceELement = function(name, time) {
        var service = document.createElement('div');
        service.id = 'service_' + serviceID++;
        service.setAttribute('class', 'service');
        service.innerHTML =" <div> "+ name +" </div>" +
                            " <div> "+ time +" </div>" ;
        return service;
    };

    createServicesVisibleButton = function(aircraftId) {
        var servicesVisibleButton = document.createElement('button');
        servicesVisibleButton.textContent = 'Services';
        servicesVisibleButton.id = 'services_visible_button_' + aircraftId
        servicesVisibleButton.addEventListener('click', function() {
            servicesVisible(aircraftId);
        });
        return servicesVisibleButton
    }
    servicesVisible = function(aircraftId) {
        var aircraftElement = document.querySelector('#services_element_' + aircraftId);
        // if (aircraftElement.getAttribute === "hidden")
        //     aircraftElement.setAttribute('style' ,'services');
        // else
        //     aircraftElement.setAttribute('style' ,'hidden');
    
        if (aircraftElement.style.display === "none")
            aircraftElement.style.display = "block";
        else
            aircraftElement.style.display = "none";

    }

    repairAircrafts = function(){
        // name = document.querySelector('#name_repair');
        time = document.querySelector('#ime_repair');
        repairAllMatchingAircrafts(time);
    }

    repair = function(aircraft, time) {
        global.UAM.reduceTimeToExecute(aircraftObj, time);
    }

    repairAllMatchingAircrafts = function (time) {
     var aircraftsToRepair = global.UAM.getAircraftsForRepairs(time);
     for (var i = 0; i < aircraftsToRepair; i ++){
        repair(aircraftsToRepair[i], time);
     }
    }

}(window));
