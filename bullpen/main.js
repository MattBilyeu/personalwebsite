const controller = {
    init: function () {
        data.loadSelf();
        let addPersonButton = document.querySelector('#addPerson');
        addPersonButton.addEventListener('click', controller.handleAddPerson);
        let addRegularsButton = document.querySelector('#addRegulars');
        addRegularsButton.addEventListener('click', controller.handleAddRegulars);
        let firstServiceButton = document.querySelector('#firstService');
        firstServiceButton.addEventListener('click', controller.handleService);
        let secondServiceButton = document.querySelector('#secondService');
        secondServiceButton.addEventListener('click', controller.handleService);
        let notice = document.querySelector('#firstVisitIntro');
        notice.addEventListener('click', controller.handleFirstVisit);
        view.initialSetup();
        console.log(data.allTeams);
    },
    handleFirstVisit: function() {
        data.firstVisit = false;
        let introNotice = document.querySelector('#firstVisitIntro');
        introNotice.classList.add('hide');
        let firstVisitBackdrop = document.querySelector('#firstVisitBackdrop');
        firstVisitBackdrop.classList.add('hide');
    },
    handleService: function (e) {
        if (e.target.id === 'firstService') {
            data.service = 1;
        } else if (e.target.id === 'secondService') {
            data.service = 2;
        };
        data.saveSelf();
        view.deleteAllLists();
        view.updateService();
        view.loadOl();
        view.loadLi('mainPage');
    },
    handleAddPerson: function () {
        if (data.allTeams !== []) {
            var name = document.querySelector('#inputName').value;
            let team = document.querySelector('#team').value;
            for (i = 0; i < data.allTeams.length; i++) {
                let teamArray = [];
                if (data.service == 1) {
                    teamArray = data.allTeams[i].firstServ;
                } else if (data.service == 2) {
                    teamArray = data.allTeams[i].secondServ;
                }
                if (data.allTeams[i].name === team) {
                    teamArray.push(name);
                    data.saveSelf();
                    view.deleteAllLists();
                    view.loadOl();
                    view.loadLi('mainPage');
                };
            };
            document.querySelector('#inputName').value = "";
        }
    },
    handleAddRegulars: function () {
        manager.loadRegulars();
        view.deleteAllLists();
        view.loadOl();
        view.loadLi('mainPage');
    }
}

window.onload = controller.init;

// Deletes the bullpen data.
// setTimeout(()=> {
//     localStorage.setItem('bullpenData','');
// },10);