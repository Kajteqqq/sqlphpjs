CREATE DATABASE baza;
USE baza;

CREATE TABLE pracownik (
    idPracownika INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
    imie VARCHAR(30) NOT NULL,
    nazwisko VARCHAR(45) NOT NULL,
    telefon VARCHAR(15) UNIQUE NOT NULL,
    stanowisko VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET='utf8';

CREATE TABLE szef (
    idSzefa INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
    imie VARCHAR(30) NOT NULL,
    nazwisko VARCHAR(45) NOT NULL,
    telefon VARCHAR(15) UNIQUE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET='utf8';

CREATE TABLE oddzial (
    idOddzialu INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
    nazwa VARCHAR(50),
    lokalizacja VARCHAR(80),
    pracownik_id INT,
    szef_id INT,
    FOREIGN KEY (pracownik_id) REFERENCES pracownik(idPracownika),
    FOREIGN KEY (szef_id) REFERENCES szef(idSzefa)
) ENGINE=InnoDB DEFAULT CHARSET='utf8';
