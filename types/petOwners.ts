import { Pet } from "./pets";

export interface PetsOwnerInterface {
	name?: string;
	gender?: string; 
 	pets?: Pet[];
	age?: number;
}


