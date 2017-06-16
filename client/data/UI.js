const ui = {
  avatar: {
    empty: {
      regular: "https://i.imgur.com/Hg2zm3N.jpg",
      thumb: "https://i.imgur.com/6HDD0Io.jpg"
    }
  },
  account: {
    password: {
      errorMsg: false,
      updateStatus: false
    },
    profileDetails: {
      errorMsg: false,
      updateStatus: false
    }
  },
  comments: {
    addCommentPlaceholder: "Add a reply",
    newCommentError: '',
    editComment: ''
  },
  draft: {
    editorStatus: "editor",
    savingStatus: false
  },
  login: {
    errorMsg: false,
    isAuthenticating: false
  },
  newNomModal: {
    open: false
  },
  newNomButton: {
    show: true
  },
  nom: {
    fetchingStatus: false,
    addingStatus: false,
    editor: {
      previewMode: false
    }
  },
  nomView: {
    isLoading: false
  },
  register: {
    errorMsg: false,
    isRegistering: false
  },
  sidebar: {
    open: false
  },
  searchBar: {
    defaultValue: "Search noms",
    class: "searchBar-inbox",
  },
  tracks: {
    updateStatus: false,
    deleteTrackWarning: "Deleting this track will remove all track assignments from any Noms assigned to this track."
  }
}

export default ui;
