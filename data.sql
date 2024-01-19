CREATE DATABASE learning_feed;

\c learning_feed;

CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    coach_name VARCHAR(100) NOT NULL,
    testimony TEXT NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);