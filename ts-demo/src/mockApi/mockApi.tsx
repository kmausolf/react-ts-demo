interface User {
  name: string;
}

const allUsers: User[] = [
  { name: "Luis" },
  { name: "Elias" },
  { name: "Connie" },
];

const getAllUsers = async (): Promise<User[]> => {
  return allUsers;
};

export { getAllUsers };
