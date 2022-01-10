CREATE DATABASE messages_db;

USE messages_db;

CREATE TABLE messages_list(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    author varchar(100),
    message_content TEXT,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE messages_list;

INSERT messages_list(author, message_content) values ('weakness', 'hello world');

SELECT * FROM messages_list;
