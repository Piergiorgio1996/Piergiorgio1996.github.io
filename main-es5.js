(function () {
  function _templateObject23() {
    var data = _taggedTemplateLiteral(["\n    query getUsersWithName($name: String!) {\n  getUsersWithName(name: $name) {\n    username\n    name\n    lastname\n    email\n    factory\n    role\n  }\n}\n    "]);

    _templateObject23 = function _templateObject23() {
      return data;
    };

    return data;
  }

  function _templateObject22() {
    var data = _taggedTemplateLiteral(["\n    query getUsers {\n  getUsers {\n    username\n    name\n    lastname\n    email\n    factory\n    role\n  }\n}\n    "]);

    _templateObject22 = function _templateObject22() {
      return data;
    };

    return data;
  }

  function _templateObject21() {
    var data = _taggedTemplateLiteral(["\n    query getCompaniesWithoutAdmin {\n  getCompaniesWithoutAdmin {\n    name\n  }\n}\n    "]);

    _templateObject21 = function _templateObject21() {
      return data;
    };

    return data;
  }

  function _templateObject20() {
    var data = _taggedTemplateLiteral(["\n    query checkLoggedIn {\n  checkLoggedIn {\n    errors {\n      field\n      message\n    }\n    user {\n      username\n      email\n      id\n    }\n  }\n}\n    "]);

    _templateObject20 = function _templateObject20() {
      return data;
    };

    return data;
  }

  function _templateObject19() {
    var data = _taggedTemplateLiteral(["\n    mutation updateUserInformation($email: String!, $role: String!, $factory: String!, $lastname: String!, $name: String!, $username: String!) {\n  updateUserInformation(email: $email, role: $role, factory: $factory, lastname: $lastname, name: $name, username: $username) {\n    user {\n      name\n      lastname\n      factory\n      role\n      email\n    }\n    errors {\n      message\n    }\n  }\n}\n    "]);

    _templateObject19 = function _templateObject19() {
      return data;
    };

    return data;
  }

  function _templateObject18() {
    var data = _taggedTemplateLiteral(["\n    mutation registerMultiple($input: String!) {\n  registerMultiple(input: $input) {\n    message\n  }\n}\n    "]);

    _templateObject18 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17() {
    var data = _taggedTemplateLiteral(["\n    mutation register($input: UsernamePasswordInput!) {\n  register(input: $input) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n      email\n    }\n  }\n}\n    "]);

    _templateObject17 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16() {
    var data = _taggedTemplateLiteral(["\n    mutation logout {\n  logout\n}\n    "]);

    _templateObject16 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15() {
    var data = _taggedTemplateLiteral(["\n    mutation login($usernameOrEmail: String!, $password: String!) {\n  login(usernameOrEmail: $usernameOrEmail, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n      email\n    }\n  }\n}\n    "]);

    _templateObject15 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14() {
    var data = _taggedTemplateLiteral(["\n    mutation getUserGroups($userId: String!) {\n  getUserGroups(userId: $userId) {\n    id\n    name\n  }\n}\n    "]);

    _templateObject14 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13() {
    var data = _taggedTemplateLiteral(["\n    mutation getCompanyByUserId($userId: String!) {\n  getCompanyByUserId(userId: $userId) {\n    company {\n      id\n      name\n    }\n  }\n}\n    "]);

    _templateObject13 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12() {
    var data = _taggedTemplateLiteral(["\n    mutation getSurveysOfInitiative($initiativeId: String!) {\n  getSurveysOfInitiative(initiativeId: $initiativeId) {\n    name\n    id\n    usersThatAnsweredThisSurvey\n    questions\n  }\n}\n    "]);

    _templateObject12 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11() {
    var data = _taggedTemplateLiteral(["\n    mutation getInitiativesByCompanyId($companyId: String!) {\n  getInitiativesByCompanyId(companyId: $companyId) {\n    id\n    title\n    deadline\n    currentState\n    creator\n  }\n}\n    "]);

    _templateObject11 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10() {
    var data = _taggedTemplateLiteral(["\n    mutation getInitiatveGroups($initiativeId: String!) {\n  getInitiatveGroups(initiativeId: $initiativeId) {\n    name\n    id\n  }\n}\n    "]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["\n    mutation getDepartmentsOfCompany($companyId: String!) {\n  getDepartmentsOfCompany(companyId: $companyId) {\n    id\n    name\n  }\n}\n    "]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["\n    mutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n    "]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n    mutation removeInitiative($companyId: String!, $initiativeId: String!) {\n  removeInitiative(companyId: $companyId, initiativeId: $initiativeId)\n}\n    "]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\n    mutation createInitiative($state: String!, $title: String!, $userId: String!, $companyId: String!, $deadline: String!) {\n  createInitiative(state: $state, title: $title, userId: $userId, companyId: $companyId, deadline: $deadline) {\n    errors {\n      field\n      message\n    }\n  }\n}\n    "]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n    mutation createCompany($input: String!) {\n  createCompany(input: $input) {\n    company {\n      name\n      id\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n    "]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n    mutation createAdministrator($input: CompanyUserInput!) {\n  createAdministrator(input: $input) {\n    errors {\n      field\n      message\n    }\n    company {\n      id\n      name\n      administrator {\n        id\n        username\n      }\n    }\n  }\n}\n    "]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n    mutation createSurvey($initiativeId: String!, $name: String!, $category: String!, $status: String!) {\n  createSurvey(initiativeId: $initiativeId, name: $name, category: $category, status: $status) {\n    survey {\n      id\n    }\n  }\n}\n    "]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n    mutation addQuestionToSurvey($surveyId: String!, $questionTitle: String!) {\n  addQuestionToSurvey(surveyId: $surveyId, questionTitle: $questionTitle) {\n    newQuestion {\n      id\n    }\n  }\n}\n    "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n    mutation addMultipeChoiceAnswerToAQuestion($questionId: String!, $answerText: String!) {\n  addMultipeChoiceAnswerToAQuestion(questionId: $questionId, answerText: $answerText) {\n    errors {\n      message\n    }\n  }\n}\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Piergiorgio\Documents\projecten3-2021-angular-e5\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "01b4":
    /*!*******************************************************!*\
      !*** ./src/app/models/initiative/RealizationState.ts ***!
      \*******************************************************/

    /*! exports provided: RealizationState */

    /***/
    function b4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealizationState", function () {
        return RealizationState;
      });
      /* harmony import */


      var _ValueCreationState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ValueCreationState */
      "peWk");

      var RealizationState = /*#__PURE__*/function () {
        function RealizationState(initiative) {
          _classCallCheck(this, RealizationState);

          this.initiative = initiative;
        }

        _createClass(RealizationState, [{
          key: "addGroups",
          value: function addGroups() {
            console.log('Realization! can not go to previos add groups state');
          }
        }, {
          key: "visualizeResult",
          value: function visualizeResult() {
            console.log('Realization! still need to compelete to go to visualize');
          }
        }, {
          key: "cancelInitiatve",
          value: function cancelInitiatve() {
            console.log('Realization! can not cancel..');
          }
        }, {
          key: "addSurvies",
          value: function addSurvies() {
            this.initiative.SetSate(new _ValueCreationState__WEBPACK_IMPORTED_MODULE_0__["ValueCreationState"](this.initiative));
          }
        }]);

        return RealizationState;
      }();
      /***/

    },

    /***/
    "346a":
    /*!*************************************************************************!*\
      !*** ./src/app/components/group/manage-group/manage-group.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ManageGroupComponent */

    /***/
    function a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageGroupComponent", function () {
        return ManageGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/group.service */
      "m86e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");

      function ManageGroupComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Number of members: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXXl", 8)("nzXl", 4)("nzLg", 6)("nzMd", 6)("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r1.name);
        }
      }

      var ManageGroupComponent = /*#__PURE__*/function () {
        function ManageGroupComponent(_groupService, router, _route) {
          var _this = this;

          _classCallCheck(this, ManageGroupComponent);

          this._groupService = _groupService;
          this.router = router;
          this._route = _route;
          this.size = 'large';
          this._userId = localStorage.getItem("userid");
          this._fetchGroups$ = this._route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (newParams) {
            return _this._groupService.getUserGroups$(_this._userId);
          }));
        }

        _createClass(ManageGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "groups$",
          get: function get() {
            return this._fetchGroups$;
          }
        }]);

        return ManageGroupComponent;
      }();

      ManageGroupComponent.ɵfac = function ManageGroupComponent_Factory(t) {
        return new (t || ManageGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      ManageGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManageGroupComponent,
        selectors: [["app-manage-group"]],
        decls: 9,
        vars: 5,
        consts: [["small", "true"], ["routerLink", "/create-group", "nz-button", "", "nzType", "defualt", "nzBlock", "", 1, "create-button", 3, "nzSize"], [1, "display-list"], ["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [2, "margin-bottom", "0.2em"], [1, "color-border", 2, "border-radius", "1em", 3, "nzTitle"], ["nz-button", "", "nzDanger", "", 1, "radius", 2, "width", "100%"]],
        template: function ManageGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create new group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManageGroupComponent_div_7_Template, 9, 7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.groups$));
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_4__["ContainerComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListGridDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListItemComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: [".create-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 115%;\n  margin-top: 0.2em;\n  background-color: #56718b;\n  color: white;\n}\n\n.display-list[_ngcontent-%COMP%] {\n  margin: 4em;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nnz-list-item[_ngcontent-%COMP%]:hover   nz-card[_ngcontent-%COMP%] {\n  background-color: #a5c2a5;\n}\n\n.radius[_ngcontent-%COMP%] {\n  border-radius: 1em;\n}\n\n.color-border[_ngcontent-%COMP%] {\n  border-color: #628d5d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9tYW5hZ2UtZ3JvdXAvbWFuYWdlLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0csaUJBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBTjs7QUFHRztFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQU47O0FBS007RUFDRSx5QkFBQTtBQUZSOztBQU1JO0VBQ0Usa0JBQUE7QUFITjs7QUFNSztFQUNDLHFCQUFBO0FBSE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyb3VwL21hbmFnZS1ncm91cC9tYW5hZ2UtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIC5jcmVhdGUtYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB3aWR0aDogMTE1JTsgXHJcbiAgICAgIG1hcmdpbi10b3A6IDAuMmVtOyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCAxMTMsIDEzOSk7IFxyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuXHJcbiAgIC5kaXNwbGF5LWxpc3R7XHJcbiAgICAgIG1hcmdpbjogNGVtO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICByaWdodDowO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuei1saXN0LWl0ZW06aG92ZXIge1xyXG4gICAgICBuei1jYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWMyYTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmFkaXVze1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgfVxyXG5cclxuICAgICAuY29sb3ItYm9yZGVye1xyXG4gICAgICBib3JkZXItY29sb3I6ICM2MjhkNWQ7XHJcbiAgICB9XHJcbiAgICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manage-group',
            templateUrl: './manage-group.component.html',
            styleUrls: ['./manage-group.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3F0J":
    /*!**************************************************************!*\
      !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function F0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/utils/navigation */
      "Jw8O");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../container/container.component */
      "bALC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      function NavbarComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        }
      }

      function NavbarComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Initiative Overview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_6_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onManageGroupClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Mangae Groups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Manage Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_6_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome, ", ctx_r2.username, "! ");
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(userService, router) {
          _classCallCheck(this, NavbarComponent);

          this.userService = userService;
          this.router = router;
          this.username = null;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.querySubscription = this.userService.checkLoggedIn().valueChanges.subscribe(function (_ref) {
              var data = _ref.data;
              console.log(data);

              if (data.checkLoggedIn !== null) {
                _this2.username = data.checkLoggedIn.user.username;
              } else {
                _this2.username = null;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.querySubscription.unsubscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.userService.logout().subscribe(function (_ref2) {
              var data = _ref2.data;

              if (data.logout) {
                console.log('ja');

                _this3.userService.checkLoggedIn().refetch();

                Object(src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_1__["navigateLogin"])(_this3.router);
              }
            });
          }
        }, {
          key: "initiativeOverview",
          value: function initiativeOverview() {
            Object(src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_1__["navigateInitiativeOverview"])(this.router);
          }
        }, {
          key: "onManageGroupClick",
          value: function onManageGroupClick() {
            var userid = localStorage.getItem("userid");
            this.router.navigate(['/manage-group', userid]);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 8,
        vars: 2,
        consts: [[1, "header"], ["className", "header"], ["routerLink", "/initiative-overview", 1, "header-logo"], [1, "header-nav"], ["class", "header-nav__menu", 4, "ngIf", "ngIfElse"], ["showUsername", ""], [1, "header-nav__menu"], [1, "header-nav__menu-item"], ["routerLink", "/login", "routerLinkActive", "menu-link__active", 1, "header-nav__menu-link", 3, "routerLinkActiveOptions"], ["routerLink", "/register", "routerLinkActive", "menu-link__active", 1, "header-nav__menu-link", 3, "routerLinkActiveOptions"], ["routerLink", "/initiative-overview"], [3, "click"], ["routerLink", "/manage-users"], ["routerLink", "/create-company"], ["routerLink", "/user-details"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Essentials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_ul_5_Template, 7, 4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_ng_template_6_Template, 13, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username === null)("ngIfElse", _r1);
          }
        },
        directives: [_container_container_component__WEBPACK_IMPORTED_MODULE_4__["ContainerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: ["header.header[_ngcontent-%COMP%] {\n  background: #0c0c0cd7;\n}\nheader.header[_ngcontent-%COMP%]   h1.header-logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: bold;\n  color: white;\n}\nheader.header[_ngcontent-%COMP%]   nav.header-nav[_ngcontent-%COMP%]   ul.header-nav__menu[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n}\nheader.header[_ngcontent-%COMP%]   nav.header-nav[_ngcontent-%COMP%]   ul.header-nav__menu[_ngcontent-%COMP%]   .header-nav__menu-item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\nheader.header[_ngcontent-%COMP%]   nav.header-nav[_ngcontent-%COMP%]   ul.header-nav__menu[_ngcontent-%COMP%]   .header-nav__menu-item[_ngcontent-%COMP%]   a.header-nav__menu-link.menu-link__active[_ngcontent-%COMP%] {\n  color: #3941a0;\n}\nheader.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n}\nheader.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  padding: 2px 15px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  transition: all 1s;\n}\nheader.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, header.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \" \";\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  border: 0px solid #fff;\n  transition: all 1s;\n}\nheader.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  top: -1px;\n  left: -1px;\n}\nheader.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  bottom: -1px;\n  right: -1px;\n}\nheader.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  background: rgba(63, 116, 160, 0.5);\n}\nheader.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, header.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  height: 100%;\n  border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUdJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFETjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBSVU7RUFDRSxjQUFBO0FBRlo7QUFRRTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQU5KO0FBYUU7RUFDRSxlQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQVhOO0FBWU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFWUjtBQWFNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFYUjtBQWVNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFiUjtBQWlCTTtFQUNFLDRCQUFBO0VBQ0YsOEJBQUE7RUFDRyxtQ0FBQTtBQWZUO0FBZ0JRO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWZWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlci5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwYzBjMGNkNztcclxuXHJcbiAgaDEuaGVhZGVyLWxvZ28ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBuYXYuaGVhZGVyLW5hdiB7XHJcbiAgICB1bC5oZWFkZXItbmF2X19tZW51IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgLmhlYWRlci1uYXZfX21lbnUtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgICAgIGEuaGVhZGVyLW5hdl9fbWVudS1saW5rIHtcclxuICAgICAgICAgICYubWVudS1saW5rX19hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM5NDFhMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBhe1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOjJweCAxNXB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246YWxsIDFzO1xyXG4gICAgICAmOmFmdGVyLCY6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6XCIgXCI7XHJcbiAgICAgICAgd2lkdGg6MTBweDtcclxuICAgICAgICBoZWlnaHQ6MTBweDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXIgOjBweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIHRyYW5zaXRpb246YWxsIDFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgJjphZnRlcntcclxuICAgICAgICB0b3A6LTFweDtcclxuICAgICAgICBsZWZ0Oi0xcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLXRvcDo1cHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgLy8gYm9yZGVyLWxlZnQ6NXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgIGJvdHRvbTotMXB4O1xyXG4gICAgICAgIHJpZ2h0Oi0xcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTo1cHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OjVweCBzb2xpZCBibGFjaztcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6cmdiYSg2MywgMTE2LCAxNjAsIDAuNSk7XHJcbiAgICAgICAgJjpiZWZvcmUsJjphZnRlcntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3ieA":
    /*!************************************************!*\
      !*** ./src/app/models/essential/user.model.ts ***!
      \************************************************/

    /*! exports provided: User */

    /***/
    function ieA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = /*#__PURE__*/function () {
        function User(_username, _firstname, _lastname, _email, _factroy, _roles) {
          _classCallCheck(this, User);

          this._username = _username;
          this._firstname = _firstname;
          this._lastname = _lastname;
          this._email = _email;
          this._factroy = _factroy;
          this._roles = _roles;
          this._initiatives = new Array();
        }

        _createClass(User, [{
          key: "addRole",
          value: function addRole(newRole) {
            this._roles.add(newRole);
          }
        }, {
          key: "removeRole",
          value: function removeRole(role) {
            this._roles["delete"](role);
          }
        }, {
          key: "updateRole",
          value: function updateRole(oldRole, newRole) {
            this.removeRole(oldRole);
            this.addRole(newRole);
          }
        }, {
          key: "addInitiative",
          value: function addInitiative(newInitiative) {
            this._initiatives.push(newInitiative);
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._username;
          },
          set: function set(value) {
            this._username = value;
          }
        }, {
          key: "firstname",
          get: function get() {
            return this._firstname;
          },
          set: function set(value) {
            this._firstname = value;
          }
        }, {
          key: "lastname",
          get: function get() {
            return this._lastname;
          },
          set: function set(value) {
            this._lastname = value;
          }
        }, {
          key: "email",
          get: function get() {
            return this._email;
          },
          set: function set(value) {
            this._email = value;
          }
        }, {
          key: "factory",
          get: function get() {
            return this._factroy;
          },
          set: function set(value) {
            this._factroy = value;
          }
        }, {
          key: "roles",
          get: function get() {
            return this._roles;
          },
          set: function set(value) {
            this._roles = value;
          }
        }, {
          key: "initiatives",
          get: function get() {
            return this._initiatives;
          }
        }]);

        return User;
      }();
      /***/

    },

    /***/
    "4KHl":
    /*!***********************************!*\
      !*** ./src/app/graphql.module.ts ***!
      \***********************************/

    /*! exports provided: createApollo, GraphQLModule */

    /***/
    function KHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createApollo", function () {
        return createApollo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
        return GraphQLModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! apollo-angular */
      "/IUn");
      /* harmony import */


      var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @apollo/client/core */
      "ALmS");
      /* harmony import */


      var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! apollo-angular/http */
      "E21e");

      var uri = 'https://essentialsproject.herokuapp.com/graphql';

      function createApollo(httpLink) {
        return {
          link: httpLink.create({
            uri: uri,
            withCredentials: true
          }),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]()
        };
      }

      var GraphQLModule = function GraphQLModule() {
        _classCallCheck(this, GraphQLModule);
      };

      GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GraphQLModule
      });
      GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GraphQLModule_Factory(t) {
          return new (t || GraphQLModule)();
        },
        providers: [{
          provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
          useFactory: createApollo,
          deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
        }]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [{
              provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
              useFactory: createApollo,
              deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "4WgB":
    /*!***********************************************!*\
      !*** ./src/app/models/enum/user-role.enum.ts ***!
      \***********************************************/

    /*! exports provided: UserRole */

    /***/
    function WgB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRole", function () {
        return UserRole;
      });

      var UserRole;

      (function (UserRole) {
        UserRole[UserRole["MANAGER"] = 0] = "MANAGER";
        UserRole[UserRole["CMANAGER"] = 1] = "CMANAGER";
        UserRole[UserRole["EADMINISTRATOR"] = 2] = "EADMINISTRATOR";
        UserRole[UserRole["EMPLOYEE"] = 3] = "EMPLOYEE";
        UserRole[UserRole["SPONSOR"] = 4] = "SPONSOR";
      })(UserRole || (UserRole = {}));
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "FJRG":
    /*!**********************************!*\
      !*** ./src/generated/graphql.ts ***!
      \**********************************/

    /*! exports provided: AddMultipeChoiceAnswerToAQuestionDocument, AddMultipeChoiceAnswerToAQuestionGQL, AddQuestionToSurveyDocument, AddQuestionToSurveyGQL, CreateSurveyDocument, CreateSurveyGQL, CreateAdministratorDocument, CreateAdministratorGQL, CreateCompanyDocument, CreateCompanyGQL, CreateInitiativeDocument, CreateInitiativeGQL, RemoveInitiativeDocument, RemoveInitiativeGQL, ForgotPasswordDocument, ForgotPasswordGQL, GetDepartmentsOfCompanyDocument, GetDepartmentsOfCompanyGQL, GetInitiatveGroupsDocument, GetInitiatveGroupsGQL, GetInitiativesByCompanyIdDocument, GetInitiativesByCompanyIdGQL, GetSurveysOfInitiativeDocument, GetSurveysOfInitiativeGQL, GetCompanyByUserIdDocument, GetCompanyByUserIdGQL, GetUserGroupsDocument, GetUserGroupsGQL, LoginDocument, LoginGQL, LogoutDocument, LogoutGQL, RegisterDocument, RegisterGQL, RegisterMultipleDocument, RegisterMultipleGQL, UpdateUserInformationDocument, UpdateUserInformationGQL, CheckLoggedInDocument, CheckLoggedInGQL, GetCompaniesWithoutAdminDocument, GetCompaniesWithoutAdminGQL, GetUsersDocument, GetUsersGQL, GetUsersWithNameDocument, GetUsersWithNameGQL */

    /***/
    function FJRG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMultipeChoiceAnswerToAQuestionDocument", function () {
        return AddMultipeChoiceAnswerToAQuestionDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMultipeChoiceAnswerToAQuestionGQL", function () {
        return AddMultipeChoiceAnswerToAQuestionGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddQuestionToSurveyDocument", function () {
        return AddQuestionToSurveyDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddQuestionToSurveyGQL", function () {
        return AddQuestionToSurveyGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateSurveyDocument", function () {
        return CreateSurveyDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateSurveyGQL", function () {
        return CreateSurveyGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateAdministratorDocument", function () {
        return CreateAdministratorDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateAdministratorGQL", function () {
        return CreateAdministratorGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCompanyDocument", function () {
        return CreateCompanyDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCompanyGQL", function () {
        return CreateCompanyGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateInitiativeDocument", function () {
        return CreateInitiativeDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateInitiativeGQL", function () {
        return CreateInitiativeGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveInitiativeDocument", function () {
        return RemoveInitiativeDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveInitiativeGQL", function () {
        return RemoveInitiativeGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordDocument", function () {
        return ForgotPasswordDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordGQL", function () {
        return ForgotPasswordGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetDepartmentsOfCompanyDocument", function () {
        return GetDepartmentsOfCompanyDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetDepartmentsOfCompanyGQL", function () {
        return GetDepartmentsOfCompanyGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetInitiatveGroupsDocument", function () {
        return GetInitiatveGroupsDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetInitiatveGroupsGQL", function () {
        return GetInitiatveGroupsGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetInitiativesByCompanyIdDocument", function () {
        return GetInitiativesByCompanyIdDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetInitiativesByCompanyIdGQL", function () {
        return GetInitiativesByCompanyIdGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetSurveysOfInitiativeDocument", function () {
        return GetSurveysOfInitiativeDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetSurveysOfInitiativeGQL", function () {
        return GetSurveysOfInitiativeGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCompanyByUserIdDocument", function () {
        return GetCompanyByUserIdDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCompanyByUserIdGQL", function () {
        return GetCompanyByUserIdGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUserGroupsDocument", function () {
        return GetUserGroupsDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUserGroupsGQL", function () {
        return GetUserGroupsGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginDocument", function () {
        return LoginDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGQL", function () {
        return LoginGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutDocument", function () {
        return LogoutDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutGQL", function () {
        return LogoutGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterDocument", function () {
        return RegisterDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterGQL", function () {
        return RegisterGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterMultipleDocument", function () {
        return RegisterMultipleDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterMultipleGQL", function () {
        return RegisterMultipleGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateUserInformationDocument", function () {
        return UpdateUserInformationDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateUserInformationGQL", function () {
        return UpdateUserInformationGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckLoggedInDocument", function () {
        return CheckLoggedInDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckLoggedInGQL", function () {
        return CheckLoggedInGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCompaniesWithoutAdminDocument", function () {
        return GetCompaniesWithoutAdminDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCompaniesWithoutAdminGQL", function () {
        return GetCompaniesWithoutAdminGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsersDocument", function () {
        return GetUsersDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsersGQL", function () {
        return GetUsersGQL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsersWithNameDocument", function () {
        return GetUsersWithNameDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsersWithNameGQL", function () {
        return GetUsersWithNameGQL;
      });
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! apollo-angular */
      "/IUn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddMultipeChoiceAnswerToAQuestionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject());

      var AddMultipeChoiceAnswerToAQuestionGQL = /*#__PURE__*/function (_apollo_angular__WEBP) {
        _inherits(AddMultipeChoiceAnswerToAQuestionGQL, _apollo_angular__WEBP);

        var _super = _createSuper(AddMultipeChoiceAnswerToAQuestionGQL);

        function AddMultipeChoiceAnswerToAQuestionGQL(apollo) {
          var _this4;

          _classCallCheck(this, AddMultipeChoiceAnswerToAQuestionGQL);

          _this4 = _super.call(this, apollo);
          _this4.document = AddMultipeChoiceAnswerToAQuestionDocument;
          return _this4;
        }

        return AddMultipeChoiceAnswerToAQuestionGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      AddMultipeChoiceAnswerToAQuestionGQL.ɵfac = function AddMultipeChoiceAnswerToAQuestionGQL_Factory(t) {
        return new (t || AddMultipeChoiceAnswerToAQuestionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      AddMultipeChoiceAnswerToAQuestionGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AddMultipeChoiceAnswerToAQuestionGQL,
        factory: AddMultipeChoiceAnswerToAQuestionGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddMultipeChoiceAnswerToAQuestionGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var AddQuestionToSurveyDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject2());

      var AddQuestionToSurveyGQL = /*#__PURE__*/function (_apollo_angular__WEBP2) {
        _inherits(AddQuestionToSurveyGQL, _apollo_angular__WEBP2);

        var _super2 = _createSuper(AddQuestionToSurveyGQL);

        function AddQuestionToSurveyGQL(apollo) {
          var _this5;

          _classCallCheck(this, AddQuestionToSurveyGQL);

          _this5 = _super2.call(this, apollo);
          _this5.document = AddQuestionToSurveyDocument;
          return _this5;
        }

        return AddQuestionToSurveyGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      AddQuestionToSurveyGQL.ɵfac = function AddQuestionToSurveyGQL_Factory(t) {
        return new (t || AddQuestionToSurveyGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      AddQuestionToSurveyGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AddQuestionToSurveyGQL,
        factory: AddQuestionToSurveyGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddQuestionToSurveyGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var CreateSurveyDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject3());

      var CreateSurveyGQL = /*#__PURE__*/function (_apollo_angular__WEBP3) {
        _inherits(CreateSurveyGQL, _apollo_angular__WEBP3);

        var _super3 = _createSuper(CreateSurveyGQL);

        function CreateSurveyGQL(apollo) {
          var _this6;

          _classCallCheck(this, CreateSurveyGQL);

          _this6 = _super3.call(this, apollo);
          _this6.document = CreateSurveyDocument;
          return _this6;
        }

        return CreateSurveyGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      CreateSurveyGQL.ɵfac = function CreateSurveyGQL_Factory(t) {
        return new (t || CreateSurveyGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      CreateSurveyGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CreateSurveyGQL,
        factory: CreateSurveyGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateSurveyGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var CreateAdministratorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject4());

      var CreateAdministratorGQL = /*#__PURE__*/function (_apollo_angular__WEBP4) {
        _inherits(CreateAdministratorGQL, _apollo_angular__WEBP4);

        var _super4 = _createSuper(CreateAdministratorGQL);

        function CreateAdministratorGQL(apollo) {
          var _this7;

          _classCallCheck(this, CreateAdministratorGQL);

          _this7 = _super4.call(this, apollo);
          _this7.document = CreateAdministratorDocument;
          return _this7;
        }

        return CreateAdministratorGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      CreateAdministratorGQL.ɵfac = function CreateAdministratorGQL_Factory(t) {
        return new (t || CreateAdministratorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      CreateAdministratorGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CreateAdministratorGQL,
        factory: CreateAdministratorGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateAdministratorGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var CreateCompanyDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject5());

      var CreateCompanyGQL = /*#__PURE__*/function (_apollo_angular__WEBP5) {
        _inherits(CreateCompanyGQL, _apollo_angular__WEBP5);

        var _super5 = _createSuper(CreateCompanyGQL);

        function CreateCompanyGQL(apollo) {
          var _this8;

          _classCallCheck(this, CreateCompanyGQL);

          _this8 = _super5.call(this, apollo);
          _this8.document = CreateCompanyDocument;
          return _this8;
        }

        return CreateCompanyGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      CreateCompanyGQL.ɵfac = function CreateCompanyGQL_Factory(t) {
        return new (t || CreateCompanyGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      CreateCompanyGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CreateCompanyGQL,
        factory: CreateCompanyGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateCompanyGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var CreateInitiativeDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject6());

      var CreateInitiativeGQL = /*#__PURE__*/function (_apollo_angular__WEBP6) {
        _inherits(CreateInitiativeGQL, _apollo_angular__WEBP6);

        var _super6 = _createSuper(CreateInitiativeGQL);

        function CreateInitiativeGQL(apollo) {
          var _this9;

          _classCallCheck(this, CreateInitiativeGQL);

          _this9 = _super6.call(this, apollo);
          _this9.document = CreateInitiativeDocument;
          return _this9;
        }

        return CreateInitiativeGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      CreateInitiativeGQL.ɵfac = function CreateInitiativeGQL_Factory(t) {
        return new (t || CreateInitiativeGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      CreateInitiativeGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CreateInitiativeGQL,
        factory: CreateInitiativeGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateInitiativeGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var RemoveInitiativeDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject7());

      var RemoveInitiativeGQL = /*#__PURE__*/function (_apollo_angular__WEBP7) {
        _inherits(RemoveInitiativeGQL, _apollo_angular__WEBP7);

        var _super7 = _createSuper(RemoveInitiativeGQL);

        function RemoveInitiativeGQL(apollo) {
          var _this10;

          _classCallCheck(this, RemoveInitiativeGQL);

          _this10 = _super7.call(this, apollo);
          _this10.document = RemoveInitiativeDocument;
          return _this10;
        }

        return RemoveInitiativeGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      RemoveInitiativeGQL.ɵfac = function RemoveInitiativeGQL_Factory(t) {
        return new (t || RemoveInitiativeGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      RemoveInitiativeGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RemoveInitiativeGQL,
        factory: RemoveInitiativeGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RemoveInitiativeGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var ForgotPasswordDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject8());

      var ForgotPasswordGQL = /*#__PURE__*/function (_apollo_angular__WEBP8) {
        _inherits(ForgotPasswordGQL, _apollo_angular__WEBP8);

        var _super8 = _createSuper(ForgotPasswordGQL);

        function ForgotPasswordGQL(apollo) {
          var _this11;

          _classCallCheck(this, ForgotPasswordGQL);

          _this11 = _super8.call(this, apollo);
          _this11.document = ForgotPasswordDocument;
          return _this11;
        }

        return ForgotPasswordGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      ForgotPasswordGQL.ɵfac = function ForgotPasswordGQL_Factory(t) {
        return new (t || ForgotPasswordGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      ForgotPasswordGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ForgotPasswordGQL,
        factory: ForgotPasswordGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForgotPasswordGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetDepartmentsOfCompanyDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject9());

      var GetDepartmentsOfCompanyGQL = /*#__PURE__*/function (_apollo_angular__WEBP9) {
        _inherits(GetDepartmentsOfCompanyGQL, _apollo_angular__WEBP9);

        var _super9 = _createSuper(GetDepartmentsOfCompanyGQL);

        function GetDepartmentsOfCompanyGQL(apollo) {
          var _this12;

          _classCallCheck(this, GetDepartmentsOfCompanyGQL);

          _this12 = _super9.call(this, apollo);
          _this12.document = GetDepartmentsOfCompanyDocument;
          return _this12;
        }

        return GetDepartmentsOfCompanyGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      GetDepartmentsOfCompanyGQL.ɵfac = function GetDepartmentsOfCompanyGQL_Factory(t) {
        return new (t || GetDepartmentsOfCompanyGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetDepartmentsOfCompanyGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetDepartmentsOfCompanyGQL,
        factory: GetDepartmentsOfCompanyGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetDepartmentsOfCompanyGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetInitiatveGroupsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject10());

      var GetInitiatveGroupsGQL = /*#__PURE__*/function (_apollo_angular__WEBP10) {
        _inherits(GetInitiatveGroupsGQL, _apollo_angular__WEBP10);

        var _super10 = _createSuper(GetInitiatveGroupsGQL);

        function GetInitiatveGroupsGQL(apollo) {
          var _this13;

          _classCallCheck(this, GetInitiatveGroupsGQL);

          _this13 = _super10.call(this, apollo);
          _this13.document = GetInitiatveGroupsDocument;
          return _this13;
        }

        return GetInitiatveGroupsGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      GetInitiatveGroupsGQL.ɵfac = function GetInitiatveGroupsGQL_Factory(t) {
        return new (t || GetInitiatveGroupsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetInitiatveGroupsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetInitiatveGroupsGQL,
        factory: GetInitiatveGroupsGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetInitiatveGroupsGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetInitiativesByCompanyIdDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject11());

      var GetInitiativesByCompanyIdGQL = /*#__PURE__*/function (_apollo_angular__WEBP11) {
        _inherits(GetInitiativesByCompanyIdGQL, _apollo_angular__WEBP11);

        var _super11 = _createSuper(GetInitiativesByCompanyIdGQL);

        function GetInitiativesByCompanyIdGQL(apollo) {
          var _this14;

          _classCallCheck(this, GetInitiativesByCompanyIdGQL);

          _this14 = _super11.call(this, apollo);
          _this14.document = GetInitiativesByCompanyIdDocument;
          return _this14;
        }

        return GetInitiativesByCompanyIdGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      GetInitiativesByCompanyIdGQL.ɵfac = function GetInitiativesByCompanyIdGQL_Factory(t) {
        return new (t || GetInitiativesByCompanyIdGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetInitiativesByCompanyIdGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetInitiativesByCompanyIdGQL,
        factory: GetInitiativesByCompanyIdGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetInitiativesByCompanyIdGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetSurveysOfInitiativeDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject12());

      var GetSurveysOfInitiativeGQL = /*#__PURE__*/function (_apollo_angular__WEBP12) {
        _inherits(GetSurveysOfInitiativeGQL, _apollo_angular__WEBP12);

        var _super12 = _createSuper(GetSurveysOfInitiativeGQL);

        function GetSurveysOfInitiativeGQL(apollo) {
          var _this15;

          _classCallCheck(this, GetSurveysOfInitiativeGQL);

          _this15 = _super12.call(this, apollo);
          _this15.document = GetSurveysOfInitiativeDocument;
          return _this15;
        }

        return GetSurveysOfInitiativeGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      GetSurveysOfInitiativeGQL.ɵfac = function GetSurveysOfInitiativeGQL_Factory(t) {
        return new (t || GetSurveysOfInitiativeGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetSurveysOfInitiativeGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetSurveysOfInitiativeGQL,
        factory: GetSurveysOfInitiativeGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetSurveysOfInitiativeGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetCompanyByUserIdDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject13());

      var GetCompanyByUserIdGQL = /*#__PURE__*/function (_apollo_angular__WEBP13) {
        _inherits(GetCompanyByUserIdGQL, _apollo_angular__WEBP13);

        var _super13 = _createSuper(GetCompanyByUserIdGQL);

        function GetCompanyByUserIdGQL(apollo) {
          var _this16;

          _classCallCheck(this, GetCompanyByUserIdGQL);

          _this16 = _super13.call(this, apollo);
          _this16.document = GetCompanyByUserIdDocument;
          return _this16;
        }

        return GetCompanyByUserIdGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      GetCompanyByUserIdGQL.ɵfac = function GetCompanyByUserIdGQL_Factory(t) {
        return new (t || GetCompanyByUserIdGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetCompanyByUserIdGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetCompanyByUserIdGQL,
        factory: GetCompanyByUserIdGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetCompanyByUserIdGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetUserGroupsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject14());

      var GetUserGroupsGQL = /*#__PURE__*/function (_apollo_angular__WEBP14) {
        _inherits(GetUserGroupsGQL, _apollo_angular__WEBP14);

        var _super14 = _createSuper(GetUserGroupsGQL);

        function GetUserGroupsGQL(apollo) {
          var _this17;

          _classCallCheck(this, GetUserGroupsGQL);

          _this17 = _super14.call(this, apollo);
          _this17.document = GetUserGroupsDocument;
          return _this17;
        }

        return GetUserGroupsGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      GetUserGroupsGQL.ɵfac = function GetUserGroupsGQL_Factory(t) {
        return new (t || GetUserGroupsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetUserGroupsGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetUserGroupsGQL,
        factory: GetUserGroupsGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetUserGroupsGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var LoginDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject15());

      var LoginGQL = /*#__PURE__*/function (_apollo_angular__WEBP15) {
        _inherits(LoginGQL, _apollo_angular__WEBP15);

        var _super15 = _createSuper(LoginGQL);

        function LoginGQL(apollo) {
          var _this18;

          _classCallCheck(this, LoginGQL);

          _this18 = _super15.call(this, apollo);
          _this18.document = LoginDocument;
          return _this18;
        }

        return LoginGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      LoginGQL.ɵfac = function LoginGQL_Factory(t) {
        return new (t || LoginGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      LoginGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoginGQL,
        factory: LoginGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var LogoutDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject16());

      var LogoutGQL = /*#__PURE__*/function (_apollo_angular__WEBP16) {
        _inherits(LogoutGQL, _apollo_angular__WEBP16);

        var _super16 = _createSuper(LogoutGQL);

        function LogoutGQL(apollo) {
          var _this19;

          _classCallCheck(this, LogoutGQL);

          _this19 = _super16.call(this, apollo);
          _this19.document = LogoutDocument;
          return _this19;
        }

        return LogoutGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      LogoutGQL.ɵfac = function LogoutGQL_Factory(t) {
        return new (t || LogoutGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      LogoutGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LogoutGQL,
        factory: LogoutGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogoutGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var RegisterDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject17());

      var RegisterGQL = /*#__PURE__*/function (_apollo_angular__WEBP17) {
        _inherits(RegisterGQL, _apollo_angular__WEBP17);

        var _super17 = _createSuper(RegisterGQL);

        function RegisterGQL(apollo) {
          var _this20;

          _classCallCheck(this, RegisterGQL);

          _this20 = _super17.call(this, apollo);
          _this20.document = RegisterDocument;
          return _this20;
        }

        return RegisterGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      RegisterGQL.ɵfac = function RegisterGQL_Factory(t) {
        return new (t || RegisterGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      RegisterGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RegisterGQL,
        factory: RegisterGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var RegisterMultipleDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject18());

      var RegisterMultipleGQL = /*#__PURE__*/function (_apollo_angular__WEBP18) {
        _inherits(RegisterMultipleGQL, _apollo_angular__WEBP18);

        var _super18 = _createSuper(RegisterMultipleGQL);

        function RegisterMultipleGQL(apollo) {
          var _this21;

          _classCallCheck(this, RegisterMultipleGQL);

          _this21 = _super18.call(this, apollo);
          _this21.document = RegisterMultipleDocument;
          return _this21;
        }

        return RegisterMultipleGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      RegisterMultipleGQL.ɵfac = function RegisterMultipleGQL_Factory(t) {
        return new (t || RegisterMultipleGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      RegisterMultipleGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RegisterMultipleGQL,
        factory: RegisterMultipleGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterMultipleGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var UpdateUserInformationDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject19());

      var UpdateUserInformationGQL = /*#__PURE__*/function (_apollo_angular__WEBP19) {
        _inherits(UpdateUserInformationGQL, _apollo_angular__WEBP19);

        var _super19 = _createSuper(UpdateUserInformationGQL);

        function UpdateUserInformationGQL(apollo) {
          var _this22;

          _classCallCheck(this, UpdateUserInformationGQL);

          _this22 = _super19.call(this, apollo);
          _this22.document = UpdateUserInformationDocument;
          return _this22;
        }

        return UpdateUserInformationGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Mutation"]);

      UpdateUserInformationGQL.ɵfac = function UpdateUserInformationGQL_Factory(t) {
        return new (t || UpdateUserInformationGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      UpdateUserInformationGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UpdateUserInformationGQL,
        factory: UpdateUserInformationGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UpdateUserInformationGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var CheckLoggedInDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject20());

      var CheckLoggedInGQL = /*#__PURE__*/function (_apollo_angular__WEBP20) {
        _inherits(CheckLoggedInGQL, _apollo_angular__WEBP20);

        var _super20 = _createSuper(CheckLoggedInGQL);

        function CheckLoggedInGQL(apollo) {
          var _this23;

          _classCallCheck(this, CheckLoggedInGQL);

          _this23 = _super20.call(this, apollo);
          _this23.document = CheckLoggedInDocument;
          return _this23;
        }

        return CheckLoggedInGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"]);

      CheckLoggedInGQL.ɵfac = function CheckLoggedInGQL_Factory(t) {
        return new (t || CheckLoggedInGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      CheckLoggedInGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CheckLoggedInGQL,
        factory: CheckLoggedInGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckLoggedInGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetCompaniesWithoutAdminDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject21());

      var GetCompaniesWithoutAdminGQL = /*#__PURE__*/function (_apollo_angular__WEBP21) {
        _inherits(GetCompaniesWithoutAdminGQL, _apollo_angular__WEBP21);

        var _super21 = _createSuper(GetCompaniesWithoutAdminGQL);

        function GetCompaniesWithoutAdminGQL(apollo) {
          var _this24;

          _classCallCheck(this, GetCompaniesWithoutAdminGQL);

          _this24 = _super21.call(this, apollo);
          _this24.document = GetCompaniesWithoutAdminDocument;
          return _this24;
        }

        return GetCompaniesWithoutAdminGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"]);

      GetCompaniesWithoutAdminGQL.ɵfac = function GetCompaniesWithoutAdminGQL_Factory(t) {
        return new (t || GetCompaniesWithoutAdminGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetCompaniesWithoutAdminGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetCompaniesWithoutAdminGQL,
        factory: GetCompaniesWithoutAdminGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetCompaniesWithoutAdminGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetUsersDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject22());

      var GetUsersGQL = /*#__PURE__*/function (_apollo_angular__WEBP22) {
        _inherits(GetUsersGQL, _apollo_angular__WEBP22);

        var _super22 = _createSuper(GetUsersGQL);

        function GetUsersGQL(apollo) {
          var _this25;

          _classCallCheck(this, GetUsersGQL);

          _this25 = _super22.call(this, apollo);
          _this25.document = GetUsersDocument;
          return _this25;
        }

        return GetUsersGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"]);

      GetUsersGQL.ɵfac = function GetUsersGQL_Factory(t) {
        return new (t || GetUsersGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetUsersGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetUsersGQL,
        factory: GetUsersGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetUsersGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();

      var GetUsersWithNameDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject23());

      var GetUsersWithNameGQL = /*#__PURE__*/function (_apollo_angular__WEBP23) {
        _inherits(GetUsersWithNameGQL, _apollo_angular__WEBP23);

        var _super23 = _createSuper(GetUsersWithNameGQL);

        function GetUsersWithNameGQL(apollo) {
          var _this26;

          _classCallCheck(this, GetUsersWithNameGQL);

          _this26 = _super23.call(this, apollo);
          _this26.document = GetUsersWithNameDocument;
          return _this26;
        }

        return GetUsersWithNameGQL;
      }(apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Query"]);

      GetUsersWithNameGQL.ɵfac = function GetUsersWithNameGQL_Factory(t) {
        return new (t || GetUsersWithNameGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      GetUsersWithNameGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetUsersWithNameGQL,
        factory: GetUsersWithNameGQL.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GetUsersWithNameGQL, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FLDf":
    /*!******************************************************************************!*\
      !*** ./src/app/components/user/change-password/change-password.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ChangePasswordComponent */

    /***/
    function FLDf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
        return ChangePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChangePasswordComponent = /*#__PURE__*/function () {
        function ChangePasswordComponent() {
          _classCallCheck(this, ChangePasswordComponent);
        }

        _createClass(ChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChangePasswordComponent;
      }();

      ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
        return new (t || ChangePasswordComponent)();
      };

      ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangePasswordComponent,
        selectors: [["app-change-password"]],
        decls: 2,
        vars: 0,
        template: function ChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "change-password works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "GxC+":
    /*!********************************************!*\
      !*** ./src/app/services/survey.service.ts ***!
      \********************************************/

    /*! exports provided: SurveyService */

    /***/
    function GxC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveyService", function () {
        return SurveyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/generated/graphql */
      "FJRG");

      var SurveyService = /*#__PURE__*/function () {
        function SurveyService(addSurvey, addQuestion, addMultipleChoiceAnswer) {
          _classCallCheck(this, SurveyService);

          this.addSurvey = addSurvey;
          this.addQuestion = addQuestion;
          this.addMultipleChoiceAnswer = addMultipleChoiceAnswer;
        }

        _createClass(SurveyService, [{
          key: "addSurveyToInitiative",
          value: function addSurveyToInitiative(initiativeId, name, category, status) {
            return this.addSurvey.mutate({
              initiativeId: initiativeId,
              name: name,
              category: category,
              status: status
            });
          }
        }, {
          key: "addQuestionToSurvey",
          value: function addQuestionToSurvey(surveyId, questionTitle) {
            return this.addQuestion.mutate({
              surveyId: surveyId,
              questionTitle: questionTitle
            });
          }
        }, {
          key: "addMultipleChoiceAnswerToQuestion",
          value: function addMultipleChoiceAnswerToQuestion(questionId, answerText) {
            return this.addMultipleChoiceAnswer.mutate({
              questionId: questionId,
              answerText: answerText
            });
          }
        }]);

        return SurveyService;
      }();

      SurveyService.ɵfac = function SurveyService_Factory(t) {
        return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["CreateSurveyGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["AddQuestionToSurveyGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["AddMultipeChoiceAnswerToAQuestionGQL"]));
      };

      SurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SurveyService,
        factory: SurveyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["CreateSurveyGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["AddQuestionToSurveyGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["AddMultipeChoiceAnswerToAQuestionGQL"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HSJx":
    /*!************************************************************************!*\
      !*** ./src/app/components/user/manage-users/manage-users.component.ts ***!
      \************************************************************************/

    /*! exports provided: ManageUsersComponent */

    /***/
    function HSJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function () {
        return ManageUsersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enum/user-role.enum */
      "4WgB");
      /* harmony import */


      var src_app_models_essential_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/essential/user.model */
      "3ieA");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var _upload_users_upload_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../upload-users/upload-users.component */
      "kZXN");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function ManageUsersComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageUsersComponent_li_9_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var user_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.nextUser(user_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r10.firstname, " ", user_r10.lastnamee, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", user_r10.factory, ")");
        }
      }

      function ManageUsersComponent_ng_template_41_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input a user name! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ManageUsersComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManageUsersComponent_ng_template_41_ng_container_0_Template, 2, 0, "ng-container", 37);
        }

        if (rf & 2) {
          var control_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r13.hasError("required"));
        }
      }

      function ManageUsersComponent_ng_template_48_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input a user name! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ManageUsersComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManageUsersComponent_ng_template_48_ng_container_0_Template, 2, 0, "ng-container", 37);
        }

        if (rf & 2) {
          var control_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r15.hasError("required"));
        }
      }

      function ManageUsersComponent_ng_template_55_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The input is not valid E-mail! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ManageUsersComponent_ng_template_55_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input your E-mail! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ManageUsersComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManageUsersComponent_ng_template_55_ng_container_0_Template, 2, 0, "ng-container", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageUsersComponent_ng_template_55_ng_container_1_Template, 2, 0, "ng-container", 37);
        }

        if (rf & 2) {
          var control_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r17.hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r17.hasError("required"));
        }
      }

      function ManageUsersComponent_ul_68_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var roles_r21 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.userroles[roles_r21]);
        }
      }

      function ManageUsersComponent_ul_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageUsersComponent_ul_68_li_1_Template, 2, 1, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.selecteduser.roles);
        }
      }

      function ManageUsersComponent_nz_alert_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 41);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", ctx_r8.failupdatemessage);
        }
      }

      function ManageUsersComponent_nz_alert_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 42);
        }
      }

      var ManageUsersComponent = /*#__PURE__*/function () {
        function ManageUsersComponent(_fb, _userService) {
          var _this27 = this;

          _classCallCheck(this, ManageUsersComponent);

          this._fb = _fb;
          this._userService = _userService;
          this.updatesucceeded = undefined;
          this.userroles = new Array("MANAGER", "CMANAGER", "EADMINISTRATOR", "EMPLOYEE", "SPONSOR");
          this.usersToManege = new Array();
          console.log(this.usersToManege);

          _userService.getUsers().subscribe(function (values) {
            values.data.getUsers.forEach(function (e) {
              var r = new Set();
              e.role.forEach(function (e) {
                switch (e) {
                  case "EADMINISTRATOR":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EADMINISTRATOR);
                    break;

                  case "CMANAGER":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].CMANAGER);
                    break;

                  case "MANAGER":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].MANAGER);
                    break;

                  case "EMPLOYEE":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EMPLOYEE);
                    break;

                  case "SPONSOR":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].SPONSOR);
                    break;

                  default:
                    break;
                }
              });

              _this27.usersToManege.push(new src_app_models_essential_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](e.username, e.name, e.lastname, e.email, e.factory, r));
            });
          });

          this.searchForm = this._fb.group({
            search: [""]
          });
          this.validateForm = this._fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            factory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }

        _createClass(ManageUsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitForm",
          value: function submitForm(value) {
            var _this28 = this;

            for (var key in this.validateForm.controls) {
              this.validateForm.controls[key].markAsDirty();
              this.validateForm.controls[key].updateValueAndValidity();
            }

            this.selecteduser.firstname = value.name;
            this.selecteduser.lastname = value.lastname;
            this.selecteduser.factory = value.factory;
            this.selecteduser.email = value.email;

            this._userService.updateUserInformation(this.selecteduser).subscribe(function (e) {
              if (e.data.updateUserInformation.errors) {
                console.log(e);
                _this28.updatesucceeded = false;
                _this28.failupdatemessage = e.data.updateUserInformation.errors[0].message;
              } else {
                _this28.updatesucceeded = true;
              }
            });
          }
        }, {
          key: "log",
          value: function log(value) {
            if (this.selecteduser != undefined) {
              var r = new Set();
              value.forEach(function (e) {
                switch (e) {
                  case "EADMINISTRATOR":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EADMINISTRATOR);
                    break;

                  case "CMANAGER":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].CMANAGER);
                    break;

                  case "MANAGER":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].MANAGER);
                    break;

                  case "EMPLOYEE":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EMPLOYEE);
                    break;

                  case "SPONSOR":
                    r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].SPONSOR);
                    break;

                  default:
                    break;
                }
              });
            }

            this.selecteduser.roles = r;
          }
        }, {
          key: "search",
          value: function search(value) {
            var _this29 = this;

            if (value.search != "") {
              this.usersToManege = new Array();

              this._userService.getUsersWithNames(value.search).subscribe(function (values) {
                values.data.getUsersWithName.forEach(function (e) {
                  var r = new Set();
                  e.role.forEach(function (e) {
                    switch (e) {
                      case "EADMINISTRATOR":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EADMINISTRATOR);
                        break;

                      case "CMANAGER":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].CMANAGER);
                        break;

                      case "MANAGER":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].MANAGER);
                        break;

                      case "EMPLOYEE":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EMPLOYEE);
                        break;

                      case "SPONSOR":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].SPONSOR);
                        break;

                      default:
                        break;
                    }
                  });

                  _this29.usersToManege.push(new src_app_models_essential_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](e.username, e.name, e.lastname, e.email, e.factory, r));
                });
              });
            } else {
              this.usersToManege = new Array();
              console.log("ciao");

              this._userService.getUsers().subscribe(function (values) {
                values.data.getUsers.forEach(function (e) {
                  var r = new Set();
                  e.role.forEach(function (e) {
                    switch (e) {
                      case "EADMINISTRATOR":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EADMINISTRATOR);
                        break;

                      case "CMANAGER":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].CMANAGER);
                        break;

                      case "MANAGER":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].MANAGER);
                        break;

                      case "EMPLOYEE":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].EMPLOYEE);
                        break;

                      case "SPONSOR":
                        r.add(src_app_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_2__["UserRole"].SPONSOR);
                        break;

                      default:
                        break;
                    }
                  });

                  _this29.usersToManege.push(new src_app_models_essential_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](e.username, e.name, e.lastname, e.email, e.factory, r));
                });
              });
            }
          }
        }, {
          key: "nextUser",
          value: function nextUser(user) {
            this.updatesucceeded = undefined;
            console.log(user);
            this.selecteduser = user;
            this.validateForm = this._fb.group({
              name: [user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              lastname: [user.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: [user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              factory: [user.factory, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm(e) {
            e.preventDefault();
            this.validateForm.reset();

            for (var key in this.validateForm.controls) {
              this.validateForm.controls[key].markAsPristine();
              this.validateForm.controls[key].updateValueAndValidity();
            }
          }
        }]);

        return ManageUsersComponent;
      }();

      ManageUsersComponent.ɵfac = function ManageUsersComponent_Factory(t) {
        return new (t || ManageUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      ManageUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManageUsersComponent,
        selectors: [["app-manage-users"]],
        decls: 72,
        vars: 21,
        consts: [["nzWidth", "200px", "nzTheme", "dark"], ["nz-form", "", "nzMode", "inline", 3, "formGroup", "ngSubmit"], [3, "nzSpan"], ["formControlName", "search", "type", "text", 2, "color", "white"], ["nz-button", "", "nzType", "primary", 2, "width", "100%"], ["nz-menu", "", "nzMode", "inline", 1, "sider-menu"], [4, "ngFor", "ngForOf"], [2, "overflow", "hidden", "text-align", "center"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nzTitle", "Update user information", 2, "text-align", "center"], [2, "width", "100%", 3, "nzOnChange"], ["nz-col", "", "nzSpan", "5"], ["nz-checkbox", "", "nzValue", "EADMINISTRATOR"], ["nz-checkbox", "", "nzValue", "CMANAGER"], ["nz-checkbox", "", "nzValue", "MANAGER"], ["nz-checkbox", "", "nzValue", "EMPLOYEE"], ["nz-col", "", "nzSpan", "4"], ["nz-checkbox", "", "nzValue", "SPONSOR"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSpan"], ["nzHasFeedback", "", "nzValidatingTip", "Validating...", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "name"], ["userErrorTpl", ""], ["nz-input", "", "formControlName", "lastname"], ["nzHasFeedback", "", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "email", "placeholder", "email", "type", "email"], ["emailErrorTpl", ""], ["nzHasFeedback", "", "nzErrorTip", "Please input your Factory", 3, "nzSpan"], ["nz-input", "", "formControlName", "factory"], [3, "nzOffset", "nzSpan"], ["nz-button", "", "nzType", "primary", 3, "disabled"], ["nz-button", "", 3, "click"], ["nz-menu", "", 4, "ngIf"], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription", 4, "ngIf"], ["nzType", "success", "nzMessage", "Success Tips", "nzDescription", "Detailed description and advices about successful copywriting.", "nzShowIcon", "", 4, "ngIf"], [3, "click"], [4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", 4, "ngFor", "ngForOf"], ["nz-menu-item", ""], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription"], ["nzType", "success", "nzMessage", "Success Tips", "nzDescription", "Detailed description and advices about successful copywriting.", "nzShowIcon", ""]],
        template: function ManageUsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-sider", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManageUsersComponent_Template_form_ngSubmit_2_listener() {
              return ctx.search(ctx.searchForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManageUsersComponent_li_9_Template, 5, 3, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Manage users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-checkbox-wrapper", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnChange", function ManageUsersComponent_Template_nz_checkbox_wrapper_nzOnChange_18_listener($event) {
              return ctx.log($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "EADMINISTRATOR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CMANAGER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "MANAGER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "EMPLOYEE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SPONSOR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManageUsersComponent_Template_form_ngSubmit_35_listener() {
              return ctx.submitForm(ctx.validateForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-form-label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-form-control", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ManageUsersComponent_ng_template_41_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-form-label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lastname");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nz-form-control", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ManageUsersComponent_ng_template_48_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nz-form-label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nz-form-control", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ManageUsersComponent_ng_template_55_Template, 2, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-form-label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Factory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nz-form-control", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nz-form-control", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageUsersComponent_Template_button_click_66_listener($event) {
              return ctx.resetForm($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ManageUsersComponent_ul_68_Template, 2, 1, "ul", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ManageUsersComponent_nz_alert_69_Template, 1, 1, "nz-alert", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ManageUsersComponent_nz_alert_70_Template, 1, 0, "nz-alert", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-upload-users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersToManege);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffset", 7)("nzSpan", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validateForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selecteduser != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updatesucceeded == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updatesucceeded == true);
          }
        },
        directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzSiderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzContentComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzHeaderComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxWrapperComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormLabelComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _upload_users_upload_users_component__WEBPACK_IMPORTED_MODULE_14__["UploadUsersComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__["NzAlertComponent"]],
        styles: ["nz-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL21hbmFnZS11c2Vycy9tYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9tYW5hZ2UtdXNlcnMvbWFuYWdlLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uei1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMDtcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageUsersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manage-users',
            templateUrl: './manage-users.component.html',
            styleUrls: ['./manage-users.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JkeR":
    /*!****************************************************************************!*\
      !*** ./src/app/components/survey/create-survey/create-survey.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CreateSurveyComponent */

    /***/
    function JkeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateSurveyComponent", function () {
        return CreateSurveyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_initiative_survey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/initiative/survey */
      "bNx4");
      /* harmony import */


      var src_app_models_initiative_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/initiative/question */
      "ZAiE");
      /* harmony import */


      var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/survey.service */
      "GxC+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/input-number */
      "z4wI");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../create-question/create-question.component */
      "Ru4N");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function CreateSurveyComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-create-question", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var question_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("question", question_r6);
        }
      }

      function CreateSurveyComponent_nz_alert_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 24);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDescription", "There are questions and/or answers to be filled");
        }
      }

      function CreateSurveyComponent_nz_alert_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 25);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDescription", "Your survey has been summited");
        }
      }

      function CreateSurveyComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.category);
        }
      }

      var CreateSurveyComponent = /*#__PURE__*/function () {
        function CreateSurveyComponent(fb, _surveyService, _route) {
          _classCallCheck(this, CreateSurveyComponent);

          this.fb = fb;
          this._surveyService = _surveyService;
          this._route = _route;
          this._initiativeId = this._route.snapshot.paramMap.get("id");
          this.isSubmitted = false;
          this.buttonName = "Create";
          this.title = "Title of the survey";
          this.questions = [];
        }

        _createClass(CreateSurveyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validateForm = this.fb.group({
              name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              nQuestions: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              surveyCategory: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              nickname: [null],
              required: [false]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            for (var i in this.validateForm.controls) {
              this.validateForm.controls[i].markAsDirty();
              this.validateForm.controls[i].updateValueAndValidity();
            }

            if (this.validateForm.valid) {
              this.name = this.validateForm.controls.name.value;
              this.nQuestions = this.validateForm.controls.nQuestions.value;
              var locCategory = this.validateForm.controls.surveyCategory.value;

              switch (locCategory) {
                case '0':
                  this.category = "Awareness";
                  break;

                case '1':
                  this.category = "Receptiveness";
                  break;

                case '2':
                  this.category = "Implementation";
                  break;

                case '3':
                  this.category = "Sustaining";
                  break;

                case '4':
                  this.category = "Evaluation";
                  break;
              }

              for (var _i = 0; _i < this.nQuestions; _i++) {
                this.questions.push(new src_app_models_initiative_question__WEBPACK_IMPORTED_MODULE_3__["Question"]("", []));
              }

              this.survey = new src_app_models_initiative_survey__WEBPACK_IMPORTED_MODULE_2__["Survey"]("TBD", locCategory, this.questions, this.name);
              document.getElementById("form").hidden = true;
              document.getElementById("question").hidden = false;
            }
          }
        }, {
          key: "addQuestion",
          value: function addQuestion(surveyId, questionText) {
            this._surveyService.addQuestionToSurvey(surveyId, questionText).pipe();
          }
        }, {
          key: "addAnswerToQuestion",
          value: function addAnswerToQuestion() {
            var ul = document.getElementById("ul");
            ul.insertAdjacentHTML("afterbegin", "<");
          }
        }, {
          key: "checkEm",
          value: function checkEm() {
            var _this30 = this;

            this.errors = false;

            for (var q in this.survey.questions) {
              if (this.survey.questions[q].question == "") this.errors = true;
            }

            this.checked = !this.errors;

            if (!this.errors) {
              this._surveyService.addSurveyToInitiative(this._initiativeId, this.survey.title, this.survey.category, this.survey.status).subscribe(function (surveyData) {
                _this30.survey.questions.forEach(function (question) {
                  return _this30.addQuestion(surveyData.data.createSurvey.survey.id, question.question);
                });
              });
            }
          }
        }]);

        return CreateSurveyComponent;
      }();

      CreateSurveyComponent.ɵfac = function CreateSurveyComponent_Factory(t) {
        return new (t || CreateSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      CreateSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateSurveyComponent,
        selectors: [["app-create-survey"]],
        decls: 36,
        vars: 21,
        consts: [[1, "center"], ["id", "h1", 2, "text-align", "center", "color", "goldenrod"], ["id", "form", "nz-form", "", 3, "formGroup", "hidden", "ngSubmit"], ["nzErrorTip", "Please provide an input", 3, "nzSpan"], ["type", "text", "nz-input", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "surveyCategory"], ["nz-radio-button", "", "nzValue", "0"], ["nz-radio-button", "", "nzValue", "1"], ["nz-radio-button", "", "nzValue", "2"], ["nz-radio-button", "", "nzValue", "3"], ["nz-radio-button", "", "nzValue", "4"], [3, "nzSpan"], ["nzRequired", "", "nzFor", "numberOfQuestions", 3, "nzSm", "nzXs"], ["formControlName", "nQuestions", 2, "width", "100%", 3, "nzSize", "nzMin", "nzMax", "nzStep", "nzPlaceHolder"], ["questionNumber", ""], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary", "name", "submit", 2, "width", "50%"], ["id", "question", "hidden", "true", 2, "width", "700px", 3, "nzTitle", "nzExtra"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], ["nzType", "error", "style", "width: 60%", 3, "nzDescription", 4, "ngIf"], ["nzType", "success", "style", "width: 60%", 3, "nzDescription", 4, "ngIf"], ["ctgy", ""], [3, "question"], ["nzType", "error", 2, "width", "60%", 3, "nzDescription"], ["nzType", "success", 2, "width", "60%", 3, "nzDescription"]],
        template: function CreateSurveyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateSurveyComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-radio-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Awareness");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Receptiveness");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Implementation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sustaining");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Evaluation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-control", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Number of questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-input-number", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-control", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateSurveyComponent_div_29_Template, 3, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_Template_button_click_30_listener() {
              return ctx.checkEm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CreateSurveyComponent_nz_alert_32_Template, 1, 1, "nz-alert", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateSurveyComponent_nz_alert_33_Template, 1, 1, "nz-alert", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CreateSurveyComponent_ng_template_34_Template, 2, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm)("hidden", ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large")("nzMin", 1)("nzMax", 12)("nzStep", 1)("nzPlaceHolder", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8)("nzOffset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExtra", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checked);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__["NzRadioButtonDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormLabelComponent"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__["NzInputNumberComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_16__["CreateQuestionComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_17__["NzAlertComponent"]],
        styles: [".center[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvY3JlYXRlLXN1cnZleS9jcmVhdGUtc3VydmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cnZleS9jcmVhdGUtc3VydmV5L2NyZWF0ZS1zdXJ2ZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSurveyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-survey',
            templateUrl: './create-survey.component.html',
            styleUrls: ['./create-survey.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Jw8O":
    /*!*************************************!*\
      !*** ./src/app/utils/navigation.ts ***!
      \*************************************/

    /*! exports provided: navigateHome, navigateLogin, navigateGroupOverview, navigateGroupDetail, navigateInitiativeOverview, navigateInitiativePreparation, navigateInitiativeRealization */

    /***/
    function Jw8O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navigateHome", function () {
        return navigateHome;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navigateLogin", function () {
        return navigateLogin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navigateGroupOverview", function () {
        return navigateGroupOverview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navigateGroupDetail", function () {
        return navigateGroupDetail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navigateInitiativeOverview", function () {
        return navigateInitiativeOverview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navigateInitiativePreparation", function () {
        return navigateInitiativePreparation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navigateInitiativeRealization", function () {
        return navigateInitiativeRealization;
      });

      var navigateHome = function navigateHome(router) {
        router.navigate(['/']);
      };

      var navigateLogin = function navigateLogin(router) {
        router.navigate(['/login']);
      };

      var navigateGroupOverview = function navigateGroupOverview(router) {
        router.navigate(['/group_overview']);
      };

      var navigateGroupDetail = function navigateGroupDetail(router) {
        router.navigate(['/group_detail']);
      };

      var navigateInitiativeOverview = function navigateInitiativeOverview(router) {
        router.navigate(['/initiative-overview']);
      };

      var navigateInitiativePreparation = function navigateInitiativePreparation(router) {
        router.navigate(['/initiative-preparation']);
      };

      var navigateInitiativeRealization = function navigateInitiativeRealization(router) {
        router.navigate(['/initiative-realization']);
      };
      /***/

    },

    /***/
    "MqyP":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/initiative/create-initiative/create-initiative.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: CreateInitiativeComponent */

    /***/
    function MqyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateInitiativeComponent", function () {
        return CreateInitiativeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_initiative_initiative__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/initiative/initiative */
      "ti9n");
      /* harmony import */


      var src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/navigation */
      "Jw8O");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/company.service */
      "ZtWP");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function CreateInitiativeComponent_nz_alert_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 10);
        }
      }

      function CreateInitiativeComponent_nz_alert_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 11);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", ctx_r1.error);
        }
      }

      var CreateInitiativeComponent = /*#__PURE__*/function () {
        function CreateInitiativeComponent(fb, router, _companyService, _userService) {
          _classCallCheck(this, CreateInitiativeComponent);

          this.fb = fb;
          this.router = router;
          this._companyService = _companyService;
          this._userService = _userService;
          this.error = "";
        }

        _createClass(CreateInitiativeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initiativeForm = this.fb.group({
              title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              deadline: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "create",
          value: function create() {
            var _this31 = this;

            for (var i in this.initiativeForm.controls) {
              this.initiativeForm.controls[i].markAsDirty();
              this.initiativeForm.controls[i].updateValueAndValidity();
            }

            if (this.initiativeForm.valid) {
              var title = this.initiativeForm.controls.title.value;
              var deadline = this.initiativeForm.controls.deadline.value;
              var newInitiative = new src_app_models_initiative_initiative__WEBPACK_IMPORTED_MODULE_2__["Initiative"](title);
              newInitiative.deadline = deadline; // initiatives.push(newInitiative)
              //push the initiative to the database 

              var companyId = "5fbd23d5fbb32665c4ae3cf5";

              this._companyService.createInitiative("preparation", title, localStorage.getItem("userid").toString(), companyId, deadline.toString()).subscribe(function (data) {
                if (data.data.createInitiative.errors) {
                  _this31.succeeded = false;
                  _this31.error = data.data.createInitiative.errors[0].message;
                } else {
                  _this31.succeeded = true;
                  setTimeout(function () {
                    Object(src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_3__["navigateInitiativeOverview"])(_this31.router);
                  }, 1000);
                }
              });
            }
          }
        }, {
          key: "remove",
          value: function remove(initiativeId) {// this._companyService.deleteInitiative
          }
        }, {
          key: "cancel",
          value: function cancel() {
            Object(src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_3__["navigateInitiativeOverview"])(this.router);
          }
        }]);

        return CreateInitiativeComponent;
      }();

      CreateInitiativeComponent.ɵfac = function CreateInitiativeComponent_Factory(t) {
        return new (t || CreateInitiativeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      CreateInitiativeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateInitiativeComponent,
        selectors: [["app-create-initiative"]],
        decls: 19,
        vars: 5,
        consts: [["small", "true"], [1, "h1-style"], ["nz-form", "", 1, "form", 3, "formGroup", "ngSubmit"], ["type", "text", "nz-input", "", "formControlName", "title", "placeholder", "Title of the new initiative", "required", ""], [1, "row"], ["formControlName", "deadline", "nzMode", "week", "nzPlaceHolder", "Select deadline for initiative", "required", "", 2, "width", "100%"], ["nz-button", "", 1, "button", "margin", 3, "nzType"], ["nz-button", "", 1, "button", "margin", 3, "nzType", "click"], ["nzType", "success", "nzDescription", "'Initiative has been created successfully'", "nzShowIcon", "", 4, "ngIf"], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription", 4, "ngIf"], ["nzType", "success", "nzDescription", "'Initiative has been created successfully'", "nzShowIcon", ""], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription"]],
        template: function CreateInitiativeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create Initiative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateInitiativeComponent_Template_form_ngSubmit_3_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-input-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-input-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-date-picker", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInitiativeComponent_Template_button_click_15_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateInitiativeComponent_nz_alert_17_Template, 1, 0, "nz-alert", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateInitiativeComponent_nz_alert_18_Template, 1, 1, "nz-alert", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.initiativeForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "defualt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded == false);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzDatePickerComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__["NzAlertComponent"]],
        styles: [".form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 50px auto;\n  border-style: inset;\n  padding: 40px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnz-alert[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 20px;\n  max-width: 300px;\n}\n\n.h1-style[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  text-align: center;\n  color: #3d7532;\n}\n\n.button-create[_ngcontent-%COMP%] {\n  background-color: #3d7532;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbml0aWF0aXZlL2NyZWF0ZS1pbml0aWF0aXZlL2NyZWF0ZS1pbml0aWF0aXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUlFO0VBQ0UsbUJBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0M7RUFDRSxnQkFBQTtFQUNELGtCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pdGlhdGl2ZS9jcmVhdGUtaW5pdGlhdGl2ZS9jcmVhdGUtaW5pdGlhdGl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBcbiAgICBcbiAgfVxuICBcbiAgLm1hcmdpbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICBcbiAgLmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIG56LWFsZXJ0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgXG4gLmgxLXN0eWxle1xuICAgcGFkZGluZy10b3A6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNkNzUzMjtcbn1cblxuLmJ1dHRvbi1jcmVhdGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDc1MzI7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateInitiativeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-initiative',
            templateUrl: './create-initiative.component.html',
            styleUrls: ['./create-initiative.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Pr+g":
    /*!*************************************************!*\
      !*** ./src/app/models/essential/group.model.ts ***!
      \*************************************************/

    /*! exports provided: Group */

    /***/
    function PrG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return Group;
      });

      var Group = /*#__PURE__*/function () {
        function Group(_name, _description) {
          var _employees = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

          var _creator = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, Group);

          this._name = _name;
          this._description = _description;
          this._employees = _employees;
          this._creator = _creator;
        }

        _createClass(Group, [{
          key: "addEmployee",
          value: function addEmployee(user) {
            this._employees.push(user);
          }
        }, {
          key: "removeEmployee",
          value: function removeEmployee(user) {
            this._employees.filter(function (u) {
              return u.id !== user.id;
            });
          }
        }, {
          key: "id",
          set: function set(value) {
            this._id = value;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }, {
          key: "description",
          get: function get() {
            return this._description;
          }
        }, {
          key: "creator",
          get: function get() {
            return this._creator;
          }
        }, {
          key: "employees",
          get: function get() {
            return this._employees;
          }
        }]);

        return Group;
      }();
      /***/

    },

    /***/
    "RXUy":
    /*!************************************************!*\
      !*** ./src/app/services/initiative.service.ts ***!
      \************************************************/

    /*! exports provided: InitiativeService */

    /***/
    function RXUy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiativeService", function () {
        return InitiativeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_initiative_survey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/initiative/survey */
      "bNx4");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_essential_group_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/essential/group.model */
      "Pr+g");
      /* harmony import */


      var src_generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/generated/graphql */
      "FJRG");

      var InitiativeService = /*#__PURE__*/function () {
        function InitiativeService(getSurveysOfInitiative, getInitiativeGroups) {
          _classCallCheck(this, InitiativeService);

          this.getSurveysOfInitiative = getSurveysOfInitiative;
          this.getInitiativeGroups = getInitiativeGroups;
          this._groups$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        }

        _createClass(InitiativeService, [{
          key: "getSurveysOfAnInitiative",
          value: function getSurveysOfAnInitiative(initiativeId) {
            return this.getSurveysOfInitiative.mutate({
              initiativeId: initiativeId
            });
          }
        }, {
          key: "surveys$",
          value: function surveys$(id) {
            var list = new Array();
            this.getSurveysOfAnInitiative(id).subscribe(function (data) {
              data.data.getSurveysOfInitiative.map(function (t) {
                list.push(new _models_initiative_survey__WEBPACK_IMPORTED_MODULE_1__["Survey"]("TBD", "AWARNESS", null, t.name));
              });
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(list);
          }
        }, {
          key: "initiativeGroups",
          value: function initiativeGroups(id) {
            var list = new Array();
            this.getInitiativeGroups.mutate({
              initiativeId: id
            }).subscribe(function (data) {
              data.data.getInitiatveGroups.map(function (t) {
                list.push(new _models_essential_group_model__WEBPACK_IMPORTED_MODULE_4__["Group"](t.name, "Desciption", null, null));
              });
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(list);
          }
        }, {
          key: "getAInitiativeGroups$",
          value: function getAInitiativeGroups$(initiativeId) {
            var _this32 = this;

            return this._groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              return _this32.initiativeGroups(initiativeId);
            }));
          }
        }]);

        return InitiativeService;
      }();

      InitiativeService.ɵfac = function InitiativeService_Factory(t) {
        return new (t || InitiativeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["GetSurveysOfInitiativeGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["GetInitiatveGroupsGQL"]));
      };

      InitiativeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InitiativeService,
        factory: InitiativeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitiativeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["GetSurveysOfInitiativeGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["GetInitiatveGroupsGQL"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ru4N":
    /*!********************************************************************************!*\
      !*** ./src/app/components/survey/create-question/create-question.component.ts ***!
      \********************************************************************************/

    /*! exports provided: CreateQuestionComponent */

    /***/
    function Ru4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateQuestionComponent", function () {
        return CreateQuestionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function CreateQuestionComponent_nz_form_item_2_nz_form_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Question ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var control_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 4)("nzFor", control_r4.controlInstance);
        }
      }

      function CreateQuestionComponent_nz_form_item_2_nz_form_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var control_r4 = ctx_r10.$implicit;
          var i_r5 = ctx_r10.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 4)("nzFor", control_r4.controlInstance);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Answer ", i_r5, " ");
        }
      }

      function CreateQuestionComponent_nz_form_item_2_i_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateQuestionComponent_nz_form_item_2_i_5_Template_i_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var control_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.removeField(control_r4, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateQuestionComponent_nz_form_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateQuestionComponent_nz_form_item_2_nz_form_label_1_Template, 2, 3, "nz-form-label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateQuestionComponent_nz_form_item_2_nz_form_label_2_Template, 2, 4, "nz-form-label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-control", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateQuestionComponent_nz_form_item_2_i_5_Template, 1, 0, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var control_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", control_r4.controlInstance)("disabled", ctx_r0.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", control_r4.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 != 0 && i_r5 != 1);
        }
      }

      function CreateQuestionComponent_nz_alert_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 15);
        }
      }

      function CreateQuestionComponent_ng_template_13_Template(rf, ctx) {}

      var _c0 = function _c0() {
        return {
          span: 24,
          offset: 0
        };
      };

      var _c1 = function _c1() {
        return {
          span: 20,
          offset: 4
        };
      };

      var CreateQuestionComponent = /*#__PURE__*/function () {
        function CreateQuestionComponent(fb) {
          _classCallCheck(this, CreateQuestionComponent);

          this.fb = fb;
          this.listOfControl = [];
        }

        _createClass(CreateQuestionComponent, [{
          key: "addField",
          value: function addField(e) {
            if (e) {
              e.preventDefault();
            }

            var id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
            var control = {
              id: id,
              controlInstance: "answer".concat(id)
            };
            var index = this.listOfControl.push(control);
            this.validateForm.addControl(this.listOfControl[index - 1].controlInstance, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
          }
        }, {
          key: "removeField",
          value: function removeField(i, e) {
            if (!this.checked) {
              e.preventDefault();

              if (this.listOfControl.length > 1) {
                var index = this.listOfControl.indexOf(i);
                this.listOfControl.splice(index, 1);
                this.validateForm.removeControl(i.controlInstance);
              }
            }
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var y = 0;

            for (var i in this.validateForm.controls) {
              if (this.validateForm.controls[i].value == null) y = 1;
              this.validateForm.controls[i].updateValueAndValidity();
              this.validateForm.controls[i].markAsDirty();
            }

            if (y == 0) {
              this.checked = true;
              var first = 0;

              for (var _i2 in this.validateForm.controls) {
                if (first == 0) {
                  this.question.setQuestion(this.validateForm.controls[_i2].value);
                  first = 1;
                } else this.question.multipleChoiceAnswers.push(this.validateForm.controls[_i2].value);
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validateForm = this.fb.group({});
            this.addField();
            this.addField();
            this.checked = false;
          }
        }]);

        return CreateQuestionComponent;
      }();

      CreateQuestionComponent.ɵfac = function CreateQuestionComponent_Factory(t) {
        return new (t || CreateQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      CreateQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateQuestionComponent,
        selectors: [["app-create-question"]],
        inputs: {
          question: "question"
        },
        decls: 15,
        vars: 14,
        consts: [["nzType", "inner", "nzTitle", "Question", 3, "nzExtra"], ["nz-form", "", "id", "question", 3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], [3, "nzXs", "nzSm"], ["nz-button", "", "nzType", "dashed", 1, "add-button", 3, "disabled", "click"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "primary", "id", "pepe", 3, "disabled"], ["nzType", "success", "nzCloseable", "", "nzDescription", "'The question has been summited'", "class", "success", 4, "ngIf"], ["rmvQuestion", ""], [3, "nzXs", "nzSm", "nzFor", 4, "ngIf"], ["nzErrorTip", "Please input the question and it's answers."], ["nz-input", "", "placeholder", "placeholder", 1, "answer-input", 3, "formControlName", "disabled"], ["nz-icon", "", "nzType", "minus-circle-o", "class", "dynamic-delete-button", 3, "click", 4, "ngIf"], [3, "nzXs", "nzSm", "nzFor"], ["nz-icon", "", "nzType", "minus-circle-o", 1, "dynamic-delete-button", 3, "click"], ["nzType", "success", "nzCloseable", "", "nzDescription", "'The question has been summited'", 1, "success"]],
        template: function CreateQuestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateQuestionComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateQuestionComponent_nz_form_item_2_Template, 6, 6, "nz-form-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateQuestionComponent_Template_button_click_5_listener($event) {
              return ctx.addField($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add Answer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateQuestionComponent_nz_alert_12_Template, 1, 0, "nz-alert", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateQuestionComponent_ng_template_13_Template, 0, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExtra", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checked);
          }
        },
        directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormLabelComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"]],
        styles: [".dynamic-delete-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n  font-size: 24px;\n  color: #999;\n  transition: all 0.3s;\n}\n\n.dynamic-delete-button[_ngcontent-%COMP%]:hover {\n  color: #777;\n}\n\n.answer-input[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-right: 8px;\n}\n\n[nz-form][_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.success[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvY3JlYXRlLXF1ZXN0aW9uL2NyZWF0ZS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cnZleS9jcmVhdGUtcXVlc3Rpb24vY3JlYXRlLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR5bmFtaWMtZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG5cclxuICAuZHluYW1pYy1kZWxldGUtYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuXHJcbiAgLmFuc3dlci1pbnB1dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBbbnotZm9ybV0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcblxyXG4gIC5hZGQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAuc3VjY2Vzc3tcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateQuestionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-question',
            templateUrl: './create-question.component.html',
            styleUrls: ['./create-question.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, {
          question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "RwaI":
    /*!********************************************************************************!*\
      !*** ./src/app/components/survey/survey-overview/survey-overview.component.ts ***!
      \********************************************************************************/

    /*! exports provided: SurveyOverviewComponent */

    /***/
    function RwaI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveyOverviewComponent", function () {
        return SurveyOverviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_initiative_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/initiative.service */
      "RXUy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");

      function SurveyOverviewComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXXl", 8)("nzXl", 4)("nzLg", 6)("nzMd", 6)("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r1.title);
        }
      }

      var SurveyOverviewComponent = /*#__PURE__*/function () {
        // private _fetchSurveys$: Observable<Survey[]> = this._initiativeService.surveys$(this._route.snapshot.paramMap.get("id"));
        // private _surveys : Observable<Survey[]>
        function SurveyOverviewComponent(_initiativeService, router, _route) {
          _classCallCheck(this, SurveyOverviewComponent);

          this._initiativeService = _initiativeService;
          this.router = router;
          this._route = _route;
          this._initiativeId = this._route.snapshot.paramMap.get("id");
          this.size = 'large';
        }

        _createClass(SurveyOverviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this._initiativeService.surveys$(this._initiativeId).subscribe(function (res) {
              _this33._surveys = res;
            });
          }
        }, {
          key: "onCreate",
          value: function onCreate() {
            this.router.navigate(['/create-survey', this._initiativeId]);
          }
        }, {
          key: "surveys$",
          get: function get() {
            return this._surveys;
          }
        }]);

        return SurveyOverviewComponent;
      }();

      SurveyOverviewComponent.ɵfac = function SurveyOverviewComponent_Factory(t) {
        return new (t || SurveyOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_initiative_service__WEBPACK_IMPORTED_MODULE_1__["InitiativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      SurveyOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SurveyOverviewComponent,
        selectors: [["app-survey-overview"]],
        decls: 7,
        vars: 3,
        consts: [["small", "true"], ["nz-button", "", "nzType", "defualt", "nzBlock", "", 1, "create-button", 3, "nzSize", "click"], [1, "display-list"], ["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "style", "margin-top: 0.5em;", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", 4, "ngFor", "ngForOf"], ["nz-col", "", 2, "margin-top", "0.5em", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [1, "color-border", 2, "border-radius", "1em", 3, "nzTitle"]],
        template: function SurveyOverviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SurveyOverviewComponent_Template_button_click_1_listener() {
              return ctx.onCreate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add new survey to this initiative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SurveyOverviewComponent_div_6_Template, 3, 7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.surveys$);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListGridDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListItemComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardComponent"]],
        styles: [".display-list[_ngcontent-%COMP%] {\n  margin: 4em;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.color-border[_ngcontent-%COMP%] {\n  border-color: #628d5d;\n}\n\nnz-list-item[_ngcontent-%COMP%]:hover   nz-card[_ngcontent-%COMP%] {\n  background-color: #a5c2a5;\n}\n\n.row-full[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.radius[_ngcontent-%COMP%] {\n  border-radius: 1em;\n}\n\n.create-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 115%;\n  margin-top: 0.2em;\n  background-color: #56718b;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvc3VydmV5LW92ZXJ2aWV3L3N1cnZleS1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0o7O0FBR0U7RUFDRSxxQkFBQTtBQUFKOztBQUlJO0VBQ0UseUJBQUE7QUFETjs7QUFNRTtFQUNFLFVBQUE7QUFISjs7QUFNRztFQUNDLGtCQUFBO0FBSEo7O0FBTUc7RUFDQyxpQkFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvc3VydmV5LW92ZXJ2aWV3L3N1cnZleS1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LWxpc3R7XHJcbiAgICBtYXJnaW46IDRlbTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuY29sb3ItYm9yZGVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjI4ZDVkO1xyXG4gIH1cclxuICBcclxuICBuei1saXN0LWl0ZW06aG92ZXIge1xyXG4gICAgbnotY2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1YzJhNTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnJvdy1mdWxse1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgfVxyXG4gIFxyXG4gICAucmFkaXVze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICB9XHJcblxyXG4gICAuY3JlYXRlLWJ1dHRvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgd2lkdGg6IDExNSU7IFxyXG4gICAgICBtYXJnaW4tdG9wOiAwLjJlbTsgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTEzLCAxMzkpOyBcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyOverviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-survey-overview',
            templateUrl: './survey-overview.component.html',
            styleUrls: ['./survey-overview.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_initiative_service__WEBPACK_IMPORTED_MODULE_1__["InitiativeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/shared/navbar/navbar.component */
      "3F0J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'Essentials';
          this.updateUser = false;
          this.manageGoup = false;
          this.manageInitiative = false;
        }

        _createClass(AppComponent, [{
          key: "onManageUser",
          value: function onManageUser() {
            if (this.updateUser == false) {
              this.updateUser = true;
            } else if (this.updateUser = true) {
              this.updateUser = false;
            }
          }
        }, {
          key: "onManageGroup",
          value: function onManageGroup() {
            if (this.manageGoup == false) {
              this.manageGoup = true;
            } else if (this.manageGoup = true) {
              this.manageGoup = false;
            }
          }
        }, {
          key: "onManageInitiative",
          value: function onManageInitiative() {
            if (this.manageInitiative == false) {
              this.manageInitiative = true;
            } else if (this.manageInitiative = true) {
              this.manageInitiative = false;
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 24px 16px 0;\n}\n\n.inner-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n  min-height: 360px;\n}\n\nnz-footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0ksV0FBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICBuei1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIG56LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMjRweCAxNnB4IDA7XG4gIH1cblxuICAuaW5uZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICB9XG5cbiAgbnotZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Uy2H":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/user/create-administrator/create-administrator.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: CreateAdministratorComponent */

    /***/
    function Uy2H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateAdministratorComponent", function () {
        return CreateAdministratorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _CompanyDummyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./CompanyDummyData */
      "clsX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/company.service */
      "ZtWP");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function CreateAdministratorComponent_nz_alert_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r0.graphQLErrors[0].field.toString()))("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r0.graphQLErrors[0].message.toString()));
        }
      }

      function CreateAdministratorComponent_form_2_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var company_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", company_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r6.name);
        }
      }

      function CreateAdministratorComponent_form_2_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", employee_r7.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r7.username);
        }
      }

      function CreateAdministratorComponent_form_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateAdministratorComponent_form_2_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateAdministratorComponent_form_2_Template_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.choiceCompany = $event;
          })("change", function CreateAdministratorComponent_form_2_Template_select_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.selectOption();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateAdministratorComponent_form_2_option_5_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Username ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateAdministratorComponent_form_2_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.choiceEmployee = $event;
          })("change", function CreateAdministratorComponent_form_2_Template_select_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.selectEmployee();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateAdministratorComponent_form_2_option_10_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create Administrator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.choiceCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.choiceEmployee);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.employees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("disabled", ctx_r1.noEmployees);
        }
      }

      function CreateAdministratorComponent_nz_alert_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 14);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", ctx_r2.successMessage);
        }
      }

      function CreateAdministratorComponent_nz_alert_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDescription", "There are not companies without an administrator to asign");
        }
      }

      var CreateAdministratorComponent = /*#__PURE__*/function () {
        function CreateAdministratorComponent(fb, companyService, userService) {
          _classCallCheck(this, CreateAdministratorComponent);

          this.fb = fb;
          this.companyService = companyService;
          this.userService = userService;
          this._companies = [];
          this._employees = [];
          this.graphQLErrors = [];
          this.success = false;
          this.successMessage = 'Administrator has been successfully created';
        }

        _createClass(CreateAdministratorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this34 = this;

            this.companyService.getCompaniesWithoutAdmin().valueChanges.subscribe(function (data) {
              data.data.getCompaniesWithoutAdmin.forEach(function (c) {
                var company = new _CompanyDummyData__WEBPACK_IMPORTED_MODULE_1__["Company"](c.name);
                company.employees = []; //  if(c.users != null){
                //    c.users.forEach((u) => {
                //      company.addEmployee(new User(u.username));
                //    })
                //  }                                        

                _this34._companies.push(company);
              });
            });
            this.validateForm = this.fb.group({
              companyName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              employeeUsername: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.noEmployees = true;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this35 = this;

            this.companyService.createAdministrator(this.choiceCompany.name, this.choiceEmployee).subscribe(function (_ref3) {
              var data = _ref3.data;

              if (data.createAdministrator.errors) {
                _this35.graphQLErrors = data.createAdministrator.errors;
              } else {
                _this35.graphQLErrors = [];
                _this35.success = true;

                var index = _this35._companies.indexOf(_this35.choiceCompany);

                _this35._companies.splice(index, 1);

                _this35._employees = _this35.choiceCompany._employees;
                _this35.noEmployees = !_this35._employees;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "selectOption",
          value: function selectOption() {
            var _this36 = this;

            this.selCompany = this._companies.find(function (x) {
              return x.name == _this36.choiceCompany.name;
            });

            if (this.selCompany.employees != null) {
              this._employees = this.selCompany.employees;
            } else {
              this._employees = [];
            }

            this.noEmployees = true;
            this.choiceEmployee = undefined;
          }
        }, {
          key: "selectEmployee",
          value: function selectEmployee() {
            this.noEmployees = this.choiceEmployee == '';
          }
        }, {
          key: "companies",
          get: function get() {
            return this._companies;
          }
        }, {
          key: "employees",
          get: function get() {
            return this._employees;
          }
        }]);

        return CreateAdministratorComponent;
      }();

      CreateAdministratorComponent.ɵfac = function CreateAdministratorComponent_Factory(t) {
        return new (t || CreateAdministratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      CreateAdministratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateAdministratorComponent,
        selectors: [["app-create-administrator"]],
        decls: 5,
        vars: 4,
        consts: [["small", "true"], ["nzType", "error", 3, "nzMessage", "nzDescription", 4, "ngIf"], ["nz-form", "", 3, "ngSubmit", 4, "ngIf"], ["nzType", "success", 3, "nzMessage", 4, "ngIf"], ["nzType", "error", 3, "nzDescription", 4, "ngIf"], ["nzType", "error", 3, "nzMessage", "nzDescription"], ["nz-form", "", 3, "ngSubmit"], ["nzFor", "company", 3, "nzSm", "nzXs"], ["name", "selectedCompany", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["nzFor", "username", 3, "nzSm", "nzXs"], ["name", "selectedEmployee", 3, "ngModel", "ngModelChange", "change"], ["nz-button", "", "type", "submit", 1, "createAdministrator-form-button", "createAdministrator-form-margin", 3, "nzType", "disabled"], [3, "ngValue"], ["nzType", "success", 3, "nzMessage"], ["nzType", "error", 3, "nzDescription"]],
        template: function CreateAdministratorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateAdministratorComponent_nz_alert_1_Template, 3, 6, "nz-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateAdministratorComponent_form_2_Template, 13, 10, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateAdministratorComponent_nz_alert_3_Template, 1, 1, "nz-alert", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateAdministratorComponent_nz_alert_4_Template, 1, 1, "nz-alert", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.graphQLErrors.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companies.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companies.length == 0);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_7__["NzAlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormLabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
        styles: ["[nz-form][_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 50px auto;\n}\n\n.createAdministrator-form-margin[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.createAdministrator-form-button[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\nnz-alert[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 50%;\n  border: 1px solid gray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS1hZG1pbmlzdHJhdG9yL2NyZWF0ZS1hZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsVUFBQTtBQUVKOztBQUFFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvY3JlYXRlLWFkbWluaXN0cmF0b3IvY3JlYXRlLWFkbWluaXN0cmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotZm9ybV0ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgfVxuXG4gIC5jcmVhdGVBZG1pbmlzdHJhdG9yLWZvcm0tbWFyZ2luIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIC5jcmVhdGVBZG1pbmlzdHJhdG9yLWZvcm0tYnV0dG9uIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIG56LWFsZXJ0IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAdministratorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-administrator',
            templateUrl: './create-administrator.component.html',
            styleUrls: ['./create-administrator.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WuD+":
    /*!*************************************************************************!*\
      !*** ./src/app/components/group/create-group/create-group.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CreateGroupComponent */

    /***/
    function WuD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function () {
        return CreateGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/company.service */
      "ZtWP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function CreateGroupComponent_nz_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 10);
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r6)("nzValue", item_r6);
        }
      }

      function CreateGroupComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var selectedList_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" and ", selectedList_r7.length, " more selected ");
        }
      }

      function CreateGroupComponent_nz_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 10);
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r8)("nzValue", item_r8);
        }
      }

      function CreateGroupComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var selectedList_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" and ", selectedList_r9.length, " more selected ");
        }
      }

      var CreateGroupComponent = /*#__PURE__*/function () {
        function CreateGroupComponent(_companyService, router, _route, fb) {
          _classCallCheck(this, CreateGroupComponent);

          this._companyService = _companyService;
          this.router = router;
          this._route = _route;
          this.fb = fb;
          this.listOfDepartement = [];
          this.listOfSelectedDepartement = [];
          this.activeAddAll = false;
          this.listOfCountries = [];
          this.listOfSelectedCountries = [];
          this.listOfDepartement = this._companyService.getDepartmentsOfCompany('5fbd23d5fbb32665c4ae3cf5');
        }

        _createClass(CreateGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.groupForm = this.fb.group({
              name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "create",
          value: function create() {
            for (var i in this.groupForm.controls) {
              this.groupForm.controls[i].markAsDirty();
              this.groupForm.controls[i].updateValueAndValidity();
            }

            if (this.groupForm.valid) {
              console.log("yesssssssssssssss");
            }
          }
        }]);

        return CreateGroupComponent;
      }();

      CreateGroupComponent.ɵfac = function CreateGroupComponent_Factory(t) {
        return new (t || CreateGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      CreateGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateGroupComponent,
        selectors: [["app-create-group"]],
        decls: 19,
        vars: 11,
        consts: [["small", "true"], ["nz-form", "", 1, "form", 3, "formGroup", "ngSubmit"], [1, "field"], ["nzErrorTip", "Please provide group name"], ["type", "text", "nz-input", "", "formControlName", "name", "placeholder", "Name of the group", "required", ""], ["nzMode", "multiple", "nzPlaceHolder", "Please select departement", 3, "nzMaxTagCount", "nzMaxTagPlaceholder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["tagPlaceHolder", ""], ["nzMode", "multiple", "nzPlaceHolder", "Please select country", 3, "nzMaxTagCount", "nzMaxTagPlaceholder", "ngModel", "ngModelChange"], ["nz-button", "", 1, "button", "margin", 2, "width", "100%", "margin-top", "1%", 3, "disabled", "nzType"], [3, "nzLabel", "nzValue"]],
        template: function CreateGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateGroupComponent_Template_form_ngSubmit_1_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-control", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-input-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filter users on:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateGroupComponent_Template_nz_select_ngModelChange_9_listener($event) {
              return ctx.listOfSelectedDepartement = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateGroupComponent_nz_option_10_Template, 1, 2, "nz-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateGroupComponent_ng_template_11_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateGroupComponent_Template_nz_select_ngModelChange_13_listener($event) {
              return ctx.listOfSelectedCountries = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateGroupComponent_nz_option_14_Template, 1, 2, "nz-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateGroupComponent_ng_template_15_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add All Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaxTagCount", 1)("nzMaxTagPlaceholder", _r1)("ngModel", ctx.listOfSelectedDepartement);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfDepartement);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaxTagCount", 3)("nzMaxTagPlaceholder", _r1)("ngModel", ctx.listOfSelectedCountries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfCountries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.activeAddAll)("nzType", "primary");
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_4__["ContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzOptionComponent"]],
        styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1%;\n  margin-right: 1%;\n  border: 2px solid #110d01;\n  font-size: medium;\n}\n\n.row-full[_ngcontent-%COMP%] {\n  width: 46%;\n}\n\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1%;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9jcmVhdGUtZ3JvdXAvY3JlYXRlLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLFVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXAvY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMTEwZDAxO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG5cclxuLnJvdy1mdWxsIHtcclxuICB3aWR0aDogNDYlO1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-group',
            templateUrl: './create-group.component.html',
            styleUrls: ['./create-group.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/locales/en */
      "tAZD");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/input-number */
      "z4wI");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/home/dashboard/dashboard.component */
      "dQRp");
      /* harmony import */


      var _components_shared_container_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/shared/container/container.component */
      "bALC");
      /* harmony import */


      var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/shared/navbar/navbar.component */
      "3F0J");
      /* harmony import */


      var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/user/login/login.component */
      "hzBV");
      /* harmony import */


      var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/user/register/register.component */
      "yT3u");
      /* harmony import */


      var _graphql_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./graphql.module */
      "4KHl");
      /* harmony import */


      var _components_user_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/user/manage-users/manage-users.component */
      "HSJx");
      /* harmony import */


      var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ant-design/icons-angular/icons */
      "kVq8");
      /* harmony import */


      var _components_group_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/group/group-overview/group-overview.component */
      "hoHM");
      /* harmony import */


      var _components_group_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/group/add-group/add-group.component */
      "kJ/B");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/steps */
      "OEtX");
      /* harmony import */


      var _components_group_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/group/group-details/group-details.component */
      "lKNd");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _components_initiative_initiative_overview_initiative_overview_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/initiative/initiative-overview/initiative-overview.component */
      "kbt0");
      /* harmony import */


      var _components_initiative_create_initiative_create_initiative_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/initiative/create-initiative/create-initiative.component */
      "MqyP");
      /* harmony import */


      var _components_initiative_initiative_preparation_initiative_preparation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/initiative/initiative-preparation/initiative-preparation.component */
      "po2Y");
      /* harmony import */


      var _components_initiative_initiative_realization_initiative_realization_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/initiative/initiative-realization/initiative-realization.component */
      "eMDD");
      /* harmony import */


      var _components_group_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/group/group-page/group-page.component */
      "hFfA");
      /* harmony import */


      var _components_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/user/user-details/user-details.component */
      "ttvt");
      /* harmony import */


      var _components_initiative_initiative_value_creation_initiative_value_creation_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/initiative/initiative-value-creation/initiative-value-creation.component */
      "w+gJ");
      /* harmony import */


      var _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/user/forgot-password/forgot-password.component */
      "adJJ");
      /* harmony import */


      var _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/user/change-password/change-password.component */
      "FLDf");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var _components_user_create_administrator_create_administrator_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./components/user/create-administrator/create-administrator.component */
      "Uy2H");
      /* harmony import */


      var _components_user_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/user/create-company/create-company.component */
      "rji1");
      /* harmony import */


      var _components_user_upload_users_upload_users_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./components/user/upload-users/upload-users.component */
      "kZXN");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var _components_survey_survey_overview_survey_overview_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./components/survey/survey-overview/survey-overview.component */
      "RwaI");
      /* harmony import */


      var _components_survey_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./components/survey/create-survey/create-survey.component */
      "JkeR");
      /* harmony import */


      var _components_survey_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./components/survey/create-question/create-question.component */
      "Ru4N");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var _components_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./components/group/create-group/create-group.component */
      "WuD+");
      /* harmony import */


      var _components_group_manage_group_manage_group_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./components/group/manage-group/manage-group.component */
      "346a");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default.a);
      var icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_23__["UserOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_23__["LockOutline"]];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"],
          useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["en_US"]
        }, {
          provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_ICONS"],
          useValue: icons
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_11__["NzAlertModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__["NzListModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_27__["NzStepsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_29__["NzCardModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDatePickerModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_39__["NzCheckboxModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_43__["NzUploadModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__["NzInputNumberModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_47__["NzRadioModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__["NzInputNumberModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _components_shared_container_container_component__WEBPACK_IMPORTED_MODULE_17__["ContainerComponent"], _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _components_user_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_22__["ManageUsersComponent"], _components_group_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_24__["GroupOverviewComponent"], _components_group_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_25__["AddGroupComponent"], _components_group_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_28__["GroupDetailsComponent"], _components_initiative_initiative_overview_initiative_overview_component__WEBPACK_IMPORTED_MODULE_30__["InitiativeOverviewComponent"], _components_initiative_create_initiative_create_initiative_component__WEBPACK_IMPORTED_MODULE_31__["CreateInitiativeComponent"], _components_initiative_initiative_preparation_initiative_preparation_component__WEBPACK_IMPORTED_MODULE_32__["InitiativePreparationComponent"], _components_initiative_initiative_realization_initiative_realization_component__WEBPACK_IMPORTED_MODULE_33__["InitiativeRealizationComponent"], _components_initiative_initiative_value_creation_initiative_value_creation_component__WEBPACK_IMPORTED_MODULE_36__["InitiativeValueCreationComponent"], _components_group_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_34__["GroupPageComponent"], _components_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_35__["UserDetailsComponent"], _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgotPasswordComponent"], _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__["ChangePasswordComponent"], _components_user_create_administrator_create_administrator_component__WEBPACK_IMPORTED_MODULE_40__["CreateAdministratorComponent"], _components_user_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_41__["CreateCompanyComponent"], _components_user_upload_users_upload_users_component__WEBPACK_IMPORTED_MODULE_42__["UploadUsersComponent"], _components_survey_survey_overview_survey_overview_component__WEBPACK_IMPORTED_MODULE_44__["SurveyOverviewComponent"], _components_survey_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_45__["CreateSurveyComponent"], _components_survey_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_46__["CreateQuestionComponent"], _components_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_48__["CreateGroupComponent"], _components_group_manage_group_manage_group_component__WEBPACK_IMPORTED_MODULE_49__["ManageGroupComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_11__["NzAlertModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__["NzListModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_27__["NzStepsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_29__["NzCardModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDatePickerModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_39__["NzCheckboxModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_43__["NzUploadModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__["NzInputNumberModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_47__["NzRadioModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__["NzInputNumberModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _components_shared_container_container_component__WEBPACK_IMPORTED_MODULE_17__["ContainerComponent"], _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _components_user_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_22__["ManageUsersComponent"], _components_group_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_24__["GroupOverviewComponent"], _components_group_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_25__["AddGroupComponent"], _components_group_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_28__["GroupDetailsComponent"], _components_initiative_initiative_overview_initiative_overview_component__WEBPACK_IMPORTED_MODULE_30__["InitiativeOverviewComponent"], _components_initiative_create_initiative_create_initiative_component__WEBPACK_IMPORTED_MODULE_31__["CreateInitiativeComponent"], _components_initiative_initiative_preparation_initiative_preparation_component__WEBPACK_IMPORTED_MODULE_32__["InitiativePreparationComponent"], _components_initiative_initiative_realization_initiative_realization_component__WEBPACK_IMPORTED_MODULE_33__["InitiativeRealizationComponent"], _components_initiative_initiative_value_creation_initiative_value_creation_component__WEBPACK_IMPORTED_MODULE_36__["InitiativeValueCreationComponent"], _components_group_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_34__["GroupPageComponent"], _components_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_35__["UserDetailsComponent"], _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgotPasswordComponent"], _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__["ChangePasswordComponent"], _components_user_create_administrator_create_administrator_component__WEBPACK_IMPORTED_MODULE_40__["CreateAdministratorComponent"], _components_user_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_41__["CreateCompanyComponent"], _components_user_upload_users_upload_users_component__WEBPACK_IMPORTED_MODULE_42__["UploadUsersComponent"], _components_survey_survey_overview_survey_overview_component__WEBPACK_IMPORTED_MODULE_44__["SurveyOverviewComponent"], _components_survey_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_45__["CreateSurveyComponent"], _components_survey_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_46__["CreateQuestionComponent"], _components_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_48__["CreateGroupComponent"], _components_group_manage_group_manage_group_component__WEBPACK_IMPORTED_MODULE_49__["ManageGroupComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_11__["NzAlertModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__["NzListModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_27__["NzStepsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_29__["NzCardModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDatePickerModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_39__["NzCheckboxModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_43__["NzUploadModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__["NzInputNumberModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_47__["NzRadioModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__["NzInputNumberModule"]],
            providers: [{
              provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"],
              useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["en_US"]
            }, {
              provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_ICONS"],
              useValue: icons
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAiE":
    /*!***********************************************!*\
      !*** ./src/app/models/initiative/question.ts ***!
      \***********************************************/

    /*! exports provided: Question */

    /***/
    function ZAiE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Question", function () {
        return Question;
      });

      var Question = /*#__PURE__*/function () {
        function Question(_question, _mutipleChoiceAnswers) {
          _classCallCheck(this, Question);

          this._question = _question;
          this._mutipleChoiceAnswers = _mutipleChoiceAnswers;
        }

        _createClass(Question, [{
          key: "setQuestion",
          value: function setQuestion(question) {
            this._question = question;
          }
        }, {
          key: "question",
          get: function get() {
            return this._question;
          }
        }, {
          key: "multipleChoiceAnswers",
          get: function get() {
            return this._mutipleChoiceAnswers;
          }
        }]);

        return Question;
      }();
      /***/

    },

    /***/
    "ZtWP":
    /*!*********************************************!*\
      !*** ./src/app/services/company.service.ts ***!
      \*********************************************/

    /*! exports provided: CompanyService */

    /***/
    function ZtWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/generated/graphql */
      "FJRG");

      var CompanyService = /*#__PURE__*/function () {
        function CompanyService(getInitiativesByCompanyId, createAdministratorGQL, GetCompaniesWithoutAdminGQL, createCompanyGQL, createInitiativeGQL, removeInitiative, _getDeprtmentsOfCompany) {
          _classCallCheck(this, CompanyService);

          this.getInitiativesByCompanyId = getInitiativesByCompanyId;
          this.createAdministratorGQL = createAdministratorGQL;
          this.GetCompaniesWithoutAdminGQL = GetCompaniesWithoutAdminGQL;
          this.createCompanyGQL = createCompanyGQL;
          this.createInitiativeGQL = createInitiativeGQL;
          this.removeInitiative = removeInitiative;
          this._getDeprtmentsOfCompany = _getDeprtmentsOfCompany;
          this._departments$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        }

        _createClass(CompanyService, [{
          key: "getInitiatives",
          value: function getInitiatives(companyId) {
            return this.getInitiativesByCompanyId.mutate({
              companyId: companyId
            });
          }
        }, {
          key: "createAdministrator",
          value: function createAdministrator(companyName, username) {
            return this.createAdministratorGQL.mutate({
              input: {
                companyName: companyName,
                username: username
              }
            });
          }
        }, {
          key: "getCompaniesWithoutAdmin",
          value: function getCompaniesWithoutAdmin() {
            return this.GetCompaniesWithoutAdminGQL.watch();
          }
        }, {
          key: "createCompany",
          value: function createCompany(companyName) {
            return this.createCompanyGQL.mutate({
              input: companyName
            });
          }
        }, {
          key: "createInitiative",
          value: function createInitiative(state, title, userId, companyId, deadline) {
            return this.createInitiativeGQL.mutate({
              state: state,
              title: title,
              userId: userId,
              companyId: companyId,
              deadline: deadline
            });
          }
        }, {
          key: "deleteInitiative",
          value: function deleteInitiative(companyId, initiativeId) {
            return this.removeInitiative.mutate({
              companyId: companyId,
              initiativeId: initiativeId
            });
          }
        }, {
          key: "getDepartmentsOfCompany",
          value: function getDepartmentsOfCompany(companyId) {
            var list = [];

            this._getDeprtmentsOfCompany.mutate({
              companyId: companyId
            }).subscribe(function (data) {
              data.data.getDepartmentsOfCompany.map(function (t) {
                list.push(t.name);
              });
            });

            return list;
          }
        }]);

        return CompanyService;
      }();

      CompanyService.ɵfac = function CompanyService_Factory(t) {
        return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetInitiativesByCompanyIdGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CreateAdministratorGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetCompaniesWithoutAdminGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CreateCompanyGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CreateInitiativeGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["RemoveInitiativeGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetDepartmentsOfCompanyGQL"]));
      };

      CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CompanyService,
        factory: CompanyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetInitiativesByCompanyIdGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CreateAdministratorGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetCompaniesWithoutAdminGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CreateCompanyGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CreateInitiativeGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["RemoveInitiativeGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetDepartmentsOfCompanyGQL"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "adJJ":
    /*!******************************************************************************!*\
      !*** ./src/app/components/user/forgot-password/forgot-password.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function adJJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function ForgotPasswordComponent_nz_alert_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 8);
        }
      }

      function ForgotPasswordComponent_nz_alert_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r1.graphQLErrors[0].field.toString()))("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r1.graphQLErrors[0].message.toString()));
        }
      }

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(fb, userService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.fb = fb;
          this.userService = userService;
          this.graphQLErrors = [];
          this.success = false;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotPassword = this.fb.group({
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this37 = this;

            for (var i in this.forgotPassword.controls) {
              this.forgotPassword.controls[i].markAsDirty();
              this.forgotPassword.controls[i].updateValueAndValidity();
            }

            if (this.forgotPassword.valid) {
              this.userService.forgotPassword(this.forgotPassword.controls.email.value).subscribe(function (_ref4) {
                var data = _ref4.data;

                if (data.forgotPassword === false) {
                  _this37.success = false;

                  _this37.graphQLErrors.push({
                    field: 'Email',
                    message: "User with email: ".concat(_this37.forgotPassword.controls.email.value, ", not found!")
                  });
                } else {
                  _this37.success = true;
                  _this37.graphQLErrors = [];
                }
              });
            }
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 10,
        vars: 4,
        consts: [["small", "true"], ["nzType", "success", "nzMessage", "An email is sent to you with further instructions!", "style", "margin-bottom: 20px;", 4, "ngIf"], ["nzType", "error", 3, "nzMessage", "nzDescription", 4, "ngIf"], ["nz-form", "", 1, "forgot-password-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input a valid email"], ["nzPrefixIcon", "user"], ["type", "text", "nz-input", "", "formControlName", "email", "placeholder", "Email"], ["nz-button", "", 1, "forgot-password-button", 3, "nzType"], ["nzType", "success", "nzMessage", "An email is sent to you with further instructions!", 2, "margin-bottom", "20px"], ["nzType", "error", 3, "nzMessage", "nzDescription"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_nz_alert_1_Template, 1, 0, "nz-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_nz_alert_2_Template, 3, 6, "nz-alert", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_3_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-input-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request reset password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.graphQLErrors.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bALC":
    /*!********************************************************************!*\
      !*** ./src/app/components/shared/container/container.component.ts ***!
      \********************************************************************/

    /*! exports provided: ContainerComponent */

    /***/
    function bALC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerComponent", function () {
        return ContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _c1 = ["*"];

      var ContainerComponent = /*#__PURE__*/function () {
        function ContainerComponent() {
          _classCallCheck(this, ContainerComponent);

          this.small = false;
          this.className = '';
        }

        _createClass(ContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContainerComponent;
      }();

      ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
        return new (t || ContainerComponent)();
      };

      ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContainerComponent,
        selectors: [["app-container"]],
        inputs: {
          small: "small",
          className: "className"
        },
        ngContentSelectors: _c1,
        decls: 2,
        vars: 5,
        consts: [[1, "container", 3, "ngClass"]],
        template: function ContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("container-small", ctx.small);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.className !== "" ? ctx.className + "-container" : ""));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["div.container[_ngcontent-%COMP%] {\n  width: 85%;\n  max-width: 1400px;\n  margin: 0 auto;\n}\ndiv.container.container-small[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\ndiv.container.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICAmLmNvbnRhaW5lci1zbWFsbCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuXG4gICYuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.scss']
          }]
        }], function () {
          return [];
        }, {
          small: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "bNx4":
    /*!*********************************************!*\
      !*** ./src/app/models/initiative/survey.ts ***!
      \*********************************************/

    /*! exports provided: Survey */

    /***/
    function bNx4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Survey", function () {
        return Survey;
      });

      var Survey = /*#__PURE__*/function () {
        function Survey(_status, _category, _questions, _title) {
          _classCallCheck(this, Survey);

          this._status = _status;
          this._category = _category;
          this._questions = _questions;
          this._title = _title;
        }

        _createClass(Survey, [{
          key: "status",
          get: function get() {
            return this._status;
          }
        }, {
          key: "category",
          get: function get() {
            return this._category;
          }
        }, {
          key: "questions",
          get: function get() {
            return this._questions;
          }
        }, {
          key: "title",
          get: function get() {
            return this._title;
          }
        }]);

        return Survey;
      }();
      /***/

    },

    /***/
    "clsX":
    /*!**************************************************************************!*\
      !*** ./src/app/components/user/create-administrator/CompanyDummyData.ts ***!
      \**************************************************************************/

    /*! exports provided: Company, User */

    /***/
    function clsX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return Company;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var Company = /*#__PURE__*/function () {
        function Company(name) {
          _classCallCheck(this, Company);

          this.name = name;
          this.employees = new Array();
        }

        _createClass(Company, [{
          key: "addEmployee",
          value: function addEmployee(employee) {
            this.employees.push(employee);
          }
        }]);

        return Company;
      }();

      var User = function User(name) {
        _classCallCheck(this, User);

        this.username = name;
      };
      /***/

    },

    /***/
    "dQRp":
    /*!******************************************************************!*\
      !*** ./src/app/components/home/dashboard/dashboard.component.ts ***!
      \******************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function dQRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 0,
        vars: 0,
        template: function DashboardComponent_Template(rf, ctx) {},
        styles: ["nz-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uei1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMDtcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "eMDD":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/initiative/initiative-realization/initiative-realization.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: InitiativeRealizationComponent */

    /***/
    function eMDD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiativeRealizationComponent", function () {
        return InitiativeRealizationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      var InitiativeRealizationComponent = /*#__PURE__*/function () {
        function InitiativeRealizationComponent() {
          _classCallCheck(this, InitiativeRealizationComponent);
        }

        _createClass(InitiativeRealizationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InitiativeRealizationComponent;
      }();

      InitiativeRealizationComponent.ɵfac = function InitiativeRealizationComponent_Factory(t) {
        return new (t || InitiativeRealizationComponent)();
      };

      InitiativeRealizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InitiativeRealizationComponent,
        selectors: [["app-initiative-realization"]],
        decls: 3,
        vars: 0,
        consts: [["nz-button", "", 1, "button-def", "btn-init"], ["width", "600", "height", "700", "src", "../../../../assets/survey.png", "alt", ""]],
        template: function InitiativeRealizationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create new survey");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
          }
        },
        directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pdGlhdGl2ZS9pbml0aWF0aXZlLXJlYWxpemF0aW9uL2luaXRpYXRpdmUtcmVhbGl6YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitiativeRealizationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-initiative-realization',
            templateUrl: './initiative-realization.component.html',
            styleUrls: ['./initiative-realization.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hFfA":
    /*!*********************************************************************!*\
      !*** ./src/app/components/group/group-page/group-page.component.ts ***!
      \*********************************************************************/

    /*! exports provided: GroupPageComponent */

    /***/
    function hFfA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupPageComponent", function () {
        return GroupPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../group-overview/group-overview.component */
      "hoHM");
      /* harmony import */


      var _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../group-details/group-details.component */
      "lKNd");

      var GroupPageComponent = /*#__PURE__*/function () {
        function GroupPageComponent() {
          _classCallCheck(this, GroupPageComponent);
        }

        _createClass(GroupPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GroupPageComponent;
      }();

      GroupPageComponent.ɵfac = function GroupPageComponent_Factory(t) {
        return new (t || GroupPageComponent)();
      };

      GroupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GroupPageComponent,
        selectors: [["app-group-page"]],
        decls: 12,
        vars: 0,
        consts: [[2, "overflow", "hidden", "text-align", "center"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], ["nzTitle", "Select group", 2, "text-align", "center"], ["nzTitle", "View group members", 2, "text-align", "center"]],
        template: function GroupPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Manage groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-group-overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-group-details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzHeaderComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardComponent"], _group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_4__["GroupOverviewComponent"], _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_5__["GroupDetailsComponent"]],
        styles: ["nz-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9ncm91cC1wYWdlL2dyb3VwLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXAvZ3JvdXAtcGFnZS9ncm91cC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uei1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMDtcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-group-page',
            templateUrl: './group-page.component.html',
            styleUrls: ['./group-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hoHM":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/group/group-overview/group-overview.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: GroupOverviewComponent */

    /***/
    function hoHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupOverviewComponent", function () {
        return GroupOverviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_initiative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/initiative.service */
      "RXUy");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");

      function GroupOverviewComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GroupOverviewComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Number of members: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXXl", 8)("nzXl", 4)("nzLg", 6)("nzMd", 6)("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r3.name);
        }
      }

      var GroupOverviewComponent = /*#__PURE__*/function () {
        function GroupOverviewComponent(router, _route, _initiativeService) {
          var _this38 = this;

          _classCallCheck(this, GroupOverviewComponent);

          this.router = router;
          this._route = _route;
          this._initiativeService = _initiativeService;
          this._initiativeId = this._route.snapshot.paramMap.get("id");
          this.size = 'large';
          this._fetchGroups$ = this._route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (newParams) {
            return _this38._initiativeService.getAInitiativeGroups$(_this38._initiativeId);
          }));
        }

        _createClass(GroupOverviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "OnGroupClick",
          value: function OnGroupClick(id) {
            this.router.navigate(['/group_detail', id]);
          }
        }, {
          key: "groups$",
          get: function get() {
            return this._fetchGroups$;
          }
        }]);

        return GroupOverviewComponent;
      }();

      GroupOverviewComponent.ɵfac = function GroupOverviewComponent_Factory(t) {
        return new (t || GroupOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_initiative_service__WEBPACK_IMPORTED_MODULE_3__["InitiativeService"]));
      };

      GroupOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GroupOverviewComponent,
        selectors: [["app-group-overview"]],
        decls: 11,
        vars: 5,
        consts: [["small", "true"], ["nzSearch", "", 1, "input-search", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search for group", 1, "color-border", 2, "width", "400px", "height", "40px"], ["suffixIconButton", ""], [1, "display-list"], ["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "style", "margin-top: 0.5em;", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzSearch", "", 1, "color-border", 2, "width", "60px", "height", "40px"], ["nz-icon", "", "nzType", "search"], ["nz-col", "", 2, "margin-top", "0.5em", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [1, "color-border", 2, "border-radius", "1em", 3, "nzTitle"]],
        template: function GroupOverviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-input-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupOverviewComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GroupOverviewComponent_div_9_Template, 7, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.groups$));
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_4__["ContainerComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListGridDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListItemComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: [".input-search[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.display-list[_ngcontent-%COMP%] {\n  margin: 4em;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.color-border[_ngcontent-%COMP%] {\n  border-color: #628d5d;\n}\n\nnz-list-item[_ngcontent-%COMP%]:hover   nz-card[_ngcontent-%COMP%] {\n  background-color: #a5c2a5;\n}\n\n.row-full[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.radius[_ngcontent-%COMP%] {\n  border-radius: 1em;\n}\n\n.create-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 115%;\n  margin-top: 0.2em;\n  background-color: #56718b;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9ncm91cC1vdmVydmlldy9ncm91cC1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLGVBQUE7QUFKSjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBSkY7O0FBUUE7RUFDRSxxQkFBQTtBQUxGOztBQVNFO0VBQ0UseUJBQUE7QUFOSjs7QUFXQTtFQUNFLFVBQUE7QUFSRjs7QUFXQztFQUNDLGtCQUFBO0FBUkY7O0FBV0M7RUFDQyxpQkFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9ncm91cC1vdmVydmlldy9ncm91cC1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4gXHJcbiAgLmlucHV0LXNlYXJjaHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcblxyXG4uZGlzcGxheS1saXN0e1xyXG4gIG1hcmdpbjogNGVtO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MDtcclxuICByaWdodDowO1xyXG4gIFxyXG59XHJcblxyXG4uY29sb3ItYm9yZGVye1xyXG4gIGJvcmRlci1jb2xvcjogIzYyOGQ1ZDtcclxufVxyXG5cclxubnotbGlzdC1pdGVtOmhvdmVyIHtcclxuICBuei1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1YzJhNTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ucm93LWZ1bGx7XHJcbiAgd2lkdGg6IDUwJTtcclxuIH1cclxuXHJcbiAucmFkaXVze1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuIH1cclxuXHJcbiAuY3JlYXRlLWJ1dHRvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMTE1JTsgXHJcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDExMywgMTM5KTsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupOverviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-group-overview',
            templateUrl: './group-overview.component.html',
            styleUrls: ['./group-overview.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_services_initiative_service__WEBPACK_IMPORTED_MODULE_3__["InitiativeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hzBV":
    /*!**********************************************************!*\
      !*** ./src/app/components/user/login/login.component.ts ***!
      \**********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function hzBV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/navigation */
      "Jw8O");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function LoginComponent_nz_alert_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r0.graphQLErrors[0].field.toString()))("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r0.graphQLErrors[0].message.toString()));
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, userService, router) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.userService = userService;
          this.router = router;
          this.graphQLErrors = [];
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validateForm = this.fb.group({
              userNameOrEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this39 = this;

            for (var i in this.validateForm.controls) {
              this.validateForm.controls[i].markAsDirty();
              this.validateForm.controls[i].updateValueAndValidity();
            }

            if (this.validateForm.valid) {
              this.userService.login(this.validateForm.controls.userNameOrEmail.value, this.validateForm.controls.password.value).subscribe(function (_ref5) {
                var data = _ref5.data;

                if (data.login.errors) {
                  _this39.graphQLErrors = data.login.errors;
                } else {
                  // login successful
                  _this39.graphQLErrors = [];

                  _this39.userService.checkLoggedIn().refetch();

                  localStorage.setItem("userid", data.login.user.id);
                  Object(src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_2__["navigateInitiativeOverview"])(_this39.router);
                }
              }, function (error) {
                // Internal errors
                console.log(error);
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 20,
        vars: 4,
        consts: [["small", "true"], ["nzType", "error", 3, "nzMessage", "nzDescription", 4, "ngIf"], ["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username or email!"], ["nzPrefixIcon", "user"], ["type", "text", "nz-input", "", "formControlName", "userNameOrEmail", "placeholder", "Username or email"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password"], ["nz-row", "", 1, "login-form-margin"], ["nz-col", "", 3, "nzSpan"], ["routerLink", "/forgot-password", 1, "login-form-forgot"], ["nz-button", "", 1, "login-form-button", "login-form-margin", 3, "nzType"], ["routerLink", "/register"], ["nzType", "error", 3, "nzMessage", "nzDescription"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_nz_alert_1_Template, 3, 6, "nz-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-input-group", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-group", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forgot password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Log in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " register now! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.graphQLErrors.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_12__["NzAlertComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
        styles: [".login-form[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 50px auto;\n}\n\n.login-form-margin[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.login-form-forgot[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.login-form-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnz-alert[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 20px;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4ubG9naW4tZm9ybS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubG9naW4tZm9ybS1mb3Jnb3Qge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5uei1hbGVydCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kJ/B":
    /*!*******************************************************************!*\
      !*** ./src/app/components/group/add-group/add-group.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AddGroupComponent */

    /***/
    function kJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function () {
        return AddGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/company.service */
      "ZtWP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AddGroupComponent = /*#__PURE__*/function () {
        function AddGroupComponent(_companyService, router, _route) {
          _classCallCheck(this, AddGroupComponent);

          this._companyService = _companyService;
          this.router = router;
          this._route = _route;
        }

        _createClass(AddGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddGroupComponent;
      }();

      AddGroupComponent.ɵfac = function AddGroupComponent_Factory(t) {
        return new (t || AddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      AddGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddGroupComponent,
        selectors: [["app-add-group"]],
        decls: 2,
        vars: 0,
        template: function AddGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-group works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXAvYWRkLWdyb3VwL2FkZC1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-group',
            templateUrl: './add-group.component.html',
            styleUrls: ['./add-group.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kZXN":
    /*!************************************************************************!*\
      !*** ./src/app/components/user/upload-users/upload-users.component.ts ***!
      \************************************************************************/

    /*! exports provided: UploadUsersComponent */

    /***/
    function kZXN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadUsersComponent", function () {
        return UploadUsersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var ngx_papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-papaparse */
      "P6Fj");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function UploadUsersComponent_nz_alert_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 6);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", ctx_r0.failmessage);
        }
      }

      function UploadUsersComponent_nz_alert_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 7);
        }
      }

      function UploadUsersComponent_nz_alert_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 8);
        }
      }

      var UploadUsersComponent = /*#__PURE__*/function () {
        function UploadUsersComponent(_userService, parse) {
          _classCallCheck(this, UploadUsersComponent);

          this._userService = _userService;
          this.parse = parse;
          this.loading = true;
          this.newUser = "";
        }

        _createClass(UploadUsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleFileInput",
          value: function handleFileInput(files) {
            var _this40 = this;

            var fileReader = new FileReader();

            fileReader.onload = function () {
              _this40.newUser = fileReader.result.toString();
              /*
                    this.parse.parse(fileReader.result.toString(), {
                      header: true,
                      complete: (result) => {
                        var usersCsv = result.data as Array<Object>
                        var collums = result.meta.fields;
                        console.log(result.meta.fields)
              
                        
              
                        if (collums.includes("Name") && collums.includes("Country") && collums.includes("Office") && collums.includes("Factory")
                          && collums.includes("Department") && collums.includes("Team") && collums.includes("Email")) {
                            
                          usersCsv.forEach(e => {
              
                            var x = (<string>e["Name"]).split(" ");
                            var name = x[0];
                            var lastname = x[1];
                            var username = name + lastname;
              
                            this.newUser.push(new User(username, name, lastname, e["Email"], e["Factory"], new Set<UserRole>().add(UserRole.EMPLOYEE)))
                            
                            this._userService.register(username, "Default@123", e["Email"]).subscribe(e => {
                              if (!e.errors) {
                                this._userService.updateUserInformation(new User(username, name, lastname, e["Email"], e["Factory"], new Set<UserRole>().add(UserRole.EMPLOYEE)));
                              }else{
                                console.log("Here")
                                console.log(e.errors[0].message)
                              }
                            })
                          })
                        }
                      }
                    });*/
            };

            fileReader.readAsText(files[0]);
          }
        }, {
          key: "submitUsers",
          value: function submitUsers() {
            var _this41 = this;

            this._userService.registerMultiple(this.newUser).subscribe(function (e) {
              console.log(e);

              if (e.data.registerMultiple.message == "oke") {
                _this41.succeeded = true;
              } else if (e.data.registerMultiple.message == "Duplicated information") {
                _this41.succeeded = false;
                _this41.failmessage = "Something whent wrong";
              }
            });
          }
        }]);

        return UploadUsersComponent;
      }();

      UploadUsersComponent.ɵfac = function UploadUsersComponent_Factory(t) {
        return new (t || UploadUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_papaparse__WEBPACK_IMPORTED_MODULE_2__["Papa"]));
      };

      UploadUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UploadUsersComponent,
        selectors: [["app-upload-users"]],
        decls: 9,
        vars: 3,
        consts: [["type", "file", "id", "avatar", "name", "avatar", "accept", ".csv", 2, "margin-top", "16px", "margin", "0 auto", "display", "block", 3, "change"], ["nz-button", "", "nzType", "primar", 2, "margin-top", "16px", "margin", "0 auto", "display", "block", 3, "click"], ["nz-icon", "", "nzType", "upload"], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription", 4, "ngIf"], ["nzType", "success", "nzDescription", "'Company has been created successfully'", "nzShowIcon", "", 4, "ngIf"], ["nzType", "success", "nzDescription", "'Users have been created successfully'", "nzShowIcon", "", 4, "ngIf"], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription"], ["nzType", "success", "nzDescription", "'Company has been created successfully'", "nzShowIcon", ""], ["nzType", "success", "nzDescription", "'Users have been created successfully'", "nzShowIcon", ""]],
        template: function UploadUsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadUsersComponent_Template_input_change_2_listener($event) {
              return ctx.handleFileInput($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadUsersComponent_Template_button_click_3_listener() {
              return ctx.submitUsers();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadUsersComponent_nz_alert_6_Template, 1, 1, "nz-alert", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UploadUsersComponent_nz_alert_7_Template, 1, 0, "nz-alert", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UploadUsersComponent_nz_alert_8_Template, 1, 0, "nz-alert", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded);
          }
        },
        directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__["NzAlertComponent"]],
        styles: ["nz-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VwbG9hZC11c2Vycy91cGxvYWQtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91cGxvYWQtdXNlcnMvdXBsb2FkLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadUsersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-upload-users',
            templateUrl: './upload-users.component.html',
            styleUrls: ['./upload-users.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_2__["Papa"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kbt0":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/initiative/initiative-overview/initiative-overview.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: InitiativeOverviewComponent */

    /***/
    function kbt0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiativeOverviewComponent", function () {
        return InitiativeOverviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_initiative_initiative__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/initiative/initiative */
      "ti9n");
      /* harmony import */


      var src_app_models_initiative_PreparationState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/initiative/PreparationState */
      "oM6e");
      /* harmony import */


      var src_app_models_initiative_RealizationState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/initiative/RealizationState */
      "01b4");
      /* harmony import */


      var src_app_models_initiative_ValueCreationState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/initiative/ValueCreationState */
      "peWk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/company.service */
      "ZtWP");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function InitiativeOverviewComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InitiativeOverviewComponent_div_12_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "check-circle")("nzTheme", "twotone")("nzTwotoneColor", "#52c41a");
        }
      }

      function InitiativeOverviewComponent_div_12_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitiativeOverviewComponent_div_12_div_11_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.OnViewSurveyClick(item_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View Surveys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitiativeOverviewComponent_div_12_div_11_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.OnViewGroupClick(item_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View Groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitiativeOverviewComponent_div_12_div_11_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.OnRemoveClick(item_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InitiativeOverviewComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InitiativeOverviewComponent_div_12_div_3_Template, 2, 3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InitiativeOverviewComponent_div_12_div_11_Template, 9, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXXl", 8)("nzXl", 4)("nzLg", 6)("nzMd", 6)("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Deadline is: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, item_r5.deadline), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Members: ", item_r5.Groups, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Surveys: ", item_r5.Surveys, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.isOwner);
        }
      }

      function InitiativeOverviewComponent_nz_alert_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 21);
        }
      }

      function InitiativeOverviewComponent_nz_alert_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 22);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", ctx_r4.error);
        }
      }

      var InitiativeOverviewComponent = /*#__PURE__*/function () {
        function InitiativeOverviewComponent(router, route, _userService, _companyService) {
          _classCallCheck(this, InitiativeOverviewComponent);

          this.router = router;
          this.route = route;
          this._userService = _userService;
          this._companyService = _companyService;
          this.size = 'large';
          this.error = "";
          this._initiatives = new Array();
        }

        _createClass(InitiativeOverviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this42 = this;

            this._userId = localStorage.getItem("userid");
            this._companyId = "5fbd23d5fbb32665c4ae3cf5";

            this._companyService.getInitiatives(this._companyId).subscribe(function (data) {
              data.data.getInitiativesByCompanyId.map(function (init) {
                var initiative = new src_app_models_initiative_initiative__WEBPACK_IMPORTED_MODULE_1__["Initiative"](init.title);
                initiative.id = init.id;

                var state = _this42.convertState(init.currentState, initiative);

                initiative.SetSate(state);
                initiative.deadline = init.deadline;

                if (init.creator == _this42._userId) {
                  initiative.isOwener = true;
                }

                _this42._initiatives.push(initiative);
              });
            });
          }
        }, {
          key: "isChangeManager",
          value: function isChangeManager() {
            return false;
          }
        }, {
          key: "convertState",
          value: function convertState(state, init) {
            if (state.includes("realization")) {
              return new src_app_models_initiative_RealizationState__WEBPACK_IMPORTED_MODULE_3__["RealizationState"](init);
            } else if (state.includes("evaluation")) {
              return new src_app_models_initiative_ValueCreationState__WEBPACK_IMPORTED_MODULE_4__["ValueCreationState"](init);
            }

            return new src_app_models_initiative_PreparationState__WEBPACK_IMPORTED_MODULE_2__["PreparationState"](init);
          }
        }, {
          key: "OnRemoveClick",
          value: function OnRemoveClick(initiativeId) {
            var _this43 = this;

            if (window.confirm("Are you sure you want to delete this initiative?")) {
              this._companyService.deleteInitiative(this._companyId, initiativeId).subscribe(function (t) {
                if (t.data.removeInitiative) {
                  _this43.succeeded = true;
                  window.location.reload();
                } else {
                  _this43.succeeded = false;
                  _this43.error = "Something went wrong..";
                }
              });
            }
          }
        }, {
          key: "OnViewSurveyClick",
          value: function OnViewSurveyClick(id) {
            if (id) {
              this.router.navigate(['/survey-overview', id]);
            }
          }
        }, {
          key: "OnViewGroupClick",
          value: function OnViewGroupClick(id) {
            this.router.navigate(['/group-overview', id]);
          }
        }]);

        return InitiativeOverviewComponent;
      }();

      InitiativeOverviewComponent.ɵfac = function InitiativeOverviewComponent_Factory(t) {
        return new (t || InitiativeOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]));
      };

      InitiativeOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InitiativeOverviewComponent,
        selectors: [["app-initiative-overview"]],
        decls: 15,
        vars: 6,
        consts: [["small", "true"], ["nzSearch", "", 1, "input-search", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search for initiative", 1, "color-border", 2, "width", "400px", "height", "40px"], ["suffixIconButton", ""], ["routerLink", "/create-initiative", "nz-button", "", "nzType", "defualt", "nzBlock", "", 1, "create-button", 3, "nzSize"], [1, "display-list"], ["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "style", "margin-top: 0.5em;", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", 4, "ngFor", "ngForOf"], ["nzType", "success", "nzDescription", "'Initiative has been deleted successfully'", "nzShowIcon", "", 4, "ngIf"], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription", 4, "ngIf"], ["nz-button", "", "nzSearch", "", 1, "color-border", 2, "width", "60px", "height", "40px"], ["nz-icon", "", "nzType", "search"], ["nz-col", "", 2, "margin-top", "0.5em", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [1, "color-border", 2, "border-radius", "1em", 3, "nzTitle"], ["style", "margin-top: -1em;", 4, "ngIf"], [2, "margin-top", "-1em"], ["nz-icon", "", 2, "font-size", "2em", "float", "right", 3, "nzType", "nzTheme", "nzTwotoneColor"], [1, "row"], ["nz-button", "", "nzType", "default", 1, "radius", "row-full", 3, "click"], ["nz-button", "", "nzDanger", "", 1, "radius", 2, "width", "100%", "margin-top", "0.1em", 3, "click"], ["nzType", "success", "nzDescription", "'Initiative has been deleted successfully'", "nzShowIcon", ""], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription"]],
        template: function InitiativeOverviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-input-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InitiativeOverviewComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start a new change assessment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-list", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InitiativeOverviewComponent_div_12_Template, 12, 13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InitiativeOverviewComponent_nz_alert_13_Template, 1, 0, "nz-alert", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InitiativeOverviewComponent_nz_alert_14_Template, 1, 1, "nz-alert", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._initiatives);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded == false);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__["NzListGridDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__["NzColDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__["NzListItemComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__["NzCardComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__["NzAlertComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        styles: [".btn-init[_ngcontent-%COMP%] {\n  right: 0;\n  position: absolute;\n  margin-top: 0.3em;\n  margin-right: 0.3em;\n}\n\n.button-def[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 18px;\n  background-color: #3a9971;\n  color: white;\n  border-radius: 0.5em;\n  size: 50em;\n  width: 190px;\n  height: 45px;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.display-list[_ngcontent-%COMP%] {\n  margin: 4em;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.color-border[_ngcontent-%COMP%] {\n  border-color: #628d5d;\n}\n\nnz-list-item[_ngcontent-%COMP%]:hover   nz-card[_ngcontent-%COMP%] {\n  background-color: #a5c2a5;\n}\n\n.row-full[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.radius[_ngcontent-%COMP%] {\n  border-radius: 1em;\n}\n\n.create-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 115%;\n  margin-top: 0.2em;\n  background-color: #56718b;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbml0aWF0aXZlL2luaXRpYXRpdmUtb3ZlcnZpZXcvaW5pdGlhdGl2ZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUFGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBT0E7RUFDRSxVQUFBO0FBSkY7O0FBT0M7RUFDQyxrQkFBQTtBQUpGOztBQU9DO0VBQ0MsaUJBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pdGlhdGl2ZS9pbml0aWF0aXZlLW92ZXJ2aWV3L2luaXRpYXRpdmUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWluaXQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjNlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWRlZntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTk5NzE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIHNpemU6IDUwZW07XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5cclxuIFxyXG4gIC5pbnB1dC1zZWFyY2h7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG5cclxuLmRpc3BsYXktbGlzdHtcclxuICBtYXJnaW46IDRlbTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjA7XHJcbiAgcmlnaHQ6MDtcclxuICBcclxufVxyXG5cclxuLmNvbG9yLWJvcmRlcntcclxuICBib3JkZXItY29sb3I6ICM2MjhkNWQ7XHJcbn1cclxuXHJcbm56LWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgbnotY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWMyYTU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnJvdy1mdWxse1xyXG4gIHdpZHRoOiA1MCU7XHJcbiB9XHJcblxyXG4gLnJhZGl1c3tcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiB9XHJcblxyXG4gLmNyZWF0ZS1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDExNSU7IFxyXG4gICAgbWFyZ2luLXRvcDogMC4yZW07IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCAxMTMsIDEzOSk7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitiativeOverviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-initiative-overview',
            templateUrl: './initiative-overview.component.html',
            styleUrls: ['./initiative-overview.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lKNd":
    /*!***************************************************************************!*\
      !*** ./src/app/components/group/group-details/group-details.component.ts ***!
      \***************************************************************************/

    /*! exports provided: GroupDetailsComponent */

    /***/
    function lKNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupDetailsComponent", function () {
        return GroupDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");

      function GroupDetailsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Roles: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXXl", 6)("nzXl", 4)("nzLg", 6)("nzMd", 6)("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Firstname: ", item_r1.firstname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lastname: ", item_r1.lastname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", item_r1.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Username: ", item_r1.username, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created at: ", item_r1.createdAt, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Factory: ", item_r1.factory, "");
        }
      }

      var GroupDetailsComponent = /*#__PURE__*/function () {
        function GroupDetailsComponent(router, _route) {
          _classCallCheck(this, GroupDetailsComponent);

          this.router = router;
          this._route = _route;
        }

        _createClass(GroupDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.users = initiatives[0].groups[0].employees
          }
        }, {
          key: "onEditUser",
          value: function onEditUser() {}
        }]);

        return GroupDetailsComponent;
      }();

      GroupDetailsComponent.ɵfac = function GroupDetailsComponent_Factory(t) {
        return new (t || GroupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      GroupDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GroupDetailsComponent,
        selectors: [["app-group-details"]],
        decls: 5,
        vars: 2,
        consts: [[1, "display-list"], ["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [1, "color-border", 2, "border-radius", "1em", 3, "nzTitle"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline", 1, "", 2, "font-size", "5em"], [1, "row", 2, "margin-top", "0.1em"], ["nz-button", "", "nzType", "defualt", "routerLink", "/manageusers", 1, "row-full", "radius"], ["nz-button", "", "nzDanger", "", 1, "row-full", "radius"]],
        template: function GroupDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupDetailsComponent_div_4_Template, 23, 13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListGridDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__["NzListItemComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".display-list[_ngcontent-%COMP%] {\n  margin: 4em;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.color-border[_ngcontent-%COMP%] {\n  border-color: #31652b;\n}\n\nnz-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #95be94;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 100;\n}\n\n.row-full[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.radius[_ngcontent-%COMP%] {\n  border-radius: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9ncm91cC1kZXRhaWxzL2dyb3VwLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUFKOztBQUlFO0VBRUUscUJBQUE7QUFGSjs7QUFNSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUhOOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVFFO0VBQ0UsVUFBQTtBQUxKOztBQVFHO0VBQ0Msa0JBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXAvZ3JvdXAtZGV0YWlscy9ncm91cC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGlzcGxheS1saXN0e1xuICAgIG1hcmdpbjogNGVtO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGxlZnQ6MDtcbiAgICByaWdodDowO1xuICAgIFxuICB9XG5cbiAgLmNvbG9yLWJvcmRlcntcbiAgXG4gICAgYm9yZGVyLWNvbG9yOiAjMzE2NTJiO1xuICB9XG4gIFxuICBcbiAgICBuei1jYXJkOmhvdmVye1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YmU5NDtcbiAgICB9XG4gIFxuXG4gIC5idG4tcmlnaHR7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjEwMDtcbiAgICBcbiAgfVxuXG4gIC5yb3ctZnVsbHtcbiAgICB3aWR0aDogNTAlO1xuICAgfVxuXG4gICAucmFkaXVze1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-group-details',
            templateUrl: './group-details.component.html',
            styleUrls: ['./group-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "m86e":
    /*!*******************************************!*\
      !*** ./src/app/services/group.service.ts ***!
      \*******************************************/

    /*! exports provided: GroupService */

    /***/
    function m86e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupService", function () {
        return GroupService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_essential_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/essential/group.model */
      "Pr+g");
      /* harmony import */


      var src_generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/generated/graphql */
      "FJRG");

      var GroupService = /*#__PURE__*/function () {
        function GroupService(_getUserGroups) {
          _classCallCheck(this, GroupService);

          this._getUserGroups = _getUserGroups;
          this._groups$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        }

        _createClass(GroupService, [{
          key: "getUserGroups",
          value: function getUserGroups(userId) {
            var list = new Array();

            this._getUserGroups.mutate({
              userId: userId
            }).subscribe(function (data) {
              data.data.getUserGroups.map(function (t) {
                var group = new _models_essential_group_model__WEBPACK_IMPORTED_MODULE_3__["Group"](t.name, 'Desciption', null, null);
                group.id = t.id;
                list.push(group);
              });
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(list);
          }
        }, {
          key: "getUserGroups$",
          value: function getUserGroups$(userId) {
            var _this44 = this;

            return this._groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this44.getUserGroups(userId);
            }));
          }
        }]);

        return GroupService;
      }();

      GroupService.ɵfac = function GroupService_Factory(t) {
        return new (t || GroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["GetUserGroupsGQL"]));
      };

      GroupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GroupService,
        factory: GroupService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["GetUserGroupsGQL"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oM6e":
    /*!*******************************************************!*\
      !*** ./src/app/models/initiative/PreparationState.ts ***!
      \*******************************************************/

    /*! exports provided: PreparationState */

    /***/
    function oM6e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreparationState", function () {
        return PreparationState;
      });
      /* harmony import */


      var _RealizationState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./RealizationState */
      "01b4");

      var PreparationState = /*#__PURE__*/function () {
        function PreparationState(initiative) {
          _classCallCheck(this, PreparationState);

          this.initiative = initiative;
        }

        _createClass(PreparationState, [{
          key: "addGroups",
          value: function addGroups() {
            console.log('Adding groups to the initiative');
            this.initiative.SetSate(new _RealizationState__WEBPACK_IMPORTED_MODULE_0__["RealizationState"](this.initiative));
          }
        }, {
          key: "cancelInitiatve",
          value: function cancelInitiatve() {
            this.initiative.SetSate(null);
          }
        }, {
          key: "visualizeResult",
          value: function visualizeResult() {
            console.log('In the preparation state..');
          }
        }, {
          key: "addSurvies",
          value: function addSurvies() {
            console.log('In the preparation state..');
          }
        }]);

        return PreparationState;
      }();
      /***/

    },

    /***/
    "peWk":
    /*!*********************************************************!*\
      !*** ./src/app/models/initiative/ValueCreationState.ts ***!
      \*********************************************************/

    /*! exports provided: ValueCreationState */

    /***/
    function peWk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValueCreationState", function () {
        return ValueCreationState;
      });

      var ValueCreationState = /*#__PURE__*/function () {
        function ValueCreationState(initiative) {
          _classCallCheck(this, ValueCreationState);

          this.initiative = initiative;
        }

        _createClass(ValueCreationState, [{
          key: "addGroups",
          value: function addGroups() {
            console.log('Value creation! can not add groups..');
          }
        }, {
          key: "visualizeResult",
          value: function visualizeResult() {
            console.log('Value creation! end process');
            this.initiative.SetSate(null);
          }
        }, {
          key: "cancelInitiatve",
          value: function cancelInitiatve() {
            console.log('Value creation! can not cancel..');
          }
        }, {
          key: "addSurvies",
          value: function addSurvies() {
            console.log('Value creation! can not add survies..');
          }
        }]);

        return ValueCreationState;
      }();
      /***/

    },

    /***/
    "po2Y":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/initiative/initiative-preparation/initiative-preparation.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: InitiativePreparationComponent */

    /***/
    function po2Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiativePreparationComponent", function () {
        return InitiativePreparationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/group.service */
      "m86e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");

      function InitiativePreparationComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InitiativePreparationComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitiativePreparationComponent_div_15_Template_nz_list_item_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var item_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.OnGroupClick(item_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitiativePreparationComponent_div_15_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var item_r3 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addGroup(item_r3.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Group to the initietive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXXl", 8)("nzXl", 4)("nzLg", 6)("nzMd", 6)("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.description);
        }
      }

      var InitiativePreparationComponent = /*#__PURE__*/function () {
        function InitiativePreparationComponent(groupService, router, _route) {
          _classCallCheck(this, InitiativePreparationComponent);

          this.groupService = groupService;
          this.router = router;
          this._route = _route;
          this.ToggleButton = true;
          this.groups = [];
        }

        _createClass(InitiativePreparationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var id = Number.parseInt(this._route.snapshot.paramMap.get("id"));
            this.initiativeId = id;
            var init = null; // initiatives.find(ini => ini.id == id)

            if (init) {
              this.groups = init.groups;
            }
          }
        }, {
          key: "addGroup",
          value: function addGroup(name) {
            var index = this.groups.indexOf(this.groups.find(function (g) {
              return g.name == name;
            }));

            if (index !== -1) {
              this.groups.splice(index, 1);
              this.ToggleButton = false;
            }
          }
        }, {
          key: "OnGroupClick",
          value: function OnGroupClick(id) {
            this.router.navigate(['/group_detail', id]);
          }
        }, {
          key: "goToRealization",
          value: function goToRealization() {
            this.router.navigate(['/initiative-realization', this.initiativeId]);
          }
        }]);

        return InitiativePreparationComponent;
      }();

      InitiativePreparationComponent.ɵfac = function InitiativePreparationComponent_Factory(t) {
        return new (t || InitiativePreparationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      InitiativePreparationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InitiativePreparationComponent,
        selectors: [["app-initiative-preparation"]],
        decls: 16,
        vars: 4,
        consts: [["small", "true"], [1, "row"], ["nzSearch", "", 1, "input-search", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search for a group", 1, "color-border", 2, "width", "400px", "height", "40px"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "primary", 1, "btn-realization", 3, "disabled", "click"], [1, "h1-style"], [1, "display-list"], ["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzSearch", "", 1, "color-border", 2, "width", "60px", "height", "40px"], ["nz-icon", "", "nzType", "search"], ["nz-col", "", 3, "nzXXl", "nzXl", "nzLg", "nzMd", "nzSm", "nzXs"], [1, "radius", 3, "click"], [1, "color-border", 3, "nzTitle"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"]],
        template: function InitiativePreparationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-input-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InitiativePreparationComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitiativePreparationComponent_Template_button_click_7_listener() {
              return ctx.goToRealization();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go To Realization ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Initiative Preparation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-list", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InitiativePreparationComponent_div_15_Template, 8, 8, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ToggleButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListGridDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListItemComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardComponent"]],
        styles: [".btn-init[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  top: 12%;\n  right: 0;\n  transform: translateY(-50%);\n  margin-top: 0.3em;\n}\n\n.button-def[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 18px;\n  background-color: #264754;\n  color: white;\n  border-radius: 0.5em;\n  size: 50em;\n  width: 140px;\n  height: 45px;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.display-list[_ngcontent-%COMP%] {\n  margin: 4em;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nnzTitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.color-border[_ngcontent-%COMP%] {\n  border-color: #31652b;\n}\n\n.btn-realization[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  height: 40px;\n  width: 33em;\n}\n\n.h1-style[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  text-align: center;\n  color: #3d7532;\n}\n\nnz-list-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nnz-list-item[_ngcontent-%COMP%]:hover   nz-card[_ngcontent-%COMP%] {\n  background-color: #95be94;\n}\n\n.radius[_ngcontent-%COMP%] {\n  border-radius: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbml0aWF0aXZlL2luaXRpYXRpdmUtcHJlcGFyYXRpb24vaW5pdGlhdGl2ZS1wcmVwYXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFERjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBS0E7RUFFRSxxQkFBQTtBQUhGOztBQU1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQyxXQUFBO0FBSEw7O0FBT0E7RUFDRSxnQkFBQTtFQUNELGtCQUFBO0VBQ0EsY0FBQTtBQUpEOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQUtFO0VBQ0UseUJBQUE7QUFISjs7QUFPQTtFQUNFLGtCQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luaXRpYXRpdmUvaW5pdGlhdGl2ZS1wcmVwYXJhdGlvbi9pbml0aWF0aXZlLXByZXBhcmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1pbml0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgdG9wOjEyJTtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgbWFyZ2luLXRvcDogMC4zZW07XG4gXG4gIH1cblxuICAuYnV0dG9uLWRlZntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjQ3NTQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIHNpemU6IDUwZW07XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gXG4gIC5pbnB1dC1zZWFyY2h7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG5cbi5kaXNwbGF5LWxpc3R7XG4gIG1hcmdpbjogNGVtO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDowO1xuICByaWdodDowO1xuICBcbn1cblxubnpUaXRsZXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cbi5jb2xvci1ib3JkZXJ7XG4gIFxuICBib3JkZXItY29sb3I6ICMzMTY1MmI7XG59XG5cbi5idG4tcmVhbGl6YXRpb257XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGhlaWdodDogNDBweDtcbiAgICAgd2lkdGg6MzNlbVxuICAgICBcbn1cblxuLmgxLXN0eWxle1xuICBwYWRkaW5nLXRvcDogMWVtO1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBjb2xvcjogIzNkNzUzMjtcbn1cblxubnotbGlzdC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBuei1jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NWJlOTQ7XG4gIH1cbn1cblxuLnJhZGl1c3tcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuIH1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitiativePreparationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-initiative-preparation',
            templateUrl: './initiative-preparation.component.html',
            styleUrls: ['./initiative-preparation.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enum/user-role.enum */
      "4WgB");
      /* harmony import */


      var src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/generated/graphql */
      "FJRG");

      var UserService = /*#__PURE__*/function () {
        function UserService(loginGQL, registerGQL, checkLoggedInGQL, logoutGQL, getUsersWithName, updateUserInfo, getAllUsers, forgotPasswordGQL, getUserCompany, registerMultipleGQL) {
          _classCallCheck(this, UserService);

          this.loginGQL = loginGQL;
          this.registerGQL = registerGQL;
          this.checkLoggedInGQL = checkLoggedInGQL;
          this.logoutGQL = logoutGQL;
          this.getUsersWithName = getUsersWithName;
          this.updateUserInfo = updateUserInfo;
          this.getAllUsers = getAllUsers;
          this.forgotPasswordGQL = forgotPasswordGQL;
          this.getUserCompany = getUserCompany;
          this.registerMultipleGQL = registerMultipleGQL;
        }

        _createClass(UserService, [{
          key: "login",
          value: function login(usernameOrEmail, password) {
            return this.loginGQL.mutate({
              usernameOrEmail: usernameOrEmail,
              password: password
            });
          }
        }, {
          key: "register",
          value: function register(username, password, email) {
            return this.registerGQL.mutate({
              input: {
                username: username,
                email: email,
                password: password
              }
            });
          }
        }, {
          key: "registerMultiple",
          value: function registerMultiple(users) {
            console.log(users);
            return this.registerMultipleGQL.mutate({
              input: users
            });
          }
        }, {
          key: "checkLoggedIn",
          value: function checkLoggedIn() {
            return this.checkLoggedInGQL.watch();
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.logoutGQL.mutate();
          }
        }, {
          key: "updateUserInformation",
          value: function updateUserInformation(user) {
            var r = [];
            user.roles.forEach(function (e) {
              r.push(_models_enum_user_role_enum__WEBPACK_IMPORTED_MODULE_1__["UserRole"][e.toString()]);
            });
            console.log(r.toString());
            return this.updateUserInfo.mutate({
              email: user.email,
              role: r.toString(),
              factory: user.factory,
              lastname: user.lastname,
              name: user.firstname,
              username: user.name
            });
          }
        }, {
          key: "getUsersWithNames",
          value: function getUsersWithNames(name) {
            return this.getUsersWithName.fetch({
              name: name
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.getAllUsers.fetch();
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            return this.forgotPasswordGQL.mutate({
              email: email
            });
          }
        }, {
          key: "getUserCompanyByUserId",
          value: function getUserCompanyByUserId(userId) {
            return this.getUserCompany.mutate({
              userId: userId
            });
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["LoginGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["RegisterGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CheckLoggedInGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["LogoutGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetUsersWithNameGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["UpdateUserInformationGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetUsersGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetCompanyByUserIdGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["RegisterMultipleGQL"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["LoginGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["RegisterGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["CheckLoggedInGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["LogoutGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetUsersWithNameGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["UpdateUserInformationGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetUsersGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["GetCompanyByUserIdGQL"]
          }, {
            type: src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["RegisterMultipleGQL"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rji1":
    /*!****************************************************************************!*\
      !*** ./src/app/components/user/create-company/create-company.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CreateCompanyComponent */

    /***/
    function rji1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function () {
        return CreateCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/company.service */
      "ZtWP");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function CreateCompanyComponent_ng_template_8_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input a company name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function CreateCompanyComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateCompanyComponent_ng_template_8_ng_container_0_Template, 2, 0, "ng-container", 10);
        }

        if (rf & 2) {
          var control_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r4.hasError("required"));
        }
      }

      function CreateCompanyComponent_nz_alert_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 11);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzDescription", ctx_r2.failmessage);
        }
      }

      function CreateCompanyComponent_nz_alert_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 12);
        }
      }

      var CreateCompanyComponent = /*#__PURE__*/function () {
        function CreateCompanyComponent(_fb, _companyService) {
          _classCallCheck(this, CreateCompanyComponent);

          this._fb = _fb;
          this._companyService = _companyService;
          this.validateForm = this._fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }

        _createClass(CreateCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitForm",
          value: function submitForm(value) {
            var _this45 = this;

            for (var key in this.validateForm.controls) {
              this.validateForm.controls[key].markAsDirty();
              this.validateForm.controls[key].updateValueAndValidity();
            }

            this._companyService.createCompany(value.name).subscribe(function (e) {
              if (e.data.createCompany.errors) {
                console.log(e);
                _this45.succeeded = false;
                _this45.failmessage = e.data.createCompany.errors[0].message;
              } else {
                _this45.succeeded = true;
                console.log("CONSEGUIDO");
              }
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm(e) {
            e.preventDefault();
            this.validateForm.reset();

            for (var key in this.validateForm.controls) {
              this.validateForm.controls[key].markAsPristine();
              this.validateForm.controls[key].updateValueAndValidity();
            }
          }
        }]);

        return CreateCompanyComponent;
      }();

      CreateCompanyComponent.ɵfac = function CreateCompanyComponent_Factory(t) {
        return new (t || CreateCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]));
      };

      CreateCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateCompanyComponent,
        selectors: [["app-create-company"]],
        decls: 18,
        vars: 9,
        consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSpan"], ["nzHasFeedback", "", "nzValidatingTip", "Validating...", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "name"], ["userErrorTpl", ""], [3, "nzOffset", "nzSpan"], ["nz-button", "", "nzType", "primary", 3, "disabled"], ["nz-button", "", 3, "click"], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription", 4, "ngIf"], ["nzType", "success", "nzDescription", "'Company has been created successfully'", "nzShowIcon", "", 4, "ngIf"], [4, "ngIf"], ["nzType", "error", "nzShowIcon", "", 3, "nzDescription"], ["nzType", "success", "nzDescription", "'Company has been created successfully'", "nzShowIcon", ""]],
        template: function CreateCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateCompanyComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitForm(ctx.validateForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Company name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-control", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateCompanyComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-control", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_button_click_14_listener($event) {
              return ctx.resetForm($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateCompanyComponent_nz_alert_16_Template, 1, 1, "nz-alert", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateCompanyComponent_nz_alert_17_Template, 1, 0, "nz-alert", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffset", 7)("nzSpan", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validateForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succeeded);
          }
        },
        directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertComponent"]],
        styles: ["[nz-form][_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 50px auto;\n}\n\n.createCompany-form-margin[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.createCompany-form-button[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\nnz-alert[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS1jb21wYW55L2NyZWF0ZS1jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsVUFBQTtBQUVKOztBQUFFO0VBQ0UsZ0JBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9jcmVhdGUtY29tcGFueS9jcmVhdGUtY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1mb3JtXSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICB9XG5cbiAgLmNyZWF0ZUNvbXBhbnktZm9ybS1tYXJnaW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgLmNyZWF0ZUNvbXBhbnktZm9ybS1idXR0b24ge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgbnotYWxlcnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-company',
            templateUrl: './create-company.component.html',
            styleUrls: ['./create-company.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ti9n":
    /*!*************************************************!*\
      !*** ./src/app/models/initiative/initiative.ts ***!
      \*************************************************/

    /*! exports provided: Initiative */

    /***/
    function ti9n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Initiative", function () {
        return Initiative;
      });
      /* harmony import */


      var _PreparationState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./PreparationState */
      "oM6e");
      /* harmony import */


      var _RealizationState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./RealizationState */
      "01b4");

      var Initiative = /*#__PURE__*/function () {
        function Initiative(_title) {
          _classCallCheck(this, Initiative);

          this._title = _title;
          this._groups = new Array();
          this._survies = new Array();
          this._isOwner = false;
        }

        _createClass(Initiative, [{
          key: "setCreator",
          value: function setCreator(user) {
            this._creator = user;
          }
        }, {
          key: "addGroup",
          value: function addGroup(newGroup) {
            this._groups.push(newGroup);
          }
        }, {
          key: "addSurvey",
          value: function addSurvey(newSurvey) {
            this._survies.push(newSurvey);
          }
        }, {
          key: "SetSate",
          value: function SetSate(newState) {
            this._currentState = newState;
          }
        }, {
          key: "getNameState",
          value: function getNameState() {
            if (this._currentState instanceof _PreparationState__WEBPACK_IMPORTED_MODULE_0__["PreparationState"]) return "Preparation State";else if (this._currentState instanceof _RealizationState__WEBPACK_IMPORTED_MODULE_1__["RealizationState"]) {
              return "Realization State";
            } else {
              return "Value Creation State";
            }
          }
        }, {
          key: "title",
          get: function get() {
            return this._title;
          }
        }, {
          key: "isOwner",
          get: function get() {
            return this._isOwner;
          }
        }, {
          key: "isOwener",
          set: function set(value) {
            this._isOwner = value;
          }
        }, {
          key: "creator",
          get: function get() {
            return this._creator;
          }
        }, {
          key: "groups",
          get: function get() {
            return this._groups;
          },
          set: function set(groups) {
            this._groups = groups;
          }
        }, {
          key: "deadline",
          get: function get() {
            return this._deadline;
          },
          set: function set(date) {
            this._deadline = date;
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            this._id = id;
          }
        }, {
          key: "survies",
          get: function get() {
            return this._survies;
          }
        }, {
          key: "getState",
          get: function get() {
            if (this._currentState == null) {
              this._currentState = new _PreparationState__WEBPACK_IMPORTED_MODULE_0__["PreparationState"](this);
            }

            return this._currentState;
          }
        }]);

        return Initiative;
      }();
      /***/

    },

    /***/
    "ttvt":
    /*!************************************************************************!*\
      !*** ./src/app/components/user/user-details/user-details.component.ts ***!
      \************************************************************************/

    /*! exports provided: UserDetailsComponent */

    /***/
    function ttvt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
        return UserDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserDetailsComponent = /*#__PURE__*/function () {
        function UserDetailsComponent() {
          _classCallCheck(this, UserDetailsComponent);
        }

        _createClass(UserDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserDetailsComponent;
      }();

      UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) {
        return new (t || UserDetailsComponent)();
      };

      UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserDetailsComponent,
        selectors: [["app-user-details"]],
        decls: 2,
        vars: 0,
        template: function UserDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-details works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/home/dashboard/dashboard.component */
      "dQRp");
      /* harmony import */


      var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/user/login/login.component */
      "hzBV");
      /* harmony import */


      var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/user/register/register.component */
      "yT3u");
      /* harmony import */


      var _components_group_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/group/group-overview/group-overview.component */
      "hoHM");
      /* harmony import */


      var _components_group_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/group/group-details/group-details.component */
      "lKNd");
      /* harmony import */


      var _components_user_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/user/manage-users/manage-users.component */
      "HSJx");
      /* harmony import */


      var _components_initiative_initiative_overview_initiative_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/initiative/initiative-overview/initiative-overview.component */
      "kbt0");
      /* harmony import */


      var _components_initiative_create_initiative_create_initiative_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/initiative/create-initiative/create-initiative.component */
      "MqyP");
      /* harmony import */


      var _components_initiative_initiative_preparation_initiative_preparation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/initiative/initiative-preparation/initiative-preparation.component */
      "po2Y");
      /* harmony import */


      var _components_initiative_initiative_realization_initiative_realization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/initiative/initiative-realization/initiative-realization.component */
      "eMDD");
      /* harmony import */


      var _components_group_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/group/group-page/group-page.component */
      "hFfA");
      /* harmony import */


      var _components_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/user/user-details/user-details.component */
      "ttvt");
      /* harmony import */


      var _components_initiative_initiative_value_creation_initiative_value_creation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/initiative/initiative-value-creation/initiative-value-creation.component */
      "w+gJ");
      /* harmony import */


      var _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/user/forgot-password/forgot-password.component */
      "adJJ");
      /* harmony import */


      var _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/user/change-password/change-password.component */
      "FLDf");
      /* harmony import */


      var _components_user_create_administrator_create_administrator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/user/create-administrator/create-administrator.component */
      "Uy2H");
      /* harmony import */


      var _components_user_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/user/create-company/create-company.component */
      "rji1");
      /* harmony import */


      var _components_survey_survey_overview_survey_overview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/survey/survey-overview/survey-overview.component */
      "RwaI");
      /* harmony import */


      var _components_survey_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/survey/create-survey/create-survey.component */
      "JkeR");
      /* harmony import */


      var _components_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/group/create-group/create-group.component */
      "WuD+");
      /* harmony import */


      var _components_group_manage_group_manage_group_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/group/manage-group/manage-group.component */
      "346a");

      var routes = [{
        path: '',
        component: _components_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'login',
        component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'forgot-password',
        component: _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPasswordComponent"]
      }, {
        path: 'change-password/:token',
        component: _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"]
      }, {
        path: 'register',
        component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
      }, {
        path: "managegroups",
        component: _components_group_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_12__["GroupPageComponent"]
      }, {
        path: "user-details",
        component: _components_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailsComponent"]
      }, {
        path: "group-overview/:id",
        component: _components_group_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_5__["GroupOverviewComponent"]
      }, {
        path: "group_detail/:id",
        component: _components_group_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailsComponent"]
      }, {
        path: "manage-users",
        component: _components_user_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_7__["ManageUsersComponent"]
      }, {
        path: "initiative-overview",
        component: _components_initiative_initiative_overview_initiative_overview_component__WEBPACK_IMPORTED_MODULE_8__["InitiativeOverviewComponent"]
      }, {
        path: "create-initiative",
        component: _components_initiative_create_initiative_create_initiative_component__WEBPACK_IMPORTED_MODULE_9__["CreateInitiativeComponent"]
      }, {
        path: "initiative-preparation/:id",
        component: _components_initiative_initiative_preparation_initiative_preparation_component__WEBPACK_IMPORTED_MODULE_10__["InitiativePreparationComponent"]
      }, {
        path: "initiative-realization/:id",
        component: _components_initiative_initiative_realization_initiative_realization_component__WEBPACK_IMPORTED_MODULE_11__["InitiativeRealizationComponent"]
      }, {
        path: "initiative-value-creation/:id",
        component: _components_initiative_initiative_value_creation_initiative_value_creation_component__WEBPACK_IMPORTED_MODULE_14__["InitiativeValueCreationComponent"]
      }, {
        path: "survey-overview/:id",
        component: _components_survey_survey_overview_survey_overview_component__WEBPACK_IMPORTED_MODULE_19__["SurveyOverviewComponent"]
      }, {
        path: "create-survey/:id",
        component: _components_survey_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_20__["CreateSurveyComponent"]
      }, {
        path: "manage-group/:id",
        component: _components_group_manage_group_manage_group_component__WEBPACK_IMPORTED_MODULE_22__["ManageGroupComponent"]
      }, {
        path: 'createAdministrator',
        component: _components_user_create_administrator_create_administrator_component__WEBPACK_IMPORTED_MODULE_17__["CreateAdministratorComponent"]
      }, {
        path: 'create-company',
        component: _components_user_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__["CreateCompanyComponent"]
      }, {
        path: 'create-group',
        component: _components_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_21__["CreateGroupComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "w+gJ":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/initiative/initiative-value-creation/initiative-value-creation.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: InitiativeValueCreationComponent */

    /***/
    function wGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiativeValueCreationComponent", function () {
        return InitiativeValueCreationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InitiativeValueCreationComponent = /*#__PURE__*/function () {
        function InitiativeValueCreationComponent() {
          _classCallCheck(this, InitiativeValueCreationComponent);
        }

        _createClass(InitiativeValueCreationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InitiativeValueCreationComponent;
      }();

      InitiativeValueCreationComponent.ɵfac = function InitiativeValueCreationComponent_Factory(t) {
        return new (t || InitiativeValueCreationComponent)();
      };

      InitiativeValueCreationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InitiativeValueCreationComponent,
        selectors: [["app-initiative-value-creation"]],
        decls: 1,
        vars: 0,
        consts: [["width", "700", "height", "600", "src", "../../../../assets/chart.png", "alt", "CHART", 2, "text-align", "center"]],
        template: function InitiativeValueCreationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pdGlhdGl2ZS9pbml0aWF0aXZlLXZhbHVlLWNyZWF0aW9uL2luaXRpYXRpdmUtdmFsdWUtY3JlYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitiativeValueCreationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-initiative-value-creation',
            templateUrl: './initiative-value-creation.component.html',
            styleUrls: ['./initiative-value-creation.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "yT3u":
    /*!****************************************************************!*\
      !*** ./src/app/components/user/register/register.component.ts ***!
      \****************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function yT3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/navigation */
      "Jw8O");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/container/container.component */
      "bALC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");

      function RegisterComponent_nz_alert_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-alert", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMessage", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r0.graphQLErrors[0].field.toString()))("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx_r0.graphQLErrors[0].message.toString()));
        }
      }

      function RegisterComponent_ng_template_18_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please confirm your password! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function RegisterComponent_ng_template_18_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Two passwords that you entered are inconsistent! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function RegisterComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RegisterComponent_ng_template_18_ng_container_0_Template, 2, 0, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_template_18_ng_container_1_Template, 2, 0, "ng-container", 27);
        }

        if (rf & 2) {
          var control_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r3.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r3.hasError("confirm"));
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(fb, userService, router) {
          var _this46 = this;

          _classCallCheck(this, RegisterComponent);

          this.fb = fb;
          this.userService = userService;
          this.router = router;
          this.graphQLErrors = [];

          this.confirmationValidator = function (control) {
            if (!control.value) {
              return {
                required: true
              };
            } else if (control.value !== _this46.validateForm.controls.password.value) {
              return {
                confirm: true,
                error: true
              };
            }

            return {};
          };
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validateForm = this.fb.group({
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.confirmationValidator]],
              username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this47 = this;

            for (var i in this.validateForm.controls) {
              this.validateForm.controls[i].markAsDirty();
              this.validateForm.controls[i].updateValueAndValidity();
            }

            if (this.validateForm.valid) {
              this.userService.register(this.validateForm.controls.username.value, this.validateForm.controls.password.value, this.validateForm.controls.email.value).subscribe(function (_ref6) {
                var data = _ref6.data;

                if (data.register.errors) {
                  _this47.graphQLErrors = data.register.errors;
                } else {
                  // register successful
                  _this47.graphQLErrors = [];

                  _this47.userService.checkLoggedIn().refetch();

                  localStorage.setItem("userid", data.register.user.id);
                  Object(src_app_utils_navigation__WEBPACK_IMPORTED_MODULE_3__["navigateInitiativeOverview"])(_this47.router);
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "updateConfirmValidator",
          value: function updateConfirmValidator() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this48 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Promise.resolve().then(function () {
                        return _this48.validateForm.controls.checkPassword.updateValueAndValidity();
                      })["catch"](function (err) {
                        console.log(err);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "getCaptcha",
          value: function getCaptcha(e) {
            e.preventDefault();
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 41,
        vars: 27,
        consts: [["small", "true"], ["nzType", "error", 3, "nzMessage", "nzDescription", 4, "ngIf"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "email", 3, "nzSm", "nzXs"], ["nzErrorTip", "The input is not valid E-mail!", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "password", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your password!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "password", "id", "password", "formControlName", "password", 3, "ngModelChange"], ["nzFor", "checkPassword", "nzRequired", "", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["nz-input", "", "type", "password", "formControlName", "checkPassword", "id", "checkPassword"], ["errorTpl", ""], ["nzFor", "username", "nzRequired", "", 3, "nzSm", "nzXs"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "What do you want others to call you", "nzType", "question-circle", "nzTheme", "outline"], ["nzErrorTip", "Please input your username!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "username", "formControlName", "username"], ["nzFor", "captcha", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input the captcha you got!", "nzExtra", "We must make sure that your are a human.", 3, "nzSm", "nzXs"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nz-input", "", "formControlName", "captcha", "id", "captcha"], ["nz-button", "", 3, "click"], ["nz-row", "", 1, "register-area"], [3, "nzSpan"], ["nz-button", "", "nzType", "primary"], ["nzType", "error", 3, "nzMessage", "nzDescription"], [4, "ngIf"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_nz_alert_1_Template, 3, 6, "nz-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-control", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener() {
              return ctx.updateConfirmValidator();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-form-control", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RegisterComponent_ng_template_18_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-form-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Username ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-form-control", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-form-label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Captcha");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-control", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_35_listener($event) {
              return ctx.getCaptcha($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Get captcha");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nz-form-item", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-form-control", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.graphQLErrors.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzErrorTip", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14);
          }
        },
        directives: [_shared_container_container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__["NzAlertComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]],
        styles: ["[nz-form][_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 50px auto;\n}\n\n.phone-select[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.register-are[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nnz-alert[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1mb3JtXSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5waG9uZS1zZWxlY3Qge1xuICB3aWR0aDogNzBweDtcbn1cblxuLnJlZ2lzdGVyLWFyZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxubnotYWxlcnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map