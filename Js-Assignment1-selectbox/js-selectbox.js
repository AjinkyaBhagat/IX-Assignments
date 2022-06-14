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
    cell1.innerHTML=firstname.value;
    cell2.innerHTML=lastname.value;
    cell3.innerHTML=select1.value;
    cell4.innerHTML=select2.value;
    cell5.innerHTML=select3.value;
}
