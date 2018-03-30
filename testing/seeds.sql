USE seatSwap_db;

INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, socialID, createdAt, updatedAt) VALUES ("abc", "def", "abc def", "123@gmail.com", "google", 1283194190840, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, socialID, createdAt, updatedAt) VALUES ("ahfkjhka", "fajkhak", "abfjkal", "abc@gmail.com", "google", 123124164249, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Organizations (name,createdAt, updatedAt) VALUES ("Golden State Warriors", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("San Francisco Giants", "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub1", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub2", 1, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub3", 2, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub4", 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-01 10:00:00", "10", 1, 2, "gsw match 1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-01 10:00:00", "10", 1, 3, "gsw match 1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-02 10:00:00", "20", 2, 3, "giants", "locked", 2, 3, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-02 10:00:00", "20", 2, 4, "giants", "locked", 2, 3, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", "30", 2, 0, "gsw", "locked", 1, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", "30", 2, 1, "gsw", "locked", 1, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Watchers (eventDate, numberOfSeats, OrganizationId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Matches (WatcherID, TicketID, createdAt, updatedAt) VALUES (1, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Matches (WatcherID, TicketID, createdAt, updatedAt) VALUES (1, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"absdbhjafkj", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"26873189490", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"8ahfajjgl87", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");