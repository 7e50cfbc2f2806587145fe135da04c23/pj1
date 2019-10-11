drop table if exists users;
create table users
(
    id       integer primary key autoincrement not null,
    fname    varchar(100)                      not null,
    username varchar(100)                      not null
);
drop table if exists tasks;
create table tasks
(
    id        integer primary key autoincrement not null,
    username  varchar(100)                      not null,
    task      varchar(100)                      not null,
    createdat datetime default (datetime('now')),
    deadline  datetime default null,
    done      boolean  default false,
    foreign key (username) references users (username)
);

insert into users(fname, username)
VALUES ('Dorsa Rezai', 'dorsa'),
       ('Aryan Alikhani', 'aryan');

insert into tasks(username, task, deadline)
values ('aryan', 'dont mess with my toothbrush!', '2019-10-12 23:59:59'),
       ('aryan', 'wash the car.', '2019-10-12 23:59:59'),
       ('dorsa', 'visit the laundry', '2019-10-14 23:59:59'),
       ('dorsa', 'study sql and database', '2019-10-15 23:59:59'),
       ('dorsa', 'wash the dishes.', '2019-10-13 23:59:59');