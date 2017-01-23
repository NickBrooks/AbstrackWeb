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