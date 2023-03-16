
export class Reservation{
    public Reservation(id:number, playerId: number, stadiumId: number, startDate: undefined, endDate: undefined){
        this.id = id;
        this.playerId = playerId;
        this.stadiumId = stadiumId;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public id: number | undefined;
    public playerId: number | undefined;
    public stadiumId: number | undefined;
    public startDate:  undefined;
    public endDate:  undefined;
}