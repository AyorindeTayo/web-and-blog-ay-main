---
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2023-06-09T03:42:51Z
tags:
  - Linux
  - Shell
  
author: Ayo Olanipekun
type: article
coverImage: https://res.cloudinary.com/dsysj2hdo/image/upload/v1686316694/6_uepa1v.png
coverImageAlt: Screenshot of Terminal Portfolio Website
title: Shell Script Functions and Arguments
description:
  Linux Scripting.
excerpt:
 Shell scripting is powerful because it can be used to automate repetitive tasks, saving time and effort, and reducing the possibility of errors. Shell scripts can be used to manage and configure operating system settings, start or stop services, and perform file management tasks
slug: how-do-i-develop-my-terminal-portfolio-website-with-react
featured: true
category: How Do I
---
## Explanation of shell scripting
Shell Scripting is a programming technique that involves writing scripts or programs in a shell language, which is a command-line interface used in Linux and Unix operating systems. Shell scripts are used to automate tasks, execute commands, and manipulate system resources through a set of commands that are executed sequentially. 
The command-line interface (CLI) and interpreter for the collection of commands used to interact with the operating system are known as the shell.
Shell scripting is powerful because it can be used to automate repetitive tasks, saving time and effort, and reducing the possibility of errors. Shell scripts can be used to manage and configure operating system settings, start or stop services, and perform file management tasks. 
The shell language used in shell scripting includes several different types of shells, such as bash, sh, csh, and ksh. Each of these shells has its own set of commands and syntax, although they share some common functionality.  
Some common features of shell scripting include variables, loops, conditionals, functions, and I/O redirection. Variables are used to store values, such as file names or system settings, and can be manipulated using shell commands. Loops and conditionals are used to control the flow of the script, allowing for conditional branching or repeated execution of commands. Functions allow for the reuse of code across multiple scripts, reducing code duplication and improving maintainability. I/O redirection is used to redirect input and output streams to and from files, allowing for more flexible management.
 
## What do functions and arguments let you do?
Functions and arguments are important components of shell scripting that allow you to write reusable and flexible code. 
Functions are blocks of code that can be called multiple times within a script or across different scripts. They can take arguments as input, perform operations on those inputs, and return values as output. Functions can be used to modularize code, making it easier to read, write and maintain. 

## What will readers learn in this guide?
This tutorial will help you learn the basic understanding of the Linux/Unix shell scripting program to advanced concepts of shell Scripting. We’ll introduce shell scripting functions and arguments. We’ll share various ways they’re used, sample code, and best practices for writing readable and reusable functions.

# Shell Script Functions

## Definition of shell script functions
In shell scripting, functions are blocks of code that can be reused multiple times within a script or across different scripts. A function in shell scripting is similar to a subroutine or function in other programming languages. 
Functions are defined with a name, a set of parameters (optional), and a block of code that performs some operation. The code inside the function can access and modify variables within the function or outside the function, depending on their scope. 

## Examples of how functions are used in shell scripts
Note: for most of the script in this tutorial Ubuntu 20.04 was used. 
Here is an example of a simple function in shell scripting: 


For example, let's say you have a script called ‘myscript.sh’ and you want to pass in a file name arguments. The script can be called like this:

```sh
nano myscript.sh
```
Inside the script, you can access the first parameter using ‘$1’ as shown below:

```sh
#!/bin/bash

myfunction() {
  echo "Hello, $1!"
}

myfunction "John"
```
The first line in the script must be present for the bash script to function independently and be able to run as a command. Characters “#!” is called shebang, it is a line that instructs Linux to use a certain interpre
# Introduction


## Explanation of shell scripting
Shell Scripting is a programming technique that involves writing scripts or programs in a shell language, which is a command-line interface used in Linux and Unix operating systems. Shell scripts are used to automate tasks, execute commands, and manipulate system resources through a set of commands that are executed sequentially. 
The command-line interface (CLI) and interpreter for the collection of commands used to interact with the operating system are known as the shell.
Shell scripting is powerful because it can be used to automate repetitive tasks, saving time and effort, and reducing the possibility of errors. Shell scripts can be used to manage and configure operating system settings, start or stop services, and perform file management tasks. 
The shell language used in shell scripting includes several different types of shells, such as bash, sh, csh, and ksh. Each of these shells has its own set of commands and syntax, although they share some common functionality.  
Some common features of shell scripting include variables, loops, conditionals, functions, and I/O redirection. Variables are used to store values, such as file names or system settings, and can be manipulated using shell commands. Loops and conditionals are used to control the flow of the script, allowing for conditional branching or repeated execution of commands. Functions allow for the reuse of code across multiple scripts, reducing code duplication and improving maintainability. I/O redirection is used to redirect input and output streams to and from files, allowing for more flexible management.
 
## What do functions and arguments let you do?
Functions and arguments are important components of shell scripting that allow you to write reusable and flexible code. 
Functions are blocks of code that can be called multiple times within a script or across different scripts. They can take arguments as input, perform operations on those inputs, and return values as output. Functions can be used to modularize code, making it easier to read, write and maintain. 

## What will readers learn in this guide?
This tutorial will help you learn the basic understanding of the Linux/Unix shell scripting program to advanced concepts of shell Scripting. We’ll introduce shell scripting functions and arguments. We’ll share various ways they’re used, sample code, and best practices for writing readable and reusable functions.

# Shell Script Functions

## Definition of shell script functions
In shell scripting, functions are blocks of code that can be reused multiple times within a script or across different scripts. A function in shell scripting is similar to a subroutine or function in other programming languages. 
Functions are defined with a name, a set of parameters (optional), and a block of code that performs some operation. The code inside the function can access and modify variables within the function or outside the function, depending on their scope. 

## Examples of how functions are used in shell scripts
Note: for most of the script in this tutorial Ubuntu 20.04 was used. 
Here is an example of a simple function in shell scripting: 
For example, let's say you have a script called ‘myscript.sh’ and you want to pass in a file name arguments. The script can be called like this:

```sh
nano myscript.sh
```
Inside the script, you can access the first parameter using ‘$1’ as shown below:

```sh
#!/bin/bash

myfunction() {
  echo "Hello, $1!"
}

myfunction "John"
```
The first line in the script must be present for the bash script to function independently and be able to run as a command. Characters ‘#!’ is called shebang, it is a line that instructs Linux to use a certain interpreter when running a script. 
In this example. The ‘myfunction’ is defined with one argument, ‘$1’ which stands for positional parameters to pass in data in the script. The ‘echo’ keyword is used to output the strings that are being passed as arguments. It is a built-in command in shell that outputs text.  
You will have to put ‘chmod’ operation in the code. Without the chmod, the shell script command when run in Ubuntu will come up with a permission denied error. 
```
chmod -R 777 . 
```
```
./myscript.sh
```
When you run “./myscript.sh” in the Linux terminal, the function is called with the argument “John”, it then prints:
```
“Hello’, John!”
```
The ./ notation in the above script tells Linux to look in the directory where you are now working for the  ‘./myscript.sh’ script to run.
The ‘.sh’ file extension might not be necessary but it is usually used to inform your user that the script is a shell file and not a binary file. 
The images below represent the snapshot of the Linux terminal where the codes are executed. 
![myscript code](https://imgur.com/VR4ppGm.jpg)
![bash script](https://imgur.com/is6Z4qD.jpg)
![executing the script](https://imgur.com/522LhsQ.jpg)


## Explanation of local vs global variables in functions
Local variables are defined inside a function and can only be accessed within that function, while global variables are defined outside a function that can be accessed and modified by any part of the script. 
Here is an example of a function that uses a local variable also named  ‘myscript.sh’: 
```
#!/bin/bash

myfunction() {
     local myvar=”Hello”
     echo “$myvar, $1!”
}

Myfunction “John”
```
In this example, the ‘myfunction’ function defines a local variable ‘myvar’ and assigns it the value ‘Hello’. The value of ‘myvar’ is then used in the ‘echo’ statement to print ‘Hello’, John!” to the console. 
When you run the above  ‘./myscript.sh’ script, it would output:
```
“Hello’”, John!”

```
On the other hand, a global variable is defined outside a function and can be accessed and modified by any part of the script, including functions. Global variables are useful for storing data that needs to be shared across multiple functions of the script.
Here is an example of a function that uses a global variable:
```
#!/bin/bash

myvar=”Hello”
myfunction() {
     cho “$myvar, $1!”
}

Myfunction “John” 
```
In this example, the variable ‘myvar’ is defined outside the ‘myfunction’ function, making it a global variable. The value of ‘myvar’ is then used in the ‘echo’ statements inside the function to print “Hello, John! 
It is generally a good practice to use local variables whenever possible and only use global variables when necessary. 

# Shell Script Arguments

## Definition of shell script arguments
In shell scripting, arguments are values that are passed to a script or a function when it is executed. These values can be used as inputs for the script or function to perform operations or make decisions. Shell scripts can take arguments in the form of command line arguments or function arguments. 
Command line arguments are values that are passed to a shell script when it is executed from the command line. They are typically used to provide inputs or options to the script. Command line arguments are passed to the scripts as variables, with the first argument stored in ‘$1’, the second argument stored in ‘$2’, and so on. 

Here is an example of a shell script that takes command-line arguments:

```
#!/bin/bash

myfunction() {
    echo “Hello, $1”

```
In the example above, the function takes one command line argument and uses it to print “Hello,[argumnet]!” to the console. The argument is accessed using the variable ‘$1’.

Function arguments on the other hand, are values that are passed to a function when it is allied from within a script. They are typically used to provide inputs or options to the function. Function arguments are passed to the function as variables, with the first argument stored in ‘$1’, the second argument stored in ‘$2’, and so on. 

Here is an example of a function that takes arguments: 
```
#!/bin/bash

myfunction() {
    Echo “Hello, $1”
}

myfunction “John”
```
In this example, the function takes one argument and used it to print “Hello”, John!”. 

## Examples of how arguments are used in shell scripts
Here are a few examples of how arguments can be used in shell scripts: 
- A Script that takes two numbers as command line arguments and adds them:

```
#!/bin/bash

sum=$(($1+$2))
echo “The sum of $1 and $2 is $sum.”

```
The scripts above take two numbers as command line arguments and store their sum in the variable ‘sum’. The result is then printed. 

If you run this script with the command:

```
./myscript.sh 2 3
```
It will output : 
```
The sum of 2 and 3 is 5 
```
The snapshot is shown below


![shell script arguments](https://imgur.com/PF9lQUn.jpg)
![shell script arguments](https://imgur.com/c004xlL.jpg)

- A script that takes a list of numbers as a command line argument and calculates their average: 


```
#!/bin/bash

sum=0
count=0

for number in “$@”; do
  sum=$(($sum + $number))
  count=$(($count +1))
done

average=$(($sum / $count))

echo “The average of the number is $average.”

```
In this example, the script uses a ‘for’ loop to iterate over the command line arguments and add them to a running sum. It also keeps track of how many arguments were passed in the variable ‘count’. It eventually calculates the average of the numbers and prints it to the console. 

If you run this script with the command:

```
./myscript.sh sum count
```
It will output : 


```
The average of the number is 0. 

```
The snapshot is shown below:

![shell script arguments](https://imgur.com/yC1rJdy.jpg)
![shell script arguments](https://imgur.com/ItUTSaV.jpg)






# Explanation of positional parameters vs named parameters

In shell scripting, two types of parameters can be passed to a script or function: positional parameters and named parameters (also called named arguments). 
- Positional parameters are parameters that are passed to a script or function based on their position in the command line or function call. The first positional parameter is represented by ‘$1’, the second by ’$2’, and so on. Positional parameters are accessed in order, so ‘$1’ refers to the first parameter, ‘$2’ to the second parameter, and so on. 

```
#!/bin/bash

echo “The first parameter is : $1”
echo “The second is : $2”

```
If this script is called with the command “./myscript.sh foo bar”, it will output: 

```
The first parameter is : foo
The second parameter is: bar
```
- Named Parameters are parameters that are passed to a function by name, rather than by position. Named parameters are accessed using their name, rather than a numerical index. 
In shell scripting, named parameters are usually implemented using the ‘getopts’ command or by using associative arrays.
Example of a function that takes named parameters: 


```
#!/bin/bash

myfunction() {
    while getopts  “f:1:” opt; do
        case $opt in
            f) first_name=”$OPTARG”;;
            1) last_name=”$OPTARG”;;
        Esac
    done
 
    echo “Hello, $first_name $last_name!”
}

myfunction -f  Steve -1 John

```
In this example, the ‘myfunction’ function takes two named parameters: ‘-f’ for the first name and ‘-1’ for the last name. These parameters are accessed using the ‘getopts’ command and stored in the variables  ‘first_name’ and ‘last_name’. When the function is called with the parameters ‘-f Steve -1 John’, it prints “Hello, Steve, John!”. 



# Best Practices for Shell Script Functions

## Guidelines for choosing function names and argument names
When writing shell scripts and functions, choosing good names for your functions and arguments is important for making your code readable, and maintainable. 

Some guidelines for choosing function names and argument names in shell scripting: 

Function Names: 
- Use descriptive names that describe accurately what the function does.
- Use verbs to describe the action performed by the function (e.g. ‘calculate_average’, ‘print_results’, ‘validate_input’).
- Keep function names concise and easy to read 
- Avoid using abbreviations or acronyms that may not be immediately understandable to others. 

Arguments Name:

- Use descriptive names that accurately describe what the argument represents. 
- Use nouns to describe the object or value represented by the arguments (e.g. ‘filename’, ‘username’, ‘number_of_files’).
- Keep argument names concise and easy to read. 
- Avoid using abbreviations or acronyms that may not be immediately understandable to others. 
- Use plural names for arguments that represent multiple values (e.g. ‘files’, ‘users’). 

## Strategies for writing modular and reusable functions
When writing shell scripts, it is important to write functions that are modular and reusable. 
strategies to achieve this are below:
- Write functions that perform a single, well-defined task: A function should do one thing, and do it well. This makes the functions more focused and easier to understand and reuse. 
- Avoid hardcoding values: Use function arguments to pass in values that may vary, such as file names or directory paths. This makes the function more flexible and reusable.
- Return values instead of printing them: Functions should return values, rather than printing them to the console. This allows the calling code to decide how to use the function's output, making the function more flexible and reusable. 
- Write well-documented functions: Document your functions with clear and concise comments that explain what the functions do, what their arguments are, and what their return value is. 
- Logically organize your functions: Group related functions together in your script, and organize them in a way that makes sense for the tasks you are performing. 

## Using function libraries in shell scripts
Here are some steps to use function libraries in your shell scripts: 
- Create a function library file: Create a separate file that contains the functions you want to reuse. This file should contain only function definitions and no code that runs outside of a function. 
- Source the function library file: In each script that uses the function library, include the line ‘source /path/to/function_library.sh’ at the beginning of the script. This will load the functions from the library file into the script. 
- Call the functions from the library: In your scripts, you can call the functions from the library file just as you would any other function. For example, if your library file contains a function called ‘calculate_average’, you could called it in your script by running ‘calculate_average’. 
Example of how to create and use a function library file: 

```
# function _library.sh

# Define a function that prints a greeting 
print_greeting() {
     echo “Hello, world!”
}

# Define a function that calculates the square of a number 

calculate _square() {
      local num=$1
      local square=$((num*num))
      Echo $square

}

```

```
#main_script.sh

# Source the function library file
source function_library.sh

# Call the print_greeting function from the library 
Print_greeting


# Call the calculate_square function from the library 
result=$(calculate_square 5)
echo “The square of 5 is $result”

```
A function library called ‘function_library.sh’ is created that contains two functions, ‘print_greeting’ and ‘calculate_sqaure’. We then sourced this file in our ‘main_scripts.sh’ file and called both functions from the library in our script. 
       

## Best practices for error handling in functions
Error handling is an important part of writing functions in shell scripts. Good error-handling practices can help make your functions more reliable and robust and can make your code easier to debug. 
Best Practices for error handling in functions:
- Return a status code to indicate success or failure. When your function completes, it should return a status code.
- Use the ‘set -e’ option to exit on errors.
- Use the ‘trap’ command to handle errors gracefully.
- Print error messages to the console. 
- Validate function arguments.
- Use descriptive variables names




# Conclusion

## Recap of key points
- Functions are reusable blocks of code that perform specific tasks.
- Functions should be modular.
- Functions can take arguments, which are values passed to the function for processing.
- Arguments are values passed to a function or script for processing. 
- Arguments can be positional or named. 
- Arguments should be validated to ensure they are valid and correctly formatted. 
By following these best practices, you can write more efficient, modular, and maintainable shell scripts 

## Final thoughts and resources for further reading
Shell scripting is a powerful tool for Linux and Unix system administrators, developers, and power users, allowing for efficient management and automation of system tasks. It is a key skill for anyone working in these environments, and there are many resources available for learning shell scripting, including online tutorials, books and courses. 

# References :
- https://www.shellscript.sh/functions.html 
- https://copyprogramming.com/howto/mastering-shell-scripting-a-comprehensive-guide-to-working-with-parameters
- https://tldp.org/LDP/abs/html/
- https://www.unixtutorial.org/
- https://devhints.io/bash
- https://www.guru99.com/introduction-to-shell-scripting.html











