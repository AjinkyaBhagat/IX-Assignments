function validation(){
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let age=document.getElementById('age').value;
    let email=document.getElementById('email').value;
    

    
    if(firstname == ''){
        document.getElementById('first').innerHTML="please dont keep empty";
        return false;
    }
    if((firstname.length <= 2)|| (firstname.length >20)){
        document.getElementById('first').innerHTML="Inavlid Name";
        return false;
    }
    if(!isNaN(firstname)){
        document.getElementById('first').innerHTML="Enter only Characters";
        return false;
    }

    if(lastname == ''){
        document.getElementById('last').innerHTML="please dont keep empty";
        return false;
    }
    if((lastname.length <= 2)|| (lastname.length >20)){
        document.getElementById('last').innerHTML="Inavlid Name";
        return false;
    }
    if(!isNaN(lastname)){
        document.getElementById('last').innerHTML="Enter only Characters";
        return false;
    }
    // name validations done

    if(age == ''){
        document.getElementById('age-span').innerHTML="please dont keep empty";
        return false;
    }
    if(age <= 18 ||age >= 100){
        document.getElementById('age-span').innerHTML="Age should be grater than 18 and less than 100";
        return false;
    }
    if(isNaN(age)){
        document.getElementById('age-span').innerHTML="Enter Number Only";
        return false;
    }

    // email validations
    if(email == ''){
        document.getElementById('email-span').innerHTML="please dont keep empty";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('email-span').innerHTML="Inavlid email";
        return false;
    }
   
    
}








const firstname=document.getElementById(firstname).value;
function checkAge(age){
    var age=document.getElementById("age").value;
    if(age<=18 || age>=100){
     alert("not valid age ")
   }

}
// selectbox
function populate(s1,s2){
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTML ="";
    if(s1.value == "india"){
        var optionArray =['maharastra|Maharastra','delhi|Delhi'];
    }
    else if(s1.value == "canada"){
        var optionArray =['victoria|Victoria','vancover|Vancover'];
    }
    for(let option in optionArray){
        let pair =optionArray[option].split("|");
        let newoption=document.createElement("option");
        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        s2.options.add(newoption);
    }
}
function populate2(s2,s3)
{
    var s2=document.getElementById(s2);
    var s3=document.getElementById(s3);
    s3.innerHTML="";
    if(s2.value == "maharastra"){
        console.log("maharashtra");
        var optionArray=['pune|Pune','mumbai|Mumbai'];
    }
    else if(s2.value == "delhi"){
        console.log("delhi");
        var optionArray=['gurugram|Gurugram','faridabad|Faridabad'];
    }
    if(s2.value == "victoria"){
        console.log("victoria");
        var optionArray=['colwood|Colwood','saanich|Saanich'];
    }
    else if(s2.value == "vancover"){
        console.log("victoria");
        var optionArray=['north Vancouver|NorthVancouver','downtown Vancouver|DowntownVancouver'];
    }
    for(let option in optionArray)
    {
        let pair=optionArray[option].split("|");
        let newoption=document.createElement("option");
        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        s3.options.add(newoption);
    }
}
function addtotable()
{
    let firstname=document.getElementById('firstname');
    let lastname=document.getElementById('lastname');
    let age=document.getElementById('age');
    let email=document.getElementById('email');
    let select1=document.getElementById('select1');
    let select2=document.getElementById('select2');
    let select3=document.getElementById('select3');
    let tablebody=document.getElementById('table-body');
    // insert in table
    let row=tablebody.insertRow(0);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    let cell5=row.insertCell(4);
    let cell6=row.insertCell(5);
    let cell7=row.insertCell(6);
    cell1.innerHTML=firstname.value;
    cell2.innerHTML=lastname.value;
    cell3.innerHTML=age.value;
    cell4.innerHTML=email.value;
    cell5.innerHTML=select1.value;
    cell6.innerHTML=select2.value;
    cell7.innerHTML=select3.value;
}
