import os
import sys
from datetime import datetime
import openpyxl
from sqlalchemy.sql import text
#pathList = ["C:\\Users\\Risha\\Documents\\Vs_code\\Practice\\workpls\\teagarden\\server\\sqlapp"] 
#sys.path.insert(0,pathList)
#sys.path.append('C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp')

import imp

models = imp.load_source('models', 'C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp/models.py')
from models import *
database = imp.load_source('database', 'C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp/database.py')
from database import *
#from sqlapp.models import EntryType, RainfallData, Station, TemperatureAndHumidityData, Units
#from sqlapp.models import *
#from sqlapp.database import *
#from sqlapp.database import db_session, init_db, engine, conn
from excel_file_checker import read_workbook
config = imp.load_source('config', 'C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp/config.py')
from config import *

#from excel_file_checker import check_file

def populate_units_table():
    db_session.add(Units(measurement='Humidity', unit='Percentage'))
    db_session.add(Units(measurement='Rainfall', unit='Millimetres'))
    db_session.add(Units(measurement='Temperature', unit='Celsius'))


def main():
    # initializes the database with tables
    init_db()
    populate_units_table()
    for filename in os.listdir(folder):
        if filename.endswith('.xlsx'):
            file = os.path.join(folder, filename)
            workbook = openpyxl.load_workbook(file, data_only=True)
            read_workbook(workbook)


def test_sensor_entry():
    init_db()
    sensor = Station(latitude=80, longitude=100, sensor_type='rainfall', sensor_name='First')
    db_session.add(sensor)
    db_session.commit()


def test_rainfalldata_entry(sensor: Station):
    init_db()
    db_session.add(RainfallData(station_id=sensor.id, reading=100, date="1997-01-01"))
    db_session.commit()


def test_temperatureAndHumidity_entry(station: Station, dataType: EntryType, hour: int, minute: int):
    init_db()
    time_str = "" + str(hour) + "::" + str(minute) + "::" + "00"
    time_str = datetime.strptime(time_str, '%H::%M::%S')
    db_session.add(
        TemperatureAndHumidityData(station_id=station.id, reading=100, timestamp=time_str, dataType=dataType))
    db_session.commit()


def reset_tables():
    init_db()
    sql = text(
        'TRUNCATE public."geoEntity", public."users", public."units", public."station", public."rainfallData", public."temperatureAndHumidityData" RESTART IDENTITY;')
    db_session.execute(sql)
    db_session.commit()


if __name__ == '__main__':
    
    init_db()
    main()
