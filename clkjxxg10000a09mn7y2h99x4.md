---
title: "Regex Complete Cheat Sheet JavaScript"
seoTitle: "Regex Complete Cheat Sheet JavaScript"
datePublished: Wed Jul 26 2023 16:28:57 GMT+0000 (Coordinated Universal Time)
cuid: clkjxxg10000a09mn7y2h99x4
slug: regex-complete-cheat-sheet-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690388912709/efdfd5bb-ab01-4f84-bb2d-7b28c1387080.png
tags: javascript

---

Certainly! Here's a cheat sheet for regular expressions in JavaScript:

1. Creating a Regular Expression:
    
    * `/pattern/flags`: Using literal notation.
        
    * `new RegExp("pattern", "flags")`: Using the `RegExp` constructor.
        
2. Flags:
    
    * `i`: Ignore case.
        
    * `g`: Global search.
        
    * `m`: Multiline search.
        
3. Metacharacters:
    
    * `.`: Matches any character except a newline.
        
    * `\w`: Matches any alphanumeric character or underscore.
        
    * `\d`: Matches any digit character.
        
    * `\s`: Matches any whitespace character.
        
    * `\b`: Matches a word boundary.
        
    * `^`: Matches the beginning of a string.
        
    * `$`: Matches the end of a string.
        
4. Quantifiers:
    
    * `*`: Matches zero or more occurrences.
        
    * `+`: Matches one or more occurrences.
        
    * `?`: Matches zero or one occurrence.
        
    * `{n}`: Matches exactly `n` occurrences.
        
    * `{n,}`: Matches `n` or more occurrences.
        
    * `{n,m}`: Matches between `n` and `m` occurrences.
        
5. Character Classes:
    
    * `[abc]`: Matches any character in the set.
        
    * `[^abc]`: Matches any character not in the set.
        
    * `[a-z]`: Matches any character in the range.
        
    * `[^a-z]`: Matches any character not in the range.
        
    * `[0-9]`: Matches any digit.
        
    * `\w`: Matches any alphanumeric character or underscore.
        
    * `\W`: Matches any non-word character.
        
    * `\d`: Matches any digit character.
        
    * `\D`: Matches any non-digit character.
        
    * `\s`: Matches any whitespace character.
        
    * `\S`: Matches any non-whitespace character.
        
6. Groups and Capturing:
    
    * `(pattern)`: Capturing group.
        
    * `(?:pattern)`: Non-capturing group.
        
    * `|`: Alternation (matches either the expression before or after the pipe).
        
    * `(?<name>pattern)`: Named capturing group.
        
7. Anchors:
    
    * `^`: Matches the beginning of a string or line.
        
    * `$`: Matches the end of a string or line.
        
    * `\b`: Matches a word boundary.
        
    * `\B`: Matches a non-word boundary.
        
8. Escaping:
    
    * `\`: Escapes a metacharacter.
        
9. Special Characters:
    
    * `\n`: Newline.
        
    * `\r`: Carriage return.
        
    * `\t`: Tab.
        
    * `\f`: Form feed.
        
    * `\v`: Vertical tab.
        
10. Methods:
    
    * `.test(string)`: Tests if the pattern matches the string.
        
    * `.exec(string)`: Executes a search for the pattern in the string.
        
    * `.match(pattern)`: Searches a string for a match against the pattern.
        
    * `.replace(pattern, replacement)`: Replaces matches with a replacement string.
        
    * `.split(pattern)`: Splits a string into an array of substrings using the pattern as a delimiter.
        

Remember to enclose regular expressions in forward slashes (`/`) or use the `RegExp` constructor when working with them in JavaScript.

Certainly! Here's an example of using regular expressions in JavaScript:

```javascript
// Example 1: Testing if a pattern matches a string
const pattern = /hello/;
const str = "Hello, world!";
const result = pattern.test(str);
console.log(result); // Output: false

// Example 2: Searching for a pattern and extracting matches
const pattern2 = /\d+/; // Matches one or more digits
const str2 = "I have 42 apples and 3 oranges.";
const matches = str2.match(pattern2);
console.log(matches); // Output: ["42"]

// Example 3: Replacing matches with a replacement string
const pattern3 = /apples/;
const str3 = "I have 5 apples.";
const replacedStr = str3.replace(pattern3, "bananas");
console.log(replacedStr); // Output: "I have 5 bananas."

// Example 4: Splitting a string into an array using a delimiter
const pattern4 = /\s+/; // Matches one or more whitespace characters
const str4 = "Hello   World   JavaScript";
const parts = str4.split(pattern4);
console.log(parts); // Output: ["Hello", "World", "JavaScript"]
```

These examples demonstrate some common use cases of regular expressions in JavaScript, including testing if a pattern matches a string, searching for patterns and extracting matches, replacing matches with a replacement string, and splitting a string into an array using a delimiter pattern.

Certainly! Here's a comprehensive tutorial on regular expressions (regex) in JavaScript:

Regular expressions are powerful tools for pattern matching and manipulation of strings. They are supported in various programming languages, including JavaScript. In JavaScript, you can work with regular expressions using the built-in `RegExp` object or the regex literal notation.

1. Literal Notation:
    
    * The simplest way to create a regex is by using the literal notation, which involves enclosing the pattern between forward slashes (`/`). For example: `/pattern/`.
        
    * Example: `/hello/` matches the word "hello" in a string.
        
2. Creating a RegExp Object:
    
    * The `RegExp` object allows you to create a regex dynamically using a string pattern. The pattern can be passed as the first argument to the `RegExp` constructor.
        
    * Example: `new RegExp("hello")` creates a regex object that matches the word "hello" in a string.
        
3. Testing for Matches:
    
    * The `test()` method of a regex object or the regex literal can be used to check if a pattern matches a string.
        
    * Example:
        
        ```javascript
        const regex = /hello/;
        const str = "hello world";
        const result = regex.test(str);
        console.log(result); // Output: true
        ```
        
4. Matching:
    
    * The `match()` method of a string can be used to search for matches based on a regex pattern. It returns an array of matches or `null` if no match is found.
        
    * Example:
        
        ```javascript
        const regex = /\d+/; // Matches one or more digits
        const str = "I have 42 apples and 3 oranges.";
        const matches = str.match(regex);
        console.log(matches); // Output: ["42", "3"]
        ```
        
5. Replacement:
    
    * The `replace()` method of a string allows you to replace matches of a regex pattern with a specified replacement string.
        
    * Example:
        
        ```javascript
        const regex = /apples/;
        const str = "I have 5 apples.";
        const replacedStr = str.replace(regex, "bananas");
        console.log(replacedStr); // Output: "I have 5 bananas."
        ```
        
6. Splitting:
    
    * The `split()` method of a string allows you to split a string into an array of substrings based on a regex pattern as the delimiter.
        
    * Example:
        
        ```javascript
        const regex = /\s+/; // Matches one or more whitespace characters
        const str = "Hello   World   JavaScript";
        const parts = str.split(regex);
        console.log(parts); // Output: ["Hello", "World", "JavaScript"]
        ```
        
7. Metacharacters:
    
    * Metacharacters are special characters with reserved meanings in regex patterns. Some commonly used metacharacters include:
        
        * `.` (dot): Matches any character except a newline.
            
        * `\w`: Matches any alphanumeric character or underscore.
            
        * `\d`: Matches any digit character.
            
        * `\s`: Matches any whitespace character.
            
        * `^`: Matches the beginning of a string.
            
        * `$`: Matches the end of a string.
            
        * `\b`: Matches a word boundary.
            
    * Example:
        
        ```javascript
        const regex = /\d{3}-\d{3}-\d{4}/; // Matches a phone number pattern like XXX-XXX-XXXX
        const str = "My phone number is 123-456-7890.";
        const result = regex.test(str);
        console.log(result); // Output: true
        ```
        
8. Flags:
    
    * Flags modify the behavior of a regex pattern. They are
        

appended after the closing slash (`/`) in the regex literal or passed as the second argument to the `RegExp` constructor.

* Commonly used flags include:
    
    * `i`: Ignore case (case-insensitive matching).
        
    * `g`: Global search (find all matches, not just the first one).
        
    * `m`: Multiline search (treats the beginning (`^`) and end (`$`) anchors as the start and end of each line, not just the whole string).
        
* Example:
    
    ```javascript
    const regex = /hello/i; // Case-insensitive matching
    const str = "Hello world!";
    const result = regex.test(str);
    console.log(result); // Output: true
    ```
    

Regular expressions provide a flexible and efficient way to work with patterns in strings. They can be as simple or complex as needed, and mastering regex can greatly enhance your string manipulation capabilities in JavaScript.