const tokenObj = {};

tokenObj.getToken = (session) => {
  if (session) {
    const { token } = session.data.authenticated;
    return token;
  }
};

export default tokenObj;