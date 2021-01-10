export const add_todo = (input) => {
    return {
        type : 'ADD_TODO',
        payload : input,
    }
}
export const REMOVE = (id) => {
return {
    type:'REMOVE',
    payload : id ,
};
}
export const done = (id) => {
    return {
        type : 'DONE',
        payload : id,
    }
}
export const edit = (id, title) => {
    return {
        type : 'EDIT',
        payload : {id , title},
    };
}
export const filter = (filter) => {
    return {
        type : 'FILTER',
        payload : filter,
    };
}