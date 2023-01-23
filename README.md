<h1 align="center"  style="font-weight:bold;" >
  <br>
  <!-- <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a> -->
  <br>
  Maintanance Calendar
  <br>
</h1>

> Data input from thingworx application .

<!-- <h4 align="center">A minimal Markdown Editor desktop app built on top of <a target="_blank">Electron</a>.</h4> -->

![Chat Preview](https://github.com/zainuddin-maker/Maintanance-Calendar/blob/master/App.PNG?raw=true)

<!-- ![screenshot](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/Convert_excel_to_JSON.mp4?raw=true) -->

This application is used for mapping the maintenance schedule of the ship against the schedule for the ship to dock at the port.

## Example Data

-   Berthing Data

        [
            {
                from: "2023-01-18T07:00:00.000Z",
                to: "2023-01-18T08:00:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat",
                id: 110,
                effective: false,

            },
            {
                from: "2023-01-18T08:00:00.000Z",
                to: "2023-01-18T09:15:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat",
                id: 110,
                effective: true,
            },
            {
                from: "2023-01-18T09:15:00.000Z",
                to: "2023-01-18T09:45:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat",
                id: 110,
                effective: false,
            },
            {
                from: "2023-01-18T09:45:00.000Z",
                to: "2023-01-18T11:15:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat",
                id: 110,
                effective: true,
            },
            {
                from: "2023-01-18T11:15:00.000Z",
                to: "2023-01-18T14:18:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat",
                id: 110,
                effective: false,
            },
            {
                from: "2023-01-18T14:18:00.000Z",
                to: "2023-01-18T17:18:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat",
                id: 110,
                effective: true,
            },

            {
                from: "2023-01-20T13:00:00.000Z",
                to: "2023-01-21T09:00:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat",
                id: 110,
                effective: true,
            },

            {
                from: "2023-01-22T01:00:00.000Z",
                to: "2023-01-23T08:00:00.000Z",
                header: "STS 03",
                textbody: " - Tanto Sehat Tanto Sehat Tanto Sehat Tanto Sehat",
                id: 111,
                effective: true,
            },
        ]

-   Maintanance Data

        [
            {
                from: new Date("Jan 18 2023 15:59:59"),
                to: new Date("Jan 18 2023 17:59:59"),
                id: "109,110,111,112",
                idmaintanance: 3,
                status: "finished",
                imgstatus: "./icon.png",
                text: "STS02, STS PM BRAKE",
            },
            {
                from: new Date("Jan 22 2023 14:59:59"),
                to: new Date("Jan 22 2023 15:59:59"),
                id: "111,112",
                idmaintanance: 3,
                status: "waiting",
                imgstatus: "./icon.png",
                text: "STS02, STS PM BRAKE",
            },
            {
                from: new Date("Jan 21 2023 8:59:59"),
                to: new Date("Jan 21 2023 12:39:59"),
                id: "109,110,111,112",
                idmaintanance: 4,
                status: "requested",
                imgstatus: "",
                text: "STS02,STS PREADER",
            },
            {
                from: new Date("Jan 23 2023 5:59:59"),
                to: new Date("Jan 23 2023 10:39:59"),
                id: "109,110,111,112",
                idmaintanance: 4,
                status: "rejected",
                imgstatus: "./icon2.png",
                text: "STS02,STS PREADER",
            },
        ]

-   Id and Position

        [
            {
                id: 109,
                position: 1,
            },
            {
                id: 110,
                position: 2,
            },
            {
                id: 111,
                position: 3,
            },
            {
                id: 112,
                position: 4,
            },
            {
                id: 113,
                position: 5,
            },
        ];

-  List Legend

        [
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

## Usage example

<table>
<tr>
<td>


There are 2 data bars in the form of a timeline, namely berthing data and maintenance data.

For berthing data, there are 2 types, namely effective and ineffective which are distinguished by color, the effective one is light blue, and the ineffective one is dark gray, and this data berhing can be hovered over and displays the berthing data.

![Chat Preview](https://github.com/zainuddin-maker/Maintanance-Calendar/blob/master/hovervassel.PNG?raw=true)

we can set the location of the ship based on id and position data

For maintenance data, it is used to display the maintenance schedule and also its status, status based on the input legend provided, and its color based on the status matched to the legend. and on the maintenance label you can input an image. in the maintenance section you can click and output the maintenance data. and also in this section you can hover and display data maintenance information

![Chat Preview](https://github.com/zainuddin-maker/Maintanance-Calendar/blob/master/hovermain.PNG?raw=true)

And also if the data is on today then the calendar header will change color to gray, and there is an hour pointer for the current situation.

![Chat Preview](https://github.com/zainuddin-maker/Maintanance-Calendar/blob/master/Today.PNG?raw=true)


</td>
</tr>
</table>

<!-- ## BIND DATA

1.  JSONDocinformation , input - JSON - Data for Doc Information in header


        {
            name: (STRING),
            value: (STRING),
        }



2.  JSONHeaderinformation, input - JSON - Data for Headerinformation in header.


        {
            name: (STRING),
            value: (STRING),
        }

3.  ConfigurationWidth, input - INFOTABLE - Configuration widht each of column in excel.


        {
            width: (STRING),
        }


4.  BooleanDisplayButton , input -BOOLEAN - Input for button seen or not
5.  Filename , input - STRING - name of file after exported
6.  Headername , input - STRING - the title in template document.
4.  LabourProductivity , input - INFOTABLE - Data for Labour Productuvity

        {
            name: (STRING),
            value: (STRING),
            unit:  (STRING),
         }

5.  DataAddChangeMaintanance , input - INFOTABLE - List of Change of Maintanance .

        datashape :
        {
            changefrom : (DATE),
            idmaintanance : (NUMBER),
        }

6.  DataClickMaintanance , output - INFOABLE - Data out after click maintanance .

        datashape :
        {
            form : (DATE) ,
            to : (DATE),
            id : (STRING),
            idmaintanance : (NUMBER),
            imgstatus : (STRING),
            status : (STRING),
            text : (STRING),
        }

7.  idRandom , input - STRING - Random ID for Application
8.  HeightOfHeader , input - NUMBER - change height of header tittle

## BIND TRIGGER

1. clickMaintanance, out - "Event triggered when clicked the maintanance"
1. updateMaintanance, in - "Event triggered when maintanance updated"


 -->

## Built with

-   [D3.js](https://d3js.org/) - D3.js is a JavaScript library for manipulating documents based on data.
-   [html](https://www.w3schools.com/html/) - HTML is the standard markup language for Web pages.
-   [css](https://www.w3schools.com/css/) - CSS is the language we use to style an HTML document
