+++
fragment = "content"
#disabled = true
date = "2020-12-12"
weight = 100
# title = "Simple guide: Golang language"
+++

## Introduction

Crownlabs backend is written in Golang (a.k.a. Go), an open source, procedural programming language created by Google. To simplify it can be compared with C and C++ but without some of their most tricky issues (e.g. memory management). This guide will do a general excursus on this very raising language introducing its most relevant features, giving a roadmap to follow to learn it.

## Useful links

### Install Go

The first step is to install Go and it can be done easly [here](https://golang.org/doc/install).

### Ides and editor plugins

To write code in Go there are some ides like [Visual Studio Code](https://code.visualstudio.com/) or [Goland](https://www.jetbrains.com/go/) and text editor plugins like [vim-go](https://github.com/fatih/vim-go). For more details you can visit official [doc](https://golang.org/doc).

## Your first program, Hello World!

Let's start with a simple programm which prints on console the famous string "Hello world!".
This is just to have a general sight on Go syntax.

First write the following code in a file with *.go* extension (e.g. hello.go): 

```
package main  // working package
import "fmt"  // list of useful packages imports 

func main(){  // program start here
    fmt.Println("Hello, world!") // no semicolon
}
```

You can run the program as follow:

```
$ go run hello.go
Hello, world!
```

## Data types, variables and functions

### Basic types

Go is a typed language and its basic types are:

- bool

- string

- int  int8  int16  int32  int64
 uint uint8 uint16 uint32 uint64 uintptr

- byte (alias for uint8)

- rune  (alias for int32 represents a Unicode code point)

- float32 float64

- complex64 complex128

### Variables

A variable can be declared as follows:

``` 
var a int
a := 2 
```

The first line shows C-like method to declare a varible, the second is typical of Go and shows a more compact way to declare a variable and assign a value to it. The type is automatically inferred by the compiler. A variable without an assigned value contains its typed default value (e.g 0 for integers, false for booleans).

### Type conversion

Unlike C Go needs an explicit type conversion:

``` 
var a int = 2
var x float32 = float32(a)

// or

a := 2
x := float32(a)
```

### Functions

Functions in Go can be written like this:

``` 
func add(a, b int) int{
    return a+b
}
```
As you can see function parameters which have the same type can be listed specifing the type at the end. A Go function can return multiple values with the following syntax:

``` 
func swap(a, b string) (string, string){
    return b, a
}
```

## For loop

Go has only one looping construct, for:

``` 
var sum int = 0
for i:=0; i<10: i++{
    sum += i
}
```