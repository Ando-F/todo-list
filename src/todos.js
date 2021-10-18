let objectCreate = (function() {
    class createTodo {
        constructor(name, status, date, note) {
            this.name = name;
            this.status = status;
            this.date = date;
            this.note = note;
        }
    }

    return {
        createTodo: createTodo
    }
})()

export {
    objectCreate
}