import actionTypes from './actionTypes';
import axios from 'axios';

const URL = 'http://localhost:3020';

function requestListSuccess(list) {
    return {
        type: actionTypes.LOAD_LIST,
        list
    }
}

function requestListError(error) {
    return{
        type: actionTypes.LOAD_LIST_ERROR,
        error
    }
}

export function requestList() {
    return async (dispatch) => {
        const list = await axios.get(URL);
        try {
            debugger;
            dispatch(requestListSuccess(list.data))
            
        } catch (error) {
            dispatch(requestListError(error))
        }
    }

}



export function createProjectError(error){
    return {
        type:actionTypes.CREATE_PROJECT_ERROR,
        error,
    }
}

export function createProject(info){
    return async (dispatch)=>{
        try {
            await axios.put(URL, info);
        } catch (error) {
            dispatch(createProjectError(error));
            
        }
    }
}
export function deleteProject(list){
    return async (dispatch)=>{
        try {
            await axios.delete(URL,list)
        } catch (error) {
            dispatch(deleteProjectError(error))
            
        }
    }
}

function deleteProjectError(error){
    return {
        type:actionTypes.DELETE_PROJECT_ERROR,error
    }
}