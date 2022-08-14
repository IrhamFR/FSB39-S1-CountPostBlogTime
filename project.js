let projects = []

let addProject = (event) => {
    event.preventDefault()

    const title = document.getElementById("input-project-title").value
    let startProject = document.getElementById("input-start-date").value
    let endProject = document.getElementById("input-end-date").value
    const content = document.getElementById("input-desc-project").value
    let image = document.getElementById("input-project-image").files[0]

    if (image) {
        image = URL.createObjectURL(image)
    }       
   
    checkedValue = [];
    let technology = document.getElementsByClassName('project-checkbox');
    let data = technology.length
    for (var i = 0; i < data; i++) {
        if (technology[i].checked == true) {
            checkedValue.push(technology[i].value)
        }
    }

    let project = {
        title,
        startProject,
        endProject,
        content,
        image,
        checkedValue
    }

    projects.push(project)
    console.log(project)
    renderproject()
}   

const renderproject = () => {

    let containerProjects = document.getElementById("project-list-render")

    containerProjects.innerHTML = ""

    for (let i =0; i < projects.length; i++) {
        containerProjects.innerHTML +=`
        <div class="project-list-render">
            <div class="project-img">
                <img src="${projects[i].image}" alt="" />
            </div>
            <div class="project-content">
                <a href="project-detail.html" class="title-card-project">${projects[i].title}</a>
                <p class="distance-card-project">Duration : ${getDuration(projects[i].startProject, projects[i].endProject)}</p>
                <p class="desc-card-project">${projects[i].content}</p>
                <div class="icon-project">
                    ${(function icon() {
                    let string = ""
                    for (let j = 0; j < projects[i].checkedValue.length; j++) {
                        string += `
                        <div class="item-icon-project">
                            <i class="${projects[i].checkedValue[j]}"></i>
                        </div>
                        `}

                    return string
                    })()}
                </div>
            <div class="project-project-action">
                <a href="#" class="edit-card-action">edit</a>
                <a href="#" class="delete-card-action">delete</a>
            </div>
        </div>  
        `
    }
}

function getDuration(start, end) {
    let proStart = new Date(start)
    let proEnd = new Date(end)

    let distance = proEnd - proStart


    let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
    if (monthDistance != 0) {
        return monthDistance + ' month'
    } else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' week'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' day'
            } else {
                let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                if (hoursDistance != 0) {
                    return hoursDistance + ' hour'
                } else {
                    let minuteDistance = Math.floor(distance / (60 * 1000))
                    if (minuteDistance != 0) {
                        return minuteDistance + ' minute'
                    } else {
                        let secondDistance = Math.floor(distance / 1000)
                        if (secondDistance != 0)
                        return secondDistance + ' sec'
                    }
                }
            }
        }
    }
}