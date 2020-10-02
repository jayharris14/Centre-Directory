var retrievedata= d3.json("employee.json")

var successFCN=function(employee)
{console.log("success"), employee, draw(employee)}

var failFCN=function(errormsg)
{
    console.log("fail")
}

retrievedata.then(successFCN, failFCN)

var draw= function(employee)
{
var rows=d3.select("#etable")
  .selectAll("tr")
  .data(employee)
  .enter()
  .append("tr")

  rows.append("td")
    .text(function(employee){return employee.lastName;})

    rows.append("td")
  .append("img")
  .attr("src", function(employees){
  return employees.photo})


      rows.append("td")
        .text(function(employee){return employee.title;})

        rows.append("td")
          .text(function(employee){return employee.unit;})

      rows.append("td")
        .text(function(employee){return employee.email;})

        rows.append("td")
          .text(function(employee){return employee.bio;})

          rows.append("td")
            .text(function(employee){return employee.phone;})

}


