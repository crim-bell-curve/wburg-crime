#This code is designed to extract the number of crimes committed per month from 
#csv files.
#Author: Daniel Ruhnke

def count_by_month(file):
    """ Takes csv file and creates dictionary with month/year as keys and 
    number of crimes as values.
    
    Arguments:
    file -- csv file being read
    """
    file = open(file, "r")
    file.readline()
    for line in file:
        line = line.split(",")
        date = line[1].split("/")
        date = date[0] + "/" + date[2]
        if date in dateDict:
            dateDict[date] += 1
        else:
            dateDict[date] = 1
    file.close()
            

#Build dictionary.
dateDict = dict()

#Go through files.
count_by_month("aggravatedAssault.csv")
count_by_month("burglary.csv")
count_by_month("murder.csv")
count_by_month("rape.csv")
count_by_month("robbery.csv")
count_by_month("simpleAssault.csv")

# Create csv of dictionary
print 'month,number_of_crimes'
for key in dateDict:
    print key + ',' + str(dateDict[key])

#Check number of recorded crimes is right.
'''
count = 0
for val in dateDict:
    count += dateDict[val]
print(count)
'''