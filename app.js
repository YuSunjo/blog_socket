const express = require('express');

class App {
    constructor() {
        this.app = express();
        // redis 설정
        this.offset = new Date().getTimezoneOffset() * 60000;
        this.today = new Date(Date.now() - this.offset);
    }
}

const application = new App();

module.exports = {
    app: application.app,
    offset: application.offset,
    today: application.today
}
