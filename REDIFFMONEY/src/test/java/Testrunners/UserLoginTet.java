package Testrunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( features="FeautureFiles/Userlogin.feature",glue="StepDefinations",dryRun=false,
plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Reports/redifftest.html"}
)
public class UserLoginTet
{
}
	
 