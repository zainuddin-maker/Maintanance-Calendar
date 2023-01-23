    
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
<!-- ![screenshot](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/Convert_excel_to_JSON.mp4?raw=true)

https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/Convert_excel_to_JSON.mp4 -->



This application is used for tracking truck locations in 2D images that have been integrated with the actual map 
with position input in longitude and latitude.

<!-- ![Chat Preview](https://github.com/zainuddin-maker/Location-Tracking/blob/master/ImginMap.PNG?raw=true) -->


## Example Data
- Data Legend

        [
            {
                text: "In Motion",
                status: "inmotion",
                color: "#00828c",
            },
            {
                text: "Idle",
                status: "idle",
                color: "#fed932",
            },
            {
                text: "Queeing",
                status: "1ueeing",
                color: "#fd6a03",
            },
            {
                text: "Parked",
                status: "parked",
                color: "#e1383f",
            },
        ]

- Data Location 

        [
            {
                status: "idle",
                position: "-6.10228,106.88023",
                id: 1,
                number: "05",
            },
            {
                status: "inmotion",
                position: "-6.10418,106.88023",
                id: 7,
                number: "07",
            },
            {
                status: "1ueeing",
                position: "-6.10218,106.88433",
                id: 8,
                number: "08",
            },
            {
                status: "parked",
                position: "-6.10228,106.88243",
                id: 7,
                number: "09",
            },

        ];

- Data Location Realtime

        [
            {
                position: "-6.10579,106.88223",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10559,106.88223",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10539,106.88223",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10519,106.88223",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10499,106.88223",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10479,106.88223",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10459,106.88223",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10459,106.88203",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10459,106.88183",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10459,106.88163",
                status: "parked",
                id: 1,
                number: "08",
            },

            {
                position: "-6.104585,106.88143",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10458,106.88123",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10438,106.88123",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10418,106.88123",
                status: "parked",
                id: 1,
                number: "08",
            },
            {
                position: "-6.10388,106.88123",
                status: "parked",
                id: 1,
                number: "08",
            },
        ]


## Usage example

<table>
<tr>
<td>






This application has 2 modes, realtime mode and history mode.

History mode displays the location of the input data location in the map , and also adjusts the status color according to the list legend . when the icon of each location is clicked it will output data from that point. and will automatically zoom towards the icon

![Chat Preview](https://github.com/zainuddin-maker/Location-Tracking/blob/master/zoomintruck.PNG?raw=true)

Realtime mode is used to display the location in a relatime value from realtime location data which is always increasing.
 
 ![Chat Preview](https://github.com/zainuddin-maker/Location-Tracking/blob/master/AppRealtime.PNG?raw=true)

 Each point when clicked it will zoom and output data from that point.

 ![Chat Preview](https://github.com/zainuddin-maker/Location-Tracking/blob/master/zoomrealtimetruck.PNG?raw=true)

Each mode can do manual zoom via the buttons from zoom in zoom out at the top right end

 ![Chat Preview](https://github.com/zainuddin-maker/Location-Tracking/blob/master/zoombutton.PNG?raw=true)



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

- [D3.js](https://d3js.org/) - D3.js is a JavaScript library for manipulating documents based on data.
- [html](https://www.w3schools.com/html/) - HTML is the standard markup language for Web pages.
- [css](https://www.w3schools.com/css/) - CSS is the language we use to style an HTML document














