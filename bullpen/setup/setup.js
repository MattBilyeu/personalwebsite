const controller = {
    init: function () {
        data.loadSelf();
        view.updateService();
        view.loadOl('regulars');
        view.loadLi('setupPage');
        view.updateTeams();
        let firstServiceButton = document.querySelector('#firstService');
        firstServiceButton.addEventListener('click', controller.handleService);
        let secondServiceButton = document.querySelector('#secondService');
        secondServiceButton.addEventListener('click', controller.handleService);
        let addPersonButton = document.querySelector('#addPerson');
        addPersonButton.addEventListener('click', controller.handleAddPerson);
        let addTeam = document.querySelector('#addTeam');
        addTeam.addEventListener('click', controller.handleAddTeam);
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
        view.loadOl('regulars');
        view.loadLi('setupPage');
    },
    handleAddPerson: function () {
        if (data.allTeams !== []) {
            var name = document.querySelector('#inputName').value;
            let team = document.querySelector('#team').value;
            for (i = 0; i < data.allTeams.length; i++) {
                let teamArray = [];
                if (data.service == 1) {
                    teamArray = data.allTeams[i].firstRegulars;
                } else if (data.service == 2) {
                    teamArray = data.allTeams[i].secondRegulars;
                }
                if (data.allTeams[i].name === team) {
                    teamArray.push(name);
                    data.saveSelf();
                    view.deleteAllLists();
                    view.loadOl();
                    view.loadLi('setupPage');
                };
            };
            document.querySelector('#inputName').value = "";
        }
    },
    handleAddTeam: function () {
        let teamName = document.querySelector('#inputTeam').value;
        if(controller.checkFirstLetter(teamName)) {
            let newTeam = new manager.Team(teamName);
            data.allTeams.push(newTeam);
            data.saveSelf();
            view.deleteAllLists();
            view.loadOl('regulars');
            view.loadLi('setupPage');
            view.updateTeams();
            document.querySelector('#inputTeam').value = '';
        } else {
            alert('Team names must start with a letter');
        }
    },
    checkFirstLetter: function(string) {
        const firstLetter = string.charAt(0);
        const regex = /^[a-zA-Z]/; // regular expression to match alphabetical letters
        if (regex.test(firstLetter)) {
          return true;
        } else {
          return false;
        }
      }
}



window.onload = controller.init;