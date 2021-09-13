import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }


const selectorShop = state => state.shop;


export const selectShopData = createSelector(
    [selectorShop],
    shop => shop.collections
)

export const selectCollectionsForPrev = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopData],
    collections => collections[collectionUrlParam]
)