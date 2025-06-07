class App {
    id;
    name;
    course;
    authors;

    constructor(id, name, course, authors) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.authors = authors;
    }

    getScreenshotURL = () => {
        return `./assets/screenshots/${this.id}.jpg`;
    }

    getRepoURL = () => {
        return `https://g.tdchristian.ca/${this.id}`;
    }

    format = () => {
        return `${this.name}`;
    }
}

const layoutApps = () => {
    $('#apps').empty();
    for (let app of apps) {
        $('#apps').append(app.format());
    }
}

const initialize = () => {
    $('#year').text(new Date().getFullYear());
    layoutApps();
}

const apps = [
    new App('grocery-rush-assembly', 'Grocery Rush', 'ICS4U 2024-25 S2', ['Julia Chung']),
    new App('button-thing-assembly', 'Funni Buttons', 'ICS4U 2024-25 S2', ['Yannis Shew']),
];

$(document).ready(initialize);
