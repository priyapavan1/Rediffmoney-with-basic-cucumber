$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeautureFiles/Userlogin.feature");
formatter.feature({
  "line": 3,
  "name": "User Login",
  "description": "I want to use this template to Check user login",
  "id": "user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Add stocks in my portfolio page in the website Reddiffmoney",
  "description": "",
  "id": "user-login;add-stocks-in-my-portfolio-page-in-the-website-reddiffmoney",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "i open the browser with url \"https://money.rediff.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i click on my portfolio icon",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i enter valid email id as \"svpriya1234@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i enter password as \"priya1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "i click submit",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "i should see the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "i click on addstock button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i add stock name as \"Aavas Financiers Ltd\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i add date of purchase as\"20/10/2022\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "i add quantity as \"50000\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i add purchase price as \"45500\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "i click on add_stock button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "i click on  mywatchlist button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "i click on adddstocks",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "i add stockname as \"Trident Ltd\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i add a max price as \"59000\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i add a min price as \"9000\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i click on signout button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://money.rediff.com",
      "offset": 29
    }
  ],
  "location": "RediffMoney.i_open_the_browser_with_url(String)"
});
formatter.result({
  "duration": 19980631400,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_on_my_portfolio_icon()"
});
formatter.result({
  "duration": 2109979700,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_should_see_login_page()"
});
formatter.result({
  "duration": 436906200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "svpriya1234@gmail.com",
      "offset": 27
    }
  ],
  "location": "RediffMoney.i_enter_valid_email_id_as(String)"
});
formatter.result({
  "duration": 192460200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priya1234",
      "offset": 21
    }
  ],
  "location": "RediffMoney.i_enter_password_as(String)"
});
formatter.result({
  "duration": 2194055700,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_submit()"
});
formatter.result({
  "duration": 2147400400,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_should_see_the_home_page()"
});
formatter.result({
  "duration": 5315474600,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_on_addstock_button()"
});
formatter.result({
  "duration": 185874900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aavas Financiers Ltd",
      "offset": 21
    }
  ],
  "location": "RediffMoney.i_add_stock_name_as(String)"
});
formatter.result({
  "duration": 1207981000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/10/2022",
      "offset": 26
    }
  ],
  "location": "RediffMoney.i_add_date_of_purchase_as(String)"
});
formatter.result({
  "duration": 175625500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 19
    }
  ],
  "location": "RediffMoney.i_add_quantity_as(String)"
});
formatter.result({
  "duration": 165166400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45500",
      "offset": 25
    }
  ],
  "location": "RediffMoney.i_add_purchase_price_as(String)"
});
formatter.result({
  "duration": 304225200,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_on_add_stock_button()"
});
formatter.result({
  "duration": 2115652900,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_on_mywatchlist_button()"
});
formatter.result({
  "duration": 9404019000,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_on_addd_stocks()"
});
formatter.result({
  "duration": 99583300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trident Ltd",
      "offset": 20
    }
  ],
  "location": "RediffMoney.i_add_stockname_as(String)"
});
formatter.result({
  "duration": 3878390100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "59000",
      "offset": 22
    }
  ],
  "location": "RediffMoney.i_add_a_max_price_as(String)"
});
formatter.result({
  "duration": 139902700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9000",
      "offset": 22
    }
  ],
  "location": "RediffMoney.i_add_a_min_price_as(String)"
});
formatter.result({
  "duration": 120555200,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_on_add_button()"
});
formatter.result({
  "duration": 2114901900,
  "status": "passed"
});
formatter.match({
  "location": "RediffMoney.i_click_on_signout_button()"
});
formatter.result({
  "duration": 10002245800,
  "status": "passed"
});
});