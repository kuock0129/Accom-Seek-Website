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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DataTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// const columns: GridColDef[] = [\n//   { field: 'id', headerName: 'ID', width: 70 },\n//   { field: 'firstName', headerName: 'First name', width: 100 },\n//   { field: 'lastName', headerName: 'Last name', width: 100 },\n//   {\n//     field: 'age',\n//     headerName: 'Age',\n//     type: 'number',\n//     width: 90,\n//   },\n//   {\n//     field: 'fullName',\n//     headerName: 'Full name',\n//     description: 'This column has a value getter and is not sortable.',\n//     sortable: false,\n//     width: 160,\n//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,\n//   },\n// ];\nconst columns = [\n    {\n        field: \"Name\",\n        headerName: \"Name\",\n        width: 100\n    },\n    {\n        field: \"Address\",\n        headerName: \"Address\",\n        width: 100\n    },\n    {\n        field: \"CityName\",\n        headerName: \"City Name\",\n        width: 100\n    }\n];\n// const rows = [\n//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },\n//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },\n//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },\n//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },\n//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },\n//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },\n//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },\n//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },\n//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },\n// ];\nfunction DataTable() {\n    _s();\n    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://127.0.0.1:8000/get_hotel_data/\").then((response)=>response.json()).then((data)=>{\n            console.log(data);\n            setRows([\n                data\n            ]);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: 400,\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            initialState: {\n                pagination: {\n                    paginationModel: {\n                        page: 0,\n                        pageSize: 5\n                    }\n                }\n            },\n            pageSizeOptions: [\n                5,\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/user/Documents/Database System/dbmaster/sp24-cs411-team065-DBMaster/final-project/frontend/app/ui/dashboard/DataTable.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/user/Documents/Database System/dbmaster/sp24-cs411-team065-DBMaster/final-project/frontend/app/ui/dashboard/DataTable.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(DataTable, \"aEmP4ME4qF+uYWoxBpsZBPdGgb8=\");\n_c = DataTable;\nvar _c;\n$RefreshReg$(_c, \"DataTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvRGF0YVRhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ0s7QUFFeEQsa0NBQWtDO0FBQ2xDLGtEQUFrRDtBQUNsRCxrRUFBa0U7QUFDbEUsZ0VBQWdFO0FBQ2hFLE1BQU07QUFDTixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsT0FBTztBQUNQLE1BQU07QUFDTix5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDBFQUEwRTtBQUMxRSx1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLG1GQUFtRjtBQUNuRixPQUFPO0FBQ1AsS0FBSztBQUVMLE1BQU1JLFVBQXdCO0lBQzVCO1FBQUVDLE9BQU87UUFBUUMsWUFBWTtRQUFRQyxPQUFPO0lBQUk7SUFDaEQ7UUFBRUYsT0FBTztRQUFXQyxZQUFZO1FBQVdDLE9BQU87SUFBSTtJQUN0RDtRQUFFRixPQUFPO1FBQVlDLFlBQVk7UUFBYUMsT0FBTztJQUFJO0NBQzFEO0FBRUQsaUJBQWlCO0FBRWpCLDREQUE0RDtBQUM1RCxvRUFBb0U7QUFDcEUsbUVBQW1FO0FBQ25FLDhEQUE4RDtBQUM5RCx3RUFBd0U7QUFDeEUsa0VBQWtFO0FBQ2xFLG9FQUFvRTtBQUNwRSxtRUFBbUU7QUFDbkUsZ0VBQWdFO0FBQ2hFLEtBQUs7QUFHVSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1JVLE1BQU0seUNBQ0hDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pMLFFBQVE7Z0JBQUNLO2FBQUs7UUFDaEI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsT0FBTztZQUFFQyxRQUFRO1lBQUtiLE9BQU87UUFBTztrQkFDdkMsNEVBQUNKLHNEQUFRQTtZQUNQTSxNQUFNQTtZQUNOTCxTQUFTQTtZQUNUaUIsY0FBYztnQkFDWkMsWUFBWTtvQkFDVkMsaUJBQWlCO3dCQUFFQyxNQUFNO3dCQUFHQyxVQUFVO29CQUFFO2dCQUMxQztZQUNGO1lBQ0FDLGlCQUFpQjtnQkFBQztnQkFBRzthQUFHO1lBQ3hCQyxpQkFBaUI7Ozs7Ozs7Ozs7O0FBSXpCO0dBM0J3Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9kYXNoYm9hcmQvRGF0YVRhYmxlLnRzeD8zZjk0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZENvbERlZiB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xuXG4vLyBjb25zdCBjb2x1bW5zOiBHcmlkQ29sRGVmW10gPSBbXG4vLyAgIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiA3MCB9LFxuLy8gICB7IGZpZWxkOiAnZmlyc3ROYW1lJywgaGVhZGVyTmFtZTogJ0ZpcnN0IG5hbWUnLCB3aWR0aDogMTAwIH0sXG4vLyAgIHsgZmllbGQ6ICdsYXN0TmFtZScsIGhlYWRlck5hbWU6ICdMYXN0IG5hbWUnLCB3aWR0aDogMTAwIH0sXG4vLyAgIHtcbi8vICAgICBmaWVsZDogJ2FnZScsXG4vLyAgICAgaGVhZGVyTmFtZTogJ0FnZScsXG4vLyAgICAgdHlwZTogJ251bWJlcicsXG4vLyAgICAgd2lkdGg6IDkwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZmllbGQ6ICdmdWxsTmFtZScsXG4vLyAgICAgaGVhZGVyTmFtZTogJ0Z1bGwgbmFtZScsXG4vLyAgICAgZGVzY3JpcHRpb246ICdUaGlzIGNvbHVtbiBoYXMgYSB2YWx1ZSBnZXR0ZXIgYW5kIGlzIG5vdCBzb3J0YWJsZS4nLFxuLy8gICAgIHNvcnRhYmxlOiBmYWxzZSxcbi8vICAgICB3aWR0aDogMTYwLFxuLy8gICAgIHZhbHVlR2V0dGVyOiAodmFsdWUsIHJvdykgPT4gYCR7cm93LmZpcnN0TmFtZSB8fCAnJ30gJHtyb3cubGFzdE5hbWUgfHwgJyd9YCxcbi8vICAgfSxcbi8vIF07XG5cbmNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcbiAgeyBmaWVsZDogJ05hbWUnLCBoZWFkZXJOYW1lOiAnTmFtZScsIHdpZHRoOiAxMDAgfSxcbiAgeyBmaWVsZDogJ0FkZHJlc3MnLCBoZWFkZXJOYW1lOiAnQWRkcmVzcycsIHdpZHRoOiAxMDAgfSxcbiAgeyBmaWVsZDogJ0NpdHlOYW1lJywgaGVhZGVyTmFtZTogJ0NpdHkgTmFtZScsIHdpZHRoOiAxMDAgfSxcbl07XG5cbi8vIGNvbnN0IHJvd3MgPSBbXG4gICAgXG4vLyAgIHsgaWQ6IDEsIGxhc3ROYW1lOiAnU25vdycsIGZpcnN0TmFtZTogJ0pvbicsIGFnZTogMzUgfSxcbi8vICAgeyBpZDogMiwgbGFzdE5hbWU6ICdMYW5uaXN0ZXInLCBmaXJzdE5hbWU6ICdDZXJzZWknLCBhZ2U6IDQyIH0sXG4vLyAgIHsgaWQ6IDMsIGxhc3ROYW1lOiAnTGFubmlzdGVyJywgZmlyc3ROYW1lOiAnSmFpbWUnLCBhZ2U6IDQ1IH0sXG4vLyAgIHsgaWQ6IDQsIGxhc3ROYW1lOiAnU3RhcmsnLCBmaXJzdE5hbWU6ICdBcnlhJywgYWdlOiAxNiB9LFxuLy8gICB7IGlkOiA1LCBsYXN0TmFtZTogJ1RhcmdhcnllbicsIGZpcnN0TmFtZTogJ0RhZW5lcnlzJywgYWdlOiBudWxsIH0sXG4vLyAgIHsgaWQ6IDYsIGxhc3ROYW1lOiAnTWVsaXNhbmRyZScsIGZpcnN0TmFtZTogbnVsbCwgYWdlOiAxNTAgfSxcbi8vICAgeyBpZDogNywgbGFzdE5hbWU6ICdDbGlmZm9yZCcsIGZpcnN0TmFtZTogJ0ZlcnJhcmEnLCBhZ2U6IDQ0IH0sXG4vLyAgIHsgaWQ6IDgsIGxhc3ROYW1lOiAnRnJhbmNlcycsIGZpcnN0TmFtZTogJ1Jvc3NpbmknLCBhZ2U6IDM2IH0sXG4vLyAgIHsgaWQ6IDksIGxhc3ROYW1lOiAnUm94aWUnLCBmaXJzdE5hbWU6ICdIYXJ2ZXknLCBhZ2U6IDY1IH0sXG4vLyBdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFUYWJsZSgpIHtcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9nZXRfaG90ZWxfZGF0YS8nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRSb3dzKFtkYXRhXSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDQwMCwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIDxEYXRhR3JpZFxuICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBpbml0aWFsU3RhdGU9e3tcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHsgcGFnZTogMCwgcGFnZVNpemU6IDUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s1LCAxMF19XG4gICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGF0YUdyaWQiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJEYXRhVGFibGUiLCJyb3dzIiwic2V0Um93cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJpbml0aWFsU3RhdGUiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbk1vZGVsIiwicGFnZSIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwiY2hlY2tib3hTZWxlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/DataTable.tsx\n"));

/***/ })

});