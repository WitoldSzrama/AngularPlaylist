export class Song {
    constructor(public author:string, public title:string ){}

    getSong(){
        return {author:this.author, title:this.title}
    }
} 