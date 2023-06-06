CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE settings
(
    id varchar NOT NULL,
    url character varying(255),
    period integer NOT NULL,
    "acceptanceTime" integer NOT NULL,
    email character varying(255),
    phone character varying(255),
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO settings (id, url, period, "acceptanceTime", email, phone, "createdAt")
SELECT
  uuid_generate_v4(),
  (ARRAY['https://google.com', 'https://fb.com'])[floor(random() * 2) + 1],
  floor(random() * (900 - 100 + 1)) + 100,
  floor(random() * (60000 - 10000 + 1)) + 10000,
  (ARRAY['rob@gmail.com', 'ba@gmail.com'])[floor(random() * 2) + 1],
  '+37065000123' || lpad(floor(random() * 1000)::text, 3, '0'),
  CURRENT_TIMESTAMP - (floor(random() * 1000) || ' days')::interval
FROM generate_series(1, 1000);


