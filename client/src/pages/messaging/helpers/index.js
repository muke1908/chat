import storage from '../../../utils/storage';
export { fetchMessages, getUsersInChannel, pubnubInit } from './pubnub';
export { getKeyPair, createKeyPair, storeKeyPair, typedArrayToStr, strToTypedArr } from './crypto';

export const getUserSessionID = (channelID) => {
  const userID_storage = storage.get('session-user-uuid') || {};
  const userId = userID_storage.channelID === channelID ? userID_storage.userId : null;
  return userId;
};

export const createUserSessionID = (channelID) => {
  return `${channelID}-${new Date().getTime()}`;
};

export const storeUserSessionID = (channelID, userId) => {
  storage.set('session-user-uuid', {
    channelID,
    userId
  });
};
