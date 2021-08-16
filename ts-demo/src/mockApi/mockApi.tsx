interface User {
  name: string;
}

interface AccountSignUpRequest {
  username: string;
  password: string;
  favoriteFood?: string;
}

interface AccountDetails {
  id: number;
  username: string;
  favoriteFood?: string;
}

const allUsers: User[] = [
  { name: "Luis" },
  { name: "Elias" },
  { name: "Connie" },
];

const createAccount = async (
  request: AccountSignUpRequest
): Promise<AccountDetails> => {
  return {
      id: 1,
      username: request.username,
      favoriteFood: request?.favoriteFood 
  };
};

const getAllUsers = async (): Promise<User[]> => {
  return allUsers;
};

export { createAccount, getAllUsers };
