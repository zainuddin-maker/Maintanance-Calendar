TW.Runtime.Widgets.Maintanancecalendar = function () {
    this.renderHtml = function () {
        // return any HTML you want rendered for your widget
        // If you want it to change depending on properties that the user
        // has set, you can use this.getProperty(propertyName). In
        // this example, we'll just return static HTML
        return '<div class="widget-content widget-Maintanancecalendar"></div>';
    };

    // };

    this.updateProperty = function (updatePropertyInfo) {
        // TargetProperty tells you which of your bound properties changed

        this.setProperty(
            updatePropertyInfo.TargetProperty,
            updatePropertyInfo.SinglePropertyValue
        );

        if (updatePropertyInfo.TargetProperty === "DataVessel") {
            // console.log("updatePropertyInfo.RawDataFromInvoke.rows");
            // console.log(updatePropertyInfo.RawDataFromInvoke.rows);
            this.setProperty(
                "DataVessel",
                updatePropertyInfo.RawDataFromInvoke.rows
            );
        }

        if (updatePropertyInfo.TargetProperty === "DataMaintanance") {
            // console.log("updatePropertyInfo.RawDataFromInvoke.rows");
            // console.log(updatePropertyInfo.RawDataFromInvoke.rows);
            this.setProperty(
                "DataMaintanance",
                updatePropertyInfo.RawDataFromInvoke.rows
            );
        }

        if (updatePropertyInfo.TargetProperty === "IdAndPositionMaintanance") {
            // console.log("updatePropertyInfo.RawDataFromInvoke.rows");
            // console.log(updatePropertyInfo.RawDataFromInvoke.rows);
            this.setProperty(
                "IdAndPositionMaintanance",
                updatePropertyInfo.RawDataFromInvoke.rows
            );
        }

        if (updatePropertyInfo.TargetProperty === "ListlegendMaintanance") {
            // console.log("updatePropertyInfo.RawDataFromInvoke.rows");
            // console.log(updatePropertyInfo.RawDataFromInvoke.rows);
            this.setProperty(
                "ListlegendMaintanance",
                updatePropertyInfo.RawDataFromInvoke.rows
            );
        }

        if (updatePropertyInfo.TargetProperty === "DataClickMaintanance") {
            // console.log("updatePropertyInfo.RawDataFromInvoke.rows");
            // console.log(updatePropertyInfo.RawDataFromInvoke.rows);
            this.setProperty(
                "DataClickMaintanance",
                updatePropertyInfo.RawDataFromInvoke.rows
            );
        }

        if (updatePropertyInfo.TargetProperty === "DataAddChangeMaintanance") {
            // console.log("updatePropertyInfo.RawDataFromInvoke.rows");
            // console.log(updatePropertyInfo.RawDataFromInvoke.rows);
            this.setProperty(
                "DataAddChangeMaintanance",
                updatePropertyInfo.RawDataFromInvoke.rows
            );
        }

        if (updatePropertyInfo.TargetProperty === "DataClickJsonMaintanance") {
            console.log("updatePropertyInfo.RawDataFromInvoke.array");

            console.log(updatePropertyInfo);
            this.setProperty(
                "DataClickJsonMaintanance",
                updatePropertyInfo.RawDataFromInvoke.array
            );
        }

        this.setupWidget();
    };

    this.afterRender = function () {
        this.setupWidget();
    };

    this.serviceInvoked = function (serviceName) {
        try {
            var allWidgetProps = this.properties;

            var widgetProps = {};

            for (const [key, value] of Object.entries(allWidgetProps)) {
                if (key.includes("Style")) {
                    widgetProps[key] = TW.getStyleFromStyleDefinition(
                        this.getProperty(key)
                    );
                } else {
                    widgetProps[key] = this.getProperty(key);
                }
            }

            // console.log("widgetProps running table");
            // console.log(widgetProps);
        } catch (error) {
            console.log("error");
            console.log(error);
        }

        this.setupWidget();
    };

    this.setupWidget = function () {
        var widgetID = this.jqElementId;

        // Remove all old/existing DOM element
        d3.select(`#${widgetID}`).selectAll("*").remove();
        // Handle Properties
        try {
            var allWidgetProps = this.properties;

            var widgetProps = {};

            for (const [key, value] of Object.entries(allWidgetProps)) {
                if (key.includes("Style")) {
                    widgetProps[key] = TW.getStyleFromStyleDefinition(
                        this.getProperty(key)
                    );
                } else {
                    widgetProps[key] = this.getProperty(key);
                }
            }

            console.log("widgetProps running maintannce calendar");
            console.log(widgetProps);
        } catch (error) {
            console.log("error");
            console.log(error);
        }

        // input

        var datakapa = widgetProps.DataVessel || [];

        var datamaintanance = widgetProps.DataMaintanance || [];
        var idandposition = widgetProps.IdAndPositionMaintanance || [];
        var listlegend = widgetProps.ListlegendMaintanance || [];

        var dataaddchange = widgetProps.DataAddChangeMaintanance || [];

        var heightofchart = widgetProps.HeightOfChart || 480;

        var topoffsettooltip = 0;
        var leftoffsettooltip = 0;

        var heightofheader = widgetProps.HeightOfHeader || 30;

        //batas input

        var datashapeMaintance = {
            from: {
                name: "from",
                description: "",
                baseType: "DATETIME",
                ordinal: 2,
                aspects: {
                    isPrimaryKey: false,
                },
            },
            id: {
                name: "id",
                description: "",
                baseType: "STRING",
                ordinal: 3,
                aspects: {
                    isPrimaryKey: false,
                },
            },
            idmaintanance: {
                name: "idmaintanance",
                description: "",
                baseType: "NUMBER",
                ordinal: 4,
                aspects: {
                    isPrimaryKey: false,
                },
            },

            imgstatus: {
                name: "imgstatus",
                description: "",
                baseType: "STRING",
                ordinal: 5,
                aspects: {
                    isPrimaryKey: false,
                },
            },
            status: {
                name: "status",
                description: "",
                baseType: "STRING",
                ordinal: 6,
                aspects: {
                    isPrimaryKey: false,
                },
            },
            text: {
                name: "text",
                description: "",
                baseType: "STRING",
                ordinal: 7,
                aspects: {
                    isPrimaryKey: false,
                },
            },

            to: {
                name: "to",
                description: "",
                baseType: "DATE",
                ordinal: 8,
                aspects: {
                    isPrimaryKey: false,
                },
            },
        };

        function makeformat_M_D_Y(date) {
            var datetool = new Date(date);
            var daydate = datetool.getDate();
            var monthdate = datetool.getMonth();
            var yeardate = datetool.getFullYear();
            var hourdate = datetool.getHours();
            var minutedate = datetool.getMinutes();

            return monthdate + 1 + "/" + daydate + "/" + yeardate;
        }

        function addtomidnight(date) {
            var datetool = new Date(date);
            var daydate = datetool.getDate();
            var monthdate = datetool.getMonth();
            var yeardate = datetool.getFullYear();
            var hourdate = datetool.getHours();
            var minutedate = datetool.getMinutes();

            return new Date(makeformat_M_D_Y(datetool) + " 23:59:59");
        }

        var arraytemp = [];
        datakapa.forEach((element, i) => {
            // ////console.log(element);
            // var start = new Date(element.from)
            // var finish = new Date (element.to)
            let start = new Date(formatDate(element.from));
            let end = new Date(formatDate(element.to));
            let loop = new Date(makeformat_M_D_Y(start));
            let endloop = new Date(makeformat_M_D_Y(end));
            // ////console.log(start ,end)
            // ////console.log(loop ,endloop)

            while (loop <= endloop) {
                var findindatatemp = arraytemp.find(
                    (datatemp) => datatemp.date == formatDate(loop)
                );
                var findindexdatatemp = arraytemp.findIndex(
                    (datatemp) => datatemp.date == formatDate(loop)
                );

                if (!findindatatemp) {
                    var dataidandposition = [];

                    for (let index = 0; index < 4; index++) {
                        dataidandposition.push([]);
                    }

                    var findwhereid = idandposition.find(
                        (dataidnpos) => dataidnpos.id == element.id
                    );

                    if (findwhereid) {
                        var datainputchild = [];

                        // ////console.log(formatDate(loop));
                        // ////console.log(formatDate(element.from));
                        // ////console.log(formatDate(element.to));

                        if (
                            formatDate(loop) == formatDate(element.from) &&
                            formatDate(loop) == formatDate(element.to)
                        ) {
                            datainputchild.push(element);
                        } else if (
                            formatDate(loop) == formatDate(element.from)
                        ) {
                            // ////console.log("2");

                            datainputchild.push({
                                from: new Date(element.from),
                                to: addtomidnight(element.from),
                                header: element.header,
                                textbody: element.textbody,
                                // isblack: false,
                                id: element.id,
                                effective: element.effective,
                            });
                        } else if (formatDate(loop) == formatDate(element.to)) {
                            // ////console.log("3");
                            datainputchild.push({
                                from: new Date(makeformat_M_D_Y(element.to)),
                                to: element.to,
                                header: element.header,
                                textbody: element.textbody,
                                // isblack: false,
                                id: element.id,
                                effective: element.effective,
                            });
                        } else {
                            // ////console.log("4");
                            datainputchild.push({
                                from: new Date(loop),
                                to: addtomidnight(loop),
                                header: element.header,
                                textbody: element.textbody,
                                // isblack: false,
                                id: element.id,
                                effective: element.effective,
                            });
                        }

                        // ////console.log("findwhereid");

                        // ////console.log(findwhereid);
                        // ////console.log(datainputchild);

                        if (findwhereid.position <= 4) {
                            dataidandposition[findwhereid.position - 1] =
                                datainputchild;
                        }
                    }
                    // ////console.log("dataidandposition");

                    // ////console.log(dataidandposition);
                    arraytemp.push({
                        date: formatDate(loop),
                        data: dataidandposition,
                        maintenance: [],
                    });
                } else {
                    var findwhereid = idandposition.find(
                        (dataidnpos) => dataidnpos.id == element.id
                    );

                    if (findwhereid) {
                        if (findwhereid.position <= 4) {
                            if (
                                formatDate(loop) == formatDate(element.from) &&
                                formatDate(loop) == formatDate(element.to)
                            ) {
                                arraytemp[findindexdatatemp].data[
                                    findwhereid.position - 1
                                ].push(element);
                            } else if (
                                formatDate(loop) == formatDate(element.from)
                            ) {
                                // ////console.log("2");

                                arraytemp[findindexdatatemp].data[
                                    findwhereid.position - 1
                                ].push({
                                    from: new Date(element.from),
                                    to: addtomidnight(element.from),
                                    header: element.header,
                                    textbody: element.textbody,
                                    // isblack: false,
                                    id: element.id,
                                    effective: element.effective,
                                });
                            } else if (
                                formatDate(loop) == formatDate(element.to)
                            ) {
                                // ////console.log("3");
                                arraytemp[findindexdatatemp].data[
                                    findwhereid.position - 1
                                ].push({
                                    from: new Date(
                                        makeformat_M_D_Y(element.to)
                                    ),
                                    to: element.to,
                                    header: element.header,
                                    textbody: element.textbody,
                                    // isblack: false,
                                    id: element.id,
                                    effective: element.effective,
                                });
                            } else {
                                // ////console.log("4");
                                arraytemp[findindexdatatemp].data[
                                    findwhereid.position - 1
                                ].push({
                                    from: new Date(loop),
                                    to: addtomidnight(loop),
                                    header: element.header,
                                    textbody: element.textbody,
                                    // isblack: false,
                                    id: element.id,
                                    effective: element.effective,
                                });
                            }
                        }
                    }
                }

                let newDate = loop.setDate(loop.getDate() + 1);
                loop = new Date(newDate);
                // ////console.log(loop)
            }
        });

        datamaintanance.forEach((element, i) => {
            let start = new Date(formatDate(element.from));
            let end = new Date(formatDate(element.to));
            let loop = new Date(makeformat_M_D_Y(start));
            let endloop = new Date(makeformat_M_D_Y(end));

            while (loop <= endloop) {
                var findindatatemp = arraytemp.find(
                    (datatemp) => datatemp.date == formatDate(loop)
                );
                var findindexdatatemp = arraytemp.findIndex(
                    (datatemp) => datatemp.date == formatDate(loop)
                );

                if (!findindatatemp) {
                    var dataidandposition = [];

                    for (let index = 0; index < 4; index++) {
                        dataidandposition.push([]);
                    }

                    var datamaintanance = [];

                    if (
                        formatDate(loop) == formatDate(element.from) &&
                        formatDate(loop) == formatDate(element.to)
                    ) {
                        // ////console.log("1");

                        datamaintanance.push(element);
                    } else if (formatDate(loop) == formatDate(element.from)) {
                        // ////console.log("2");

                        datamaintanance.push({
                            from: new Date(element.from),
                            to: addtomidnight(element.from),
                            id: element.id,
                            idmaintanance: element.idmaintanance,
                            status: element.status,
                            text: element.text,
                        });
                    } else if (formatDate(loop) == formatDate(element.to)) {
                        // ////console.log("3");
                        datamaintanance.push({
                            from: new Date(makeformat_M_D_Y(element.to)),
                            to: element.to,
                            id: element.id,
                            idmaintanance: element.idmaintanance,
                            status: element.status,
                            text: element.text,
                        });
                    } else {
                        // ////console.log("4");
                        datamaintanance.push({
                            from: new Date(loop),
                            to: addtomidnight(loop),
                            id: element.id,
                            idmaintanance: element.idmaintanance,
                            status: element.status,
                            text: element.text,
                        });
                    }

                    arraytemp.push({
                        date: formatDate(loop),
                        data: dataidandposition,
                        maintenance: datamaintanance,
                    });
                } else {
                    ////console.log(findindatatemp)
                    ////console.log(findindexdatatemp)

                    if (
                        formatDate(loop) == formatDate(element.from) &&
                        formatDate(loop) == formatDate(element.to)
                    ) {
                        // ////console.log("1");

                        arraytemp[findindexdatatemp].maintenance.push(element);
                    } else if (formatDate(loop) == formatDate(element.from)) {
                        // ////console.log("2");

                        arraytemp[findindexdatatemp].maintenance.push({
                            from: new Date(element.from),
                            to: addtomidnight(element.from),
                            id: element.id,
                            idmaintanance: element.idmaintanance,
                            status: element.status,
                            text: element.text,
                        });
                    } else if (formatDate(loop) == formatDate(element.to)) {
                        // ////console.log("3");
                        arraytemp[findindexdatatemp].maintenance.push({
                            from: new Date(makeformat_M_D_Y(element.to)),
                            to: element.to,
                            id: element.id,
                            idmaintanance: element.idmaintanance,
                            status: element.status,
                            text: element.text,
                        });
                    } else {
                        // ////console.log("4");
                        arraytemp[findindexdatatemp].maintenance.push({
                            from: new Date(loop),
                            to: addtomidnight(loop),
                            id: element.id,
                            idmaintanance: element.idmaintanance,
                            status: element.status,
                            text: element.text,
                        });
                    }
                }
                let newDate = loop.setDate(loop.getDate() + 1);
                loop = new Date(newDate);
            }
        });

        //console.log("arraytemp");
        //console.log(arraytemp);

        var datathingworx = arraytemp;

        var heighoftime = heightofchart / 24;

        var head_of_div = d3
            .select(`#${widgetID}`)
            .append("div")
            .attr("class", "head-of-div")
            .attr("id", "head-of-div")

            .style("background-color", "#000")
            // .style("padding-bottom", "34px")
            .style(
                "min-width",
                datathingworx.slice(0, 7).length * 220 + 70 + "px"
            );

        var first_div_legend = head_of_div
            .append("div")
            .attr("class", "first-div-legend");

        var tooltipdivlist = d3
            .select(`#${widgetID}`)
            .append("div")
            .attr("id", "tooltip_index_maintanance")
            .attr("class", "tooltip_index_maintanance");

        for (let index = 0; index < 4; index++) {
            tooltipdivlist
                .append("div")
                .attr("class", "text_tooltip_index_maintanance")
                .attr("id", "text_tooltip_index_maintanance" + index)
                .text("");
        }

        // .attr("class", "hidden");

        // listlegend.forEach((data, i) => {
        //     var first_legend_child = first_div_legend
        //         .append("div")
        //         .attr("class", "first-legend-child");

        //     first_legend_child
        //         .append("div")
        //         .attr("class", "square-legend")
        //         .style("background-color", data.color);
        //     first_legend_child
        //         .append("div")
        //         .attr("class", "text-legend")
        //         .text(data.text);
        // });

        var second_div_legend = head_of_div
            .append("div")
            .attr("class", "second-div-legend");
        var row_for_time_clock = second_div_legend
            .append("div")
            .attr("class", "row-for-time-clock");
        row_for_time_clock
            .append("div")
            .attr("class", "black-box")
            .style("height", heightofheader + "px");

        for (let index = 0; index < 24; index++) {
            row_for_time_clock
                .append("div")
                .attr("class", "box-content-time")
                .style("height", heighoftime + "px")
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
            var dayOfWeekNames = [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
            ];

            var nameday = dayOfWeekNames[thisdate.getDay()];
            var namemonth = monthNames[thisdate.getMonth()];
            var date =
                thisdate.getDate() < 10
                    ? "0" + thisdate.getDate()
                    : thisdate.getDate();
            var year = thisdate.getFullYear();

            var fullformat =
                nameday + " " + date + " " + namemonth + " " + year;

            return fullformat;
        }

        function formatDateTooltip(date) {
            var datetool = new Date(date);
            var daydate = datetool.getDate();
            var monthdate = datetool.getMonth();
            var yeardate = datetool.getFullYear();
            var hourdate = datetool.getHours();
            var minutedate = datetool.getMinutes();

            return (
                (daydate < 10 ? "0" + daydate : daydate) +
                "/" +
                (monthdate + 1 < 10 ? "0" + (monthdate + 1) : monthdate + 1) +
                "/" +
                yeardate.toString().substr(-2) +
                " " +
                (hourdate < 10 ? "0" + hourdate : hourdate) +
                ":" +
                (minutedate < 10 ? "0" + minutedate : minutedate)
            );
        }

        function makenewinteger(date) {
            var newdate = new Date(date);
            var newhour = newdate.getHours();
            var newminute = newdate.getMinutes();
            var newsecond = newdate.getSeconds();
            var newinteger =
                (newhour * 3600 + newminute * 60 + newsecond) / 3600;

            return newinteger;
        }

        function makenewcolumn(elementchild, maintanance) {
            var newarrayloop = [];

            elementchild.forEach((element) => {
                newarrayloop.push(element);
            });

            return newarrayloop;
        }
        ////console.log("datathingworx");

        ////console.log(datathingworx);

        datathingworx.slice(0, 7).forEach((element, i) => {
            var row_data_and_amintanance = second_div_legend
                .append("div")
                .attr("class", "row-data-and-amintanance");
            row_data_and_amintanance
                .append("div")
                .attr("class", "header-data-maintannace")
                .style("height", heightofheader + "px")
                .text(formatDate(element.date));

            var data_per_column = row_data_and_amintanance
                .append("div")
                .attr("class", "data-per-column");

            var needle_of_time = data_per_column
                .append("div")
                .attr("class", "needle-time-now")
                .style("left", "-10px");
            // .style("z-index", "1")
            // .style("top", "-10px");

            needle_of_time.append("div").attr("class", "circle-needle");
            needle_of_time.append("div").attr("class", "rectangular-needle");

            element.data.forEach((elementchild, j) => {
                var newarrayloop = [];

                // ////console.log("elementchild first")
                // ////console.log(elementchild)

                if (elementchild.length <= 0) {
                    newarrayloop = [];
                } else {
                    //  newarrayloop = makenewcolumn(elementchild);
                    newarrayloop = makenewcolumn(
                        elementchild,
                        element.maintenance
                    );
                }

                //console.log("newarrayloop")
                //console.log(newarrayloop)

                var data_maintance_and_clock = data_per_column
                    .append("div")
                    .attr("class", "data-maintance-and-clock")
                    .style("width", function () {
                        return element.data.length < 4
                            ? "calc((1/4)*100%)"
                            : "calc((1/" + element.data.length + ")*100%)";
                    });

                data_maintance_and_clock
                    .append("div")
                    .attr("class", "black-segemnt")
                    .style("height", (22.9 - 0 + 1) * heighoftime + "px");

                var tempnewarrayloop = newarrayloop.map(
                    (datamapnewarrayloop) => {
                        return {
                            from: makenewinteger(datamapnewarrayloop.from),
                            to: makenewinteger(datamapnewarrayloop.to),
                        };
                    }
                );

                //console.log(tempnewarrayloop)

                var maxtemp = Math.max.apply(
                    null,
                    tempnewarrayloop.map((maptemp) => maptemp.to)
                );
                var mintemp = Math.min.apply(
                    null,
                    tempnewarrayloop.map((maptemp) => maptemp.from)
                );

                //console.log(maxtemp,mintemp)

                newarrayloop.forEach((datanewarrayloop, jk) => {
                    //console.log("datanewarrayloop");
                    //console.log(datanewarrayloop);
                    // ////console.log(jk);

                    var one_colum_parsial = data_maintance_and_clock
                        .append("div")
                        .attr("class", "one-colum-parsial")
                        .style("position", "absolute")
                        // .style("border", "none")
                        // .style("padding-top", padding * 20 + "px")
                        .style(
                            "height",
                            (makenewinteger(datanewarrayloop.to) -
                                makenewinteger(datanewarrayloop.from)) *
                                heighoftime +
                                "px"
                        )
                        .style("width", function () {
                            return element.data.length < 4
                                ? "calc((1/4)*100%  + 0.5px )"
                                : "calc((1/" +
                                      element.data.length +
                                      ")*100%   + 0.5px)";
                        })
                        .style(
                            "top",
                            makenewinteger(datanewarrayloop.from) *
                                heighoftime +
                                heightofheader +
                                "px"
                        )
                        .style("border-right", function (d, i) {
                            return "1px solid #fff";
                        })
                        .style("border-left", function (d, i) {
                            if (j == 0) {
                                return "none";
                            }
                            return "1px solid #fff";
                        })
                        .style("border-top", function (d, i) {
                            if (jk == 0) {
                                return "1px solid #fff";
                            } else {
                                return "none";
                            }
                        })
                        .style("border-bottom", function (d, i) {
                            if (jk == newarrayloop.length - 1) {
                                return "1px solid #fff";
                            } else {
                                return "none";
                            }
                        })
                        .style("background-color", function (d) {
                            if (datanewarrayloop.effective) {
                                return "#00daec";
                            } else {
                                return "#726965";
                            }
                        })
                        .on("mousemove", function () {
                            for (let index = 0; index < 4; index++) {
                                tooltipdivlist
                                    .select(
                                        "#text_tooltip_index_maintanance" +
                                            index
                                    )
                                    .text("");

                                // tooltipdivlist.append("div").attr("class","text_tooltip_index_maintanance")
                                // .attr("id","text_tooltip_index_maintanance"+index).text("text"+index)
                            }
                            for (let index = 0; index < 3; index++) {
                                if (index == 0) {
                                    tooltipdivlist
                                        .select(
                                            "#text_tooltip_index_maintanance" +
                                                index
                                        )
                                        .text(datanewarrayloop.header);
                                }

                                if (index == 1) {
                                    tooltipdivlist
                                        .select(
                                            "#text_tooltip_index_maintanance" +
                                                index
                                        )
                                        .text("Berth " + datanewarrayloop.id);
                                }

                                if (index == 2) {
                                    tooltipdivlist
                                        .select(
                                            "#text_tooltip_index_maintanance" +
                                                index
                                        )
                                        .text(datanewarrayloop.textbody);
                                }

                                // tooltipdivlist.append("div").attr("class","text_tooltip_index_maintanance")
                                // .attr("id","text_tooltip_index_maintanance"+index).text("text"+index)
                            }

                            tooltipdivlist.style("display", function (e) {
                                // if (showTooltip && !isNaN(newobj[d.data.key])) {
                                return "block";
                                // } else
                                // {
                                //     return "none";
                                // }
                            });

                            var element_head_of_div =
                                document.getElementById("head-of-div");

                            var element_tooltip_index_maintanance =
                                document.getElementById(
                                    "tooltip_index_maintanance"
                                );

                            // console.log(element_head_of_div.offsetHeight)
                            // console.log(element_head_of_div.offsetWidth)
                            console.log(
                                element_tooltip_index_maintanance.getBoundingClientRect()
                            );

                            console.log(d3.event.pageY, d3.event.pageX);
                            console.log(
                                element_head_of_div.getBoundingClientRect()
                            );
                            // let handleMousemove = (event) => {
                            //     console.log(`mouse position: ${event.x}:${event.y}`);
                            //   };

                            //   document.addEventListener('mousemove', handleMousemove);

                            var upthetooltip = d3.event.pageY;

                            if (
                                d3.event.pageY +
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .height >
                                element_head_of_div.getBoundingClientRect()
                                    .bottom
                            ) {
                                upthetooltip =
                                    element_head_of_div.getBoundingClientRect()
                                        .bottom -
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .height;
                            }

                            var bottomthetooltip = d3.event.pageX;

                            if (
                                d3.event.pageX +
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .width >
                                element_head_of_div.getBoundingClientRect()
                                    .right
                            ) {
                                bottomthetooltip =
                                    element_head_of_div.getBoundingClientRect()
                                        .right -
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .width;
                            }
                            var temptopoffsettooltip =
                                -1 *
                                element_head_of_div.getBoundingClientRect().top;
                            var templeftoffsettooltip =
                                -1 *
                                    element_head_of_div.getBoundingClientRect()
                                        .left +
                                5;

                            tooltipdivlist.style(
                                "top",
                                upthetooltip +
                                    topoffsettooltip +
                                    temptopoffsettooltip +
                                    "px"
                            );
                            tooltipdivlist.style(
                                "left",
                                bottomthetooltip +
                                    leftoffsettooltip +
                                    templeftoffsettooltip +
                                    "px"
                            );
                        })
                        .on("mouseleave", function (d, i) {
                            // ////console.log("d")
                            // ////console.log(i)
                            // if (d){
                            //   tooltipdiv.style("display", "inline-block")
                            // }else {
                            tooltipdivlist.style("display", "none");
                            // }
                        });

                    if (jk == 0) {
                        if (datanewarrayloop.header.split(",").length > 0) {
                            var box_of_tittle = one_colum_parsial
                                .append("div")
                                .attr("class", "box-of-tittle")
                                .style(
                                    "height",
                                    maxtemp - mintemp > 0
                                        ? 2 * heighoftime + "px"
                                        : heighoftime + "px"
                                );

                            datanewarrayloop.header
                                .split(",")
                                .forEach((data) => {
                                    box_of_tittle.append("div").text(data);
                                });
                        }

                        if (datanewarrayloop.textbody) {
                            if (maxtemp - mintemp > 1) {
                                var heightextbody =
                                    (maxtemp - (mintemp + 2)) * heighoftime;

                                if (heightextbody > 0) {
                                    one_colum_parsial
                                        .append("div")
                                        .attr("class", "rotate-box-text")
                                        // .style("margin-top", margintop*20+"px")
                                        .style(
                                            "height",
                                            (maxtemp - (mintemp + 2)) *
                                                heighoftime +
                                                // -padding*20 - margintop*20 - marginbottom*20 +
                                                "px"
                                        )
                                        .text(
                                            datanewarrayloop.id +
                                                " " +
                                                datanewarrayloop.textbody
                                        );
                                }
                            }
                        }

                        // one_colum_parsial.style("z-index", 1);
                    }

                    // } else {
                    //     // data_maintance_and_clock
                    //     //     .append("div")
                    //     //     .attr("class", "black-segemnt")
                    //     //     .style(
                    //     //         "height",
                    //     //         (datanewarrayloop.to - datanewarrayloop.from + 1) * 20 +
                    //     //             "px"
                    //     //     );
                    // }
                });
            });

            if (element.maintenance.length > 0) {
                element.maintenance.forEach((dataelementmain) => {
                    var colorstatus = listlegend.find(
                        (datalistlegend) =>
                            datalistlegend.status == dataelementmain.status
                    )
                        ? listlegend.find(
                              (datalistlegend) =>
                                  datalistlegend.status ==
                                  dataelementmain.status
                          ).color
                        : "#000";

                    var elementforindex = dataelementmain.id
                        .split(",")
                        .map((data) => {
                            return idandposition.findIndex(
                                (dataid) => dataid.id == data
                            );
                        });

                    var positionfrom = Math.min.apply(
                        null,
                        elementforindex.filter((datafilter) => datafilter >= 0)
                    );

                    var positionto = Math.max(...elementforindex);

                    var maintanance_box = row_data_and_amintanance
                        .append("div")
                        .attr("class", "maintanance-box")
                        .style("display", function () {
                            if (positionto < 0) {
                                return "none";
                            } else {
                                return "flex";
                            }
                        })
                        .style("flex-direction", function () {
                            if (
                                positionto - positionfrom + 1 <=
                                Math.ceil(element.data.length / 2)
                            ) {
                                return "column";
                            } else {
                                return "row";
                            }
                        })
                        .style("width", function () {
                            if (positionto - positionfrom + 1 == 1) {
                                return (
                                    "calc((   " +
                                    (positionto - positionfrom + 1) +
                                    "*1/" +
                                    element.data.length +
                                    ")*100% + 0.5px  ) "
                                );
                            } else {
                                return (
                                    "calc((   " +
                                    (positionto - positionfrom + 1) +
                                    "*1/" +
                                    element.data.length +
                                    ")*100%   ) "
                                );
                            }
                        })
                        .style(
                            "height",
                            (makenewinteger(dataelementmain.to) -
                                makenewinteger(dataelementmain.from)) *
                                heighoftime +
                                1 +
                                "px"
                        )
                        .style("background-color", colorstatus)
                        .style(
                            "top",
                            "calc("+ heightofheader +"px + " +
                                makenewinteger(dataelementmain.from) *
                                    heighoftime +
                                "px)"
                        )
                        .style("left", function () {
                            // if ((positionto - positionfrom) +1 == 1){
                            //     return  "calc((   "+  ((positionto - positionfrom) +1)  +"*1/" + element.data.length + ")*100% + 0.5px  ) "
                            // }else{
                            return (
                                "calc((   " +
                                positionfrom +
                                "*1/" +
                                element.data.length +
                                ")*100%   ) "
                            );
                            // }
                        })
                        .style("cursor", "pointer")
                        .on("click", function () {
                            thisActiveMaintanance(dataelementmain);
                            ////////console.log(" ////////console.log(element.maintenance)");
                            ////////console.log(element.maintenance);
                        })
                        .on("mousemove", function () {
                            var tooltipTextmain = dataelementmain.text;
                            var findmaintan = listlegend.find(
                                (datalistlegend) =>
                                    datalistlegend.status ==
                                    dataelementmain.status
                            );

                            if (findmaintan) {
                                tooltipTextmain =
                                    tooltipTextmain + "," + findmaintan.text;
                            }

                            var findaddmaintanance = dataaddchange.find(
                                (dataadd) =>
                                    dataadd.idmaintanance ==
                                    dataelementmain.idmaintanance
                            );

                            if (findaddmaintanance) {
                                tooltipTextmain =
                                    tooltipTextmain +
                                    "," +
                                    "Changed From " +
                                    formatDateTooltip(
                                        findaddmaintanance.changefrom
                                    );
                            }
                            for (let index = 0; index < 4; index++) {
                                tooltipdivlist
                                    .select(
                                        "#text_tooltip_index_maintanance" +
                                            index
                                    )
                                    .text("");

                                // tooltipdivlist.append("div").attr("class","text_tooltip_index_maintanance")
                                // .attr("id","text_tooltip_index_maintanance"+index).text("text"+index)
                            }

                            tooltipTextmain.split(",").forEach((data, i) => {
                                tooltipdivlist
                                    .select(
                                        "#text_tooltip_index_maintanance" + i
                                    )
                                    .text(data);
                            });

                            tooltipdivlist.style("display", function (e) {
                                // if (showTooltip && !isNaN(newobj[d.data.key])) {
                                return "block";
                                // } else
                                // {
                                //     return "none";
                                // }
                            });

                            var element_head_of_div =
                                document.getElementById("head-of-div");

                            var element_tooltip_index_maintanance =
                                document.getElementById(
                                    "tooltip_index_maintanance"
                                );

                            // console.log(element_head_of_div.offsetHeight)
                            // console.log(element_head_of_div.offsetWidth)
                            console.log(
                                element_tooltip_index_maintanance.getBoundingClientRect()
                            );

                            console.log(d3.event.pageY, d3.event.pageX);
                            console.log(
                                element_head_of_div.getBoundingClientRect()
                            );
                            // let handleMousemove = (event) => {
                            //     console.log(`mouse position: ${event.x}:${event.y}`);
                            //   };

                            //   document.addEventListener('mousemove', handleMousemove);

                            var upthetooltip = d3.event.pageY;

                            if (
                                d3.event.pageY +
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .height >
                                element_head_of_div.getBoundingClientRect()
                                    .bottom
                            ) {
                                upthetooltip =
                                    element_head_of_div.getBoundingClientRect()
                                        .bottom -
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .height;
                            }

                            var bottomthetooltip = d3.event.pageX;

                            if (
                                d3.event.pageX +
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .width >
                                element_head_of_div.getBoundingClientRect()
                                    .right
                            ) {
                                bottomthetooltip =
                                    element_head_of_div.getBoundingClientRect()
                                        .right -
                                    element_tooltip_index_maintanance.getBoundingClientRect()
                                        .width;
                            }
                            var temptopoffsettooltip =
                                -1 *
                                element_head_of_div.getBoundingClientRect().top;
                            var templeftoffsettooltip =
                                -1 *
                                    element_head_of_div.getBoundingClientRect()
                                        .left +
                                5;

                            tooltipdivlist.style(
                                "top",
                                upthetooltip +
                                    topoffsettooltip +
                                    temptopoffsettooltip +
                                    "px"
                            );
                            tooltipdivlist.style(
                                "left",
                                bottomthetooltip +
                                    leftoffsettooltip +
                                    templeftoffsettooltip +
                                    "px"
                            );
                        })
                        .on("mouseleave", function (d, i) {
                            // ////console.log("d")
                            // ////console.log(i)
                            // if (d){
                            //   tooltipdiv.style("display", "inline-block")
                            // }else {
                            tooltipdivlist.style("display", "none");
                            // }
                        });

                    dataelementmain.text.split(",").forEach((text, idtext) => {
                        if (
                            makenewinteger(dataelementmain.to) -
                                makenewinteger(dataelementmain.from) <=
                            2
                        ) {
                            if (idtext == 0) {
                                var maintananceboxtext = maintanance_box
                                    .append("div")
                                    .attr("class", "text-maintanance")

                                    .style("width", function () {
                                        if (
                                            positionto - positionfrom + 1 <=
                                            Math.ceil(element.data.length / 2)
                                        ) {
                                            return "100%";
                                        } else {
                                            return (
                                                "calc(" +
                                                100 /
                                                    dataelementmain.text.split(
                                                        ","
                                                    ).length +
                                                "%)"
                                            );
                                        }
                                    });

                                if (idtext == 0 && dataelementmain.imgstatus) {
                                    maintananceboxtext
                                        .append("img")
                                        .attr("class", "img_classname_maint")
                                        .attr("src", dataelementmain.imgstatus);
                                }
                                maintananceboxtext.append("div").text(text);
                            }
                        } else {
                            var maintananceboxtext = maintanance_box
                                .append("div")
                                .attr("class", "text-maintanance")

                                .style("width", function () {
                                    if (
                                        positionto - positionfrom + 1 <=
                                        Math.ceil(element.data.length / 2)
                                    ) {
                                        return "100%";
                                    } else {
                                        return (
                                            "calc(" +
                                            100 /
                                                dataelementmain.text.split(",")
                                                    .length +
                                            "%)"
                                        );
                                    }
                                });

                            if (idtext == 0 && dataelementmain.imgstatus) {
                                maintananceboxtext
                                    .append("img")
                                    .attr("class", "img_classname_maint")
                                    .attr("src", dataelementmain.imgstatus);
                            }
                            maintananceboxtext.append("div").text(text);
                        }
                    });
                });

                // if (element.maintenance.info){

                //     var info_maintanance = maintanance_box
                //     .append("div")
                //     .attr("class", "info-maintanance");
                // info_maintanance
                //     .append("span")
                //     .attr("class", "tooltipText")
                //     .text(element.maintenance.info);
                // info_maintanance
                //     .append("img")
                //     .attr(
                //         "src",
                //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgBvVfNTxNREB+o2qJ8LLRQwqpdAhETgTSREsQEiokBExPgqBfrSRMPlr+g4ehJvHjxYDnhxUgPKpxYOBVrdLH4UdPKcmiFhJZKIbSmGGfKlizlo7tb4Je8vt19r+83M2/evJkiUAin08lhN4CtG5sVGycbFrDFsXmwjY+MjIhK1izKNwFJ7di5DPq0vf3SMjSycWBNG1BZltyZE4meg9iaAfwLJghGKmA1YeDx8zMUYlwTuaTpSySx370RgIa6P6AUHwJmmPRZSAg3vg4fZImiA4jJrFO9tkWmt20RtGLyo4WEEPFxEAUQcsd1uR+GhobuoYknHtz2G2xNy1AIGtFaDWycmRdND23t10Wv1zt3IDlpTMSP+ufAYk7AUaCqLAWXL8ZACFbbr9o6J1GApexYsYyYw+7NnZ4AsMYNOErQeo6+rwytjzzMHnKEC/eYa6mPghJspk7Bu9nzMPu9WtF82oKu1jCHj093kZPW6NWOrpYwKMVmSgfvZy+A95sycgI5b4k+7ZCO747mLmkAjhO0vqSgK0NOWpM0Ss1dKND0JISd9p40t1MAOW6tsyCeZi6j6ACRdzdzK6AVxoq/oBasaZ26biK3GsuTcJJoqKM7CKxEztUd8bnOBwo8xEvkzEntdxYSH1MMGlGi34JCQeRxilbqydNQVZ6CkjPqrSbxxelXjCUMVla/Dmox7PgEWhCOllInkuZzIcw+tIAXaiG6pge1WE1k/iMQOR9eOQdqQRfK65l6eDLWCmrh/2WkbprIx/GyB7X7Lh0XOKvS8Ygn9Dtzq/I6vNyTbbZO+2ndP66RVZ6nGdHZeqxLcLNN+U1IEELV8DlY48a0ajR71IZn/Kxq7dXGB1qfEkvio58MOUrB48AoJXzHiZkvLODJcmezWXmQceKgGNTo+fkwv2CkbFYESetd5CgNRftB98SVuBbvPwxhLCrGpprocVCew+/KXimzxAxzWQjVDFjMazseXQiCEQZevG2h/b6PxBPysT15OwogoPd7fIHaPnxl1JyAXJBzvZpqiqe3iq/lEu9LLgmw1NHR4QlFmEpfwGyl+E31mVKQts89rYDxg8fXW0j8Y795SgpFqkwfV2HNRklAc30MtyOZzUYyQA+G8EophMIV4PtpJhPzsF2j8YetnZdcJgQH2yVyPzYKUVbZsAjbZfI0qCiR/wMuf1i7K34ogAAAAABJRU5ErkJggg==")
                //     .style("width", "20px")
                //     .style("color", "#ffdb31");
                // }
            }
        });

        const thisActiveMaintanance = (datamaintannce) => {
            console.log("datamaintannce");
            console.log(datamaintannce);
            this.setProperty("DataClickMaintanance", {
                dataShape: datashapeMaintance,
                rows: [datamaintannce],
            });
            this.jqElement.triggerHandler("clickMaintanance");
            this.setProperty(
                "DataClickJsonMaintanance",
                JSON.stringify(datamaintannce)
            );

            try {
                var allWidgetProps = this.properties;

                var widgetProps = {};

                for (const [key, value] of Object.entries(allWidgetProps)) {
                    if (key.includes("Style")) {
                        widgetProps[key] = TW.getStyleFromStyleDefinition(
                            this.getProperty(key)
                        );
                    } else {
                        widgetProps[key] = this.getProperty(key);
                    }
                }

                console.log("widgetProps after click maintanance");
                console.log(widgetProps);
            } catch (error) {
                console.log("error");
                console.log(error);
            }
        };

        const refreshdatenow = () => {
            var datenow = new Date();

            var selectneedle = document.querySelectorAll(".needle-time-now");

            var select_header_data_maintannace = document.querySelectorAll(
                ".header-data-maintannace"
            );

            var findnow = datathingworx.findIndex(
                (data) => formatDate(data.date) == formatDate(datenow)
            );

            if (
                selectneedle.length > 0 &&
                findnow >= 0 &&
                select_header_data_maintannace.length > 0
            ) {
                selectneedle[findnow].style.display = "flex";
                selectneedle[findnow].style.top =
                    makenewinteger(datenow) * heighoftime + heightofheader - 10 + "px";
                select_header_data_maintannace[findnow].style.backgroundColor =
                    "#b6d0ef";
                select_header_data_maintannace[findnow].style.color = "#000";
                select_header_data_maintannace[findnow].style.fontWeight =
                    "bold";
            }
        };
        refreshdatenow();

        // setInterval(function () {
        //     refreshdatenow();
        // }, 60000);
    };
};
