
@tag
Feature: User Login
  I want to use this template to Check user login

  @tag1
  Scenario: Add stocks in my portfolio page in the website Reddiffmoney
    Given i open the browser with url "https://money.rediff.com"
    When i click on my portfolio icon
    Then i should see login page
    When i enter valid email id as "svpriya1234@gmail.com"
    And i enter password as "priya1234"
    And i click submit
    Then i should see the home page
    When i click on addstock button
    And i add stock name as "Aavas Financiers Ltd"
    And i add date of purchase as"20/10/2022"
		And i add quantity as "50000"
		And i add purchase price as "45500"
		When i click on add_stock button 
		When i click on  mywatchlist button
		When i click on adddstocks
		And i add stockname as "Trident Ltd"
		And i add a max price as "59000"
		And i add a min price as "9000"
	  And i click on add button
  	And i click on signout button
  
  
 
  
  
  
  