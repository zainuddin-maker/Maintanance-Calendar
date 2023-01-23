// input

var datakapa = [
    {

        from :"Wed Nov 12 2022 2:20:10",
        to : "Wed Nov 14 2022 00:00:00",
        header: "STS03,STS04",
                textbody: "110 Tanto Alam",
                id : 110
     },
     {

        from :"Wed Nov 13 2022 00:0:0",
        to : "Wed Nov 14 2022 05:00:00",
        header: "STS05",
                textbody: "109",
                id : 109
     },
     {

        from :"Wed Nov 15 2022 00:0:0",
        to : "Wed Nov 20 2022 05:00:00",
        header: "STS05",
                textbody: "109",
                id : 109
     }
]

var datamaintanance =[
        { 
            from : "Wed Nov 12 2022 20:0:0" ,
            to :"Wed Nov 13 2022 00:00:00" ,
            status : "planned",
            text : "STS03,STS PMG A",
            info : "Requested Start Time: 02/09/2022 14:00"
        },
        { 
            from : "Wed Nov 15 2022 20:20:10" ,
        to :"Wed Nov 16 2022 03:00:00" ,
        status : "finished",
        text : "STS03,STS PMG A",
        info : ""
        }
    
]
var idandposition =[
    {
        id : 109 ,
        position : 1 
    },
    {
        id : 110 ,
        position : 2
    },
    {
        id : 111 ,
        position : 4
    },


]
var listlegend = [
    {
        text: "Waiting  for Approval",
        color: "#ffda32",
        status: "waiting",
    },
    {
        text: "Requested for schedule change",
        color: "#fd6a03",
        status: "requested",

    },
    {
        text: "Planned",
        color: "#bad3f0",
        status: "planned",

    },
    {
        text: "Rejected",
        color: "#ec3a41",
        status: "rejected",

    },
    {
        text: "Finished",
        color: "#3ae96e",
        status: "finished",

    },
];

//batas input

var arraytemp = []
datakapa.forEach((element,i)=>{

    // var start = new Date(element.from)
    // var finish = new Date (element.to)
    const start = new Date (formatDate (element.from));
    const end =  new Date (formatDate (element.to));
    let loop = new Date(start);
  
    while (loop <= end) {
    //   //console.log(loop);
    //   //console.log(end);
      if ( (loop) >= (end) && loop <= start){
        
        if(makenewinteger(element.to) != makenewinteger(element.from) ){
            arraytemp.push({
                date: new Date(formatDate(loop)),
                from: makenewinteger(element.from),
                to: makenewinteger(element.to),
                header: element.header,
                textbody: element.textbody,
                id : element.id
            })
        }
       
      } else if ((loop) >= (end)){
      

        if ( makenewinteger(new Date(formatDate(loop))) != makenewinteger(element.to)){

            arraytemp.push({
                date: new Date(formatDate(loop)),
                from: makenewinteger(new Date(formatDate(loop))),
                to: makenewinteger(element.to),
                header: element.header,
                textbody: element.textbody,
                id : element.id
            })

        }

      } else if (loop <= start){
     
        arraytemp.push({
            date: new Date(formatDate(loop)),
            from: makenewinteger(element.from),
            to: 24,
            header: element.header,
            textbody: element.textbody,
            id : element.id
        })
      } else {
     
        arraytemp.push({
            date: new Date(formatDate(loop)),
            from: 0,
            to: 24,
            header: element.header,
            textbody: element.textbody,
            id : element.id
        })
      }

      let newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
    }
   

})
var arraytempmaintannce = []
datamaintanance.forEach((element,i)=>{

    // var start = new Date(element.from)
    // var finish = new Date (element.to)
    const start = new Date (formatDate (element.from));
    const end =  new Date (formatDate (element.to));
    let loop = new Date(start);
  
    while (loop <= end) {
    //   //console.log(loop);
    //   //console.log(end);
      if ( (loop) >= (end) && loop <= start){
        
        if(makenewinteger(element.to) != makenewinteger(element.from) ){
            arraytempmaintannce.push({
                date: new Date(formatDate(loop)),
                from: makenewinteger(element.from),
                to: makenewinteger(element.to),
                fromDate: (element.from),
                toDate: (element.to),
                status: element.status,
                text: element.text,
                info : element.info
            })
        }
       
      } else if ((loop) >= (end)){
      

        if ( makenewinteger(new Date(formatDate(loop))) != makenewinteger(element.to)){

            arraytempmaintannce.push({
                date: new Date(formatDate(loop)),
                from: makenewinteger(new Date(formatDate(loop))),
                to: makenewinteger(element.to),
                fromDate: (element.from),
                toDate: (element.to),
                status: element.status,
                text: element.text,
                info : element.info
            })

        }

      } else if (loop <= start){
     
        arraytempmaintannce.push({
            date: new Date(formatDate(loop)),
            from: makenewinteger(element.from),
            to: 24,
            fromDate: (element.from),
            toDate: (element.to),
            status: element.status,
            text: element.text,
            info : element.info
        })
      } else {
     
        arraytempmaintannce.push({
            date: new Date(formatDate(loop)),
            from: 0,
            to: 24,
            fromDate: (element.from),
            toDate: (element.to),
            status: element.status,
            text: element.text,
            info : element.info
        })
      }

      let newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
    }
   

})


//console.log("arraytemp")
//console.log(arraytemp)
//console.log("arraytempmaintannce")
//console.log(arraytempmaintannce)



if (idandposition.length > 0){
    var max = Math.max(...idandposition.map(o => o.position))
    if (!max){
        max =1
    }
}else {
    max = 1
}




var dataidandposition = []

for (let index = 0; index < max; index++) {
    dataidandposition.push({})
    
}


//console.log("dataidandposition")
//console.log(dataidandposition)




var datathingworxtemp= []


arraytemp.forEach((arraytempdata)=>{

  

    var key = datathingworxtemp.findIndex((datathingworxtemp)=> datathingworxtemp.date == formatDate(arraytempdata.date))

 
    if (key >=0){
        var find = idandposition.find((data)=> data.id ==  arraytempdata.id)
       

        if (find){

            datathingworxtemp[key].data[find.position -1]={
                     from: arraytempdata.from,
            to: arraytempdata.to,
            header: arraytempdata.header,
            textbody: arraytempdata.textbody,
            id : arraytempdata.id
            }
        }

    }else {
     

        var find = idandposition.find((data)=> data.id ==  arraytempdata.id)
      
        const dataidandpositiontemp = dataidandposition.slice()
      

        if (find){
            dataidandpositiontemp[find.position - 1] =    {
                from: arraytempdata.from,
            to: arraytempdata.to,
            header: arraytempdata.header,
            textbody: arraytempdata.textbody,
            id : arraytempdata.id
            }

        }

        datathingworxtemp.push({

            date: formatDate(arraytempdata.date),
            data :dataidandpositiontemp,
            maintenance: {
          
            }

        })
    }

})

arraytempmaintannce.forEach((arraytempmaintanncedata)=>{

    
    var key = datathingworxtemp.findIndex((datathingworxtemp)=> datathingworxtemp.date == formatDate(arraytempmaintanncedata.date))
   
    if (key >=0){

        datathingworxtemp[key].maintenance = {

            from : arraytempmaintanncedata.from ,
            to : arraytempmaintanncedata.to,
            fromDate: (arraytempmaintanncedata.fromDate),
            toDate: (arraytempmaintanncedata.toDate),
            status : arraytempmaintanncedata.status,
            text : arraytempmaintanncedata.text,
            info : arraytempmaintanncedata.info

        }

    }else {

       
       
        datathingworxtemp.push({

            date: formatDate(arraytempmaintanncedata.date),
            data :dataidandposition,
            maintenance: {
                from : arraytempmaintanncedata.from ,
                to : arraytempmaintanncedata.to,
                fromDate: (arraytempmaintanncedata.fromDate),
                toDate: (arraytempmaintanncedata.toDate),
                status : arraytempmaintanncedata.status,
                text : arraytempmaintanncedata.text,
                info : arraytempmaintanncedata.info
            }

        })

    }
})
//console.log("datathingworxtemp")
//console.log(datathingworxtemp)

var datathingworx = [
    {
        date: "Sat 12 Nov 2022",
        data: [
            {
                from: 2,
                to: 23.5,
                header: "STS03,STS",
                textbody: "110",
                isblack : false ,
                id : 110
            },
          
            {}
            ,
            {}
            ,
            {
                from: 0,
                to: 12,
                header: "STS03",
                textbody: "109",
                isblack : false ,
                id : 109
            },

       
            
        
        ],

        maintenance: {
            from : 1 ,
            to :3 ,
          status : "planned",
          text : "x,y",
          info : "x,y"

        },
    },
    
];



var head_of_div = d3
    .select("body")
    .append("div")
    .attr("class", "head-of-div")
    .style("background-color","#000")
    .style("padding-bottom","34px")
    .style("min-width",  datathingworxtemp.slice(0, 7).length * 220 + 70 +"px"
     );
    

var first_div_legend = head_of_div
    .append("div")
    .attr("class", "first-div-legend")
    


listlegend.forEach((data, i) => {
    var first_legend_child = first_div_legend
        .append("div")
        .attr("class", "first-legend-child");

    first_legend_child
        .append("div")
        .attr("class", "square-legend")
        .style("background-color", data.color);
    first_legend_child
        .append("div")
        .attr("class", "text-legend")
        .text(data.text);
});

var second_div_legend = head_of_div
    .append("div")
    .attr("class", "second-div-legend");
var row_for_time_clock = second_div_legend
    .append("div")
    .attr("class", "row-for-time-clock");
row_for_time_clock.append("div").attr("class", "black-box");

for (let index = 0; index < 25; index++) {
    row_for_time_clock
        .append("div")
        .attr("class", "box-content-time")
        .text(function () {
            return index < 10 ? "0" + index + ":00" : index + ":00";
        });
}

function formatDate(date) {
    var thisdate = new Date(date);

    var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var dayOfWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var nameday = dayOfWeekNames[thisdate.getDay()];
    var namemonth = monthNames[thisdate.getMonth()];
    var date =
        thisdate.getDate() < 10 ? "0" + thisdate.getDate() : thisdate.getDate();
    var year = thisdate.getFullYear();

    var fullformat = nameday + " " + date + " " + namemonth + " " + year;

    return fullformat;
}


// //console.log(new Date("Wed Nov 9 2022 24:00:00"))



function makenewinteger(date) {
    var newdate = new Date(date)
    var newhour = newdate.getHours()
    var newminute = newdate.getMinutes()
    var newsecond = newdate.getSeconds()
    var newinteger = (newhour*3600 +newminute*60 +newsecond)/3600

   
    return newinteger
}






function makenewcolumn(elementchild, maintanance) {
    var newarrayloop = [];

    if (elementchild.from > 0) {
        newarrayloop.push({
            from: 0,
            to: elementchild.from - 1,
            header: "",
            textbody: "",
            isblack: true,
        });
    }

   

    if (maintanance.status) {

        if ((maintanance.from >= elementchild.from && maintanance.from <= elementchild.to)||(maintanance.to >= elementchild.from && maintanance.to <= elementchild.to)){

            ////console.log("masuk syarat")
            var syaratatas = maintanance.from - (elementchild.from  )
            var syaratbawah = elementchild.to - maintanance.to

            var overlapseheader = maintanance.to - elementchild.from 
            var distancegreen = elementchild.to - elementchild.from

            var bottomover = elementchild.to - maintanance.from
            ////console.log("syaratatas")
            ////console.log(syaratatas)
            ////console.log("syaratbawah")
            ////console.log(syaratbawah)
            ////console.log("overlapseheader")
            ////console.log(overlapseheader)
            ////console.log("distancegreen")
            ////console.log(distancegreen)
            ////console.log("bottomover")
            ////console.log(bottomover)


            if (syaratbawah> (syaratatas  ) ){

                if ( syaratatas < 2 ){

                    newarrayloop.push(  {
                        from: elementchild.from,
                        to: elementchild.to ,
                        header: elementchild.header,
                        textbody: elementchild.textbody,
                        padding  : overlapseheader +1
                          },)
                }else {
                    newarrayloop.push(  {
                        from: elementchild.from,
                        to: elementchild.to ,
                        header: elementchild.header,
                        textbody: elementchild.textbody,
                        margintop : distancegreen - syaratbawah +1 -2
                          },)
                }

            }else {
                newarrayloop.push(  {
                    from: elementchild.from,
                    to: elementchild.to ,
                    header: elementchild.header,
                    textbody: elementchild.textbody,
                    marginbottom : bottomover + 1
                      },)

            }

           
        }else {
            newarrayloop.push(  {
                from: elementchild.from,
                to: elementchild.to ,
                header: elementchild.header,
                textbody: elementchild.textbody
                  },)
        }

              
    }else{
        newarrayloop.push(elementchild);
    }

   

    if (elementchild.to < 24) {
        newarrayloop.push({
            from: elementchild.to + 1,
            to: 24,
            header: "",
            textbody: "",
            isblack: true,
        });
    }

    ////console.log("newarrayloop");
    ////console.log(newarrayloop);
    ////console.log(maintanance);
    ////console.log("newarrayloop");
    return newarrayloop;
}


datathingworxtemp.slice(0, 7).forEach((element, i) => {
    var row_data_and_amintanance = second_div_legend
        .append("div")
        .attr("class", "row-data-and-amintanance");
    row_data_and_amintanance
        .append("div")
        .attr("class", "header-data-maintannace")
        .text(formatDate(element.date));

    var data_per_column = row_data_and_amintanance
        .append("div")
        .attr("class", "data-per-column");

   

    element.data.forEach((elementchild, j) => {
       
        var newarrayloop = [];
    
        if (!elementchild.id){
           

            newarrayloop = [  {
                from: 0,
                to: 24,
                header: "",
                textbody: "",
                isblack : true ,
               
            }]
        }else {
            newarrayloop = makenewcolumn(elementchild, element.maintenance);
        }

       

        var data_maintance_and_clock = data_per_column
            .append("div")
            .attr("class", "data-maintance-and-clock")
            .style("width", function () {
                return element.data.length < 4
                    ? "calc((1/4)*100%)"
                    : "calc((1/" + element.data.length + ")*100%)";
            });

        newarrayloop.forEach((datanewarrayloop) => {
            
            if (!datanewarrayloop.isblack) {

                var padding = 0
                var margintop = 0
                var marginbottom= 0

                padding = datanewarrayloop.padding ? datanewarrayloop.padding : 0
                margintop = datanewarrayloop.margintop ? datanewarrayloop.margintop : 0
                marginbottom = datanewarrayloop.marginbottom ?  datanewarrayloop.marginbottom : 0
               
                var one_colum_parsial = data_maintance_and_clock
                    .append("div")
                    .attr("class", "one-colum-parsial")
                    .style("padding-top", padding*20 + "px")
                    .style(
                        "height",
                        (datanewarrayloop.to - datanewarrayloop.from + 1) * 20 +
                            "px"
                    );

                if ((datanewarrayloop.header).split(",").length > 0) {
                    var box_of_tittle = one_colum_parsial
                        .append("div")
                        .attr("class", "box-of-tittle")
                        .style(
                            "height",
                            datanewarrayloop.to - datanewarrayloop.from > 0
                                ? "40px"
                                : "20px"
                        );

                    (datanewarrayloop.header).split(",").forEach((data) => {
                        box_of_tittle.append("div").text(data);
                    });
                }

                if (datanewarrayloop.textbody) {
                    if (datanewarrayloop.to - datanewarrayloop.from > 1) {

                        var heightextbody = (datanewarrayloop.to -
                        (datanewarrayloop.from + 2) +
                        1) *
                        20 + -padding*20 - margintop*20 - marginbottom*20

                        if ( heightextbody > 0 ){
                            one_colum_parsial
                            .append("div")
                            .attr("class", "rotate-box-text")
                            .style("margin-top", margintop*20+"px")
                            .style(
                                "height",
                                (datanewarrayloop.to -
                                    (datanewarrayloop.from + 2) +
                                    1) *
                                    20 + -padding*20 - margintop*20 - marginbottom*20 +
                                    "px"
                            )
                            .text(datanewarrayloop.textbody);
                        }
                        
                    }
                }
            } else {
                data_maintance_and_clock
                    .append("div")
                    .attr("class", "black-segemnt")
                    .style(
                        "height",
                        (datanewarrayloop.to - datanewarrayloop.from + 1) * 20 +
                            "px"
                    );
            }
        });
    });

    if (element.maintenance.status) {
        var colorstatus = listlegend.find((datalistlegend)=> datalistlegend.status == element.maintenance.status ) ? listlegend.find((datalistlegend)=> datalistlegend.status == element.maintenance.status ).color : "#000"

        var maintanance_box = row_data_and_amintanance
            .append("div")
            .attr("class", "maintanance-box")
            .style(
                "height",
                (element.maintenance.to - element.maintenance.from + 1) * 20 +
                    "px"
            )
            .style("background-color", colorstatus)
            .style(
                "top",
                "calc(31px + " + (element.maintenance.from * 20)  + "px)"
            )
            .style("cursor", "pointer")
            .on("click", function () {
                thisActiveMaintanance(element.maintenance);
                ////console.log(" ////console.log(element.maintenance)");
                ////console.log(element.maintenance);
            });

        (element.maintenance.text).split(",").forEach((text) => {
            maintanance_box
                .append("div")
                .attr("class", "text-maintanance")
                .text(text);
        });

        if (element.maintenance.info){

          

            var info_maintanance = maintanance_box
            .append("div")
            .attr("class", "info-maintanance");
        info_maintanance
            .append("span")
            .attr("class", "tooltipText")
            .text(element.maintenance.info);
        info_maintanance
            .append("img")
            .attr(
                "src",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgBvVfNTxNREB+o2qJ8LLRQwqpdAhETgTSREsQEiokBExPgqBfrSRMPlr+g4ehJvHjxYDnhxUgPKpxYOBVrdLH4UdPKcmiFhJZKIbSmGGfKlizlo7tb4Je8vt19r+83M2/evJkiUAin08lhN4CtG5sVGycbFrDFsXmwjY+MjIhK1izKNwFJ7di5DPq0vf3SMjSycWBNG1BZltyZE4meg9iaAfwLJghGKmA1YeDx8zMUYlwTuaTpSySx370RgIa6P6AUHwJmmPRZSAg3vg4fZImiA4jJrFO9tkWmt20RtGLyo4WEEPFxEAUQcsd1uR+GhobuoYknHtz2G2xNy1AIGtFaDWycmRdND23t10Wv1zt3IDlpTMSP+ufAYk7AUaCqLAWXL8ZACFbbr9o6J1GApexYsYyYw+7NnZ4AsMYNOErQeo6+rwytjzzMHnKEC/eYa6mPghJspk7Bu9nzMPu9WtF82oKu1jCHj093kZPW6NWOrpYwKMVmSgfvZy+A95sycgI5b4k+7ZCO747mLmkAjhO0vqSgK0NOWpM0Ss1dKND0JISd9p40t1MAOW6tsyCeZi6j6ACRdzdzK6AVxoq/oBasaZ26biK3GsuTcJJoqKM7CKxEztUd8bnOBwo8xEvkzEntdxYSH1MMGlGi34JCQeRxilbqydNQVZ6CkjPqrSbxxelXjCUMVla/Dmox7PgEWhCOllInkuZzIcw+tIAXaiG6pge1WE1k/iMQOR9eOQdqQRfK65l6eDLWCmrh/2WkbprIx/GyB7X7Lh0XOKvS8Ygn9Dtzq/I6vNyTbbZO+2ndP66RVZ6nGdHZeqxLcLNN+U1IEELV8DlY48a0ajR71IZn/Kxq7dXGB1qfEkvio58MOUrB48AoJXzHiZkvLODJcmezWXmQceKgGNTo+fkwv2CkbFYESetd5CgNRftB98SVuBbvPwxhLCrGpprocVCew+/KXimzxAxzWQjVDFjMazseXQiCEQZevG2h/b6PxBPysT15OwogoPd7fIHaPnxl1JyAXJBzvZpqiqe3iq/lEu9LLgmw1NHR4QlFmEpfwGyl+E31mVKQts89rYDxg8fXW0j8Y795SgpFqkwfV2HNRklAc30MtyOZzUYyQA+G8EophMIV4PtpJhPzsF2j8YetnZdcJgQH2yVyPzYKUVbZsAjbZfI0qCiR/wMuf1i7K34ogAAAAABJRU5ErkJggg==")
            .style("width", "20px")
            .style("color", "#ffdb31");
        }

       
    }
});


const thisActiveMaintanance =(datamaintannce) => {

    console.log("datamaintannce")
    console.log(datamaintannce)
    // this.setProperty("DataListText", {
    //     dataShape: datashapedatatextlist,
    //     rows: listext,
    // });

}
