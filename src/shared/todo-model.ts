export class TodoModel{
    constructor(
        public description:string,
        public listId:number,
        public isImportant:boolean = false,
        public isDone:boolean = false,
        public id:number = 0
    ){}

    static clone(todo:TodoModel){
        return new TodoModel(todo.description, todo.listId, todo.isImportant, todo.isDone, todo.id);
    }

    static fromJson(data:any){
        if(!data.description || ! data.id || ! data.listId){
            throw(new Error("Invalid argument: argument structure do not match with model fields"));
        }

        return new TodoModel(data.description, data.listId, data.isImportant, data.isDone, data.id);
    }
}