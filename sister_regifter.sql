CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "address" varchar,
  "city" varchar,
  "country" varchar,
  "postal_code" varchar
);

CREATE TABLE "gifts" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "photos" varchar,
  "date_added" timestamp,
  "user_owner" int
);

CREATE TABLE "swaps" (
  "id" int PRIMARY KEY,
  "sender" int,
  "recipient" int,
  "gift_id" int,
  "date_of_swap" date,
  "date_added" timestamp,
  "gift_status" varchar,
  "recieved_status" varchar,
  "thank_you_message" varchar,
  "rating" int
);

ALTER TABLE "gifts" ADD FOREIGN KEY ("user_owner") REFERENCES "users" ("id");

ALTER TABLE "swaps" ADD FOREIGN KEY ("sender") REFERENCES "users" ("id");

ALTER TABLE "swaps" ADD FOREIGN KEY ("recipient") REFERENCES "users" ("id");

ALTER TABLE "swaps" ADD FOREIGN KEY ("gift_id") REFERENCES "gifts" ("id");
