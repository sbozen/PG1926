class School():
    def __init__(self,schoolName,stdCount,tchCount,employee,schoolType,classCount):
        self.schoolName=schoolName
        self.stdCount=stdCount
        self.tchCount=tchCount
        self.employee=employee
        self.schoolType=schoolType
        self.classCount=classCount
school1 = School("Afyon Fen Lisesi",500,30,25,"Science High School",25)
school2 = School("Afyon Anadolu Lisesi",400,25,25,"Anatolian High School",25)
school3 = School("Afyon Meslek Lisesi",450,35,25,"Vocational High School",25)

print("------------",school1.schoolName,"-------------")
print("\n Number of Students: ",school1.stdCount,"\n Number of Teacher: ",school1.tchCount
,"\n Number of Employee: ",school1.employee,"\n School Type: ",school1.schoolType,"\n Number of Class: ",school1.classCount)


print("------------",school2.schoolName,"-------------")
print("\n Number of Students: ",school2.stdCount,"\n Number of Teacher: ",school2.tchCount
,"\n Number of Employee: ",school2.employee,"\n School Type: ",school2.schoolType,"\n Number of Class: ",school2.classCount)


print("------------",school3.schoolName,"-------------")
print("\n Number of Students: ",school3.stdCount,"\n Number of Teacher: ",school3.tchCount
,"\n Number of Employee: ",school3.employee,"\n School Type: ",school3.schoolType,"\n Number of Class: ",school3.classCount)

school1.employee=35
school2.stdCount=515
school3.schoolName="Afyon Mesleki ve Teknik Anadolu Lisesi"
print("\n*** UPDATES ***")
print(school1.schoolName,"updated number of employees:",school1.employee,"\n",school2.schoolName,"updated number of students: ",school2.stdCount,"\n",school3.schoolName,"updated school names:",school3.schoolName)