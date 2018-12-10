export const redirectSet = val => isRedirect(val);

export const isRedirect = val => {
  return {
    type : "IS_REDIRECT",
    payload : {
      value: val,
    },
  };
};