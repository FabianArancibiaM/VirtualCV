import { Selector } from "@ngxs/store";
import { DataState } from "./data.state";
import { DataStateModel, Job } from "./data.state.model";

export class DataSelectors {
    @Selector([DataState]) static SelectListJobs(state: DataStateModel): Array<Job> {
        return state.experiences;
    }
}