import { candidateDetails } from '../../constants/candidateDetails'
import {CHANGE_SKILL_TYPE,SET_JOB_LIST, MAKE_UPDATE,SHOULD_UPDATE,SHOULD_NOT_UPDATE, GET_SPECIFIC_JOB} from './action'

const initialstate = {
    allSkillTypes:["NodeJS","AWS","Python","Solidity","Devops","Data Science"],
    selectedSkillType:"NodeJS",
    candidateList:candidateDetails,
    joblist:[],
    specificJob:{},
    shouldRefreshData: true,
}

export const Reducer = (state=initialstate,action) =>{
    switch (action.type){
        case CHANGE_SKILL_TYPE:{
            return{...state,selectedSkillType:action.payload }
        }
        case SHOULD_UPDATE:{
            return { ...state, shouldRefreshData:true } 
        }
        case SHOULD_NOT_UPDATE:{
            return { ...state, shouldRefreshData:false } 
        }
        case SET_JOB_LIST:{
            return { ...state, joblist: action.payload } 
        }
        case GET_SPECIFIC_JOB:{
            return {...state, specificJob:action.payload}
        }
        default:{
            return state;
        }
    }
}

