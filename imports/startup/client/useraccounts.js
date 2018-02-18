import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
  defaultLayout: 'App_body',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main',
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: true,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,
  showAddRemoveServices: true,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,
  continuousValidation: true,
  negativeFeedback: true,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,
  privacyUrl: 'Privacy',
  termsUrl: 'TermsOfUse',
  redirectTimeout: 0,
  texts: {
    button: {
      signUp: 'Create my Profile'
    },
    socialSignUp: 'Create my Profile',
    socialIcons: {
      'meteor-developer': 'fa fa-rocket'
    },
    title: {
      forgotPwd: 'Recover Your Password'
    }
  },

});
