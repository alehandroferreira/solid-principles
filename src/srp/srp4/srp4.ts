interface UserDTO {
  id?: number;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
}

// Serviço de cadastro de usuário
class UserRegistrationService {
  registerUser(user: UserDTO) {
    if (!user.password) {
      throw new Error('Password é obrigatório');
    }
    console.log(`Usuário cadastrado com sucesso: ${user}`);
  }
}

// Serviço de consulta de usuário
class UserQueryService {
  getUserById(id: number): UserDTO {
    return {
      id,
      name: 'Fulano',
      email: 'fulano@email.com',
      createdAt: new Date(),
    };
  }
}

// Uso
const registrationService = new UserRegistrationService();
registrationService.registerUser({
  name: 'Fulano',
  email: 'fulano@email.com',
  password: '123456',
});

const queryService = new UserQueryService();
const user = queryService.getUserById(1);
console.log(`Usuário consultado: ${user}`);
