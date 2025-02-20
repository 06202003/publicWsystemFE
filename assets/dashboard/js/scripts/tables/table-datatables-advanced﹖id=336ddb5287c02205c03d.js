"use strict";

function filterColumn(t, a) {
    if (5 == t) {
        var e = $(".start_date").val(),
            l = $(".end_date").val();
        "" !== e && "" !== l && filterByDate(t, e, l), $(".dt-advanced-search").dataTable().fnDraw()
    } else $(".dt-advanced-search").DataTable().column(t).search(a, !1, !0).draw()
}
var separator = " - ",
    rangePickr = $(".flatpickr-range"),
    dateFormat = "MM/DD/YYYY",
    options = {
        autoUpdateInput: !1,
        autoApply: !0,
        locale: {
            format: dateFormat,
            separator
        },
        opens: "rtl" === $("html").attr("data-textdirection") ? "left" : "right"
    };
rangePickr.length && rangePickr.flatpickr({
    mode: "range",
    dateFormat: "m/d/Y",
    onClose: function(t, a, e) {
        var l = "",
            n = new Date;
        null != t[0] && (l = t[0].getMonth() + 1 + "/" + t[0].getDate() + "/" + t[0].getFullYear(), $(".start_date").val(l)), null != t[1] && (n = t[1].getMonth() + 1 + "/" + t[1].getDate() + "/" + t[1].getFullYear(), $(".end_date").val(n)), $(rangePickr).trigger("change").trigger("keyup")
    }
});
var filterByDate = function(t, a, e) {
        $.fn.dataTableExt.afnFiltering.push((function(l, n, o) {
            var r = normalizeDate(n[t]),
                d = normalizeDate(a),
                s = normalizeDate(e);
            return d <= r && r <= s || (r >= d && "" === s && "" !== d || r <= s && "" === d && "" !== s)
        }))
    },
    normalizeDate = function(t) {
        var a = new Date(t);
        return a.getFullYear() + "" + ("0" + (a.getMonth() + 1)).slice(-2) + ("0" + a.getDate()).slice(-2)
    };
$((function() {
    $("html").attr("data-textdirection");
    var t = $(".datatables-ajax"),
        a = $(".dt-column-search"),
        e = $(".dt-advanced-search"),
        l = $(".dt-responsive"),
        n = "../../../app-assets/";
    if ("laravel" === $("body").attr("data-framework") && (n = $("body").attr("data-asset-path")), t.length) t.dataTable({
        processing: !0,
        dom: '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        ajax: n + "data/ajax.php",
        language: {
            paginate: {
                previous: "&nbsp;",
                next: "&nbsp;"
            }
        }
    });
    if (a.length) {
        $(".dt-column-search thead tr").clone(!0).appendTo(".dt-column-search thead"), $(".dt-column-search thead tr:eq(1) th").each((function(t) {
            var a = $(this).text();
            $(this).html('<input type="text" class="form-control form-control-sm" placeholder="Search ' + a + '" />'), $("input", this).on("keyup change", (function() {
                o.column(t).search() !== this.value && o.column(t).search(this.value).draw()
            }))
        }));
        var o = a.DataTable({
            ajax: n + "data/table-datatable.json",
            columns: [{
                data: "full_name"
            }, {
                data: "email"
            }, {
                data: "post"
            }, {
                data: "city"
            }, {
                data: "start_date"
            }, {
                data: "salary"
            }],
            dom: '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
            orderCellsTop: !0,
            language: {
                paginate: {
                    previous: "&nbsp;",
                    next: "&nbsp;"
                }
            }
        })
    }
    if (e.length) e.DataTable({
        ajax: n + "data/table-datatable.json",
        columns: [{
            data: "responsive_id"
        }, {
            data: "full_name"
        }, {
            data: "email"
        }, {
            data: "post"
        }, {
            data: "city"
        }, {
            data: "start_date"
        }, {
            data: "salary"
        }],
        columnDefs: [{
            className: "control",
            orderable: !1,
            targets: 0
        }],
        dom: '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        orderCellsTop: !0,
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(t) {
                        return "Details of " + t.data().full_name
                    }
                }),
                type: "column",
                renderer: function(t, a, e) {
                    var l = $.map(e, (function(t, a) {
                        return "" !== t.title ? '<tr data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><td>' + t.title + ":</td> <td>" + t.data + "</td></tr>" : ""
                    })).join("");
                    return !!l && $('<table class="table"/><tbody />').append(l)
                }
            }
        },
        language: {
            paginate: {
                previous: "&nbsp;",
                next: "&nbsp;"
            }
        }
    });
    if ($("input.dt-input").on("keyup", (function() {
            filterColumn($(this).attr("data-column"), $(this).val())
        })), l.length) l.DataTable({
        ajax: n + "data/table-datatable.json",
        columns: [{
            data: "responsive_id"
        }, {
            data: "full_name"
        }, {
            data: "email"
        }, {
            data: "post"
        }, {
            data: "city"
        }, {
            data: "start_date"
        }, {
            data: "salary"
        }, {
            data: "age"
        }, {
            data: "experience"
        }, {
            data: "status"
        }],
        columnDefs: [{
            className: "control",
            orderable: !1,
            targets: 0
        }, {
            targets: -1,
            render: function(t, a, e, l) {
                var n = e.status,
                    o = {
                        1: {
                            title: "Current",
                            class: "badge-light-primary"
                        },
                        2: {
                            title: "Professional",
                            class: " badge-light-success"
                        },
                        3: {
                            title: "Rejected",
                            class: " badge-light-danger"
                        },
                        4: {
                            title: "Resigned",
                            class: " badge-light-warning"
                        },
                        5: {
                            title: "Applied",
                            class: " badge-light-info"
                        }
                    };
                return void 0 === o[n] ? t : '<span class="badge rounded-pill ' + o[n].class + '">' + o[n].title + "</span>"
            }
        }],
        dom: '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(t) {
                        return "Details of " + t.data().full_name
                    }
                }),
                type: "column",
                renderer: function(t, a, e) {
                    var l = $.map(e, (function(t, a) {
                        return "" !== t.title ? '<tr data-dt-row="' + t.rowIdx + '" data-dt-column="' + t.columnIndex + '"><td>' + t.title + ":</td> <td>" + t.data + "</td></tr>" : ""
                    })).join("");
                    return !!l && $('<table class="table"/>').append("<tbody>" + l + "</tbody>")
                }
            }
        },
        language: {
            paginate: {
                previous: "&nbsp;",
                next: "&nbsp;"
            }
        }
    });
    $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm").removeClass("form-control-sm")
}));