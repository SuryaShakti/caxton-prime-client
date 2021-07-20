import app from "./index";

/**
 *
 * @createdBy Aurosmruti Das
 * @email aurosmruti.das@gmail.com
 * @description query.js
 * @createdOn 20/07/21 9:31 am
 */



export const QueryService = app.service("query");


export const submitQuery = (data) => QueryService.create(data);