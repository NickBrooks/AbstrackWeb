const ui = {
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
  nomView: {
    isLoading: false
  },
  register: {
    errorMsg: false,
    isRegistering: false
  },
  searchBar: {
    defaultValue: "Search noms",
    class: "searchBar-inbox",
  }
}

export default ui;
