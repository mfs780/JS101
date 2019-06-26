# Grade Calculator

Create a grade point calculator. The program will ask a user for grades until the user types in `'DONE'`; To make things simple all grades will be out of 100. Once the player returns `'DONE'` then calculate the overall Grade between 0 - 100%; List out all the inputed grades to the user and then their final grade. Based on the Grade tell the user if they got an A, B, C, D, or F;

## Requirements
* Obtain 0 to N number of grades from user
* Grades entered by user will be out of 100 points
* Stop asking for grades when the user enters in `'DONE'`
* Calculate Overall Grade
* List out all the grades the user entered in the following format
  ```javascript
  GRADE 1: 90
  GRADE 2: 100
  GRADE 3: 85
  ```
* Add divider between grades entered and final grades
  ```javascript
  -------------
  ```
* Show the user their overall grade and letter grade
  ```javascript
  Total Grade: 91.66
  Letter Grade: A
  ```

  ## Final Output
    ```javascript
  GRADE 1: 90
  GRADE 2: 100
  GRADE 3: 85
  -------------
  Total Grade: 91.66
  Letter Grade: A
  ```

## Hints
Use `While Loop` to ask user for new grades until they enter `'DONE'`\
Use `If Else Statements` to figure out the users Letter Grade;

## Extra Credit
Validate the user input so that incorrect inputs do not work.

If a user enters anythting other than a number greater than or equal to 0 or `'DONE'` and appropriate response should be give.