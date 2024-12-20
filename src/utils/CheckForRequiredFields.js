export function CheckForRequiredFields(requestBody, ...args) {
    // Ensure the requestBody and required fields are provided
    if (!requestBody || Object.keys(requestBody).length === 0 || args.length === 0) {
        return false;
    }

    // Check if every required field exists and is not null/undefined/empty
    const containsAllFields = args.every(
        (field) => requestBody[field] !== undefined && requestBody[field] !== null && requestBody[field] !== ""
    );

    return !containsAllFields;
}


/*
   export function CheckForRequiredFields( requestBody ,...args){
    let requiredFields = args ;
    if(requestBody === null || Object.keys(requestBody).length === 0 || requiredFields.length === 0){
        return false
    }
    let isContainAllFeilds = requiredFields.every((item) =>{
        return requestBody[item]  !== undefined && requestBody[item] !== null || requestBody[item] !== ""
    })
    return !isContainAllFeilds
}

*/