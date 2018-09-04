USE seatSwap_db;

INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, socialID, createdAt, updatedAt) VALUES ("abc", "def", "abc def", "123@gmail.com", "google", 1283194190840, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, socialID, createdAt, updatedAt) VALUES ("ahfkjhka", "fajkhak", "abfjkal", "abc@gmail.com", "google", 123124164249, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("xyz", "xyz", "xyz xyz", "xyz@mail.com", "local", "2018-03-11 10:00:00", "2018-03-11 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("abc", "abc", "abc abc", "abc@mail.com", "local", "2018-03-12 10:00:00", "2018-03-12 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("Paul", "Rowe", "def abc", "def@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("ijk", "ijk", "ijk ijk", "ijk@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("mno", "pqr", "mon pqr", "mno@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("pqr", "efg", "pqr efg", "pqr@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("uvw", "rst", "uvw rst", "uvw@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");
INSERT INTO seatSwap_db.Users (firstName, lastName, userName, email, authMethod, createdAt, updatedAt) VALUES ("lmn", "hij", "lmn hij", "lmn@mail.com", "local", "2018-03-13 10:00:00", "2018-03-13 10:00:00");


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
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub7", 7, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub8", 8, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub9", 9, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub10", 10, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub11", 11, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub12", 12, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub13", 13, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub14", 1, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub15", 2, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub16", 3, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub17", 4, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub18", 5, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub19", 6, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub20", 7, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub21", 8, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub22", 9, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub23", 10, 3, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub24", 11, 4, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("sub25", 12, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Subscriptions (name, OrganizationId, UserId, createdAt, updatedAt) VALUES ("Full Home Season", 2, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");


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

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-05 10:00:00", "21", 1, 2, "sub7", "locked", 7, 7, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-05 10:00:00", "21", 1, 3, "sub7", "locked", 7, 7, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-15 10:00:00", "21", 1, 2, "sub7", "locked", 7, 7, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-15 10:00:00", "21", 1, 3, "sub7", "locked", 7, 7, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-25 10:00:00", "21", 1, 2, "sub7", "locked", 7, 7, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-25 10:00:00", "21", 1, 3, "sub7", "locked", 7, 7, 7, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-02 10:00:00", "13", 1, 2, "sub8", "locked", 8, 8, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-02 10:00:00", "13", 1, 3, "sub8", "locked", 8, 8, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-12 10:00:00", "13", 1, 2, "sub8", "locked", 8, 8, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-12 10:00:00", "13", 1, 3, "sub8", "locked", 8, 8, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-22 10:00:00", "13", 1, 2, "sub8", "locked", 8, 8, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-22 10:00:00", "13", 1, 3, "sub8", "locked", 8, 8, 8, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-06 10:00:00", "22", 1, 2, "sub9", "locked", 9, 9, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-06 10:00:00", "22", 1, 3, "sub9", "locked", 9, 9, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-16 10:00:00", "22", 1, 2, "sub9", "locked", 9, 9, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-16 10:00:00", "22", 1, 3, "sub9", "locked", 9, 9, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-26 10:00:00", "22", 1, 2, "sub9", "locked", 9, 9, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-26 10:00:00", "22", 1, 3, "sub9", "locked", 9, 9, 9, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-08 10:00:00", "21", 1, 2, "sub10", "locked", 10,10, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-08 10:00:00", "21", 1, 3, "sub10", "locked", 10,10, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-18 10:00:00", "21", 1, 2, "sub10", "locked", 10,10, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-18 10:00:00", "21", 1, 3, "sub10", "locked", 10,10, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-28 10:00:00", "21", 1, 2, "sub10", "locked", 10,10, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-28 10:00:00", "21", 1, 3, "sub10", "locked", 10,10, 10, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-07 10:00:00", "25", 1, 2, "sub11", "locked", 11,11, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-07 10:00:00", "25", 1, 3, "sub11", "locked", 11,11, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-17 10:00:00", "25", 1, 2, "sub11", "locked", 11,11, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-17 10:00:00", "25", 1, 3, "sub11", "locked", 11,11, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-27 10:00:00", "25", 1, 2, "sub11", "locked", 11,11, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-27 10:00:00", "25", 1, 3, "sub11", "locked", 11,11, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-11 10:00:00", "22", 1, 2, "sub15", "locked", 2, 15, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-11 10:00:00", "22", 1, 3, "sub15", "locked", 2, 15, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-12 10:00:00", "22", 1, 2, "sub15", "locked", 2, 15, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-12 10:00:00", "22", 1, 3, "sub15", "locked", 2, 15, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-13 10:00:00", "22", 1, 2, "sub15", "locked", 2, 15, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-13 10:00:00", "22", 1, 3, "sub15", "locked", 2, 15, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES 
("2018-04-13 10:00:00", "22", 1, 3, "sub15", "locked", 2, 15, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00"),
("2018-04-03T13:35:00","CI-225","I",15,"SEA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-03T13:35:00","CI-225","I",16,"SEA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-04T16:15:00","CI-225","I",15,"SEA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-04T16:15:00","CI-225","I",16,"SEA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-06T19:15:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-06T19:15:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-07T13:05:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-07T13:05:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-08T13:05:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-08T13:05:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-09T19:15:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-09T19:15:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-10T19:15:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-10T19:15:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-11T12:45:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-11T12:45:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-23T19:15:00","CI-225","I",15,"WSH @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-23T19:15:00","CI-225","I",16,"WSH @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-24T19:15:00","CI-225","I",15,"WSH @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-24T19:15:00","CI-225","I",16,"WSH @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-25T12:45:00","CI-225","I",15,"WSH @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-25T12:45:00","CI-225","I",16,"WSH @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-27T19:15:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-27T19:15:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-28T18:05:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-28T18:05:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-29T13:05:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-29T13:05:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-30T19:15:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-04-30T19:15:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-01T19:15:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-01T19:15:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-02T12:45:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-02T12:45:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-14T19:15:00","CI-225","I",15,"CIN @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-14T19:15:00","CI-225","I",16,"CIN @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-15T19:15:00","CI-225","I",15,"CIN @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-15T19:15:00","CI-225","I",16,"CIN @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-16T12:45:00","CI-225","I",15,"CIN @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-16T12:45:00","CI-225","I",16,"CIN @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-17T19:15:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-17T19:15:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-18T19:15:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-18T19:15:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-19T13:05:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-19T13:05:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-20T13:05:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-05-20T13:05:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-01T19:15:00","CI-225","I",15,"PHI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-01T19:15:00","CI-225","I",16,"PHI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-02T19:05:00","CI-225","I",15,"PHI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-02T19:05:00","CI-225","I",16,"PHI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-03T13:05:00","CI-225","I",15,"PHI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-03T13:05:00","CI-225","I",16,"PHI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-04T19:15:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-04T19:15:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-05T19:15:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-05T19:15:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-06T12:45:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-06T12:45:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-18T19:15:00","CI-225","I",15,"MIA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-18T19:15:00","CI-225","I",16,"MIA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-19T19:15:00","CI-225","I",15,"MIA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-19T19:15:00","CI-225","I",16,"MIA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-20T12:45:00","CI-225","I",15,"MIA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-20T12:45:00","CI-225","I",16,"MIA @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-21T19:15:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-21T19:15:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-22T19:15:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-22T19:15:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-23T13:05:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-23T13:05:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-24T13:05:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-24T13:05:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-26T19:15:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-26T19:15:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-27T19:15:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-27T19:15:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-28T12:45:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-06-28T12:45:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-05T19:15:00","CI-225","I",15,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-05T19:15:00","CI-225","I",16,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-06T19:15:00","CI-225","I",15,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-06T19:15:00","CI-225","I",16,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-07T13:05:00","CI-225","I",15,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-07T13:05:00","CI-225","I",16,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-08T13:05:00","CI-225","I",15,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-08T13:05:00","CI-225","I",16,"STL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-09T19:15:00","CI-225","I",15,"CHC @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-09T19:15:00","CI-225","I",16,"CHC @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-10T19:15:00","CI-225","I",15,"CHC @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-10T19:15:00","CI-225","I",16,"CHC @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-11T12:45:00","CI-225","I",15,"CHC @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-11T12:45:00","CI-225","I",16,"CHC @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-13T19:15:00","CI-225","I",15,"OAK @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-13T19:15:00","CI-225","I",16,"OAK @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-14T19:05:00","CI-225","I",15,"OAK @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-14T19:05:00","CI-225","I",16,"OAK @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-15T13:05:00","CI-225","I",15,"OAK @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-15T13:05:00","CI-225","I",16,"OAK @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-26T19:15:00","CI-225","I",15,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-26T19:15:00","CI-225","I",16,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-27T19:15:00","CI-225","I",15,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-27T19:15:00","CI-225","I",16,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-28T18:05:00","CI-225","I",15,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-28T18:05:00","CI-225","I",16,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-29T13:05:00","CI-225","I",15,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-07-29T13:05:00","CI-225","I",16,"MIL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-06T19:15:00","CI-225","I",15,"HOU @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-06T19:15:00","CI-225","I",16,"HOU @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-07T12:45:00","CI-225","I",15,"HOU @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-07T12:45:00","CI-225","I",16,"HOU @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-09T19:15:00","CI-225","I",15,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-09T19:15:00","CI-225","I",16,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-10T19:15:00","CI-225","I",15,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-10T19:15:00","CI-225","I",16,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-11T18:05:00","CI-225","I",15,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-11T18:05:00","CI-225","I",16,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-12T13:05:00","CI-225","I",15,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-12T13:05:00","CI-225","I",16,"PIT @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-24T19:15:00","CI-225","I",15,"TEX @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-24T19:15:00","CI-225","I",16,"TEX @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-25T13:05:00","CI-225","I",15,"TEX @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-25T13:05:00","CI-225","I",16,"TEX @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-26T13:05:00","CI-225","I",15,"TEX @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-26T13:05:00","CI-225","I",16,"TEX @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-27T19:15:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-27T19:15:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-28T19:15:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-28T19:15:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-29T19:15:00","CI-225","I",15,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-29T19:15:00","CI-225","I",16,"ARI @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-31T19:15:00","CI-225","I",15,"NYM @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-08-31T19:15:00","CI-225","I",16,"NYM @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-01T13:05:00","CI-225","I",15,"NYM @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-01T13:05:00","CI-225","I",16,"NYM @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-02T13:05:00","CI-225","I",15,"NYM @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-02T13:05:00","CI-225","I",16,"NYM @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-10T19:15:00","CI-225","I",15,"ATL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-10T19:15:00","CI-225","I",16,"ATL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-11T19:15:00","CI-225","I",15,"ATL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-11T19:15:00","CI-225","I",16,"ATL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-12T12:45:00","CI-225","I",15,"ATL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-12T12:45:00","CI-225","I",16,"ATL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-14T19:15:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-14T19:15:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-15T18:05:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-15T18:05:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-16T13:05:00","CI-225","I",15,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-16T13:05:00","CI-225","I",16,"COL @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-24T19:15:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-24T19:15:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-25T19:15:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-25T19:15:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-26T19:15:00","CI-225","I",15,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-26T19:15:00","CI-225","I",16,"SD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-28T19:15:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-28T19:15:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-29T13:05:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-29T13:05:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-30T12:05:00","CI-225","I",15,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00"),
("2018-09-30T12:05:00","CI-225","I",16,"LAD @ Giants","available",2,26,5,"2018-03-01T10:00:00","2018-03-01T10:00:00");


INSERT INTO seatSwap_db.Watchers (eventDate, numberOfSeats, OrganizationId, UserId, createdAt, updatedAt) VALUES ("2018-04-22 10:00:00", 2, 2, 1, "2018-03-29 10:00:00", "2018-03-29 10:00:00");
INSERT INTO seatSwap_db.Watchers (eventDate, numberOfSeats, OrganizationId, UserId, createdAt, updatedAt) VALUES ("2018-04-15 10:00:00", 1, 7, 6, "2018-03-29 10:00:00", "2018-03-29 10:00:00");


INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"absdbhjafkj", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"26873189490", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Teamfeeds (comment,OrganizationId, UserId, createdAt, updatedAt) VALUES (
"8ahfajjgl87", 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-01 10:00:00", "10", 1, 2, "gsw match 1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-01 10:00:00", "10", 1, 3, "gsw match 1", "locked", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-02 10:00:00", "20", 2, 3, "giants", "locked", 2, 3, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-02 10:00:00", "20", 2, 4, "giants", "locked", 2, 3, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", "30", 2, 0, "Spurs @ Warriors", "locked", 1, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Tickets (date, seatSec, seatRow, seatNum, eventTitle, status, OrganizationId, SubscriptionId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", "30", 2, 1, "Warriors @ Rockets", "locked", 1, 2, 2, "2018-03-01 10:00:00", "2018-03-01 10:00:00");

INSERT INTO seatSwap_db.Watchers (eventDate, numberOfSeats, OrganizationId, UserId, createdAt, updatedAt) VALUES ("2018-04-03 10:00:00", 1, 1, 1, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Matches (WatcherID, TicketID, createdAt, updatedAt) VALUES (1, 5, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
INSERT INTO seatSwap_db.Matches (WatcherID, TicketID, createdAt, updatedAt) VALUES (1, 6, "2018-03-01 10:00:00", "2018-03-01 10:00:00");
