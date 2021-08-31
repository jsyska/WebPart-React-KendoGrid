var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default';
import { data } from './bikestations';
var BooleanCell = function (props) {
    return (React.createElement("td", null, props.dataItem[props.field] ? '✅' : '❌'));
};
var KendoReactSpfx = (function (_super) {
    __extends(KendoReactSpfx, _super);
    function KendoReactSpfx(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            gridData: data,
            dataState: { skip: 0, take: 10 }
        };
        return _this;
    }
    KendoReactSpfx.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(Grid, __assign({ data: process(this.state.gridData, this.state.dataState), pageable: true, filterable: true, sortable: true }, this.state.dataState, { onDataStateChange: function (e) { return _this.setState({ dataState: e.data }); } }),
                React.createElement(GridColumn, { field: "station_id", title: "ID" }),
                React.createElement(GridColumn, { field: "num_bikes_available", title: "Bikes Available" }),
                React.createElement(GridColumn, { field: "num_bikes_disabled", title: "Bikes Disabled" }),
                React.createElement(GridColumn, { field: "num_docks_available", title: "Docks Available" }),
                React.createElement(GridColumn, { field: "is_charging_station", title: "Charging Station", cell: BooleanCell }),
                React.createElement(GridColumn, { field: "zone", title: "Zone" }))));
    };
    return KendoReactSpfx;
}(React.Component));
export default KendoReactSpfx;
//# sourceMappingURL=KendoReactSpfx.js.map