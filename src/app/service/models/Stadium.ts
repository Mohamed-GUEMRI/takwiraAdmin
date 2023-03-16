
export class Stadium{
    public Reservation(id:number, name: string, ville: string, ownerId: Number, photos: string[], price: Float32Array, rating: Float32Array){
        this.id = id;
        this.name = name;
        this.ville = ville;
        this.photos = photos;
        this.price = price;
        this.rating = rating;
    }

    public id: number | undefined;
    public name: string | undefined;
    public ville: string | undefined;
    public ownerId: number | undefined;
    public photos: string[] | undefined;
    public price: Float32Array | undefined;
    public rating: Float32Array | undefined;
}