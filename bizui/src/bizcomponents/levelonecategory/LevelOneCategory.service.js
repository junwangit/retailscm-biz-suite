import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}levelOneCategoryManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelOneCategoryManager/loadLevelOneCategory/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCatalog = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}levelOneCategoryManager/requestCandidateCatalog/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherCatalog = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}levelOneCategoryManager/transferToAnotherCatalog/id/anotherCatalogId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addLevelTwoCategory = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelOneCategoryManager/addLevelTwoCategory/levelOneCategoryId/name/tokensExpr/`
  const levelOneCategoryId = targetObjectId
  const requestParameters = { ...parameters, levelOneCategoryId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLevelTwoCategory = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelOneCategoryManager/updateLevelTwoCategoryProperties/levelOneCategoryId/id/name/tokensExpr/`
  const levelOneCategoryId = targetObjectId
  const requestParameters = { ...parameters, levelOneCategoryId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLevelTwoCategoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelOneCategoryManager/removeLevelTwoCategoryList/levelOneCategoryId/levelTwoCategoryIds/tokensExpr/`
  const requestParameters = { ...parameters, levelOneCategoryId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const LevelOneCategoryService = { view,
  load,
  addLevelTwoCategory,
  updateLevelTwoCategory,
  removeLevelTwoCategoryList,
  requestCandidateCatalog,
  transferToAnotherCatalog }
export default LevelOneCategoryService

