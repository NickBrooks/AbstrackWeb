//add a new nom
export function addNom(nom) {
    return {
        type: 'ADD_NOM',
        nom
    }
}

//pin or unpin a nom
export function pinNom(nomId, value) {
    return {
        type: 'PIN_NOM',
        nomId,
        value
    }
}

//add a new hashtag to a nom
export function addHashtagToNom(hashtags, nomId) {
    return {
        type: 'ADD_HASHTAG_TO_NOM',
        hashtags,
        nomId
    }
}