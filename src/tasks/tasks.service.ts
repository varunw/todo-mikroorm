import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: EntityRepository<Task>) {}

  async createTask(title: string, description: string): Promise<Task> {
    const task = new Task();
    task.title = title;
    task.description = description;
    // await this.taskRepo.persistAndFlush(task);
    await this.taskRepo.insert(task);
    return task;
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepo.findAll();
  }

  async updateTask(id: number, completed: boolean): Promise<Task> {
    const task = await this.taskRepo.findOneOrFail(id);
    task.completed = completed;
    // await this.taskRepo.flush();
    return task;
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepo.nativeDelete(id);
  }
}
