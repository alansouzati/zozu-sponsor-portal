export const emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const userRules = {
  email: (value) => {
    if (!value || value === '') {
      return 'required';
    } else if (!emailExpression.test(value)) {
      return 'not valid';
    }
    return undefined;
  },
  password: 'required',
};

export default {
  emailExpression,
  userRules,
};
