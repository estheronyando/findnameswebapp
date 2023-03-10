Project Name: Akan Name Generator

Author: Esther Onyando

Description: This is an Akan Name generator. The Akan name generator project utilizes traditional naming convention to generate authentic Akan names for users. The project takes the user's gender and date of birth as input and uses algorithms to determine the day of the week on which they were born. It then retrieves the corresponding Akan name associated with that day and presents it to the user.



Project Setup Instructions: Clone the repository to your local machine Install Visual Studio Code or any other editor Access the project by clicking go live and visiting hhttp://127.0.0.1:5500/index.html in your web browser 

BDD:Feature: Akan name generation based on birthdate Scenario: Generate Akan name for a male user born on Monday
    Given a male user with a birthdate of January 4, 1999
    When the user inputs their birthdate and gender
    Then the system should determine that the user was born on a Monday
    And the system should generate the Akan name "Kwadwo" for the user

Technologies used:HTML, CSS, JavaScript

Contact:esthermariachana@gmail.com

Live Site Link: The live site for this project can be accessed at https://estheronyando.github.io/findnameswebapp/

Copyright and License Information: Copyright 2023 Esther Onyando

Licensed under the MIT License. See LICENSE file for more information.