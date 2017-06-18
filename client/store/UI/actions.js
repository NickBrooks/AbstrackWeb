// toggle the newNoteModal
export function toggleNoteEditor(value) {
    return {
        type: 'TOGGLE_NOM_EDITOR',
        value
    }
}

export function toggleNewNoteButton(value) {
    return {
        type: 'TOGGLE_NEW_NOM_BUTTON',
        value
    }
}

export function toggleSidebar(value) {
    return {
        type: 'TOGGLE_SIDEBAR',
        value
    }
}

export function setSearchBar(value) {
    return {
        type: 'SET_SEARCH_BAR',
        value
    }
}

export function togglePreviewMode(value) {
    return {
        type: 'TOGGLE_PREVIEW_MODE',
        value: value
    }
}