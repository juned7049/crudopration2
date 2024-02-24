export class User {
    id?:number;
    name?:String;
    address?:String;
    occupation?:String;
    
        constructor(id?:number,name?: string, address?: string, occupation?: string) {
            this.id=id;
            this.name = name;
            this.address = address;
            this.occupation = occupation;
    }
}
