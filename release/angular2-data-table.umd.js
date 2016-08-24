/**
 * angular2-data-table v0.3.1 (https://github.com/swimlane/angular2-data-table)
 * Copyright 2016
 * Licensed under MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define('angular2-data-table', factory) :
    (factory());
}(this, (function () { 'use strict';

var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
// Components
var DataTable_1 = require('./components/DataTable');
var DataTableColumn_1 = require('./components/DataTableColumn');
var Header_1 = require('./components/header/Header');
var Body_1 = require('./components/body/Body');
var Footer_1 = require('./components/footer/Footer');
var HeaderCell_1 = require('./components/header/HeaderCell');
var Pager_1 = require('./components/footer/Pager');
var BodyRow_1 = require('./components/body/BodyRow');
var ProgressBar_1 = require('./components/body/ProgressBar');
var BodyCell_1 = require('./components/body/BodyCell');
// Services
var State_1 = require('./services/State');
// Directives
var Visibility_1 = require('./directives/Visibility');
var LongPress_1 = require('./directives/LongPress');
var Resizeable_1 = require('./directives/Resizeable');
var Orderable_1 = require('./directives/Orderable');
var Draggable_1 = require('./directives/Draggable');
var Scroller_1 = require('./directives/Scroller');
var TemplateWrapper_1 = require('./directives/TemplateWrapper');
// Enums
var ColumnMode_1 = require('./enums/ColumnMode');
exports.ColumnMode = ColumnMode_1.ColumnMode;
var SortType_1 = require('./enums/SortType');
exports.SortType = SortType_1.SortType;
var SortDirection_1 = require('./enums/SortDirection');
exports.SortDirection = SortDirection_1.SortDirection;
var SelectionType_1 = require('./enums/SelectionType');
exports.SelectionType = SelectionType_1.SelectionType;
// Models
var TableOptions_1 = require('./models/TableOptions');
exports.TableOptions = TableOptions_1.TableOptions;
var TableColumn_1 = require('./models/TableColumn');
exports.TableColumn = TableColumn_1.TableColumn;
var Sort_1 = require('./models/Sort');
exports.Sort = Sort_1.Sort;
var Angular2DataTableModule = (function () {
    function Angular2DataTableModule() {
    }
    Angular2DataTableModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                Visibility_1.Visibility,
                Draggable_1.Draggable,
                Resizeable_1.Resizeable,
                Orderable_1.Orderable,
                LongPress_1.LongPress,
                TemplateWrapper_1.TemplateWrapper,
                Scroller_1.Scroller,
                DataTable_1.DataTable,
                DataTableColumn_1.DataTableColumn,
                Header_1.DataTableHeader,
                HeaderCell_1.DataTableHeaderCell,
                Body_1.DataTableBody,
                Footer_1.DataTableFooter,
                Pager_1.DataTablePager,
                ProgressBar_1.ProgressBar,
                BodyRow_1.DataTableBodyRow,
                BodyCell_1.DataTableBodyCell
            ],
            providers: [
                State_1.StateService
            ],
            exports: [
                DataTable_1.DataTable,
                DataTableColumn_1.DataTableColumn
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Angular2DataTableModule);
    return Angular2DataTableModule;
}());
exports.Angular2DataTableModule = Angular2DataTableModule;

})));
//# sourceMappingURL=angular2-data-table.umd.js.map
