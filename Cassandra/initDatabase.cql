-- Create a keyspace
CREATE KEYSPACE IF NOT EXISTS data_ingestion WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Create a table
CREATE TABLE IF NOT EXISTS data_ingestion.location (
userid text PRIMARY KEY,
longitude float,
latitude float,
timestamp timestamp,
last_update_timestamp timestamp
);

-- Insert some data
INSERT INTO data_ingestion.location
(userid, longitude, latitude, timestamp, last_update_timestamp)
VALUES ('9876', 2, 2, toTimeStamp(now()), toTimeStamp(now()));