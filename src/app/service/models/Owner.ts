export class Owner{
    public Owner(id:number, name: string, email: string, password: string, status: boolean, nOfStadiums:  number, location: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.nOfStadiums = nOfStadiums;
        this.location = location;
    }

    public id: number | undefined;
    public name: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
    public status: boolean | undefined;
    public nOfStadiums: number | undefined;
    public location: string | undefined;
}