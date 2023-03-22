// let exp=2+4/2-9*5
// alert(exp)

// let names=["Umer","Hassaan","Asim"]

// let i=0
// while(i<names.length){
//     document.write(names[i]+"<br>")
//     i++
// }

// let names=["Zain","Waseem","Afnan","Aamna"]
// for(let i in names){
//     document.write(names[i]+"<br>")
// }

// let bakeryItems=["Cookies","Milk","Bread","Cakes","Eggs"]

// let user=prompt("Welcome to 2208B1 Bakery. What do you want to order sir/ma'am?")

// for(let i=0;i<bakeryItems.length;i++){
//     if(user.toUpperCase()===bakeryItems[i].toUpperCase()){
//         alert("You ordered "+bakeryItems[i])
//         break
//     }
// }



// let bakeryItems=["Cookies","Milk","Bread","Cakes","Eggs"]

// let user=prompt("Welcome to 2208B1 Bakery. What do you want to order sir/ma'am?")

// for(let i=0;i<bakeryItems.length;i++){
//     if(user===bakeryItems[i]){
       
//        continue
//     }
//     document.write(bakeryItems[i]+"<br>")
// }

// let inp=prompt("Enter a string")

// let temp=inp.length


// if(inp[temp-1].toLowerCase()==="a"){
//     document.write("Last Element is vowel")
// }
// else if(inp[inp.length-1].toLowerCase()==="e"){
//     document.write("Last Element is vowel")
// }
// else if(inp[inp.length-1].toLowerCase()==="i"){
//     document.write("Last Element is vowel")
// }
// else if(inp[inp.length-1].toLowerCase()==="o"){
//     document.write("Last Element is vowel")
// }
// else if(inp[inp.length-1].toLowerCase()==="u"){
//     document.write("Last Element is vowel")
// }
// else{
//     document.write("Last Element is not vowel")
// }

// var names=["John","David","Harry","Shahrukh"]

// names.shift()  //Deletes first element
// names.unshift("Ghalib","Jinnah")  //Adds elements at first index
// names.shift()
// names.push("Iqbal","Sir Syed") //Adds element to last index
// names.pop() //Deletes last index element
// names.splice(1,0,"Asim","Aamna","Umer","Hassaan") //Insert at any index in the array
// let copyNames=names.slice(2,4)
// document.write(copyNames)

// let sentence="I love Imran Khan"

// document.write("Original Sentence: "+sentence+"<br>")



// document.write("Replaced Sentence: "+sentence.replace("Imran Khan","Qaim ali Shah")+"<br>")

// document.write("Replaced Sentence: "+sentence.replace("I","We")+"<br>")

// let copySentence=sentence.slice(6,10)

// document.write(copySentence)

// document.write(sentence.lastIndexOf("I"))

// document.write(sentence.charAt(7))

// document.write(sentence.charCodeAt(7))


// let str = "Apple, Banana, Kiwi";
// let part = str.substring(0, 5);

// document.write(part)


// let sentence="I love Imran Khan"

// document.write("Original Sentence: "+sentence+"<br>")

// document.write("Replaced Sentence: "+sentence.replaceAll("I","We")+"<br>")


// let sentence="Cats, Dogs, Cats, Lions, Cats, Dogs"
// document.write("Replaced Sentence: "+sentence.replaceAll("Cats","Tigers")+"<br>")


// let text1 = "      Hello World!      ";
// // let text2 = text1.trim();
// // let text2=text1.trimEnd()

// document.write(text2.length)

let text = "Please locate where locate occurs!";
document.write(text.match("ate"));





