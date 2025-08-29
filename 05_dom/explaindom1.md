so here is the explanation of Document Object Model(DOM) | 


What Is a DOM?
Think of a web page as a document. When a browser loads this document, it creates a DOM tree. Every element, attribute, and piece of text in the HTML becomes a node in the tree. The DOM provides an organized, hierarchical view of the document's content.



The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs like JavaScript can manipulate it. The DOM is not part of the HTML or CSS code itself; rather, it is a structured, tree-like representation of the document that allows a script to access and change the content, structure, and style of a web page.


The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects (nodes), so that programming languages like JavaScript can interact with and manipulate the content, structure, and styles of the page.

Think of DOM as a bridge between web pages (HTML/CSS) and programming (JavaScript).


***

![DOM TREE](https://github.com/aaf-abdullah/JS-Hitesh-by-Abdullah/blob/c60721cd7135c309f0b379396eebf49119712cdf/Screenshot%202025-08-28%20115638.png)


---

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>DOM Introduction</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff
        }
    </style>
</head>
<body class="bg-black">
    <div >
        <h1 id = 'title' class = 'heading'>DOM Learning on chai aur code<span style="display: none;">Text Added</span></h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <input type="password" name=" " id="">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
        <ul>
            <li class="list-item">ONE</li>
            <li class="list-item">TWO</li>
            <li class="list-item">THREE</li>
            <li class="list-item">FOUR</li>
            <li class="list-item">FIVE</li>
        </ul>
    </div>
</body>
</html>


```

***









```javascript


//how to select element using id

document.getElementById('titile')

<h1 id = 'title' class = 'heading'>DOM Learning on chai aur code<span style="display: none;">Text Added</span></h1>
//so here is delect the document of the web page and then using getELementById method we select the id name title,after selec this they give me this html tag

document.getElementById('titile').id
'title'

document.getElementById('titile').class
undefined //class doesnt access this way

document.getElementById('titile').className
'heading' // so in js behind the seen class is read by class name.uses in react

document.getElementById('titile').getAttribute
f getAttribue() //is a function.so pass the key and they give me the value.

document.getElementById('titile').getAttribute('id')
'title'
document.getElementById('titile').getAttribute('class')
'heading'


------

//so in set attribute we set the attribute like this
document.getElementById('titile').setAttribute('class', "test" )
//so this always overwrite the existing attribute 

document.getElementById('titile').setAttribute('class', "test", 'heaidng' )

const title = (document.getElementById('titile'))
//undefinned //so this way we hold in a varible


title
<h1 id = 'title' class = 'heading'>DOM Learning on chai aur code<span style="display: none;">Text Added</span></h1>

title.style.backgroundcolor = 'blue'
'bule'//sp when we change this in our we page manuoylate and adding the color we write.
title.style.padding = '44px'
'44px'
title.style.borderRadius = 33px'
'33px'







----
//how add content

title.textContent
'DOM Learning on chai aur code'
title.innerHTML
'DOM Learning on chai aur code'
title.innerText
'DOM Learning on chai aur code'


//the difference between innerCotent and innerText || so we add the span tag and write Added Text,and then again we see the value of the inner content.when display none style add ,dissipear from the web page but show in 

title.innerText
'DOM Learning on chai aur code'
title.textContent
'DOM Learning on chai aur code Added Text'

title.innerHTML
"DOM Learning on chai aur code<span style="display: none;">Text Added</span>"





---
//SOME Selectors || QUERY SELECTOR

document.querySeletor('h1') //so this select the first h1 of the pages
<h1 id = 'title' class = 'heading'>DOM Learning on chai aur code<span style="display: none;">Text Added</span></h1>


document.querySeletor('h2')

document.querySeletor('#title') //so similerr to the css,to using # to select the id.
<h1 id = 'title' class = 'heading'>DOM Learning on chai aur code<span style="display: none;">Text Added</span></h1>

document.querySeletor('.heading') //so again we select the class by using dot and then class name.
<h1 id = 'title' class = 'heading'>DOM Learning on chai aur code<span style="display: none;">Text Added</span></h1>



document.querySeletor('input[type='password'])


document.querySeletor('ul')
<ul>full ul select</ul>
const myUl = document.querySeletor('h2')

myul.querySelector('li') //select the  1st li item
<li>1st item</li>

const turnBlue = myul.querySelector('li')
turnBlue.style.backgrounfColor = 'blue'

trunBlue.innertext= 'six' //changes



---
//how to select all element BY USING QUERY SELECTOR ALL

document.querySeletorAll('li') //so this select all the list in a nodelist form kinda like a array but not pure arrray.hae for each loop property but not the other like map filter etc.

const tempLilist = document.querySeletorAll('li') //hold in a variable that nodelist.

tempLiList.style.color = 'green' //this time not going to green bcz this is nodelist not array but still nodelist.

tempLiLIst[0].style.color = 'orange' //so this time change bcz of i defined which element can be manupulated.array like property oth elemnet is turn into orange.


//so using this selector we have defiend which element we change.

tempLiList.forEach( functin(l) {
    l.style.backgroundColor = 'blue'
} ) //implimented





---

//Another Selector Using get element by class name.


document.getElementByClassName('heading')//HTMLCollection


document.getElementByClassName( 'list-item') //so this selector give me the HTML collecion og those which i select by class name.so this is not array or nodelist that why we dont apply for each map or something.first of all we need to convert the html collection to  an array

cosnt tempClassList = document.getElementByClassName( 'list-item') 
tempClassList.forEach( Function ) //this is doesnt apply on this

Array.from(tempClassList) //so aray this method converted to an array 
const myConvertedArray = Array.from(tempClassList)  //hold in variable the converted array so here all mathod use which give an array

myConvertedArray.forEach( function(l) {
    l.style.color = 'red'
    l.style.backgroundColor = 'green'
    l.style.padding = '11px'

}) //implemened 



----


//MANUPULATED  WIKIPEDIA IN BROWSER USING UPPER SELECTOR || DO IT YOURSELF FOR PRACTISE  || //



```
