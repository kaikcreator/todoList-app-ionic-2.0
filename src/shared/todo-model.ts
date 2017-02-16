export class TodoModel{
    constructor(
        public description:string,
        public isImportant:boolean = false,
        public isDone:boolean = false
    ){}

    static clone(todo:TodoModel){
        return new TodoModel(todo.description, todo.isImportant, todo.isDone);
    }
}