import { EmailValidator } from "@angular/forms";
import {Course} from "./Ders";


export class Ogrenci {
    public classList:Course[]=[];
    constructor(public nameSurname: string, public no: string, public gender: string, public birthDate:Date, public mail:string ){}
}


