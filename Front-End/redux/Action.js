import axios from "axios";
export const CHANGE_SKILL_TYPE = 'CHANGE_SKILL_TYPE'
export const SET_JOB_LIST = 'SET_JOB_LIST';  
export const SHOULD_UPDATE = "SHOULD_UPDATE"
export const SHOULD_NOT_UPDATE = "SHOULD_NOT_UPDATE"
export const GET_SPECIFIC_JOB = "GET_SPECIFIC_JOB"
export const DELETE_JOB = "DELETE_JOB"


//enter your url below. You must add api/jobs at the end 
// for example - https://9a45-2a02-c7f-637-7000-3cdb-b4ed-a3b0-f21f.ngrok-free.app/api/jobs/ 
const API_URL = "https://f640-2a02-c7f-637-7000-c887-43ef-4b6c-fd7.ngrok-free.app/api/jobs/"


export const update = () =>{
    return{
        type:SHOULD_UPDATE
    }
}

export const finishUpdate = ()=>{
    return{
        type:SHOULD_NOT_UPDATE
    }
}

export const changeSkillType = (skill) =>{
    return{
        type:CHANGE_SKILL_TYPE,
        payload:skill

    }
}


export const setJobList = (jobs) => {  
    return {
        type: SET_JOB_LIST,
        payload: jobs
    };
}

export const requestJob = (job) =>{
    return{
        type:GET_SPECIFIC_JOB,
        payload:job
    }
}

export const deleteJob = () =>{
    return{
        type:DELETE_JOB
    }
}
export const fetchJobs = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API_URL);
            if(response.data){
                dispatch(setJobList(response.data));
             }
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };
}

export const postJob = (jobData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(API_URL, jobData);
            if (response.data) {
                console.log("Job posted successfully!");
            }
        } catch (error) {
            console.error("Error posting job:", error);
        }
    };
}

export const getSpecificJob = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API_URL+id);
            if (response.data) {
                dispatch(requestJob(response.data))
            }
        } catch (error) {
            console.error("Error retrieving the job :", error);
        }
    };
}

export const removeSpecificJob = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(API_URL+id);
            dispatch(update())
        } catch (error) {
            console.error("There is an error with deleting this job:", error);
        }
    };
}

export const updateSpecificJob = (id, updatedJobData) => {
    return async (dispatch, getState) => {
      try {
        // Make the API request to update the specific job
        const response = await axios.put(
            API_URL+id,
          updatedJobData
        );
  
        // If the update was successful, dispatch the updated job to the Redux state
        if (response.data) {
          dispatch({ type: GET_SPECIFIC_JOB, payload: response.data });
  
          // Update the joblist in Redux state with the modified job
          const updatedJobList = getState().Reducer.joblist.map((job) =>
            job.id === id ? response.data : job
          );
  
          dispatch({ type: SET_JOB_LIST, payload: updatedJobList });
          dispatch(update());
        }
      } catch (error) {
        console.error("Error updating the job:", error);
      }
    };
  };