#!/usr/local/bin/python3

#Import modules for CGI handling 
import cgi, cgitb

#Create instance of FieldStorage
form = cgi.FieldStorage()

#Get data from fields
username = form.getvalue('username')
email = form.getvalue('email')
password = form.getvalue('password')

if form.getvalue('acquisitionType'):
    acquisitionType = form.getvalue('acquisitionType')
else:
    acquisitionType = "Not selected"

print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>CryptoNews - Account Created/title>")
print ("</head>")
print ("<body>")
print ("<h2>Hello %s ! Your account has been created successfully!</h2>" % (username))
print ("<p> Your email is %s. </p>" % (email))
print ("<p> Your password is: %s </p>" % (password))
print ("<p> You usually obtain currency by way of: %s </p>" % (acquisitionType))
# print ("<p> You can view your profile <a href=\"../Final Project/profile.html\">here</a></p>")
print ("</body>")
print ("</html>")