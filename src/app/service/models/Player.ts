export class Player{
    public Player(id:number, name: string, email: string, password: string, status: boolean){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
    }

    public id: number | undefined;
    public name: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
    public status: boolean | undefined;
}