const view = {
    initialSetup: function() {
        this.updateService();
        this.loadOl();
        this.loadLi('mainPage');
        this.updateTeams();
        console.log(data.firstVisit);
        if (data.firstVisit == false) {
            this.hideFirstVisit();
        }
    },
    updateService: function () {
        let firstService = document.querySelector('#firstService');
        let secondService = document.querySelector('#secondService');
        if (data.service == 1) {
            firstService.classList.add('green');
            secondService.classList.remove('green');
        } else if (data.service == 2) {
            firstService.classList.remove('green');
            secondService.classList.add('green');
        };
    },
    loadOl: function (target) {
        for (i = 0; i < data.allTeams.length; i++) {
            let olName = document.createElement('ol');
            let olArea = document.querySelector('#olArea');
            let arrayNeed;
            if (data.service === 1) {
                arrayNeed = data.allTeams[i].firstNeed;
            } else if (data.service === 2) {
                arrayNeed = data.allTeams[i].secondNeed;
            };
            olName.innerHTML = data.allTeams[i].name.split('_').join(' ')+'; Need '+arrayNeed;
            olName.setAttribute('id',data.allTeams[i].name);
            if (target === 'regulars') {
                this.makeDelBtn(olName, i, data.allTeams)
            };
            olArea.appendChild(olName);
        }
    },
    loadLi: function (x) {
        var servArray = [];
        for (i = 0; i < data.allTeams.length; i++) {
            if (x == 'mainPage') {
                if (data.service == 1 && data.allTeams[i].firstServ !== undefined) {
                    servArray = data.allTeams[i].firstServ;
                } else if (data.service == 2 && data.allTeams[i].secondServ !== undefined) {
                    servArray = data.allTeams[i].secondServ;
                };
            } else if (x == 'setupPage') {
                if (data.service == 1 && data.allTeams[i].firstRegulars !== undefined) {
                    servArray = data.allTeams[i].firstRegulars;
                } else if (data.service == 2 && data.allTeams[i].secondRegulars !== undefined) {
                    servArray = data.allTeams[i].secondRegulars;
                };
            }
            for (y = 0; y < servArray.length; y++) {
                let id = data.allTeams[i].name;
                let targetOl = document.getElementById(id);
                let li = document.createElement('li');
                li.innerHTML = servArray[y];
                this.makeDelBtn(li,y, servArray);
                targetOl.appendChild(li);
            }
        };
        if (x == 'setupPage') {
            this.loadNeedUpdateForm();
        }
    },
    makeDelBtn: function (li, index, array) {
        let delBtn = document.createElement('button');
        delBtn.setAttribute('class','delete');
        delBtn.innerHTML = "X";
        delBtn.addEventListener('click',()=> {
            array.splice(index,1);
            delBtn.parentElement.remove();
            data.saveSelf();
            view.updateTeams();
        });
        li.appendChild(delBtn);
    },
    deleteAllLists: function () {
        let olArray = document.querySelectorAll('ol');
        for (i = 0; i < olArray.length; i++) {
            olArray[i].remove();
        }
    },
    updateTeams: function () {
        let currentOptions = document.querySelectorAll('option');
        for (i = 0; i < currentOptions.length; i++) {
            currentOptions[i].remove();
        };
        let team = document.querySelector('#team');
        for (i = 0; i < data.allTeams.length; i++) {
            let option = document.createElement('option');
            option.value = data.allTeams[i].name;
            option.innerHTML = data.allTeams[i].name.split('_').join(' ');
            team.appendChild(option);
        };
    },
    loadNeedUpdateForm: function() {
        for (i = 0; i < data.allTeams.length; i++) {
            let targetOl = document.querySelector('#'+data.allTeams[i].name);
            let label = document.createElement('label');
            label.innerHTML = '<br>Update Need';
            let input = document.createElement('input');
            input.type = 'text';
            input.classList.add('updateNeedsInput');
            input.setAttribute('id',data.allTeams[i].name);
            let btn = document.createElement('button');
            btn.innerHTML = 'Submit';
            btn.setAttribute('class','needSubmit');
            btn.addEventListener('click',manager.updateServiceNeeds);
            targetOl.appendChild(label);
            targetOl.appendChild(input);
            targetOl.appendChild(btn);
        }
    },
    hideFirstVisit: function() {
        let introNotice = document.querySelector('#firstVisitIntro');
        introNotice.classList.add('hide');
        let firstVisitBackdrop = document.querySelector('#firstVisitBackdrop');
        firstVisitBackdrop.classList.add('hide');
    }
}

const data = {
    loadSelf: function () {
        try {
            let bullpenData;
            if(localStorage.getItem('bullpenData') === '') {
                bullpenData = ''; //Works with the last code on main.js to delete the bullpen data (for testing purposes)
            } else {
                bullpenData = JSON.parse(localStorage.getItem('bullpenData'));
            }
            if (bullpenData !== null && bullpenData !== '') {
                this.service = bullpenData.service;
                this.allTeams = bullpenData.allTeams;
                this.firstVisit = bullpenData.firstVisit;
            } 
        } catch (e) {
            console.error('Error loading bullpen data: ', e);
        }
    },
    saveSelf: function () {
        let dataToStore = {
            service: data.service,
            allTeams: data.allTeams,
            firstVisit: data.firstVisit
        };
        localStorage.setItem('bullpenData', JSON.stringify(dataToStore));
    },
    firstVisit: true,
    service: 1,
    allTeams: [{
        name: 'Team_1',
        firstServ: ['Casey Flex T1-S1', 'George Flex T1-S1'],
        firstRegulars: ['Sally Regular T1-S1'],
        firstNeed: 3,
        secondServ: ['Jan Flex T1-S2', 'Bill Flex T1-S2'],
        secondRegulars: ['Frank Regular T1-S2'],
        secondNeed: 3
    },
    {
        name: 'Team_2',
        firstServ: ['Allison Flex T2-S1', 'Martha Flex T2-S1'],
        firstRegulars: ['Bart Regular T2-S1'],
        firstNeed: 6,
        secondServ: ['Alice Flex T2-S2', 'Cooper Flex T2-S2'],
        secondRegulars: ['Candice Regular T2-S2'],
        secondNeed: 6
    }]
}

const manager = {
    loadRegulars: function () {
        for (i = 0; i < data.allTeams.length; i ++) {
            if (data.service === 1) {
                let regulars = data.allTeams[i].firstRegulars;
                let target = data.allTeams[i].firstServ;
                for (y = 0; y < regulars.length; y++) {
                    target.push(regulars[y]);
                };
            } else if (data.service === 2) {
                let regulars = data.allTeams[i].secondRegulars;
                let target = data.allTeams[i].secondServ;
                for (y = 0; y < regulars.length; y++) {
                    target.push(regulars[y]);
                };
            }
        }
    },
    updateServiceNeeds: function () {
        let needsArray = document.querySelectorAll('.updateNeedsInput');
        console.log('needsArray ', needsArray);
        for (i = 0; i < needsArray.length; i++) {
            let targetNeed = needsArray[i];
            console.log('targetNeed', targetNeed);
            if (targetNeed.value !== '') {
                for (y = 0; y < data.allTeams.length; y++) {
                    if (targetNeed.getAttribute('id') === data.allTeams[y].name) {
                        if (data.service === 1) {
                            data.allTeams[y].firstNeed = targetNeed.value;
                        } else {
                            data.allTeams[y].secondNeed = targetNeed.value;
                        };
                    };
                };
            }
            needsArray[i].value = '';
        };
        data.saveSelf();
        view.deleteAllLists();
        view.loadOl('regulars');
        view.loadLi('setupPage');
    },
    Team: function (name) {
        this.name = name.split(' ').join('_');
        this.firstServ = [];
        this.firstRegulars = [];
        this.firstNeed = 0;
        this.secondServ = [];
        this.secondRegulars = [];
        this.secondNeed = 0;
    }
}