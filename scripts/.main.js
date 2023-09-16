/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;/* taking size given by user into a variable*/ 
var inp_gen=document.getElementById("a_generate");/*taking if user want to have a new array in a variable*/
var inp_aspeed=document.getElementById("a_speed");/* taking speed given by user into a variable*/ 


var butts_algos=document.querySelectorAll(".algos button");/*The querySelectorAll() method returns all elements that matches a CSS selector(s).*/

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");/* storing dynamically allocated values of array_container into cont variable*/ 
cont.style="flex-direction:row";/*The flexible items are displayed horizontally, as a row */

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);/*on click of array generate button it will excecute generate_array function */
inp_as.addEventListener("input",update_array_size);/*taking input from array_size button it will excecute update_array_size function */

function generate_array()
{
    cont.innerHTML="";/*This line clears the inner HTML content of the element.  */

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:brown; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";

    }
}

function update_array_size()/*update array size as per input */
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();/*This is a common technique used to ensure that certain code or functions run only after the entire web page has loaded. */

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
