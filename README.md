# ColorifyIt.js

### How to install ?
Just copy the `src/colorifyIt.js` to your project folder.

### How to use ?
 Include the script file

```html
  <script src="path/to/colorifyIt.js"></script>```
 And call the `colorifyIt()`
```javascript
  <script type="text/javascript">
    colorifyIt("target DOM object",options);
  </script>
```
> **Note:**You must give the target DOM object like jQuery;  
For id selector `"#id"`,  
For class selector `".class"`  
For tag/name selector `"tag"`


### What are the options ?
Options are parameters **object** of colorify:
```javascript
{
    backgroundType:'colorArray',
    minColorVal:200,    //Minimum r/g/b value of random color
    maxColorVal:255,    //Maximum r/g/b value of random color
    timeDelay:15,       //Delay for change the color
    timeTransition:'5', //Transition time for changing animately
    colorArray:["#ffa","#faf","#aff"] //If type is colorArray those colors will loop
}
```

|Option        |Type   |Description                                          |
|--------------|-------|-----------------------------------------------------|
|backgroundType|string |It can be `colorArray` and `randomColor`             |
|minColorVal   |integer|This is the minimum r / g / b value for random colors|
|maxColorVal   |integer|This is the maximum r / g / b value for random colors|
|timeDelay     |integer|Delay time for change colors as second               |
|timeTransition|integer|Transition time for animate color changing as second |
|colorArray    |array  |The array for random colors                          |
