export class Food{
    id!:string;  //(!) <--- REQUIRED FIELDS ,(?) <---- OPTIONAL FIELDS
    name!:string;
    price!:number;
    tags?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}