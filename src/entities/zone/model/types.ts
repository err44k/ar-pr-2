export type Position = [logintude:number, latinude:number];

export interface Zone {
    id:string;
    name:string;
    coordinates: Position[];
    updatedAt:string;
}