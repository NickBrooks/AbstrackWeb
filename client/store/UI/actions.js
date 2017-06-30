// toggle the newNoteModal
export function toggleNoteEditor(value) {
    return {
        type: 'TOGGLE_NOTE_EDITOR',
        value
    }
}

// toggle the appView children (used when search bar in focus)
export function toggleAppViewChildren(value) {
    return {
        type: 'TOGGLE_APP_VIEW_CHILDREN',
        value
    }
}

export function toggleNewNoteButton(value) {
    return {
        type: 'TOGGLE_NEW_NOTE_BUTTON',
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