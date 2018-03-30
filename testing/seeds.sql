USE seatSwap_db;

INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, socialID, createdAt, updatedAt) VALUES ("abc", "def", "abc def", "123@gmail.com", "google", 1283194190840, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, socialID, createdAt, updatedAt) VALUES ("ahfkjhka", "fajkhak", "abfjkal", "abc@gmail.com", "google", 123124164249, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("xyz", "xyz", "xyz xyz", "xyz@mail.com", "local", "2018-03-11 10:00:00", "2018-03-11 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("abc", "abc", "abc abc", "abc@mail.com", "local", "2018-03-12 10:00:00", "2018-03-12 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("def", "abc", "def abc", "def@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("ijk", "ijk", "ijk ijk", "ijk@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");


INSERT INTO seatSwap_db.Organizations (name,createdAt, updatedAt) VALUES ("Golden State Warriors", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("San Francisco Giants", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name,createdAt, updatedAt) VALUES ("San Francisco 49ers", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("San Jose Sharks", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("Oakland Raiders", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name,createdAt, updatedAt) VALUES ("Los Angeles Lakers", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("San Francisco Symphony", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name,createdAt, updatedAt) VALUES ("San Francisco Ballet", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("San Francisco Opera", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("Metropolitan Opera", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("Lyric Opera of Chicago", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("Chicago Symphony Orchestra", "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Organizations (name, createdAt, updatedAt) VALUES ("Canegie Hall", "2018-03-01 10:00:00", "2018-03-01 10:00:00");


INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub1", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub2", 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub3", 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub4", 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub5", 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub6", 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub7", 1, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub8", 2, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub9", 3, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub10", 4, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub11", 5, 11, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub12", 6, 12, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub13", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub14", 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub15", 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub16", 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub17", 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub18", 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub19", 1, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub20", 2, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");


INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-11 10:00:00", "10", 1, 2, "sub1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-11 10:00:00", "10", 1, 3, "sub1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-12 10:00:00", "10", 1, 2, "sub1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-12 10:00:00", "10", 1, 3, "sub1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-13 10:00:00", "10", 1, 2, "sub1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-13 10:00:00", "10", 1, 3, "sub1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-21 10:00:00", "1", 1, 2, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-21 10:00:00", "1", 1, 3, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-21 10:00:00", "1", 1, 4, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-21 10:00:00", "1", 1, 5, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-22 10:00:00", "1", 1, 2, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-22 10:00:00", "1", 1, 3, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-22 10:00:00", "1", 1, 4, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-22 10:00:00", "1", 1, 5, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-23 10:00:00", "1", 1, 2, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-23 10:00:00", "1", 1, 3, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-23 10:00:00", "1", 1, 4, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-23 10:00:00", "1", 1, 5, "sub2", "locked", 2, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-15 10:00:00", "5", 1, 2, "sub3", "locked", 3, 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-15 10:00:00", "5", 1, 3, "sub3", "locked", 3, 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-20 10:00:00", "5", 1, 2, "sub3", "locked", 3, 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-20 10:00:00", "5", 1, 3, "sub3", "locked", 3, 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-25 10:00:00", "5", 1, 2, "sub3", "locked", 3, 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-25 10:00:00", "5", 1, 3, "sub3", "locked", 3, 3, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-08 10:00:00", "25", 1, 2, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-08 10:00:00", "25", 1, 3, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-08 10:00:00", "25", 1, 4, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-16 10:00:00", "25", 1, 2, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-16 10:00:00", "25", 1, 3, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-16 10:00:00", "25", 1, 4, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-24 10:00:00", "25", 1, 2, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-24 10:00:00", "25", 1, 3, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-24 10:00:00", "25", 1, 4, "sub4", "locked", 4, 4, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-09 10:00:00", "10", 1, 2, "sub5", "locked", 5, 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-09 10:00:00", "10", 1, 3, "sub5", "locked", 5, 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-18 10:00:00", "10", 1, 2, "sub5", "locked", 5, 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-18 10:00:00", "10", 1, 3, "sub5", "locked", 5, 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-27 10:00:00", "10", 1, 2, "sub5", "locked", 5, 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-27 10:00:00", "10", 1, 3, "sub5", "locked", 5, 5, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", "20", 1, 2, "sub6", "locked", 6, 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", "20", 1, 3, "sub6", "locked", 6, 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-13 10:00:00", "20", 1, 2, "sub6", "locked", 6, 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-13 10:00:00", "20", 1, 3, "sub6", "locked", 6, 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-23 10:00:00", "20", 1, 2, "sub6", "locked", 6, 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-23 10:00:00", "20", 1, 3, "sub6", "locked", 6, 6, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-05 10:00:00", "21", 1, 2, "sub7", "locked", 7, 7, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-05 10:00:00", "21", 1, 3, "sub7", "locked", 7, 7, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-15 10:00:00", "21", 1, 2, "sub7", "locked", 7, 7, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-15 10:00:00", "21", 1, 3, "sub7", "locked", 7, 7, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-25 10:00:00", "21", 1, 2, "sub7", "locked", 7, 7, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-25 10:00:00", "20", 1, 3, "sub7", "locked", 7, 7, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");


INSERT INTO seatSwap_db.Watchers (eventDate, numberOfSeats, OrganizationId, UserId) VALUES ("2018-04-22 10:00:00", 2, 2, 1);
INSERT INTO seatSwap_db.Watchers (eventDate, numberOfSeats, OrganizationId, UserId) VALUES ("2018-04-16 10:00:00", 1, 4, 6);


INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"absdbhjafkj", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"26873189490", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"8ahfajjgl87", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");