"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/ui/dashboard/DataTable.tsx":
/*!****************************************!*\
  !*** ./app/ui/dashboard/DataTable.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DataTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// const columns: GridColDef[] = [\n//   { field: 'id', headerName: 'ID', width: 70 },\n//   { field: 'firstName', headerName: 'First name', width: 100 },\n//   { field: 'lastName', headerName: 'Last name', width: 100 },\n//   {\n//     field: 'age',\n//     headerName: 'Age',\n//     type: 'number',\n//     width: 90,\n//   },\n//   {\n//     field: 'fullName',\n//     headerName: 'Full name',\n//     description: 'This column has a value getter and is not sortable.',\n//     sortable: false,\n//     width: 160,\n//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,\n//   },\n// ];\nconst columns = [\n    {\n        field: \"id\",\n        headerName: \"ID\",\n        width: 70\n    },\n    {\n        field: \"Name\",\n        headerName: \"Name\",\n        width: 100\n    },\n    {\n        field: \"Address\",\n        headerName: \"Address\",\n        width: 100\n    },\n    {\n        field: \"CityName\",\n        headerName: \"City Name\",\n        width: 100\n    }\n];\n// const rows = [\n//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },\n//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },\n//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },\n//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },\n//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },\n//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },\n//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },\n//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },\n//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },\n// ];\nfunction DataTable() {\n    _s();\n    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://127.0.0.1:8000/get_hotel_data/\").then((response)=>response.json()).then((data)=>{\n            console.log(data);\n            setRows(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: 400,\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            getRowId: (row)=>\"\".concat(row.Name, \"-\").concat(row.CityName),\n            initialState: {\n                pagination: {\n                    paginationModel: {\n                        page: 0,\n                        pageSize: 5\n                    }\n                }\n            },\n            pageSizeOptions: [\n                5,\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/user/Documents/Database System/dbmaster/sp24-cs411-team065-DBMaster/final-project/frontend/app/ui/dashboard/DataTable.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/user/Documents/Database System/dbmaster/sp24-cs411-team065-DBMaster/final-project/frontend/app/ui/dashboard/DataTable.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(DataTable, \"aEmP4ME4qF+uYWoxBpsZBPdGgb8=\");\n_c = DataTable;\nvar _c;\n$RefreshReg$(_c, \"DataTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvRGF0YVRhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ0s7QUFFeEQsa0NBQWtDO0FBQ2xDLGtEQUFrRDtBQUNsRCxrRUFBa0U7QUFDbEUsZ0VBQWdFO0FBQ2hFLE1BQU07QUFDTixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsT0FBTztBQUNQLE1BQU07QUFDTix5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDBFQUEwRTtBQUMxRSx1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLG1GQUFtRjtBQUNuRixPQUFPO0FBQ1AsS0FBSztBQUVMLE1BQU1JLFVBQXdCO0lBQzVCO1FBQUVDLE9BQU87UUFBTUMsWUFBWTtRQUFNQyxPQUFPO0lBQUc7SUFDM0M7UUFBRUYsT0FBTztRQUFRQyxZQUFZO1FBQVFDLE9BQU87SUFBSTtJQUNoRDtRQUFFRixPQUFPO1FBQVdDLFlBQVk7UUFBV0MsT0FBTztJQUFJO0lBQ3REO1FBQUVGLE9BQU87UUFBWUMsWUFBWTtRQUFhQyxPQUFPO0lBQUk7Q0FDMUQ7QUFFRCxpQkFBaUI7QUFFakIsNERBQTREO0FBQzVELG9FQUFvRTtBQUNwRSxtRUFBbUU7QUFDbkUsOERBQThEO0FBQzlELHdFQUF3RTtBQUN4RSxrRUFBa0U7QUFDbEUsb0VBQW9FO0FBQ3BFLG1FQUFtRTtBQUNuRSxnRUFBZ0U7QUFDaEUsS0FBSztBQUdVLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUlUsTUFBTSx5Q0FDSEMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO1lBQ0pDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkwsUUFBUUs7UUFDVjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRztRQUFJQyxPQUFPO1lBQUVDLFFBQVE7WUFBS2IsT0FBTztRQUFPO2tCQUN2Qyw0RUFBQ0osc0RBQVFBO1lBQ1BNLE1BQU1BO1lBQ05MLFNBQVNBO1lBQ1RpQixVQUFVLENBQUNDLE1BQVEsR0FBZUEsT0FBWkEsSUFBSUMsSUFBSSxFQUFDLEtBQWdCLE9BQWJELElBQUlFLFFBQVE7WUFDOUNDLGNBQWM7Z0JBQ1pDLFlBQVk7b0JBQ1ZDLGlCQUFpQjt3QkFBRUMsTUFBTTt3QkFBR0MsVUFBVTtvQkFBRTtnQkFDMUM7WUFDRjtZQUNBQyxpQkFBaUI7Z0JBQUM7Z0JBQUc7YUFBRztZQUN4QkMsaUJBQWlCOzs7Ozs7Ozs7OztBQUl6QjtHQTVCd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvZGFzaGJvYXJkL0RhdGFUYWJsZS50c3g/M2Y5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRDb2xEZWYgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcblxuLy8gY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuLy8gICB7IGZpZWxkOiAnaWQnLCBoZWFkZXJOYW1lOiAnSUQnLCB3aWR0aDogNzAgfSxcbi8vICAgeyBmaWVsZDogJ2ZpcnN0TmFtZScsIGhlYWRlck5hbWU6ICdGaXJzdCBuYW1lJywgd2lkdGg6IDEwMCB9LFxuLy8gICB7IGZpZWxkOiAnbGFzdE5hbWUnLCBoZWFkZXJOYW1lOiAnTGFzdCBuYW1lJywgd2lkdGg6IDEwMCB9LFxuLy8gICB7XG4vLyAgICAgZmllbGQ6ICdhZ2UnLFxuLy8gICAgIGhlYWRlck5hbWU6ICdBZ2UnLFxuLy8gICAgIHR5cGU6ICdudW1iZXInLFxuLy8gICAgIHdpZHRoOiA5MCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGZpZWxkOiAnZnVsbE5hbWUnLFxuLy8gICAgIGhlYWRlck5hbWU6ICdGdWxsIG5hbWUnLFxuLy8gICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBjb2x1bW4gaGFzIGEgdmFsdWUgZ2V0dGVyIGFuZCBpcyBub3Qgc29ydGFibGUuJyxcbi8vICAgICBzb3J0YWJsZTogZmFsc2UsXG4vLyAgICAgd2lkdGg6IDE2MCxcbi8vICAgICB2YWx1ZUdldHRlcjogKHZhbHVlLCByb3cpID0+IGAke3Jvdy5maXJzdE5hbWUgfHwgJyd9ICR7cm93Lmxhc3ROYW1lIHx8ICcnfWAsXG4vLyAgIH0sXG4vLyBdO1xuXG5jb25zdCBjb2x1bW5zOiBHcmlkQ29sRGVmW10gPSBbXG4gIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiA3MCB9LFxuICB7IGZpZWxkOiAnTmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDEwMCB9LFxuICB7IGZpZWxkOiAnQWRkcmVzcycsIGhlYWRlck5hbWU6ICdBZGRyZXNzJywgd2lkdGg6IDEwMCB9LFxuICB7IGZpZWxkOiAnQ2l0eU5hbWUnLCBoZWFkZXJOYW1lOiAnQ2l0eSBOYW1lJywgd2lkdGg6IDEwMCB9LFxuXTtcblxuLy8gY29uc3Qgcm93cyA9IFtcbiAgICBcbi8vICAgeyBpZDogMSwgbGFzdE5hbWU6ICdTbm93JywgZmlyc3ROYW1lOiAnSm9uJywgYWdlOiAzNSB9LFxuLy8gICB7IGlkOiAyLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0NlcnNlaScsIGFnZTogNDIgfSxcbi8vICAgeyBpZDogMywgbGFzdE5hbWU6ICdMYW5uaXN0ZXInLCBmaXJzdE5hbWU6ICdKYWltZScsIGFnZTogNDUgfSxcbi8vICAgeyBpZDogNCwgbGFzdE5hbWU6ICdTdGFyaycsIGZpcnN0TmFtZTogJ0FyeWEnLCBhZ2U6IDE2IH0sXG4vLyAgIHsgaWQ6IDUsIGxhc3ROYW1lOiAnVGFyZ2FyeWVuJywgZmlyc3ROYW1lOiAnRGFlbmVyeXMnLCBhZ2U6IG51bGwgfSxcbi8vICAgeyBpZDogNiwgbGFzdE5hbWU6ICdNZWxpc2FuZHJlJywgZmlyc3ROYW1lOiBudWxsLCBhZ2U6IDE1MCB9LFxuLy8gICB7IGlkOiA3LCBsYXN0TmFtZTogJ0NsaWZmb3JkJywgZmlyc3ROYW1lOiAnRmVycmFyYScsIGFnZTogNDQgfSxcbi8vICAgeyBpZDogOCwgbGFzdE5hbWU6ICdGcmFuY2VzJywgZmlyc3ROYW1lOiAnUm9zc2luaScsIGFnZTogMzYgfSxcbi8vICAgeyBpZDogOSwgbGFzdE5hbWU6ICdSb3hpZScsIGZpcnN0TmFtZTogJ0hhcnZleScsIGFnZTogNjUgfSxcbi8vIF07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YVRhYmxlKCkge1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2dldF9ob3RlbF9kYXRhLycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldFJvd3MoZGF0YSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDQwMCwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIDxEYXRhR3JpZFxuICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBnZXRSb3dJZD17KHJvdykgPT4gYCR7cm93Lk5hbWV9LSR7cm93LkNpdHlOYW1lfWB9XG4gICAgICAgIGluaXRpYWxTdGF0ZT17e1xuICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlbDogeyBwYWdlOiAwLCBwYWdlU2l6ZTogNSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzUsIDEwXX1cbiAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEYXRhR3JpZCIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsIkRhdGFUYWJsZSIsInJvd3MiLCJzZXRSb3dzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsImdldFJvd0lkIiwicm93IiwiTmFtZSIsIkNpdHlOYW1lIiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2UiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsImNoZWNrYm94U2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/DataTable.tsx\n"));

/***/ })

});