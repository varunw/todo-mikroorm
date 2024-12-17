import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() { title, description }: { title: string; description: string }): Promise<Task> {
    return this.tasksService.createTask(title, description);
  }

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Patch(':id')
  updateTask(@Param('id') id: number, @Body('completed') completed: boolean): Promise<Task> {
    return this.tasksService.updateTask(id, completed);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
