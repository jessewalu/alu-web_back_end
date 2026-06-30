-- Creates a trigger that decreases the quantity of an item
-- in the items table every time a new order is added
DELIMITER $$
CREATE TRIGGER decrease_quantity
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE items
        SET quantity = quantity - NEW.number
        WHERE name = NEW.item_name;
END$$
DELIMITER ;
