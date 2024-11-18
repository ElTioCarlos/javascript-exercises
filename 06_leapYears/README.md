# Exercise 06 - leapYears

Cree una función que determine si un año determinado es o no un año bisiesto.Los años de salto están determinados por las siguientes reglas:

> Los años salas son años divisibles por cuatro (como 1984 y 2004).Sin embargo, los años divisibles por 100 no son años saltes (como 1800 y 1900) a menos que sean divisibles por 400 (como 1600 y 2000, que en realidad fueron años saltados).(Sí, todo es bastante confuso)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```


## Hints
- use an `if` statement and `&&` to make sure all the conditions are met properly
