
export enum petTypeEnum {
    Cat = 'Cat',
    Dog = 'Dog'
} 

export interface Pet {
	name: string;
	type?: petTypeEnum; 
}


export interface PetsOwnerInterface {
	name: string;
	gender: string; 
 	pets?: Pet[];
	age?: number;
}

export interface Cats{ 
    ownerGender : string,
    names: string[], 
}
