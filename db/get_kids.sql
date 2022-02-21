SELECT name, kid_id FROM parent 
JOIN kid ON parent.parent_id = kid.parent_id
WHERE parent.username = $1