import { Ogretmen } from './Ogretmen';


export class Course {
    constructor(public code:string, public lecturer : Ogretmen, public capacity:number) {
        
    }
}