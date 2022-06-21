Sign-up Form project

The goal of this project was to create a mockup sign up form, with proper
data validation for the inputs. 

-Both the First and Last name inputs accept either one name, or two names
(for us Latin american people with long names).

-The email input is validated by setting the "type" to "email". This prevents
overcomplicated regex patterns that might be missing something. 

-Phone number is set to only accept numbers, with a max character limit of 10.

-Password isn't doesn't required specific properties, just checks if the "Confirm
Password" value is the same as the previews input.
