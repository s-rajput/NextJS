
import { Container } from "inversify";
import { TYPES } from "./TYPES";
import {IPetsService,PetsService } from "../backend/pet/pets";
const DIContainer = new Container();
 
  
DIContainer.bind<IPetsService>(TYPES.IPetsService).to(PetsService); 

export { DIContainer }