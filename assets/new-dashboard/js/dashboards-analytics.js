"use strict";
! function() {
    let e, t, a, r, o;
    o = isDarkStyle ? (e = config.colors_dark.cardColor, a = config.colors_dark.textMuted, t = config.colors_dark.headingColor, r = "dark", "#5E6692") : (e = config.colors.cardColor, a = config.colors.textMuted, t = config.colors.headingColor, r = "", "#817D8D");
    var s = document.querySelector("#swiper-with-pagination-cards"),
        s = (s && new Swiper(s, {
            loop: !0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: !1
            },
            pagination: {
                clickable: !0,
                el: ".swiper-pagination"
            }
        }), document.querySelector("#revenueGenerated")),
        i = {
            chart: {
                height: 130,
                type: "area",
                parentHeightOffset: 0,
                toolbar: {
                    show: !1
                },
                sparkline: {
                    enabled: !0
                }
            },
            markers: {
                colors: "transparent",
                strokeColors: "transparent"
            },
            grid: {
                show: !1
            },
            colors: [config.colors.success],
            fill: {
                type: "gradient",
                gradient: {
                    shade: r,
                    shadeIntensity: .8,
                    opacityFrom: .6,
                    opacityTo: .1
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                width: 2,
                curve: "smooth"
            },
            series: [{
                data: [300, 350, 330, 380, 340, 400, 380]
            }],
            xaxis: {
                show: !0,
                lines: {
                    show: !1
                },
                labels: {
                    show: !1
                },
                stroke: {
                    width: 0
                },
                axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                stroke: {
                    width: 0
                },
                show: !1
            },
            tooltip: {
                enabled: !1
            }
        },
        s = (null !== s && new ApexCharts(s, i).render(), document.querySelector("#weeklyEarningReports")),
        i = {
            chart: {
                height: 202,
                parentHeightOffset: 0,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "60%",
                    columnWidth: "38%",
                    startingShape: "rounded",
                    endingShape: "rounded",
                    borderRadius: 4,
                    distributed: !0
                }
            },
            grid: {
                show: !1,
                padding: {
                    top: -30,
                    bottom: 0,
                    left: -10,
                    right: -10
                }
            },
            colors: [config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors.primary, config.colors_label.primary, config.colors_label.primary],
            dataLabels: {
                enabled: !1
            },
            series: [{
                data: [40, 65, 50, 45, 90, 55, 70]
            }],
            legend: {
                show: !1
            },
            xaxis: {
                categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        colors: a,
                        fontSize: "13px",
                        fontFamily: "Public Sans"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            },
            tooltip: {
                enabled: !1
            },
            responsive: [{
                breakpoint: 1025,
                options: {
                    chart: {
                        height: 199
                    }
                }
            }]
        },
        s = (null !== s && new ApexCharts(s, i).render(), document.querySelector("#supportTracker")),
        i = {
            series: [10],
            labels: ["Completed Checked In"],
            chart: {
                height: 360,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    offsetY: 10,
                    startAngle: -140,
                    endAngle: 130,
                    hollow: {
                        size: "65%"
                    },
                    track: {
                        background: e,
                        strokeWidth: "100%"
                    },
                    dataLabels: {
                        name: {
                            offsetY: -20,
                            color: a,
                            fontSize: "13px",
                            fontWeight: "400",
                            fontFamily: "Public Sans"
                        },
                        value: {
                            offsetY: 10,
                            color: t,
                            fontSize: "38px",
                            fontWeight: "600",
                            fontFamily: "Public Sans"
                        }
                    }
                }
            },
            colors: [config.colors.primary],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: .5,
                    gradientToColors: [config.colors.primary],
                    inverseColors: !0,
                    opacityFrom: 1,
                    opacityTo: .6,
                    stops: [30, 70, 100]
                }
            },
            stroke: {
                dashArray: 10
            },
            grid: {
                padding: {
                    top: -20,
                    bottom: 5
                }
            },
            states: {
                hover: {
                    filter: {
                        type: "none"
                    }
                },
                active: {
                    filter: {
                        type: "none"
                    }
                }
            },
            responsive: [{
                breakpoint: 1025,
                options: {
                    chart: {
                        height: 330
                    }
                }
            }, {
                breakpoint: 769,
                options: {
                    chart: {
                        height: 280
                    }
                }
            }]
        },
        s = (null !== s && new ApexCharts(s, i).render(), document.querySelector("#totalEarningChart")),
        i = {
            series: [{
                name: "Earning",
                data: [15, 10, 20, 8, 12, 18, 12, 5]
            }, {
                name: "Expense",
                data: [-7, -10, -7, -12, -6, -9, -5, -8]
            }],
            chart: {
                height: 230,
                parentHeightOffset: 0,
                stacked: !0,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            tooltip: {
                enabled: !1
            },
            legend: {
                show: !1
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    columnWidth: "18%",
                    borderRadius: 5,
                    startingShape: "rounded",
                    endingShape: "rounded"
                }
            },
            colors: [config.colors.primary, o],
            dataLabels: {
                enabled: !1
            },
            grid: {
                show: !1,
                padding: {
                    top: -40,
                    bottom: -20,
                    left: -10,
                    right: -2
                }
            },
            xaxis: {
                labels: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            },
            responsive: [{
                breakpoint: 1468,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "22%"
                        }
                    }
                }
            }, {
                breakpoint: 1197,
                options: {
                    chart: {
                        height: 228
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            columnWidth: "26%"
                        }
                    }
                }
            }, {
                breakpoint: 783,
                options: {
                    chart: {
                        height: 232
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "28%"
                        }
                    }
                }
            }, {
                breakpoint: 589,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "16%"
                        }
                    }
                }
            }, {
                breakpoint: 520,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "18%"
                        }
                    }
                }
            }, {
                breakpoint: 426,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: "20%"
                        }
                    }
                }
            }, {
                breakpoint: 381,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "24%"
                        }
                    }
                }
            }],
            states: {
                hover: {
                    filter: {
                        type: "none"
                    }
                },
                active: {
                    filter: {
                        type: "none"
                    }
                }
            }
        },
        s = (null !== s && new ApexCharts(s, i).render(), $(".datatables-projects"));
    s.length && (s.DataTable({
        ajax: assetsPath + "/json/user-profile.json",
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "project_name"
        }, {
            data: "project_leader"
        }, {
            data: ""
        }, {
            data: "status"
        }, {
            data: ""
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, a, r) {
                return ""
            }
        }, {
            targets: 1,
            orderable: !1,
            searchable: !1,
            responsivePriority: 3,
            checkboxes: !0,
            checkboxes: {
                selectAllRender: '<input type="checkbox" class="form-check-input">'
            },
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input">'
            }
        }, {
            targets: 2,
            responsivePriority: 4,
            render: function(e, t, a, r) {
                var o = a.project_img,
                    s = a.project_name,
                    i = a.date;
                return '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">' + (o ? '<img src="' + assetsPath + "img/icons/brands/" + o + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (o = (((o = (s = a.project_name).match(/\b\w/g) || []).shift() || "") + (o.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><span class="text-truncate fw-semibold">' + s + '</span><small class="text-truncate text-muted">' + i + "</small></div></div>"
            }
        }, {
            targets: 4,
            orderable: !1,
            searchable: !1,
            render: function(e, t, a, r) {
                for (var o = a.team, s = '<div class="d-flex align-items-center avatar-group">', i = 0; i < o.length; i++) s += '<div class="avatar avatar-sm"><img src="' + assetsPath + "/img/avatars/" + o[i] + '" alt="Avatar" class="rounded-circle pull-up"></div>';
                return s += "</div>"
            }
        }, {
            targets: -2,
            render: function(e, t, a, r) {
                a = a.status;
                return '<div class="d-flex align-items-center"><div class="progress w-100 me-3" style="height: 6px;"><div class="progress-bar" style="width: ' + a + '" aria-valuenow="' + a + '" aria-valuemin="0" aria-valuemax="100"></div></div><span>' + a + "</span></div>"
            }
        }, {
            targets: -1,
            searchable: !1,
            title: "Actions",
            orderable: !1,
            render: function(e, t, a, r) {
                return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div>'
            }
        }],
        order: [
            [2, "desc"]
        ],
        dom: '<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        displayLength: 5,
        lengthMenu: [5, 10, 25, 50, 75, 100],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return 'Details of "' + e.data().project_name + '" Project'
                    }
                }),
                type: "column",
                renderer: function(e, t, a) {
                    a = $.map(a, function(e, t) {
                        return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                    }).join("");
                    return !!a && $('<table class="table"/><tbody />').append(a)
                }
            }
        }
    }), $("div.head-label").html('<h5 class="card-title mb-0">Projects</h5>')), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
}();