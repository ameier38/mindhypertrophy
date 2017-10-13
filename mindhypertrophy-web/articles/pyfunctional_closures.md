# Functional pipelines in Python
Out of the box, Python does not have support for building pipelines. When
working with data this is incredibly helpful for visualizing the flow and
understanding transformations that are applied.

## Pipelines in C#
In C#, the Fluent syntax allows you to build pipelines such as:
```csharp
int[] amounts = { 1, 2, 3, 4 };
amounts
	.Where(a => a < 4)
	.Select(a => new { name = "andy", amount = a })
	.Dump();
```
```
name    amount
andy    1
andy    2
andy    3
```

## Pipelines in F#
Or in F# using pipes:
```fsharp
type AmountRecord = {
    name: string
    amount: int }
    
seq {1 .. 4}
|> Seq.filter (fun a -> a < 4)
|> Seq.map (fun a -> {name = "andy"; amount = a})
|> Dump
```
```
name    amount
andy    1
andy    2
andy    3
```

## Equivalent in Python without pipelines
In order to do the same thing in Python we would do
```python
amounts = [1, 2, 3, 4]
[{'name': 'andy', 'amount': a} for a in amounts if a < 4]
```
```
[{'amount': 1, 'name': 'andy'},
 {'amount': 2, 'name': 'andy'},
 {'amount': 3, 'name': 'andy'}]
 ```

 While the syntax in Python is succinct, it can become quite cumbersome as
 you need to add multiple filters, additional mappings, and any reductions.

 ## PyFunctional library
[PyFunctional](https://github.com/EntilZha/PyFunctional) is great library which allows you to build pipelines in Python in the same way we did with the C# and F# examples above.
```python
In [36]: (seq(1, 2, 3, 4)
    ...:     .filter(lambda a: a < 4)
    ...:     .map(lambda a: {'name': 'andy', 'amount': a}))
Out[36]: [{'name': 'andy', 'amount': 1}, 
          {'name': 'andy', 'amount': 2}, 
          {'name': 'andy', 'amount': 3}]
```

# Closures in Python
A closure is a persistent scope which maintains the state of variables
in a function even after execution. Closures are helpful in a functional
paradigm since it allows a function to be passed around while maintaining
and internal state. A simple example of this would be a counter. In Python
we can do this using a nested function and the `nonlocal` keyword.
```python
In [1]: def counter():
   ...:     cnt = 0
   ...:     def inner():
   ...:         nonlocal cnt
   ...:         cnt += 1
   ...:         return cnt
   ...:     return inner
   ...:
In [2]: my_counter = counter()
In [3]: [my_counter(), my_counter(), my_counter()]
Out[3]: [1, 2, 3]
```

A more practical example would be 'using up' discrete quantities against
a balance. In the following example I am applying tokens to a balance
and returning the remaining amount of the token.
```python
In [1]: balance = 10
In [2]: tokens = seq(1, 3, 4, 7)
In [3]: def apply_token(initial_balance):
   ...:     remaining_balance = initial_balance
   ...:     def inner_apply_token(token):
   ...:         nonlocal remaining_balance
   ...:         if remaining_balance:
   ...:             apply_amount = min(remaining_balance, token)
   ...:             remaining_balance -= apply_amount
   ...:             return token - apply_amount
   ...:         else:
   ...:             return token
   ...:     return inner_apply_token
   ...:
In [4]: tokens.map(apply_token(balance))
Out[4]: [0, 0, 0, 5]
```

PyFunctional extends the power of Python as a data analysis tool and makes
it much cleaner and easier to build data pipelines. Combine it with the use
of closures and complex transformations become much easier to work with
and visualize.