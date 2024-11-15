//writing js to get the values from the users entered value another thing is to go and populate the value  into the field as well
function beforesubmit()
{
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("inputdate", inputdate.value);//check this input date getting correctly or not we write console.log.. ee value output lo string la untundi danni convert cheyali date loki mana org locale battti main en_IN(string-->date)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");//date loki convert chesaka mali locale loki convert cheyataniki using this method.. use - b/w en-IN

    outputdate.value= formattedDate;//correct format lo change chsi assign chesam 
}
