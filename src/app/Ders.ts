import { Ogretmen } from './Ogretmen';
import { Ogrenci } from './Ogrenci';


export class Course {
    public studentList:Ogrenci[]=[];
    constructor(public code:string, public lecturer : Ogretmen, public capacity:number) {
        
    }
}