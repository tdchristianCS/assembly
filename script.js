class Applet {
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
        let inner = [
            this.formatTop(),
            this.formatMiddle(),
            this.formatBottom()
        ].join("");

        return `<div id="applet-${this.id}" data-applet="${this.id}" class="applet"><a class="applet-a" href="${this.getRepoURL()}">${inner}</a></div>`;
    }

    formatTop = () => {
        return `<div class="applet-top">${this.name}</div>`;
    }

    formatMiddle = () => {
        return `<div class="applet-middle flexRowCenter"><img src="${this.getScreenshotURL()}"></div>`;
    }

    formatBottom = () => {
        let inner = [
            this.formatAuthors(),
            this.formatCourse()
        ].join("");

        return `<div class="applet-bottom">${inner}</div>`;
    }

    formatAuthors = () => {
        let parts = [];
        for (let author of this.authors) {
            parts.push(this.formatAuthor(author));
        }

        let inner = parts.join("");
        return `<div class="applet-authors flexRowCenter">${inner}</div>`;
        return `<div class="applet-authors flexRowCenter">${inner}</div>`;
    }

    formatAuthor = (author) => {
        return `<span class="applet-author">${author}</span>`;
    }

    formatCourse = () => {
        return `<div class="applet-course flexRowCenter">${this.course}</div>`;
    }
}

const readApplets = () => {
    for (let record of appletRecords) {
        applets.push(new Applet(record.id, record.name, record.course, record.authors))
    }
}

const layoutApplets = () => {
    $('#applets').empty();
    for (let applet of applets) {
        $('#applets').append(applet.format());
    }
}

const initialize = () => {
    $('#year').text(new Date().getFullYear());
    readApplets();
    layoutApplets();
}

const applets = [];

$(document).ready(initialize);
