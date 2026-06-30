-- Creates a view need_meeting that lists names of students
-- who score under 80 and have no last_meeting or one more
-- than a month ago
CREATE VIEW need_meeting AS
    SELECT name FROM students
        WHERE score < 80
        AND (last_meeting IS NULL
             OR last_meeting < ADDDATE(CURDATE(), INTERVAL -1 MONTH));
