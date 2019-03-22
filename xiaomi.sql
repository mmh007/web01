SET NAMES UTF8;
DROP DATABASE IF EXISTS xiaomi;
CREATE DATABASE xiaomi CHARSET=UTF8;
USE xiaomi;

/**1插入用户名、密码**/
CREATE TABLE HOME_male(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	uname VARCHAR(16),				#用户
	upwd VARCHAR(16)				#密码
);
/**1插入用户名、密码**/
INSERT INTO HOME_male VALUES
	(NULL,'mmh','123456');