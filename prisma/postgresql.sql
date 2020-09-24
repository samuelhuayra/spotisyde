CREATE TABLE "User"(
   "id" INT GENERATED ALWAYS AS IDENTITY,
   "name" VARCHAR,
   "email" VARCHAR NOT NULL UNIQUE,
   PRIMARY KEY("id")
);

CREATE TABLE "Post"(
   "id" INT GENERATED ALWAYS AS IDENTITY,
   "title" VARCHAR NOT NULL,
   "content" VARCHAR ,
   "published" BOOLEAN NOT NULL DEFAULT FALSE,
   "authorId" INT,
   PRIMARY KEY("id"),
   CONSTRAINT "fk_post_authorid_user_id"
      FOREIGN KEY("authorId") 
	  REFERENCES "User"("id")
);