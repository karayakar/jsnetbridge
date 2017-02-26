﻿(function () {
(function () {
(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] or [actionHelper.js] is missing';
    try {
        if (!window.$dp.$shared.$arrayFactory) { throw message; };
        if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
        if (!window.$dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate) { throw message };
    } catch (e) {
        message = message + '\r\n' + e.toString();
        throw message;
    }
})();
var _stampFunc = function() { return $dp.$JsNet; };
(function () {
//#region 'Model'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.TestJsNetBridgeApp = $dp.$JsNet.TestJsNetBridgeApp || {};
$dp.$JsNet.TestJsNetBridgeApp.Models = $dp.$JsNet.TestJsNetBridgeApp.Models || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers = $dp.$JsNet.TestJsNetBridgeApp.Controllers || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController || {};
var _alias0 = $dp.$JsNet.TestJsNetBridgeApp.Models;
var _alias1 = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController;
_alias0.LayoutModel = _alias0.LayoutModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PackageNugetName":"","PackageNugetVersion":{}};obj.constructor=_alias0.LayoutModel; return obj; };
_alias0.ReturnData = _alias0.ReturnData || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Url":"","Success":false,"Method":"","InputStream":{}};obj.constructor=_alias0.ReturnData; return obj; };
_alias1.dpPerson = _alias1.dpPerson || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"name":"","age":0,"description":""};obj.constructor=_alias1.dpPerson; return obj; };
//#endregion
//#region 'Enum'
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"TestArea":{"$apiData2":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Data2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},"Home2":{"Action_NoParams": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_NoParams'; action.$Names.controller = 'Home2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_FakeName": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_RealName'; action.$Names.controller = 'Home2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}},
"$apiData":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_AcceptVerbs_TEST": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_AcceptVerbs_TEST'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$TEST:"TEST",$items:["TEST"],$single:"TEST",$first:"TEST"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Orders": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Orders'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = 'customers/orders';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Orders_WithCustomerId": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Orders_WithCustomerId'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = {"customerId":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:action.$Params()}; return obj; };action.$RouteTemplate = 'customers/{customerId}/orders';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_NoParams": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_NoParams'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_FakeName": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_RealName'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ShowMe": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ShowMe'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"name":"","age":0}; return obj; };action.$Return = function(){  var obj = _alias1.dpPerson(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:action.$Params()}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})();
