-- User table
id: serial PRIMARY KEY; -- Auto-incremented integer primary keyuuid: uuid; -- Unique identifier for frontend use
name: string;
tag_name: string;
email: string;
password_hash: string; -- Store hashed passwords
created_at: timestamp; -- Use a standard timestamp format

-- Post table
id: serial PRIMARY KEY; -- Auto-incremented integer primary keyuuid: uuid; -- Unique identifier for frontend use
content: text;
created_at: timestamp;
author_uuid: UUID; -- Foreign key referencing User table

-- UserPostInteraction table
id: serial PRIMARY KEY; -- Auto-incremented integer primary keyuuid: uuid; -- Unique identifier for frontend use
user_uuid: UUID; -- Foreign key referencing User table
post_uuid: UUID; -- Foreign key referencing Post table
interaction_type: enum('like', 'dislike', 'comment');
interaction_date: timestamp; -- Follow tableid: uuid; -- Primary keyfollower_uuid: UUID; -- Foreign key referencing User table (the user who is following)following_uuid: UUID; -- Foreign key referencing User table (the user who is being followed)follow_date: timestamp;