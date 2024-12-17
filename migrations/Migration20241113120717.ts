import { Migration } from '@mikro-orm/migrations';

export class Migration20241113120717 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "task" ("id" serial primary key, "title" varchar(255) not null, "description" varchar(255) not null, "completed" boolean not null default false);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "task" cascade;`);
  }

}
