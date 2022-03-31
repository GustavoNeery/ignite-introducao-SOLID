import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userisAdmin = this.usersRepository.findById(user_id);

    if (!userisAdmin) {
      throw new Error("User not found");
    }

    if(!userisAdmin.admin){
      throw new Error("Only admin");
    }

    const users = this.usersRepository.list(); 
    return users;
  }
}

export { ListAllUsersUseCase };
