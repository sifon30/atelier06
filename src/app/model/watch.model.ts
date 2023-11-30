import { Genre } from "./genre.model";

export class Watch {
    idWatch? : number;
    nomWatch? : string;
    prixWatch? : number;
     dateCreation? : Date ;
     genre!:Genre;
    }
    