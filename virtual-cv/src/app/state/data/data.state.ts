import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { DATA_JOBS } from "src/app/source/data-base";
import { SetDataState } from "./data.actions";
import { DataStateModel, DEFAULT_DATA_STATE } from "./data.state.model";

@State<DataStateModel>({
    name: 'DataState',
    defaults: DEFAULT_DATA_STATE,
})
@Injectable()
export class DataState {

    constructor() { }

    @Action(SetDataState)
    async setDataState (ctx: StateContext<DataStateModel>){
        ctx.setState({ ...ctx.getState(), experiences: DATA_JOBS.data });
    }
}