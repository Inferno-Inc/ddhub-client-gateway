import { useContext } from 'react';
import { UserDataContext } from './UserDataContext';
import { checkAccountStatus } from './check-account-status/check-account-status';
import { IdentityWithEnrolment, RoleStatus } from '@dsb-client-gateway/dsb-client-gateway/identity/models';
import { useRouter } from 'next/router';
import { routerConst } from '@dsb-client-gateway/dsb-client-gateway/ui/utils';
import { useIdentityControllerPost } from '@dsb-client-gateway/dsb-client-gateway-api-client';

export const usePrivateKey = () => {
  const router = useRouter();
  const {userData, setUserData} = useContext(UserDataContext);
  const onSuccess = async (res: IdentityWithEnrolment) => {
    const accountStatus = checkAccountStatus(res);
    console.log(res);

    setUserData({
      publicKey: res.publicKey,
      address: res.address,
      balance: res.balance,
      loggedIn: false,
      did: res.enrolment.did,
      accountStatus
    });

    if (accountStatus === RoleStatus.SYNCED) {
      await router.push(routerConst.Dashboard);
    }
  }
  const {mutate, isLoading} = useIdentityControllerPost({
    mutation: {
      onSuccess: (res) => onSuccess(res as IdentityWithEnrolment),
      onError: error => {
        console.log(error);
      }
    }
  });


  const submit = async (privateKey: string) => {
    try {
      mutate({data: {privateKey}});
    } catch (e) {
      console.log(e);
    }
  };

  return {isLoading, submit, status: userData.accountStatus};
};
