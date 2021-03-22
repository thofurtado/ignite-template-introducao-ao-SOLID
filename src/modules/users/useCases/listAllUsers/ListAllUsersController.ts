import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers.user_id as string;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).send(users);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { ListAllUsersController };
