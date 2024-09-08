# nameanator
A true name generator web app

# Description
This application generates names based on a provided list of names. These names can be peoples names, city names, or the names of just about anything.

See *docs/nameGenerator.txt* for a more descriptive explanation of the application.

# How to run
* Select a list in the `Base List` section from which names will be generated
    * Either choose a default list from the dropdown menue and hit the `Generate Probabilities` button. Or
    * Select the `Choose File` button and select a file from your local device
* Once probabilities have been generated, you can select the number of names you want to generate each time from the dropdown muneu in the `Generate Names` section, then select the `Generate` button to generate names.
* To clear the list of displayed names, select teh `Clear` button in the `Generate Names` section.

# Default lists
There are 12 default lists to choose from. These lests can be selected from the drop down menue in the `Base List` section. The lists can give a general idea of the bredth of name generation this application is capabable of doing.

# Creating your own list
There are a few rules to follow when creating your own list of names to be used by the generator:
1. Each name (or item) on the list should be on its own line
2. Every line will be read from the input list, aka, there should be no headder lines in the list.

# Common issues
* It is best to use a list with at least 50-100 items in it. While the generator will work with any number of items in a list, the more items the better.