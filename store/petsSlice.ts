import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
 
import { IPetsService } from "../backend/pet/pets";
import { DIContainer } from '../ioc/DIContainer';
import { TYPES } from '../ioc/TYPES'; 
import { Cats } from "../backend/pet/pets.types";
 
const petsSvc = DIContainer.get<IPetsService>(TYPES.IPetsService);
 

export const getCatsAsync = createAsyncThunk<Cats[]>(
	"pet/petList",
	async (_, { rejectWithValue }) => {
	  try {
		const response = await petsSvc.getCatsGroupedByOwnerGender();
		 
		return response as Cats[]; 

	  } catch (err) {
		return rejectWithValue(err);
	  }
	}
  );
  
 

interface initialStateInterface {
	data: Cats[] | undefined;
	loading: boolean;
	error: string | undefined;
}

const initialState: initialStateInterface = {
	data: undefined,
	loading: false,
	error: undefined,
};


const petsSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {},
 
    extraReducers: (builder) => {
		builder
			.addCase(getCatsAsync.pending, (state) => { 
				state.loading = true;
			})
			.addCase(
				getCatsAsync.fulfilled,
				(state, action: PayloadAction<Cats[] | undefined>) => {
 
					state.loading = false;
					state.data = action.payload;
					state.error = undefined;
				}
			)
			.addCase(getCatsAsync.rejected, (state, action) => {
				state.data = undefined;
				state.loading = false;
				if (action.error) {
					state.error = action.error.message;
				}
			});
	},
})

 

export default petsSlice.reducer;
