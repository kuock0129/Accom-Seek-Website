DELIMITER //
CREATE TRIGGER DeleteCityHotels
AFTER DELETE ON City
FOR EACH ROW
BEGIN
   IF (SELECT COUNT(*) FROM Hotel WHERE CityName = OLD.Name) > 0 THEN
      DELETE FROM Hotel WHERE CityName = OLD.Name;
   END IF;
END;
DELIMITER //


DELIMITER //
CREATE TRIGGER update_hotel_rating_after_insert
AFTER INSERT ON Review
FOR EACH ROW
BEGIN
    DECLARE result DOUBLE DEFAULT 0;
    CALL CalculateAvgRating(NEW.HotelName, NEW.CityName, result);
    UPDATE Hotel SET Rating = result
    WHERE Name = NEW.HotelName AND CityName = NEW.CityName;
END;
//

CREATE TRIGGER update_hotel_rating_after_update
AFTER UPDATE ON Review
FOR EACH ROW
BEGIN
    DECLARE result DOUBLE DEFAULT 0;
    CALL CalculateAvgRating(NEW.HotelName, NEW.CityName, result);
    UPDATE Hotel SET Rating = result
    WHERE Name = NEW.HotelName AND CityName = NEW.CityName;
END;
//


CREATE TRIGGER update_hotel_rating_after_delete
AFTER DELETE ON Review
FOR EACH ROW
BEGIN
    DECLARE result DOUBLE DEFAULT 0;
    CALL CalculateAvgRating(OLD.HotelName, OLD.CityName, result);
    UPDATE Hotel SET Rating = result
    WHERE Name = OLD.HotelName AND CityName = OLD.CityName;
END;
//

DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`%` PROCEDURE `DivideCrimeRate`(IN division INT, IN idx INT, OUT maxVal REAL)
BEGIN 
DECLARE maxCrime REAL; 
DECLARE minCrime REAL; 
SELECT MAX(CrimeRate) 
INTO maxCrime 
FROM City; 
SELECT MIN(CrimeRate) 
INTO minCrime 
FROM City; 
SET maxVal = minCrime + (maxCrime  - minCrime ) / division * (idx + 1) + 0.001; 
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`%` PROCEDURE `DivideLivingWage`(IN division INT, IN idx INT, OUT maxVal REAL)
BEGIN 
DECLARE maxWage REAL; 
DECLARE minWage REAL; 
SELECT MAX(LivingWage) 
INTO maxWage FROM City; 
SELECT MIN(LivingWage) 
INTO minWage 
FROM City; 
SET maxVal = minWage + (maxWage - minWage) / division * (idx + 1) + 0.001; 
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`%` PROCEDURE `DividePrecipitation`(IN division INT, IN idx INT, OUT maxVal REAL)
BEGIN 
DECLARE maxPrcpt REAL; 
DECLARE minPrcpt  REAL; 
SELECT MAX(Precipitation) 
INTO maxPrcpt 
FROM Precipitation; 
SELECT MIN(Precipitation) 
INTO minPrcpt 
FROM Precipitation; 
SET maxVal = minPrcpt + (maxPrcpt   - minPrcpt ) / division * (idx + 1) + 0.001; 
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`%` PROCEDURE `CalculateAvgRating`(IN Hotel VARCHAR(255), IN City VARCHAR(255), OUT avgRating REAL)
BEGIN 
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ; 
SELECT AVG(Rating) 
INTO avgRating 
FROM Review
WHERE Hotel = HotelName AND City = CityName
GROUP BY HotelName, CityName;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`%` PROCEDURE `Search`(IN MonthMin INT, IN MonthMax INT, IN TempMin REAL, IN TempMax REAL, IN PrcptMax REAL, IN CrimeMax REAL, IN WageMax REAL, IN compStr VARCHAR(255))
BEGIN 
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; 
SELECT H.Name, H.Address, H.CityName, H.Rating
FROM Hotel H JOIN City C ON H.CityName = C.Name
LEFT JOIN Temperature T ON C.Name = T.CityName 
LEFT JOIN Precipitation P ON C.State = P.CityState 
WHERE (H.CityName LIKE compStr OR H.Name LIKE compStr) 
AND (T.Month IS NULL OR (T.Month >= MonthMin AND T.Month <= MonthMax))
AND (P.Month IS NULL OR (P.Month >= MonthMin AND P.Month <= MonthMax))
AND (C.LivingWage IS NULL OR C.LivingWage < WageMax)
AND (C.CrimeRate IS NULL OR C.CrimeRate < CrimeMax )
GROUP BY H.CityName, H.Name
HAVING (AVG(T.Temperature) IS NULL OR (AVG(T.Temperature) > TempMin AND AVG(T.Temperature) < TempMax)) 
AND (AVG(P.Precipitation) IS NULL OR AVG(P.Precipitation) < PrcptMax);
END$$
DELIMITER ;




