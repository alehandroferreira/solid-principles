// DTO de entrada para cadastro de usuário
interface UserRegistrationDTO {
  name: string;
  email: string;
  password: string; // Senha obrigatória na entrada
}

// DTO de saida para consulta de usuário
interface UserQueryDTO {
  id: number;
  name: string;
  email: string;
  createdAt: Date; // Apenas inforamções que fazem sentido na saída
  status: 'ativo' | 'inativo'; // Campo que faz sentudo apebas na resposta
}

// Serviço de cadastro de usuário
class UserRegistrationService {
  registerUser(user: UserRegistrationDTO) {
    console.log(`Usuário registrado: ${user}`);
  }
}

// Serviço de consulta de usuário
class UserQueryService {
  getUserById(id: number): UserQueryDTO {
    return {
      id,
      name: 'Fulano',
      email: 'fulano@email.com',
      createdAt: new Date(),
      status: 'ativo', // Novo campo na resposta
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
