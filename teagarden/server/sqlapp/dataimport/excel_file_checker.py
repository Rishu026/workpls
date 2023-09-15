from datetime import datetime
import openpyxl
import imp
from sqlalchemy.sql import text
database = imp.load_source('database', 'C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp/database.py')
from database import *
models = imp.load_source('models', 'C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp/models.py')
from models import *


excel_file_reader1 = imp.load_source('excel_file_reader1', 'C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp/dataimport/excel_file_reader1.py')
from excel_file_reader1 import *


excel_file_reader2 = imp.load_source('excel_file_reader2', 'C:/Users/Risha/Documents/Vs_code/Practice/workpls/teagarden/server/sqlapp/dataimport/excel_file_reader2.py')
from excel_file_reader2 import *



import os


def read_workbook(workbook):
    first_sheet = True
    workbook = workbook
    for sheet in workbook.worksheets:
        if (first_sheet):
            type = sheet.cell(row = 9, column = 2).value
            if (type == 1):
                type_1_reader(workbook)
            elif (type == 2):
                type_2_reader(workbook)
        else:
            break




