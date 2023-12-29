let json = {
    "data":[
        {
            "name": "Paari",
            "month" : "October",
            "year" : "1992"
        }
    ]
}

let data = json.data
for(let i=0;i<data.length;i++);
console.log(data[0])

let data = json.data
for(let i in data)
{
    let name = data[i].name
    let month = data[i].month
    console.log(name)
    console.log(month)
}

let data = json.data
for(let i of data){
    console.log(i.name, i.month, i.year)
}

json.data.forEach(print)

function print(value){
    console.log(value.name, value.year,value.month)
}
