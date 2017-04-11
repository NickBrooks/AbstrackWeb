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
    newCommentError: '',
    editComment: ''
  },
  login: {
    errorMsg: false,
    isAuthenticating: false
  },
  register: {
    errorMsg: false,
    isValidatingEmail: false,
    validEmail: false
  },
  newNomModal: {
    open: false
  },
  newNomButton: {
    show: true
  }
}

export default ui;
