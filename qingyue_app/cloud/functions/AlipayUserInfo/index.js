const cloud = require("@alipay/faas-server-sdk");
cloud.init({});

async function getUserAuth(auth_code) {
  console.log(`auth_code:${auth_code}`);

  return cloud.openapi.alipaySystemOauthToken.request({
    'grant_type': 'authorization_code',
    'code': auth_code
  }).then(response => {
    return response;
  }).catch(error => {
    console.error(`getUserAuth error: ${error}`);
    throw error;
  });
}

async function getUserInfo(access_token) {
  console.log(`access_token:${access_token}`);

  return cloud.openapi.alipayUserInfoShare.request({
    'auth_token': access_token
  }).then(response => {
    return response;
  }).catch(error => {
    console.error(`getUserInfo error: ${error}`);
    throw error;
  });
}

exports.main = async (event, context) => {
  try {
    const user_auth = await getUserAuth(event.auth_code);
    console.log(`user_auth:${JSON.stringify(user_auth)}`);
    const user_info = await getUserInfo(user_auth.access_token);
    console.log(`user_info:${JSON.stringify(user_info)}`);
    return user_info;
  } catch (error) {
    console.log('error');
    throw error;
  }

};