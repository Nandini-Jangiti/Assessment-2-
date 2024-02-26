# Assessment-2-

--Registration page
Registration field should satisfy below
1.	Username - Text field
2.	First name, Last name - Text field
3.	DOB – HTML Date field
4.	Gender – Radio button
5.	Password, Confirm Password - Both hidden(*****) text fields
6.	Should have validation that password & confirm password should match
7.	Once submit, should save data to local storage & redirect to profile page
   
--Profile Page
1.	Should retrieve the data from local storage and display in the UI
2.	Profile page should display first name, last name, DOB, Gender
3.	Profile page should be read-only.
   
--Login page
Should have 2 fields - username and password
Password field should be hidden
Till user hasn’t filled both fields, submit button should be disabled
If fields are empty, should show error message near the input fields
If fields are valid, on clicking submit should redirect to same profile page
 
Additional Notes:
1.	Registration page will have a link: Already have an account. When clicked will redirect to login page
Login page will have a link: Create an account. When clicked will redirect to registration page
