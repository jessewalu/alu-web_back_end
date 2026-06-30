import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName)
      .then((value) => ({ status: 'fulfilled', value }))
      .catch((value) => ({ status: 'rejected', value })),
    uploadPhoto(fileName)
      .then((value) => ({ status: 'fulfilled', value }))
      .catch((value) => ({ status: 'rejected', value })),
  ]);
}
