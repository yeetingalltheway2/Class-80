var name_array = [];
function submit(){
   display_name=[];
   for (var i= 1; i<=4; i++){
       var name =document.getElementById("name_of_the_student_"+i).value;
       console.log(name);
       name_array.push(name);
   }
   console.log(name_array)
   var name_length= name_array.length
   console.log(name_length)
   for(var k= 0; k<name_length; k++)
   {
       display_name.push("<h4>name-"+name_array[k]+"</h4>");
   }
   console.log(display_name)
   document.getElementById("display_name_with_commas").innerHTML=display_name;
   var removing_comma=display_name.join("");
   document.getElementById("display_name_without_commas").innerHTML=removing_comma;
   document.getElementById("submit_button").style.display="none"
   document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    name_array.sort()
    var display_sort=[]
    var name_length= name_array.length
    console.log(name_length)
    for(var k= 0; k<name_length; k++)
    {
        display_sort.push("<h4>name-"+name_array[k]+"</h4>");
    }
    console.log(display_sort)
    document.getElementById("display_name_with_commas").innerHTML=display_sort;
    var removing_comma=display_sort.join("");
    document.getElementById("display_name_without_commas").innerHTML=removing_comma;
}
