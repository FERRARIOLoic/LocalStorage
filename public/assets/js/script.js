console.log('Tu peux le faire !!!');

var idProject = "";

var displayDatas = () => {

    ProjectVueAll.innerHTML = ``;

    var listProjects = JSON.parse(localStorage.getItem('projects'));
    // console.log(listProjects);
    listProjects.forEach(element => {

        idProject = listProjects.indexOf(element);

        // console.log(idProject);
        // console.log(element.nameProject);

        ProjectVueAll.innerHTML += `
            <div class="row listProjectVue">
                <div class="col-3">${element.nameProject}</div>
                <div class="col-8">${element.hrefProject}</div>
                <div class="col-1">
                        <img data-id="${idProject}" class="delete" src="public/assets/img/delete.png">
                    
                </div>
            </div>`;
    });

}

var listProjects = JSON.parse(localStorage.getItem('projects'));
console.log(listProjects);
if (listProjects == null) {
    listProjects = [];
    console.log('Initialisation du tableau');
} else {

    listProjects = listProjects;
    console.log('Tableau existant');

    displayDatas();
}

let saveData = () => {

    let nameProject = document.getElementById('nameProject').value;
    let hrefProject = document.getElementById('hrefProject').value;
    if (nameProject == "" || hrefProject == "") {
        alert(`Vos informations sont erronées, merci de les vérifier...`);
    } else {

        infoProject = {
            'nameProject': nameProject,
            'hrefProject': hrefProject
        }
        listProjects.push(infoProject);
        localStorage.setItem("projects", JSON.stringify(listProjects));

        document.getElementById('nameProject').value = "";
        document.getElementById('hrefProject').value = "";
        displayDatas();
    }

}

let deleteData = (event) => {
    let target = event.target;
    if (target.classList == 'delete') {
        let projectID = target.dataset.id;
        listProjects.splice(projectID, 1);
        localStorage.setItem("projects", JSON.stringify(listProjects));
        target.closest('.row').remove();
    }
}

let deleteAll = () => {
    localStorage.clear();
    displayDatas();
    listProjects = [];
}

btnDeleteParents = document.getElementById('ProjectVueAll');

btnValid.addEventListener('click', saveData);

// console.log(btnDeleteParents);
btnDeleteParents.addEventListener('click', deleteData);

btnDeleteAll.addEventListener('click', deleteAll);