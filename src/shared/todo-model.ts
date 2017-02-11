export class TodoModel{
    constructor(
        public description:string,
        public isImportant:boolean = false,
        public isDone:boolean = false
    ){}
}