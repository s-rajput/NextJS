import { configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import rootReducer from "./reducers"; 



const store = configureStore({
reducer: rootReducer,
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: false,
}),
});


if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
(module as any).hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;