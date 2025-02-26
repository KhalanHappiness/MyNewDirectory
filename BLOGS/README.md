### how does the web work
works by connecting clients and servers over the internet using requests and responses to deliver web pages and applications

frontend interface (HTML, CSS, js)

json
Middlewares(Intermediaries between the front)



html will always arrange things in a verticle way
HTML ELEMENTS: creation of the structures of a page
types of elements
block - occupies the entire row section eg div p
inline - occupies what the element requires eg ,a, img

### CSS
For styling the elements
layout and responsiveness

when writing CSS we have 3 modes of Styling HTML elements using CSS
inline styling : style attribute to include our css styling
internal: style element in the head 
external styling: styling element in an extenal css file

syntax

Selector{
    property: value
}
justify-content
flex direction - stacks the buttons vertically
The link element does not have a closing tag

### html semantics
html elements that clearly describe the meaning and role to both browsers and developers
### why do we need
to improve seo (search engine optimization )
code readerbility

header represents the page or section header
nav contains the navigationlinks
main - contains the main content of the page should be one per page
section- a section of content
articles - an indipendendent piece of content
aside side content like ads or a sidebar
footer the bottom part of the page
figure and fig captiom groups and image with its caption
mark highlights text for importance
time represents date or time
selector specificity - looks for the selector and the specificity you have gieven to that selector


### css positioning

Static the default position of elements they follow the normal document flow

relative: moves an element relative to its normal position

absolute: The element is removed from the normal document flow and position relatively to the nearest element / ancestor

fixed: The element is fixed to it's position even on scrolling

Sticky: The element acts as like its in a relative position until scrolled past then it sticks

margin creates margins between elements
padding space inside the element between its content and the border

### CSS grid system
2-d system mthat allows you to partition your web page into rows and columns
### key concepts in the grid system
1. grid container: the parent element where the grid is defined: display grid;

2. grid items: The child elements inside the grid container / partitions of my page
3. grid ares: A group of grid cells that define the partitions
4. grid template columns: Will help you define column sizes
5. grid template rows: Will help you define row sizes
6. grid template areas: define named regions in the grid

                            navbar
menu                                                                       m           

### Media Queries
viewport
Should be written directly below the default styling

### FUNDAMENTALS OF PROGRAMMING
Programmimg is a process of writing instructions for a computer to execute 
These instructions are written via programming languages like JS python Java C++

### Key  concept
1. Algorithms (a step by step procedure followed to solve a problem) and logic writing
2. Variables and data types
3. Control structures (Flow of execution)
    a/ conditional statements - Selection 
    b/ loops - Repetition
 4. function to group code pieces together for the purposes of reusability
 5. OOP object oriented programmingm/ Document Object Model
 6. Error handling and debugging

 ### JAVASCRIPT
 1. Dynamic: no need to specify the data type
 2. Interpreted: runs directly in browsers without compilation
 3. Event-Driven: responds to users actions
 4. Versatility: Works on both front end and back end{nodeJS}
 5.
 
 ### Why learn javascript
  1. It runs everywhere
  2. it has a huge echo systme
  3. has friendly frameworks
  4. Most popular web language

  ### VARIABLES
  variables store data (what is the data types?)

  - Declaring variables 
  a. var (old way, function-scoped)
  Did not have a particular scope to be bounded to 
  b. let (modern. block-scoped): mutable
  c. const (constant, variable cannot be reassigned)

  - scope refers to the accessibility of the variable

  ### JAVASCRIPT SCOPE : understanding a variable visibility and lifetime
  determines the visibility of of your variable s functions objects and in different parts of your code

  ### 4 types of scope

  1. global scope
  2. local/ Function scope - variables declared within a function
  3. block scope
  4. lexical scope

### Conditional statements
Allows us to to control the flow of programs based on conditions
They help us to made a decision

1. if statement
