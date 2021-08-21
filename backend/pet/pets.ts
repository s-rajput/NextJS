import { Cats, Pet, PetsOwnerInterface } from "./pets.types";
import axios from "axios";412
import { injectable } from 'inversify';
import "reflect-metadata";
import environment from "../../environment";


export interface IPetsService{ 

    getCatsGroupedByOwnerGender() : Promise<Cats[]>;

	groupBy(list : any, keyGetter : any) : Map<any,any>;

}


@injectable()
export class PetsService implements IPetsService{ 

	 
	backendPetsHttp = axios.create({
		baseURL:  environment.apiBaseURL
	});

	async getCatsGroupedByOwnerGender ()  {
      
		var res = await	this.backendPetsHttp.get<PetsOwnerInterface[]> (environment.apiMethod as string); 
							 

		const pets = res.data.filter(p => p.pets !== null);


		const results = this.groupBy(pets, (p:PetsOwnerInterface)=> p.gender);
				 
		const cats : Cats[]=[];
  

		results.forEach((element : PetsOwnerInterface[]) => {
								 
			var names2DimArray = element.map(x=> (x.pets as Pet[]).map(y=> y.name));

			const namesFlattenedArray = ([] as string[]).concat(...names2DimArray).sort(); 
								
			let cat : Cats = {ownerGender: element[0].gender,	names:  namesFlattenedArray	};
					
			cats.push(cat);
		});
 		 
					
		return cats; 
	
	}

	groupBy(list : any, keyGetter : any) {
		const map = new Map();
		list.forEach((item: any) => {
			 const key = keyGetter(item);
			 const collection = map.get(key);
			 if (!collection) {
				 map.set(key, [item]);
			 } else {
				 collection.push(item);
			 }
		});
		return map;
	}
 
 
	

}

 