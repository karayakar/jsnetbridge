﻿// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ If this library is callable (e.g. can be invoked as myLib(3)),
 *~ include those call signatures here.
 *~ Otherwise, delete this section.
 */

//declare function myLib(a: string): string;
//declare function myLib(a: number): number;

/*~ If you want the name of this library to be a valid type name,
 *~ you can do so here.
 *~
 *~ For example, this allows us to write 'var x: myLib';
 *~ Be sure this actually makes sense! If it doesn't, just
 *~ delete this declaration and add types inside the namespace below.
 */

//interface myLib {
//    name: string;
//    length: number;
//    extras?: string[];
//}

/*~ If your library has properties exposed on a global variable,
 *~ place them here.
 *~ You should also place types (interfaces and type alias) here.
 */

declare namespace $dp.$JsNet.$Helpers.$Shared.$Action {

    interface $AjaxSettings {
        dataType: string,
        contentType: string,
        cache: boolean,
        type: string,
        method: string,
    }

    interface $httpMethodArray {
        $items: ArrayConstructor, $single: string, $first: string
    }

    interface $Names {
        action: string, controller: string, area: string
    }

    interface _$Action {
        $_Url: string,
        $GetUrl(routeData: Object): string,
        $GetRouteData(): Object,
        $Names: $Names,
        $Params(): Object,
        $Return(): Object,
        $Enums(): Object,
        $IsApi: boolean,
        $httpMethodArray: $httpMethodArray,
        $AjaxSettings(): $AjaxSettings,
        $RouteTemplate: string,
    }

    function $ActionFactory(): _$Action;

}

declare namespace $dp.$shared {
    interface $Array<T> extends Array<T> {
        $dpItemFactory(): T;
    }
}
declare namespace $dp.$JsNet.ContosoUniversity.Models {
    //#region 'interfaces'
    interface OfficeAssignment
    { PersonID: number, Location: string, Instructor: $dp.$JsNet.ContosoUniversity.Models.Instructor }
    interface Student
    { EnrollmentDate: Date, PersonID: number, LastName: string, FirstMidName: string, FullName: string, Enrollments: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment> }
    interface Instructor
    { HireDate: Date, OfficeAssignment: $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment, PersonID: number, LastName: string, FirstMidName: string, FullName: string, Courses: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course> }
    interface Enrollment
    { EnrollmentID: number, CourseID: number, PersonID: number, Grade: number, Student: $dp.$JsNet.ContosoUniversity.Models.Student, Course: $dp.$JsNet.ContosoUniversity.Models.Course }
    interface Course
    { CourseID: number, Title: string, Credits: number, DepartmentID: number, Enrollments: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Enrollment>, Instructors: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Instructor>, Department: $dp.$JsNet.ContosoUniversity.Models.Department }
    interface Department
    { DepartmentID: number, Name: string, Budget: number, StartDate: Date, PersonID: number, RowVersion: $dp.$shared.$Array<number>, Administrator: $dp.$JsNet.ContosoUniversity.Models.Instructor, Courses_: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course>, Courses: $dp.$shared.$Array<$dp.$JsNet.ContosoUniversity.Models.Course> }
    //#endregion
    //#region 'func'
    var OfficeAssignment: () => $dp.$JsNet.ContosoUniversity.Models.OfficeAssignment;
    var Student: () => $dp.$JsNet.ContosoUniversity.Models.Student;
    var Instructor: () => $dp.$JsNet.ContosoUniversity.Models.Instructor;
    var Enrollment: () => $dp.$JsNet.ContosoUniversity.Models.Enrollment;
    var Course: () => $dp.$JsNet.ContosoUniversity.Models.Course;
    var Department: () => $dp.$JsNet.ContosoUniversity.Models.Department;
    //#endregion


    interface Grade {
        A: { $Key: string, $Value: number },
        C: { $Key: string, $Value: number },
        D: { $Key: string, $Value: number },
        B: { $Key: string, $Value: number },
    }

    var Grade: Grade;

}
declare namespace $dp.$JsNet.ContosoUniversity.Models.Generic {
    interface ReturnData_$gen$_ContosoUniversityModelsEnrollment
    { TypedBusinessData: $dp.$JsNet.ContosoUniversity.Models.Enrollment, Url: string, Success: boolean, Method: string, InputStream: {}, BusinessData: {} }
    var ReturnData_$gen$_ContosoUniversityModelsEnrollment: () => $dp.$JsNet.ContosoUniversity.Models.Generic.ReturnData_$gen$_ContosoUniversityModelsEnrollment;
}


declare namespace $dp.$JsNet.TestJsNetBridgeApp.Models {

    interface ReturnData<T> {
        TypedBusinessData: T,
        Url: string,
        Success: boolean,
        Method: string,
        InputStream: Object,
        BusinessData: Object,
    }
}

declare namespace $dp.$JsNet.$UrlSet.Home.Index {

    var $action0: $dp.$JsNet.$Helpers.$Shared.$Action._$Action;
}

declare namespace $dp.$JsNet.$UrlSet.Home.GetStudent {

    interface _$action0 extends $dp.$JsNet.$Helpers.$Shared.$Action._$Action {
        $Params(): { PersonID: Number }
        $Return(): $dp.$JsNet.TestJsNetBridgeApp.Models.ReturnData<$dp.$JsNet.ContosoUniversity.Models.Student>,
    }

    var $action0: _$action0;
}

import $dpUrlSet = $dp.$JsNet.$UrlSet;