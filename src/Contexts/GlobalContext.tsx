import React from "react";
import { createCustomContext } from "../utils/CreateCustomContext";

interface IGlobalState {}

const initialState: IGlobalState = {};

function setState(state: IGlobalState, newState: Partial<IGlobalState>): IGlobalState {
   return { ...state, ...newState };
}

const functions = {
   setState,
};

const { Context, Provider, useContextHook } = createCustomContext<IGlobalState, typeof functions>({
   initialState,
   functions,
});

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
