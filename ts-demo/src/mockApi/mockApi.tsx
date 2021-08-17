export interface IAccountSignUpRequest {
  username: string;
  password: string;
  favoriteFood?: string;
}

export interface IAccountDetails {
  id: number;
  username: string;
  favoriteFood?: string;
}

class AccountDetails implements IAccountDetails {
    // Default settings
    id: number = 0;
    username: string = '';
    favoriteFood: string = '';

    // Override the defaults if real data is present
    constructor(configOverride?: Partial<IAccountDetails>) {
        if(configOverride) {
            Object.assign(this, configOverride);
        }
    }
}

const allUsers: IAccountDetails[] = [
  new AccountDetails({ id: 1, username: "wholesome_keanu_chungus_100" }),
  new AccountDetails({ id: 2, username: "king_yodaX419", favoriteFood: "pb&j" }),
  new AccountDetails({ id: 3, username: "cheeto_dust-kun", favoriteFood: "cheetos" }),
];

// Simulates successful account creation
// Simply sends back what was sent with an ID added
const createAccount = async (
  request: IAccountSignUpRequest
): Promise<AccountDetails> => {
    return new AccountDetails({
        id: 4,
        username: request.username,
        favoriteFood: request?.favoriteFood
    });
};

const getAllUsers = async (): Promise<IAccountDetails[]> => {
  return allUsers;
};

export { createAccount, getAllUsers, AccountDetails };
