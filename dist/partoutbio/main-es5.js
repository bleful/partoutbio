(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar\"\n     (scroll)=\"onWindowScroll($event);\">\n    <ul *ngIf=\"!hidden\">\n        <li>\n            <p >Home</p>\n            <hr>\n        </li>\n        <li>\n            <p >Contact</p>\n            <hr>\n        </li>\n        <li>\n            <p >Team</p>\n            <hr>\n        </li>\n        <li>\n            <p >Info</p>\n            <hr>\n        </li>\n    </ul>\n\n    <i class=\"fa fa-home\"\n       *ngIf=\"hidden\"\n       (click)=\"navToHome()\"></i>\n       <i class=\"fa fa-facebook\"\n       *ngIf=\"hidden\"\n       (click)=\"navToFacebook()\"></i>\n       <i class=\"fa fa-instagram\"\n       *ngIf=\"hidden\"\n       (click)=\"navToInstagram()\"></i>\n</nav>\n\n\n<router-outlet></router-outlet>\n\n<div class=\"footer\">\n    <div class=\"bottom-container\">\n        <div class=\"center-flex\">\n        <h3>© 2020 Partout Bio</h3>\n        <h3 class=\"left-marg\"\n            (click)=\"navToImpressum()\">Impressum</h3>\n    </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comingsoon/comingsoon.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comingsoon/comingsoon.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComingsoonComingsoonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n    <img src=\"assets/img/partoutbio-logo-with.svg\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-gallery></app-main-gallery>\n\n<div class=\"container padding-big\">\n    <div class=\"flex\">\n        <div class=\"box\">\n            <h2>Über uns</h2>\n            <h1>Partout Bio</h1>\n            <p>\n                Bei PARTOUT BIO - Concept Store findest Du eine große Auswahl an unverpackten Lebensmitteln in Bio - Qualität und wenn\n                möglich, aus regionalem Anbau. Dabei stehen der Verzicht auf Einwegverpackungen (hauptsächlich aus Plastik) und die\n                Nachhaltigkeit der Produkte im Mittelpunkt.\n                Zusätzlich gibt es Bio - Feinkost, Bio - Kosmetik und - Drogerieartikel, Fairtrade - Geschenke und Taschen u.v.m. Lasst Euch\n                überraschen!\n                Im Café / Bistro von PARTOUT BIO könnt Ihr mit einem leckeren Frühstück in den Tag starten. Zur Mittagszeit wird es eine\n                wechselnde Auswahl an Suppen und Salaten geben, dazu gibt es Kuchen / Gebäck etc. Auch hier liegt der Fokus darauf, dass\n                sämtliche Produkte Bio - Qualität besitzen.\n                PARTOUT BIO, nachhaltig, fair und regional ist das Ladenkonzept, das demnächst am Kirchweg 50 in Kassels\n                Vorderem Westen eröffnet wird. Wir freuen uns auf Dich!\n            </p>\n        </div>\n        <div data-relative-input=\"true\"\n             id=\"scene\">\n            <div data-depth=\"0.2\"\n                 class=\"right-img\">\n                <img src=\"assets/img/partoutbio-logo-img.svg\">\n            </div>\n            <div data-depth=\"0.5\"\n                 class=\"right-img\">\n                <img src=\"assets/img/partoutbio-logo-letter-top.svg\">\n            </div>\n            <div data-depth=\"0.4\"\n                 class=\"right-img\">\n                <img src=\"assets/img/partoutbio-logo-letter-bottom.svg\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"white padding-smal light-gray\">\n    <div class=\"contact-container center\">\n        <div class=\"flex\">\n            <div class=\"flex-box\">\n                <div class=\"contact-element\">\n                    <div class=\"icon-container center\">\n                        <i class=\"fa fa-phone\"></i>\n                    </div>\n                    <h3 class=\"center\">Telefon</h3>\n                    <p class=\"center\">0561-317 487 21</p>\n                </div>\n                <div class=\"contact-element\"\n                     (click)=\"navToGoogleMaps()\">\n                    <div class=\"icon-container center\">\n                        <i class=\"fa fa-home\"></i>\n                    </div>\n                    <h3 class=\"center\">Adresse</h3>\n                    <p class=\"center\">Kirchweg 50, Kassel</p>\n                </div>\n                <div class=\"contact-element\">\n                    <div class=\"icon-container center\">\n                        <i class=\"fa fa-clock-o\"></i>\n                    </div>\n                    <h3 class=\"center\">Öffnungszeiten</h3>\n                    <p class=\"center\">Montag bis Freitag: 9:00 - 18.30 </p>\n                    <p class=\"center\">Samstag: 9:00 - 14:30 </p>\n                </div>\n                <div class=\"contact-element\">\n                    <div class=\"icon-container center\">\n                        <i class=\"fa fa-envelope\"></i>\n                    </div>\n                    <h3 class=\"center\">E-Mail</h3>\n                    <p class=\"center\">info@partoutbio.com</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"parallax parallax-img\">\n    <div class=\"black-overlay\">\n        <div class=\"wrapp\">\n            <div class=\"margin-left\">\n                <h1>Partout Bio</h1>\n                <h2>Nachhaltig, Bio, Unverpackt</h2>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"white\"\n     *ngIf=\"true\">\n    <div class=\"container-white  padding-smal\">\n        <div class=\"flex kachel-container\">\n            <div *ngFor=\"let kategorie of products; index as i;\"\n                 class=\"kachel\"\n                 (click)=\"getCategoryIndex(i)\">\n                 <div *ngIf=\"category === i\" class=\"activ-inner-kachel\">\n                    <img src=\"./assets/Icons/{{kategorie.name}}.svg\">\n                </div>\n                <div *ngIf=\"category !== i\" class=\"inner-kachel\">\n                    <img src=\"./assets/Icons/{{kategorie.name}}.svg\">\n                </div>\n            </div>\n        </div>\n        <div class=\"header-container\">\n            <ul>\n                <li *ngFor=\"let sub of products[category].subtitel; index as i;\"\n                    (click)=\"getSubCategoryIndex(i)\">\n                    <h3 *ngIf=\"subCategory === i\"\n                        class=\"black\">{{sub.name}}</h3>\n                    <h3 *ngIf=\"subCategory !== i\">{{sub.name}}</h3>\n                    <hr>\n                </li>\n            </ul>\n        </div>\n        <div class=\"prudukt-container\">\n            <div class=\"flex-container\">\n                <div *ngFor=\"let inhalt of products[category].subtitel[subCategory].inhalt; index as i;\"\n                     class=\"produkte\">\n                    <div class=\"flex\">\n                        <!--<div class=\"bild\"></div>-->\n                        <div class=\"text\">\n                            <h3>{{inhalt.name}}</h3>\n                            <hr *ngIf=\"inhalt.beschreibung !== ''\">\n                            <p>{{inhalt.beschreibung}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--\n    <div data-relative-input=\"true\" id=\"scene\">\n    <div data-depth=\"0.2\">My first Layer!</div>\n    <div data-depth=\"0.6\">My second Layer!</div>\n  </div>\n-->\n\n<div class=\"light-gray\">\n    <div class=\"container-center white-shadow\"\n         *ngIf=\"false\">\n        <div class=\"container-center padding-smal\">\n            <div class=\"center\">\n                <h2 class=\"text-center\">About Restaurant</h2>\n                <h1 class=\"text-center\">Only The Freshest\n                    Ingredients</h1>\n            </div>\n            <agm-map [latitude]=\"lat\"\n                     [zoom]=\"zoom\"\n                     [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\"\n                            [longitude]=\"lng\"></agm-marker>\n            </agm-map>\n        </div>\n    </div>\n</div>\n\n<div class=\"white light-gray\">\n    <div class=\"container padding-smal\">\n        <div class=\"\">\n            <div class=\"center\">\n                <h2 class=\"text-center\">Unser Sortiment</h2>\n                <h1 class=\"text-center\">In Bio-Qualität & Nachhaltig</h1>\n            </div>\n            <app-show-case-gallery></app-show-case-gallery>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/impressum/impressum.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/impressum/impressum.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImpressumImpressumComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parallax parallax-header\">\n    <div class=\"wrapp\">\n        <div class=\"margin-left\">\n            <h1>Impressum</h1>\n        </div>\n    </div>\n</div>\n\n<div class=\"container padding-tiny\">\n    <h3>Angaben gemäß § 5 TMG</h3>\n    <p>Christine Grabolle<br />\n        Partout Bio Concept Store<br />\n        Kirchweg 50<br />\n        34119 Kassel</p>\n\n    <h3>Kontakt</h3>\n    <p>Telefon: +49561 317 487 21<br />\n        Telefax: +49561 317 487 22<br />\n        E-Mail: info@partoutbio.com</p>\n\n    <h3>Umsatzsteuer-ID</h3>\n    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />\n        DE328695126</p>\n\n    <h3>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h3>\n    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>\n\n    <h3>Haftung für Inhalte</h3>\n    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.\n        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu\n        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>\n    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.\n        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei\n        Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>\n    <h3>Haftung für Links</h3>\n    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese\n        fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber\n        der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.\n        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>\n    <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht\n        zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>\n    <h3>Urheberrecht</h3>\n    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die\n        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der\n        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht\n        kommerziellen Gebrauch gestattet.</p>\n    <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere\n        werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten\n        wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>\n    <h3>Facebook</h3>\n    <p>Datenschutzerklärung für die Nutzung von Facebook-Plugins (Like-Button)\n        Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, 1601 South California Avenue, Palo Alto, CA 94304, USA integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo oder dem \"Like-Button\" (\"Gefällt mir“) auf unserer Seite. Eine Übersicht über die Facebook-Plugins finden Sie hier: http://developers.facebook.com/docs/plugins/ Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook „Like-Button“ anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von facebook unter https://de-de.facebook.com/policy.php\n        \n        Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.</p>\n\n    <p>Quelle: <a href=\"https://www.e-recht24.de\">https://www.e-recht24.de</a></p>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-gallery/main-gallery.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-gallery/main-gallery.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainGalleryMainGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<swiper [config]=\"config\">\n    <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide first-img\">\n            <div class=\"black-overlay\">\n                <div class=\"center\">\n                    <h2>Willkommen bei</h2>\n                    <h1>Partout Bio</h1>\n                    <p></p>\n                </div>\n            </div>\n        </div>\n        <div class=\"swiper-slide second-img\">\n            <div class=\"black-overlay\">\n                <div class=\"center\">\n                    <h2>Wir öffnen bald!</h2>\n                    <h1>22.06.2020</h1>\n                    <p></p>\n                </div>\n            </div>\n        </div>\n        <div class=\"swiper-slide theerd-img\">\n            <div class=\"black-overlay\">\n                <div class=\"center\">\n                    <h2>Unser Angebot?</h2>\n                    <h1>Nachhaltig</h1>\n                    <p></p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add Pagination -->\n    <div class=\"swiper-pagination\"></div>\n    <!-- Add Arrows \n    <div class=\"swiper-button-next\"></div>\n    <div class=\"swiper-button-prev\"></div>\n\n    <lottie-animation-view [options]=\"lottieConfig\"\n                                       [width]=\"100\"\n                                       [height]=\"100\"\n                                       (animCreated)=\"handleAnimation($event)\">\n                </lottie-animation-view>\n    -->\n</swiper>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/show-case-gallery/show-case-gallery.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-case-gallery/show-case-gallery.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowCaseGalleryShowCaseGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<swiper [config]=\"config\">\n    <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide first-img\">\n            <div class=\"black-overlay\">\n                <div class=\"center\">\n                    <svg>\n                        <rect x=\"0\"\n                              y=\"0\"\n                              fill=\"none\"\n                              width=\"100%\"\n                              height=\"100%\" />\n                    </svg>\n                    <div class=\"absolute\">\n                        <h3>Lebensmittel</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"swiper-slide second-img\">\n            <div class=\"black-overlay\">\n                <div class=\"center\">\n                    <svg>\n                        <rect x=\"0\"\n                              y=\"0\"\n                              fill=\"none\"\n                              width=\"100%\"\n                              height=\"100%\" />\n                    </svg>\n                    <div class=\"absolute\">\n                        <h3>Café / Bistro</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"swiper-slide forth-img\">\n            <div class=\"black-overlay\">\n                <div class=\"center\">\n                    <svg>\n                        <rect x=\"0\"\n                              y=\"0\"\n                              fill=\"none\"\n                              width=\"100%\"\n                              height=\"100%\" />\n                    </svg>\n                    <div class=\"absolute\">\n                        <h3>Kosmetik</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"swiper-slide theerd-img\">\n            <div class=\"black-overlay\">\n                <div class=\"center\">\n                    <svg>\n                        <rect x=\"0\"\n                              y=\"0\"\n                              fill=\"none\"\n                              width=\"100%\"\n                              height=\"100%\" />\n                    </svg>\n                    <div class=\"absolute\">\n                        <h3>Geschenke</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add Pagination -->\n    <div class=\"swiper-pagination\"></div>\n    <!-- Add Arrows \n    <div class=\"swiper-button-next\"></div>\n    <div class=\"swiper-button-prev\"></div>\n\n    <lottie-animation-view [options]=\"lottieConfig\"\n                                       [width]=\"100\"\n                                       [height]=\"100\"\n                                       (animCreated)=\"handleAnimation($event)\">\n                </lottie-animation-view>\n    -->\n</swiper>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./impressum/impressum.component */
    "./src/app/impressum/impressum.component.ts");

    const routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'impressum',
      component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__["ImpressumComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n::ng-deep .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #618d2f !important;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n::ng-deep.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 10px;\n}\n::ng-deep.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: rgba(165, 165, 165, 0.7);\n  opacity: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.navbar {\n  position: fixed;\n  width: 100%;\n  height: 70px;\n  z-index: 9999;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar i {\n  color: #ffffff;\n  font-size: 35px;\n  margin-left: 18px;\n  margin-top: 15px;\n  opacity: 1;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.navbar i:hover {\n  opacity: 0.3;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.navbar ul li {\n  padding: 34px 0 19px;\n  margin: 0 15px;\n  color: #ffffff;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li hr {\n  opacity: 0;\n  width: 0%;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li:hover {\n  color: #618d2f;\n}\n.navbar ul li:hover hr {\n  opacity: 0.7;\n  width: 100%;\n}\n.navbar .fa-facebook {\n  float: right;\n  margin-right: 18px;\n}\n.navbar .fa-instagram {\n  float: right;\n}\n.navbar-inverse {\n  top: -92px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadein;\n          animation-name: fadein;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-inverse i {\n  color: #000000;\n}\n.navbar-inverse ul li p {\n  color: #000000;\n}\n.footer {\n  background-color: #222;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.footer .bottom-container {\n  width: 100%;\n  border-top: 1px solid #434343;\n  border-bottom: 1px solid #434343;\n  padding: 10px 0;\n  text-align: center;\n}\n.footer .bottom-container h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n@keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n.navbar-outverse {\n  top: 0px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadeout;\n          animation-name: fadeout;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-outverse i {\n  color: #000000;\n}\n.navbar-outverse ul li p {\n  color: #000000;\n}\n.center-flex {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: flex;\n}\n.center-flex .left-marg {\n  margin-left: 20px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n  cursor: pointer;\n}\n.center-flex .left-marg:hover {\n  color: rgba(255, 255, 255, 0.3);\n}\n@-webkit-keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n@keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n.navbar-transparent {\n  background-color: rgba(250, 250, 250, 0);\n  -webkit-animation-name: transparent;\n          animation-name: transparent;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n}\n@-webkit-keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGVuZHJpa2RvY2tob3JuL0RvY3VtZW50cy9BcmJlaXQvcGFydG91dEJpby9XZWJzZWl0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBQ0hGO0FEUUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNORjtBRFdBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FDVEY7QURlQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQ2JGO0FEZ0JBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FDZEY7QURpQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUNmRjtBRGtCQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQ2hCRjtBQy9CQTtFQUNJLFVBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FEaUNKO0FDOUJBO0VBQ0ksWUFBQTtBRGlDSjtBQzlCQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBRUEsVUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxlQUFBO0FEZ0NKO0FDN0JBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QURnQ0o7QUM5Qkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QURnQ1I7QUM3Qkk7RUFDSSxZQUFBO0FEK0JSO0FDNUJJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUQ4QlI7QUM1QlE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUQ4Qlo7QUM1Qlk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsZ0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBRDhCaEI7QUMxQlE7RUFDSSxjQ3RFQztBRmtHYjtBQzFCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FENEJoQjtBQ3ZCSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBRHlCUjtBQ3RCSTtFQUNJLFlBQUE7QUR3QlI7QUNwQkE7RUFDSSxVQUFBO0VBQ0EsMENDekZLO0VEMEZMLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsOENBQUE7QUR1Qko7QUNyQkk7RUFDSSxjQUFBO0FEdUJSO0FDbEJZO0VBQ0ksY0FBQTtBRG9CaEI7QUNkQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FEaUJKO0FDZkk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRGlCUjtBQ2ZRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGlCWjtBQ1pBO0VBQ0k7SUFDSSxNQUFBO0VEZU47RUNaRTtJQUNJLFVBQUE7RURjTjtBQUNGO0FDckJBO0VBQ0k7SUFDSSxNQUFBO0VEZU47RUNaRTtJQUNJLFVBQUE7RURjTjtBQUNGO0FDWEE7RUFDSSxRQUFBO0VBQ0EsMENDMUlLO0VEMklMLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsOENBQUE7QURhSjtBQ1hJO0VBQ0ksY0FBQTtBRGFSO0FDUlk7RUFDSSxjQUFBO0FEVWhCO0FDSkE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FET0o7QUNMSTtFQUNJLGlCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FET1I7QUNKSTtFQUNHLCtCQUFBO0FETVA7QUNGQTtFQUNJO0lBQ0ksVUFBQTtFREtOO0VDRkU7SUFDSSxRQUFBO0VESU47QUFDRjtBQ1hBO0VBQ0k7SUFDSSxVQUFBO0VES047RUNGRTtJQUNJLFFBQUE7RURJTjtBQUNGO0FDREE7RUFDSSx3Q0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FER0o7QUNBQTtFQUNJO0lBQ0kseUJBQUE7RURHTjtFQ0FFO0lBQ0ksd0NBQUE7RURFTjtBQUNGO0FDVEE7RUFDSTtJQUNJLHlCQUFBO0VER047RUNBRTtJQUNJLHdDQUFBO0VERU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xuXG4vLyBBbGV4QnJ1c2hcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQWxleEJydXNoJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLy8gQm9kb25pXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JvZG9uaSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi8vIFBhY2lmaWNvLVJlZ3VsYXJcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28tUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvcGFjaWZpY28vUGFjaWZpY28tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cblxuLy8gUnViaWtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgbWVkaXVtJztcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBsaWdodCc7XG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1J1YmlrIGJvbGQnO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgcmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZXhCcnVzaFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCb2RvbmlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY28tUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBtZWRpdW1cIjtcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBsaWdodFwiO1xuICBmb250LXN0eWxlOiBsaWdodDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBib2xkXCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayByZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbjo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6ICM2MThkMmYgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG46Om5nLWRlZXAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjcpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5uYXZiYXIgaSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLm5hdmJhciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5uYXZiYXIgdWwgbGkge1xuICBwYWRkaW5nOiAzNHB4IDAgMTlweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciB1bCBsaSBociB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwJTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MThkMmY7XG59XG4ubmF2YmFyIHVsIGxpOmhvdmVyIGhyIHtcbiAgb3BhY2l0eTogMC43O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXIgLmZhLWZhY2Vib29rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG4ubmF2YmFyIC5mYS1pbnN0YWdyYW0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gIHRvcDogLTkycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcbn1cbi5uYXZiYXItaW52ZXJzZSBpIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubmF2YmFyLWludmVyc2UgdWwgbGkgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5mb290ZXIgLmJvdHRvbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzQzNDM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLmJvdHRvbS1jb250YWluZXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IC05MnB4O1xuICB9XG59XG4ubmF2YmFyLW91dHZlcnNlIHtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVvdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDU4LCA2NywgNzcsIDAuMyk7XG59XG4ubmF2YmFyLW91dHZlcnNlIGkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5uYXZiYXItb3V0dmVyc2UgdWwgbGkgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2VudGVyLWZsZXgge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2VudGVyLWZsZXggLmxlZnQtbWFyZyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNlbnRlci1mbGV4IC5sZWZ0LW1hcmc6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtcbiAgICB0b3A6IC05MnB4O1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gIGFuaW1hdGlvbi1uYW1lOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbn1cblxuQGtleWZyYW1lcyB0cmFuc3BhcmVudCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi9hc3NldHMvc2Nzcy9mb250cy5zY3NzJztcblxuOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQ6ICRtYWluLWdyZWVuICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuOjpuZy1kZWVwLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNyk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDk3LCAxNDEsIDQ3LCAwLjcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgaTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IC4zO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM0cHggMCAxOXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWdyZWVuO1xuXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmEtZmFjZWJvb2sge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICB9XG5cbiAgICAuZmEtaW5zdGFncmFtIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgICB0b3A6IC05MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXI7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDU4LCA2NywgNzcsIDAuMyk7XG5cbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzQzNDM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0b3A6IC05MnB4O1xuICAgIH1cbn1cblxuLm5hdmJhci1vdXR2ZXJzZSB7XG4gICAgdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhcjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZW91dDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDU4LCA2NywgNzcsIDAuMyk7XG5cbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNlbnRlci1mbGV4IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAubGVmdC1tYXJnIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmxlZnQtbWFyZzpob3ZlciB7XG4gICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgdG9wOiAtOTJweDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbn1cblxuLm5hdmJhci10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgICBhbmltYXRpb24tbmFtZTogdHJhbnNwYXJlbnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbn1cblxuQGtleWZyYW1lcyB0cmFuc3BhcmVudCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSk7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDApO1xuICAgIH1cbn0iLCIvLyBjb2xvclxuJG1haW4tZ3JlZW46IHJnYig5NywgMTQxLCA0Nyk7XG4kdGV4dC1jb2xvci1wb3M6ICMzYTQzNGQ7XG4kbmF2YmFyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiRuYXZiYXItdHJhbnNwYXJlbnQ6IHJnYmEoOTcsIDE0MSwgNDcsIDApO1xuJGFjc2VudC1jb2xvcjogcmdiKDE3NywgMTUwLCA3NSk7XG4kZ3JheTogI2Y4ZjZmMztcbiRibGFjazogIzIyMjIyMjtcblxuLy8gZm9udHNcbiRib2Rvbmk6IFwiL2ZvbnRzL2JvZG9uaS9ib2RvbmktbXQudHRmXCI7XG4kUnViaWstTWVkaXVtOiBcIi9mb250cy9ib2RvbmkvUnViaWstTWVkaXVtLnR0ZlwiOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AppComponent = class AppComponent {
      constructor(router) {
        this.router = router;
        this.title = 'partoutbio';
        this.hidden = true;
        this.lastnumber = window.pageYOffset;
      }

      onWindowScroll(e) {
        let element = document.querySelector('.navbar');

        if (this.lastnumber < window.pageYOffset) {
          element.classList.add('navbar-inverse');
          element.classList.remove('navbar-outverse');
        } else {
          element.classList.add('navbar-outverse');
          element.classList.remove('navbar-inverse');
        }

        if (window.pageYOffset === 0) {
          element.classList.add('navbar-transparent');
          element.classList.remove('navbar-outverse');
        } else {
          element.classList.remove('navbar-transparent');
        }

        this.lastnumber = window.pageYOffset;
      }

      navToImpressum() {
        this.router.navigate(['/impressum']);
      }

      navToHome() {
        this.router.navigate(['/home']);
      }

      navToFacebook() {
        window.location.href = 'https://www.facebook.com/partoutbio/';
      }

      navToInstagram() {
        window.location.href = 'https://www.instagram.com/partoutbio';
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comingsoon/comingsoon.component */
    "./src/app/comingsoon/comingsoon.component.ts");
    /* harmony import */


    var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-useful-swiper */
    "./node_modules/ngx-useful-swiper/fesm2015/ngx-useful-swiper.js");
    /* harmony import */


    var ng_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-lottie */
    "./node_modules/ng-lottie/dist/esm/src/index.js");
    /* harmony import */


    var _main_gallery_main_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main-gallery/main-gallery.component */
    "./src/app/main-gallery/main-gallery.component.ts");
    /* harmony import */


    var _show_case_gallery_show_case_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./show-case-gallery/show-case-gallery.component */
    "./src/app/show-case-gallery/show-case-gallery.component.ts");
    /* harmony import */


    var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./impressum/impressum.component */
    "./src/app/impressum/impressum.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _service_contentful_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./service/contentful.service */
    "./src/app/service/contentful.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    const routes = [{
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'impressum',
      component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_11__["ImpressumComponent"]
    }];
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_6__["ComingsoonComponent"], _main_gallery_main_gallery_component__WEBPACK_IMPORTED_MODULE_9__["MainGalleryComponent"], _show_case_gallery_show_case_gallery_component__WEBPACK_IMPORTED_MODULE_10__["ShowCaseGalleryComponent"], _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_11__["ImpressumComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_7__["NgxUsefulSwiperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes), ng_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieAnimationViewModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyBeLVLlxfR-au2mJF-3kemjXf4P2BGxgIo'
      })],
      providers: [_service_contentful_service__WEBPACK_IMPORTED_MODULE_14__["ContentfulService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/comingsoon/comingsoon.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/comingsoon/comingsoon.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComingsoonComingsoonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n::ng-deep .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #618d2f !important;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n::ng-deep.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 10px;\n}\n::ng-deep.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: rgba(165, 165, 165, 0.7);\n  opacity: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.navbar {\n  position: fixed;\n  width: 100%;\n  height: 70px;\n  z-index: 9999;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar i {\n  color: #ffffff;\n  font-size: 35px;\n  margin-left: 18px;\n  margin-top: 15px;\n  opacity: 1;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.navbar i:hover {\n  opacity: 0.3;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.navbar ul li {\n  padding: 34px 0 19px;\n  margin: 0 15px;\n  color: #ffffff;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li hr {\n  opacity: 0;\n  width: 0%;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li:hover {\n  color: #618d2f;\n}\n.navbar ul li:hover hr {\n  opacity: 0.7;\n  width: 100%;\n}\n.navbar .fa-facebook {\n  float: right;\n  margin-right: 18px;\n}\n.navbar .fa-instagram {\n  float: right;\n}\n.navbar-inverse {\n  top: -92px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadein;\n          animation-name: fadein;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-inverse i {\n  color: #000000;\n}\n.navbar-inverse ul li p {\n  color: #000000;\n}\n.footer {\n  background-color: #222;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.footer .bottom-container {\n  width: 100%;\n  border-top: 1px solid #434343;\n  border-bottom: 1px solid #434343;\n  padding: 10px 0;\n  text-align: center;\n}\n.footer .bottom-container h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n@keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n.navbar-outverse {\n  top: 0px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadeout;\n          animation-name: fadeout;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-outverse i {\n  color: #000000;\n}\n.navbar-outverse ul li p {\n  color: #000000;\n}\n.center-flex {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: flex;\n}\n.center-flex .left-marg {\n  margin-left: 20px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n  cursor: pointer;\n}\n.center-flex .left-marg:hover {\n  color: rgba(255, 255, 255, 0.3);\n}\n@-webkit-keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n@keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n.navbar-transparent {\n  background-color: rgba(250, 250, 250, 0);\n  -webkit-animation-name: transparent;\n          animation-name: transparent;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n}\n@-webkit-keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n.main {\n  height: 100vh;\n  width: 100vw;\n  background-color: #618d2f;\n}\n.main img {\n  margin-left: 40vw;\n  margin-top: 15vh;\n  width: 20%;\n}\n@media only screen and (max-width: 1000px) {\n  .main img {\n    margin-left: 25%;\n    margin-top: 25vh;\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9jb21pbmdzb29uL2NvbWluZ3Nvb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGVuZHJpa2RvY2tob3JuL0RvY3VtZW50cy9BcmJlaXQvcGFydG91dEJpby9XZWJzZWl0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hcHAvY29taW5nc29vbi9jb21pbmdzb29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDSEY7QURRQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ05GO0FEV0E7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUNURjtBRGVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FDYkY7QURnQkE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUNkRjtBRGlCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FDaEJGO0FDL0JBO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QURpQ0o7QUM5QkE7RUFDSSxZQUFBO0FEaUNKO0FDOUJBO0VBQ0ksVUFBQTtFQUNBLFdB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QUNBLDhDQUFBO0FDNkxGO0FEMUxBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0FDNExGO0FEekxBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FDMkxGO0FHek9BO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkROVztBRmlQYjtBR3pPRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FIMk9KO0FHck9BO0VBR0k7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFSHNPSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29taW5nc29vbi9jb21pbmdzb29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi8vIEFsZXhCcnVzaFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbGV4QnJ1c2gnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL2FsZXgtYnJ1c2gvQWxleEJydXNoLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4vLyBCb2RvbmlcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQm9kb25pJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLy8gUGFjaWZpY28tUmVndWxhclxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljby1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuXG4vLyBSdWJpa1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBtZWRpdW0nO1xuICBmb250LXN0eWxlOiBtZWRpdW07XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1J1YmlrIGxpZ2h0JztcbiAgZm9udC1zdHlsZTogbGlnaHQ7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgYm9sZCc7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayByZWd1bGFyJztcbiAgZm9udC1zdHlsZTogcmVndWxhcjtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxleEJydXNoXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL2FsZXgtYnJ1c2gvQWxleEJydXNoLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJvZG9uaVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQYWNpZmljby1SZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL3BhY2lmaWNvL1BhY2lmaWNvLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIG1lZGl1bVwiO1xuICBmb250LXN0eWxlOiBtZWRpdW07XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIGxpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIGJvbGRcIjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIHJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogcmVndWxhcjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogIzYxOGQyZiAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNyk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIGk6aG92ZXIge1xuICBvcGFjaXR5OiAwLjM7XG59XG4ubmF2YmFyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm5hdmJhciB1bCBsaSB7XG4gIHBhZGRpbmc6IDM0cHggMCAxOXB4O1xuICBtYXJnaW46IDAgMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIHVsIGxpIGhyIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDAlO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIge1xuICBjb2xvcjogIzYxOGQyZjtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIgaHIge1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhciAuZmEtZmFjZWJvb2sge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cbi5uYXZiYXIgLmZhLWluc3RhZ3JhbSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgdG9wOiAtOTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjMpO1xufVxuLm5hdmJhci1pbnZlcnNlIGkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5uYXZiYXItaW52ZXJzZSB1bCBsaSBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmZvb3RlciAuYm90dG9tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDM0MztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MzQzNDM7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciAuYm90dG9tLWNvbnRhaW5lciBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTkycHg7XG4gIH1cbn1cbi5uYXZiYXItb3V0dmVyc2Uge1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBhbmltYXRpb24tbmFtZTogZmFkZW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcbn1cbi5uYXZiYXItb3V0dmVyc2UgaSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLm5hdmJhci1vdXR2ZXJzZSB1bCBsaSBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jZW50ZXItZmxleCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jZW50ZXItZmxleCAubGVmdC1tYXJnIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2VudGVyLWZsZXggLmxlZnQtbWFyZzpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIHRvcDogLTkycHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogMHB4O1xuICB9XG59XG4ubmF2YmFyLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgYW5pbWF0aW9uLW5hbWU6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xufVxuXG5Aa2V5ZnJhbWVzIHRyYW5zcGFyZW50IHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZXhCcnVzaFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCb2RvbmlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY28tUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBtZWRpdW1cIjtcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBsaWdodFwiO1xuICBmb250LXN0eWxlOiBsaWdodDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBib2xkXCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayByZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE4ZDJmO1xufVxuLm1haW4gaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDQwdnc7XG4gIG1hcmdpbi10b3A6IDE1dmg7XG4gIHdpZHRoOiAyMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tYWluIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi9hc3NldHMvc2Nzcy9mb250cy5zY3NzJztcblxuOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQ6ICRtYWluLWdyZWVuICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuOjpuZy1kZWVwLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNyk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDk3LCAxNDEsIDQ3LCAwLjcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgaTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IC4zO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM0cHggMCAxOXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWdyZWVuO1xuXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmEtZmFjZWJvb2sge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICB9XG5cbiAgICAuZmEtaW5zdGFncmFtIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgICB0b3A6IC05MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXI7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDU4LCA2NywgNzcsIDAuMyk7XG5cbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzQzNDM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0b3A6IC05MnB4O1xuICAgIH1cbn1cblxuLm5hdmJhci1vdXR2ZXJzZSB7XG4gICAgdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhcjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZW91dDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDU4LCA2NywgNzcsIDAuMyk7XG5cbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNlbnRlci1mbGV4IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAubGVmdC1tYXJnIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmxlZnQtbWFyZzpob3ZlciB7XG4gICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgdG9wOiAtOTJweDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbn1cblxuLm5hdmJhci10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgICBhbmltYXRpb24tbmFtZTogdHJhbnNwYXJlbnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbn1cblxuQGtleWZyYW1lcyB0cmFuc3BhcmVudCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSk7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDApO1xuICAgIH1cbn0iLCIvLyBjb2xvclxuJG1haW4tZ3JlZW46IHJnYig5NywgMTQxLCA0Nyk7XG4kdGV4dC1jb2xvci1wb3M6ICMzYTQzNGQ7XG4kbmF2YmFyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiRuYXZiYXItdHJhbnNwYXJlbnQ6IHJnYmEoOTcsIDE0MSwgNDcsIDApO1xuJGFjc2VudC1jb2xvcjogcmdiKDE3NywgMTUwLCA3NSk7XG4kZ3JheTogI2Y4ZjZmMztcbiRibGFjazogIzIyMjIyMjtcblxuLy8gZm9udHNcbiRib2Rvbmk6IFwiL2ZvbnRzL2JvZG9uaS9ib2RvbmktbXQudHRmXCI7XG4kUnViaWstTWVkaXVtOiBcIi9mb250cy9ib2RvbmkvUnViaWstTWVkaXVtLnR0ZlwiOyIsIkBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9mb250cy5zY3NzJztcblxuLm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWdyZWVuO1xuXG4gIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwdnc7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICB3aWR0aDogMjAlO1xuICB9XG5cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXG4gIC5tYWluIHtcbiAgICBpbWcge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICAubWFpbiB7XG4gICAgICBpbWcge1xuICAgICAgIC8vIG1hcmdpbi10b3A6IDQwdmg7XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/comingsoon/comingsoon.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/comingsoon/comingsoon.component.ts ***!
    \****************************************************/

  /*! exports provided: ComingsoonComponent */

  /***/
  function srcAppComingsoonComingsoonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComingsoonComponent", function () {
      return ComingsoonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ComingsoonComponent = class ComingsoonComponent {
      constructor() {}

      ngOnInit() {}

    };
    ComingsoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comingsoon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comingsoon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comingsoon/comingsoon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comingsoon.component.scss */
      "./src/app/comingsoon/comingsoon.component.scss")).default]
    })], ComingsoonComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n::ng-deep .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #618d2f !important;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n::ng-deep.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 10px;\n}\n::ng-deep.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: rgba(165, 165, 165, 0.7);\n  opacity: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.navbar {\n  position: fixed;\n  width: 100%;\n  height: 70px;\n  z-index: 9999;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar i {\n  color: #ffffff;\n  font-size: 35px;\n  margin-left: 18px;\n  margin-top: 15px;\n  opacity: 1;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.navbar i:hover {\n  opacity: 0.3;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.navbar ul li {\n  padding: 34px 0 19px;\n  margin: 0 15px;\n  color: #ffffff;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li hr {\n  opacity: 0;\n  width: 0%;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li:hover {\n  color: #618d2f;\n}\n.navbar ul li:hover hr {\n  opacity: 0.7;\n  width: 100%;\n}\n.navbar .fa-facebook {\n  float: right;\n  margin-right: 18px;\n}\n.navbar .fa-instagram {\n  float: right;\n}\n.navbar-inverse {\n  top: -92px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadein;\n          animation-name: fadein;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-inverse i {\n  color: #000000;\n}\n.navbar-inverse ul li p {\n  color: #000000;\n}\n.footer {\n  background-color: #222;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.footer .bottom-container {\n  width: 100%;\n  border-top: 1px solid #434343;\n  border-bottom: 1px solid #434343;\n  padding: 10px 0;\n  text-align: center;\n}\n.footer .bottom-container h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n@keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n.navbar-outverse {\n  top: 0px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadeout;\n          animation-name: fadeout;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-outverse i {\n  color: #000000;\n}\n.navbar-outverse ul li p {\n  color: #000000;\n}\n.center-flex {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: flex;\n}\n.center-flex .left-marg {\n  margin-left: 20px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n  cursor: pointer;\n}\n.center-flex .left-marg:hover {\n  color: rgba(255, 255, 255, 0.3);\n}\n@-webkit-keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n@keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n.navbar-transparent {\n  background-color: rgba(250, 250, 250, 0);\n  -webkit-animation-name: transparent;\n          animation-name: transparent;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n}\n@-webkit-keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\nagm-map {\n  height: 500px;\n}\n.parallax-img {\n  background-image: url('regale.jpg');\n  height: 600px;\n}\n.parallax-img .black-overlay {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.parallax-img .black-overlay .wrapp {\n  padding-top: 220px;\n  padding-bottom: 200px;\n}\n.parallax-img .black-overlay .wrapp .margin-left {\n  margin-left: 10%;\n}\n.parallax-img .black-overlay .wrapp .margin-left h1 {\n  color: #ffffff;\n  font-size: 80px;\n  margin-bottom: 0;\n}\n.right-img img {\n  margin-left: 100%;\n  margin-top: 50%;\n  width: 200%;\n}\n.right-img .img-higer {\n  top: -20px;\n}\n.contact-container {\n  width: 80%;\n}\n.contact-container .flex-box {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  flex-wrap: wrap;\n  width: 80%;\n  max-width: 850px;\n}\n.contact-container .flex-box .contact-element {\n  margin-left: auto;\n  margin-right: auto;\n}\n.contact-container .flex-box .contact-element .icon-container {\n  border-style: dotted;\n  border-radius: 50px;\n  border-color: rgba(97, 141, 47, 0.8);\n  background-color: #ffffff;\n  padding: 20px;\n  width: 79px;\n  height: 78px;\n  text-align: center;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.4);\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.contact-container .flex-box .contact-element .icon-container i {\n  color: #618d2f;\n  font-size: 34px;\n  margin-top: 0px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n.contact-container .flex-box .contact-element .icon-container:hover {\n  border-color: #ffffff;\n  background-color: #618d2f;\n  box-shadow: 0px 0px 30px rgba(58, 67, 77, 0.6);\n}\n.contact-container .flex-box .contact-element .icon-container:hover i {\n  color: #ffffff;\n}\n.kachel-container {\n  max-height: 165px;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.kachel-container .kachel {\n  width: 15vw;\n  height: 15vw;\n  max-height: 165px;\n  max-width: 165px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  text-align: center;\n}\n.kachel-container .kachel .inner-kachel, .kachel-container .kachel .activ-inner-kachel {\n  background-color: #f8f6f3;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.kachel-container .kachel .inner-kachel img, .kachel-container .kachel .activ-inner-kachel img {\n  width: 50%;\n  padding-top: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.kachel-container .kachel .activ-inner-kachel {\n  background-color: #222222;\n}\n.kachel-container .kachel .activ-inner-kachel img {\n  -webkit-filter: invert(27%) sepia(51%) saturate(100%) hue-rotate(346deg) brightness(2000%) contrast(97%);\n          filter: invert(27%) sepia(51%) saturate(100%) hue-rotate(346deg) brightness(2000%) contrast(97%);\n}\n.kachel-container .kachel-first:hover .inner-kachel,\n.kachel-container .kachel:hover .inner-kachel {\n  background-color: #222222;\n}\n.kachel-container .kachel-first:hover .inner-kachel img,\n.kachel-container .kachel:hover .inner-kachel img {\n  -webkit-filter: invert(27%) sepia(51%) saturate(100%) hue-rotate(346deg) brightness(2000%) contrast(97%);\n          filter: invert(27%) sepia(51%) saturate(100%) hue-rotate(346deg) brightness(2000%) contrast(97%);\n}\n.header-container {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 100%;\n}\n.header-container ul {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  flex-wrap: wrap;\n}\n.header-container ul li {\n  padding-left: 20px;\n  padding-right: 20px;\n  cursor: pointer;\n  color: #618d2f;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.header-container ul li h3 {\n  font-size: 1.5rem;\n}\n.header-container ul li .black {\n  color: #222222 !important;\n}\n.header-container ul li hr {\n  opacity: 0;\n  width: 0%;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.header-container ul li:hover {\n  color: #222222;\n}\n.header-container ul li:hover hr {\n  opacity: 0.7;\n  width: 100%;\n}\n.prudukt-container {\n  width: 100%;\n  height: auto;\n}\n.prudukt-container .flex-container {\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  flex-wrap: wrap;\n}\n.prudukt-container .flex-container .produkte {\n  width: 30%;\n  height: auto;\n  padding: 10px;\n  margin-left: auto;\n  margin-right: 2%;\n  margin-bottom: 2%;\n  border-style: dashed;\n  border-width: thin;\n  border-color: rgba(97, 141, 47, 0.8);\n}\n.prudukt-container .flex-container .produkte .flex {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.prudukt-container .flex-container .produkte .flex .bild {\n  background-color: green;\n  width: 250px;\n}\n.prudukt-container .flex-container .produkte .flex .text {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.prudukt-container .flex-container .produkte .flex .text h3 {\n  font-size: 1.3rem;\n}\n.prudukt-container .flex-container .produkte .flex .text p {\n  font-size: 1rem;\n}\n.prudukt-container .flex-container .produkte .flex .text hr {\n  border-style: dashed;\n  width: 100%;\n}\n.prudukt-container .flex-container .produkte:only-child {\n  margin-left: 10px;\n}\n@media only screen and (max-width: 1100px) {\n  .contact-container .flex-box {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .contact-container .flex-box .contact-element {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    margin-bottom: 50px;\n  }\n\n  .prudukt-container .flex-container .produkte:only-child {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .container .flex {\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .container .flex .box {\n    max-width: 100%;\n  }\n\n  #scene {\n    overflow: hidden;\n    visibility: hidden;\n  }\n}\n@media only screen and (max-width: 880px) {\n  .prudukt-container .flex-container .produkte {\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .prudukt-container .flex-container .produkte:only-child {\n    margin-left: auto;\n  }\n}\n@media only screen and (max-width: 830px) {\n  .contact-container {\n    width: 80%;\n  }\n  .contact-container .flex {\n    display: unset;\n    width: 80%;\n  }\n  .contact-container .flex .flex-box {\n    display: -webkit-inline-box;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 80px;\n    width: 100%;\n  }\n  .contact-container .flex .flex-box .contact-element {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .contact-container .flex-box {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: -webkit-box;\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .contact-container .flex-box .contact-element {\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n  }\n  .contact-container .flex-box .contact-element:last-child {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    margin-bottom: 0px;\n  }\n\n  .prudukt-container .flex-container .produkte {\n    width: 100%;\n    margin-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGVuZHJpa2RvY2tob3JuL0RvY3VtZW50cy9BcmJlaXQvcGFydG91dEJpby9XZWJzZWl0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDSEY7QURRQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ05GO0FEV0E7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUNURjtBRGVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FDYkY7QURnQkE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUNkRjtBRGlCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FDaEJGO0FDL0JBO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QURpQ0o7QUM5QkE7RUFDSSxZQUFBO0FEaUNKO0FDOUJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFB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QSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VIa0pWO0VHaEpVO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUhrSmQ7RUcvSVU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VIaUpkOztFR3hJVTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtFSDJJZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi8vIEFsZXhCcnVzaFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbGV4QnJ1c2gnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL2FsZXgtYnJ1c2gvQWxleEJydXNoLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4vLyBCb2RvbmlcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQm9kb25pJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLy8gUGFjaWZpY28tUmVndWxhclxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljby1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuXG4vLyBSdWJpa1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBtZWRpdW0nO1xuICBmb250LXN0eWxlOiBtZWRpdW07XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1J1YmlrIGxpZ2h0JztcbiAgZm9udC1zdHlsZTogbGlnaHQ7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgYm9sZCc7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayByZWd1bGFyJztcbiAgZm9udC1zdHlsZTogcmVndWxhcjtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxleEJydXNoXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL2FsZXgtYnJ1c2gvQWxleEJydXNoLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJvZG9uaVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQYWNpZmljby1SZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL3BhY2lmaWNvL1BhY2lmaWNvLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIG1lZGl1bVwiO1xuICBmb250LXN0eWxlOiBtZWRpdW07XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIGxpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIGJvbGRcIjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIHJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogcmVndWxhcjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogIzYxOGQyZiAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNyk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIGk6aG92ZXIge1xuICBvcGFjaXR5OiAwLjM7XG59XG4ubmF2YmFyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm5hdmJhciB1bCBsaSB7XG4gIHBhZGRpbmc6IDM0cHggMCAxOXB4O1xuICBtYXJnaW46IDAgMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIHVsIGxpIGhyIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDAlO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIge1xuICBjb2xvcjogIzYxOGQyZjtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIgaHIge1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhciAuZmEtZmFjZWJvb2sge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cbi5uYXZiYXIgLmZhLWluc3RhZ3JhbSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgdG9wOiAtOTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjMpO1xufVxuLm5hdmJhci1pbnZlcnNlIGkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5uYXZiYXItaW52ZXJzZSB1bCBsaSBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmZvb3RlciAuYm90dG9tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDM0MztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MzQzNDM7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciAuYm90dG9tLWNvbnRhaW5lciBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTkycHg7XG4gIH1cbn1cbi5uYXZiYXItb3V0dmVyc2Uge1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBhbmltYXRpb24tbmFtZTogZmFkZW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcbn1cbi5uYXZiYXItb3V0dmVyc2UgaSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLm5hdmJhci1vdXR2ZXJzZSB1bCBsaSBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jZW50ZXItZmxleCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jZW50ZXItZmxleCAubGVmdC1tYXJnIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2VudGVyLWZsZXggLmxlZnQtbWFyZzpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIHRvcDogLTkycHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogMHB4O1xuICB9XG59XG4ubmF2YmFyLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgYW5pbWF0aW9uLW5hbWU6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xufVxuXG5Aa2V5ZnJhbWVzIHRyYW5zcGFyZW50IHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZXhCcnVzaFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCb2RvbmlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY28tUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBtZWRpdW1cIjtcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBsaWdodFwiO1xuICBmb250LXN0eWxlOiBsaWdodDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBib2xkXCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayByZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4ucGFyYWxsYXgtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iaWxkZXIvcmVnYWxlLmpwZ1wiKTtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cbi5wYXJhbGxheC1pbWcgLmJsYWNrLW92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4ucGFyYWxsYXgtaW1nIC5ibGFjay1vdmVybGF5IC53cmFwcCB7XG4gIHBhZGRpbmctdG9wOiAyMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xufVxuLnBhcmFsbGF4LWltZyAuYmxhY2stb3ZlcmxheSAud3JhcHAgLm1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5wYXJhbGxheC1pbWcgLmJsYWNrLW92ZXJsYXkgLndyYXBwIC5tYXJnaW4tbGVmdCBoMSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucmlnaHQtaW1nIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIHdpZHRoOiAyMDAlO1xufVxuLnJpZ2h0LWltZyAuaW1nLWhpZ2VyIHtcbiAgdG9wOiAtMjBweDtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5jb250YWN0LWNvbnRhaW5lciAuZmxleC1ib3gge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbn1cbi5jb250YWN0LWNvbnRhaW5lciAuZmxleC1ib3ggLmNvbnRhY3QtZWxlbWVudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY29udGFjdC1jb250YWluZXIgLmZsZXgtYm94IC5jb250YWN0LWVsZW1lbnQgLmljb24tY29udGFpbmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5NywgMTQxLCA0NywgMC44KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDc5cHg7XG4gIGhlaWdodDogNzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb250YWN0LWNvbnRhaW5lciAuZmxleC1ib3ggLmNvbnRhY3QtZWxlbWVudCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGNvbG9yOiAjNjE4ZDJmO1xuICBmb250LXNpemU6IDM0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG4uY29udGFjdC1jb250YWluZXIgLmZsZXgtYm94IC5jb250YWN0LWVsZW1lbnQgLmljb24tY29udGFpbmVyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE4ZDJmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjYpO1xufVxuLmNvbnRhY3QtY29udGFpbmVyIC5mbGV4LWJveCAuY29udGFjdC1lbGVtZW50IC5pY29uLWNvbnRhaW5lcjpob3ZlciBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5rYWNoZWwtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMTY1cHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ua2FjaGVsLWNvbnRhaW5lciAua2FjaGVsIHtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogMTV2dztcbiAgbWF4LWhlaWdodDogMTY1cHg7XG4gIG1heC13aWR0aDogMTY1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5rYWNoZWwtY29udGFpbmVyIC5rYWNoZWwgLmlubmVyLWthY2hlbCwgLmthY2hlbC1jb250YWluZXIgLmthY2hlbCAuYWN0aXYtaW5uZXIta2FjaGVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjZmMztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ua2FjaGVsLWNvbnRhaW5lciAua2FjaGVsIC5pbm5lci1rYWNoZWwgaW1nLCAua2FjaGVsLWNvbnRhaW5lciAua2FjaGVsIC5hY3Rpdi1pbm5lci1rYWNoZWwgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ua2FjaGVsLWNvbnRhaW5lciAua2FjaGVsIC5hY3Rpdi1pbm5lci1rYWNoZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xufVxuLmthY2hlbC1jb250YWluZXIgLmthY2hlbCAuYWN0aXYtaW5uZXIta2FjaGVsIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSgxMDAlKSBodWUtcm90YXRlKDM0NmRlZykgYnJpZ2h0bmVzcygyMDAwJSkgY29udHJhc3QoOTclKTtcbn1cbi5rYWNoZWwtY29udGFpbmVyIC5rYWNoZWwtZmlyc3Q6aG92ZXIgLmlubmVyLWthY2hlbCxcbi5rYWNoZWwtY29udGFpbmVyIC5rYWNoZWw6aG92ZXIgLmlubmVyLWthY2hlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59XG4ua2FjaGVsLWNvbnRhaW5lciAua2FjaGVsLWZpcnN0OmhvdmVyIC5pbm5lci1rYWNoZWwgaW1nLFxuLmthY2hlbC1jb250YWluZXIgLmthY2hlbDpob3ZlciAuaW5uZXIta2FjaGVsIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSgxMDAlKSBodWUtcm90YXRlKDM0NmRlZykgYnJpZ2h0bmVzcygyMDAwJSkgY29udHJhc3QoOTclKTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlci1jb250YWluZXIgdWwge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5oZWFkZXItY29udGFpbmVyIHVsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjE4ZDJmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5oZWFkZXItY29udGFpbmVyIHVsIGxpIGgzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uaGVhZGVyLWNvbnRhaW5lciB1bCBsaSAuYmxhY2sge1xuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1jb250YWluZXIgdWwgbGkgaHIge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMCU7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmhlYWRlci1jb250YWluZXIgdWwgbGk6aG92ZXIge1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5oZWFkZXItY29udGFpbmVyIHVsIGxpOmhvdmVyIGhyIHtcbiAgb3BhY2l0eTogMC43O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBydWR1a3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcnVkdWt0LWNvbnRhaW5lciAuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucHJ1ZHVrdC1jb250YWluZXIgLmZsZXgtY29udGFpbmVyIC5wcm9kdWt0ZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItY29sb3I6IHJnYmEoOTcsIDE0MSwgNDcsIDAuOCk7XG59XG4ucHJ1ZHVrdC1jb250YWluZXIgLmZsZXgtY29udGFpbmVyIC5wcm9kdWt0ZSAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJ1ZHVrdC1jb250YWluZXIgLmZsZXgtY29udGFpbmVyIC5wcm9kdWt0ZSAuZmxleCAuYmlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMjUwcHg7XG59XG4ucHJ1ZHVrdC1jb250YWluZXIgLmZsZXgtY29udGFpbmVyIC5wcm9kdWt0ZSAuZmxleCAudGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4ucHJ1ZHVrdC1jb250YWluZXIgLmZsZXgtY29udGFpbmVyIC5wcm9kdWt0ZSAuZmxleCAudGV4dCBoMyB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnBydWR1a3QtY29udGFpbmVyIC5mbGV4LWNvbnRhaW5lciAucHJvZHVrdGUgLmZsZXggLnRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wcnVkdWt0LWNvbnRhaW5lciAuZmxleC1jb250YWluZXIgLnByb2R1a3RlIC5mbGV4IC50ZXh0IGhyIHtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBydWR1a3QtY29udGFpbmVyIC5mbGV4LWNvbnRhaW5lciAucHJvZHVrdGU6b25seS1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuY29udGFjdC1jb250YWluZXIgLmZsZXgtYm94IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhY3QtY29udGFpbmVyIC5mbGV4LWJveCAuY29udGFjdC1lbGVtZW50IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLnBydWR1a3QtY29udGFpbmVyIC5mbGV4LWNvbnRhaW5lciAucHJvZHVrdGU6b25seS1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGFpbmVyIC5mbGV4IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAuY29udGFpbmVyIC5mbGV4IC5ib3gge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gICNzY2VuZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLnBydWR1a3QtY29udGFpbmVyIC5mbGV4LWNvbnRhaW5lciAucHJvZHVrdGUge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcnVkdWt0LWNvbnRhaW5lciAuZmxleC1jb250YWluZXIgLnByb2R1a3RlOm9ubHktY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzMHB4KSB7XG4gIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAuY29udGFjdC1jb250YWluZXIgLmZsZXgge1xuICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmNvbnRhY3QtY29udGFpbmVyIC5mbGV4IC5mbGV4LWJveCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWN0LWNvbnRhaW5lciAuZmxleCAuZmxleC1ib3ggLmNvbnRhY3QtZWxlbWVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWN0LWNvbnRhaW5lciAuZmxleC1ib3gge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhY3QtY29udGFpbmVyIC5mbGV4LWJveCAuY29udGFjdC1lbGVtZW50IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhY3QtY29udGFpbmVyIC5mbGV4LWJveCAuY29udGFjdC1lbGVtZW50Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5wcnVkdWt0LWNvbnRhaW5lciAuZmxleC1jb250YWluZXIgLnByb2R1a3RlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzL2ZvbnRzLnNjc3MnO1xuXG46Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogJG1haW4tZ3JlZW4gIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG46Om5nLWRlZXAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC43KTtcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoOTcsIDE0MSwgNDcsIDAuNyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblxuICAgIGkge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICBpOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMzRweCAwIDE5cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tZ3JlZW47XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mYS1mYWNlYm9vayB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgIH1cblxuICAgIC5mYS1pbnN0YWdyYW0ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG4ubmF2YmFyLWludmVyc2Uge1xuICAgIHRvcDogLTkycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhcjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcblxuICAgIGkge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDM0MztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MzQzNDM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRvcDogLTkycHg7XG4gICAgfVxufVxuXG4ubmF2YmFyLW91dHZlcnNlIHtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlb3V0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcblxuICAgIGkge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2VudGVyLWZsZXgge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5sZWZ0LW1hcmcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAubGVmdC1tYXJnOmhvdmVyIHtcbiAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIGZyb20ge1xuICAgICAgICB0b3A6IC05MnB4O1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxufVxuXG4ubmF2YmFyLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDApO1xuICAgIGFuaW1hdGlvbi1uYW1lOiB0cmFuc3BhcmVudDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xufVxuXG5Aa2V5ZnJhbWVzIHRyYW5zcGFyZW50IHtcbiAgICBmcm9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKTtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gICAgfVxufSIsIi8vIGNvbG9yXG4kbWFpbi1ncmVlbjogcmdiKDk3LCAxNDEsIDQ3KTtcbiR0ZXh0LWNvbG9yLXBvczogIzNhNDM0ZDtcbiRuYXZiYXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuJG5hdmJhci10cmFuc3BhcmVudDogcmdiYSg5NywgMTQxLCA0NywgMCk7XG4kYWNzZW50LWNvbG9yOiByZ2IoMTc3LCAxNTAsIDc1KTtcbiRncmF5OiAjZjhmNmYzO1xuJGJsYWNrOiAjMjIyMjIyO1xuXG4vLyBmb250c1xuJGJvZG9uaTogXCIvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIjtcbiRSdWJpay1NZWRpdW06IFwiL2ZvbnRzL2JvZG9uaS9SdWJpay1NZWRpdW0udHRmXCI7IiwiQGltcG9ydCAnLi4vYXBwLmNvbXBvbmVudC5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL2ZvbnRzLnNjc3MnO1xuXG5hZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4ucGFyYWxsYXgtaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9yZWdhbGUuanBnXCIpO1xuICAgIGhlaWdodDogNjAwcHg7XG5cbiAgICAuYmxhY2stb3ZlcmxheSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuXG4gICAgICAgIC53cmFwcCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG5cbiAgICAgICAgICAgIC5tYXJnaW4tbGVmdCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcblxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmlnaHQtaW1nIHtcblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgIHdpZHRoOiAyMDAlO1xuICAgIH1cblxuICAgIC5pbWctaGlnZXIge1xuICAgICAgICB0b3A6IC0yMHB4O1xuICAgIH1cbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuXG4gICAgLmZsZXgtYm94IHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogODUwcHg7XG5cbiAgICAgICAgLmNvbnRhY3QtZWxlbWVudCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg5NywgMTQxLCA0NywgMC44KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc5cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3OHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjQpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmljb24tY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tZ3JlZW47XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoNTgsIDY3LCA3NywgMC42KTtcblxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmthY2hlbC1jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDE2NXB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgLmthY2hlbCB7XG4gICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE2NXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE2NXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmlubmVyLWthY2hlbCwgLmFjdGl2LWlubmVyLWthY2hlbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpdi1pbm5lci1rYWNoZWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSgxMDAlKSBodWUtcm90YXRlKDM0NmRlZykgYnJpZ2h0bmVzcygyMDAwJSkgY29udHJhc3QoOTclKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmthY2hlbC1maXJzdDpob3ZlcixcbiAgICAua2FjaGVsOmhvdmVyIHtcblxuICAgICAgICAuaW5uZXIta2FjaGVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgyNyUpIHNlcGlhKDUxJSkgc2F0dXJhdGUoMTAwJSkgaHVlLXJvdGF0ZSgzNDZkZWcpIGJyaWdodG5lc3MoMjAwMCUpIGNvbnRyYXN0KDk3JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdWwge1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWdyZWVuO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsYWNrIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wcnVkdWt0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLmZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5wcm9kdWt0ZSB7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoOTcsIDE0MSwgNDcsIDAuOCk7XG5cbiAgICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcblxuICAgICAgICAgICAgICAgIC5iaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVrdGU6b25seS1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcblxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgXG4gICAgICAgIC5mbGV4LWJveCB7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgICAgICAgICAuY29udGFjdC1lbGVtZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJ1ZHVrdC1jb250YWluZXIge1xuXG4gICAgICAgIC5mbGV4LWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgIC5wcm9kdWt0ZTpvbmx5LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3NjZW5lIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG5cbiAgICAucHJ1ZHVrdC1jb250YWluZXIge1xuXG4gICAgICAgIC5mbGV4LWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgIC5wcm9kdWt0ZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9kdWt0ZTpvbmx5LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzMHB4KSB7XG4gICAgXG5cbiAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAgICAgLmZsZXgtYm94IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAuY29udGFjdC1lbGVtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1jb250YWluZXIge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgLmZsZXgtYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgICAgICAgICAgLmNvbnRhY3QtZWxlbWVudCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdC1lbGVtZW50Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcnVkdWt0LWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmZsZXgtY29udGFpbmVyIHtcblxuICAgICAgICAgICAgLnByb2R1a3RlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    class Ware {}

    let HomeComponent = class HomeComponent {
      constructor(httpClient) {
        this.httpClient = httpClient;
        this.products = [{
          "name": "Backwaren",
          "subtitel": [{
            "name": "Bio Backwaren/Bio Kuchen",
            "inhalt": [{
              "name": "Sämtliche Backwaren",
              "beschreibung": "(Brote, Brötchen, etc.) beziehen wir von Gut Kragenhof"
            }]
          }, {
            "name": "Backzutaten/Zucker",
            "inhalt": [{
              "name": "Bio Backpulver",
              "beschreibung": ""
            }]
          }]
        }];
        this.category = 0;
        this.subCategory = 0;
        this.texto = 'Partout Bio';
        this.lat = 51.3130073;
        this.lng = 9.4648409;
        this.zoom = 17;
        this.lottieConfig = {
          path: 'assets/fire.json',
          renderer: 'canvas',
          autoplay: true,
          loop: true
        };
        this.httpClient.get('./assets/json/Sortiment.json').subscribe(data => {
          console.log(data);
          this.products = data;
          this.products.forEach(product => {
            product.subtitel.sort(this.dynamicSort('name'));
            product.subtitel.forEach(unterProduct => {
              unterProduct.inhalt.sort(this.dynamicSort('name'));
            });
          });
        });
      }

      ngAfterContentInit() {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
          relativeInput: true
        });
        parallaxInstance.limit(60, 60);
        parallaxInstance.origin(.1, .1); // parallaxInstance.invert(false, false);
      }

      ngOnInit() {}

      dynamicSort(property) {
        let sortOrder = 1;

        if (property[0] === '-') {
          sortOrder = -1;
          property = property.substr(1);
        }

        return function (a, b) {
          if (sortOrder === -1) {
            return b[property].localeCompare(a[property]);
          } else {
            return a[property].localeCompare(b[property]);
          }
        };
      }

      handleAnimation(anim) {
        this.anim = anim;
      }

      navToGoogleMaps() {
        window.location.href = 'https://goo.gl/maps/EofrR9TK9AvvEc3T8';
      }

      getCategoryIndex(value) {
        this.category = value;
        this.subCategory = 0;
      }

      getSubCategoryIndex(value) {
        this.subCategory = value;
      }

    };

    HomeComponent.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/impressum/impressum.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/impressum/impressum.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImpressumImpressumComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n::ng-deep .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #618d2f !important;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n::ng-deep.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 10px;\n}\n::ng-deep.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: rgba(165, 165, 165, 0.7);\n  opacity: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.navbar {\n  position: fixed;\n  width: 100%;\n  height: 70px;\n  z-index: 9999;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar i {\n  color: #ffffff;\n  font-size: 35px;\n  margin-left: 18px;\n  margin-top: 15px;\n  opacity: 1;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.navbar i:hover {\n  opacity: 0.3;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.navbar ul li {\n  padding: 34px 0 19px;\n  margin: 0 15px;\n  color: #ffffff;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li hr {\n  opacity: 0;\n  width: 0%;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li:hover {\n  color: #618d2f;\n}\n.navbar ul li:hover hr {\n  opacity: 0.7;\n  width: 100%;\n}\n.navbar .fa-facebook {\n  float: right;\n  margin-right: 18px;\n}\n.navbar .fa-instagram {\n  float: right;\n}\n.navbar-inverse {\n  top: -92px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadein;\n          animation-name: fadein;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-inverse i {\n  color: #000000;\n}\n.navbar-inverse ul li p {\n  color: #000000;\n}\n.footer {\n  background-color: #222;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.footer .bottom-container {\n  width: 100%;\n  border-top: 1px solid #434343;\n  border-bottom: 1px solid #434343;\n  padding: 10px 0;\n  text-align: center;\n}\n.footer .bottom-container h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n@keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n.navbar-outverse {\n  top: 0px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadeout;\n          animation-name: fadeout;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-outverse i {\n  color: #000000;\n}\n.navbar-outverse ul li p {\n  color: #000000;\n}\n.center-flex {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: flex;\n}\n.center-flex .left-marg {\n  margin-left: 20px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n  cursor: pointer;\n}\n.center-flex .left-marg:hover {\n  color: rgba(255, 255, 255, 0.3);\n}\n@-webkit-keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n@keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n.navbar-transparent {\n  background-color: rgba(250, 250, 250, 0);\n  -webkit-animation-name: transparent;\n          animation-name: transparent;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n}\n@-webkit-keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n.parallax-header {\n  background-image: url('1.jpeg');\n}\n.container {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9pbXByZXNzdW0vaW1wcmVzc3VtLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hlbmRyaWtkb2NraG9ybi9Eb2N1bWVudHMvQXJiZWl0L3BhcnRvdXRCaW8vV2Vic2VpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGVuZHJpa2RvY2tob3JuL0RvY3VtZW50cy9BcmJlaXQvcGFydG91dEJpby9XZWJzZWl0ZS9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvaGVuZHJpa2RvY2tob3JuL0RvY3VtZW50cy9BcmJlaXQvcGFydG91dEJpby9XZWJzZWl0ZS9zcmMvYXBwL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNIRjtBRFFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDTkY7QURXQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBQ1RGO0FEZUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUNiRjtBRGdCQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQ2RGO0FEaUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0FDZkY7QURrQkE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7QUNoQkY7QUMvQkE7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRGlDSjtBQzlCQTtFQUNJLFlBQUE7QURpQ0o7QUM5QkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtF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OENBQUE7QUM2TEY7QUQxTEE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUM0TEY7QUR6TEE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7QUMyTEY7QUd6T0E7RUFDSSwrQkFBQTtBSDJPSjtBR3hPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUgyT0oiLCJmaWxlIjoic3JjL2FwcC9pbXByZXNzdW0vaW1wcmVzc3VtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi8vIEFsZXhCcnVzaFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbGV4QnJ1c2gnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL2FsZXgtYnJ1c2gvQWxleEJydXNoLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4vLyBCb2RvbmlcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQm9kb25pJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLy8gUGFjaWZpY28tUmVndWxhclxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljby1SZWd1bGFyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuXG4vLyBSdWJpa1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBtZWRpdW0nO1xuICBmb250LXN0eWxlOiBtZWRpdW07XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1J1YmlrIGxpZ2h0JztcbiAgZm9udC1zdHlsZTogbGlnaHQ7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgYm9sZCc7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayByZWd1bGFyJztcbiAgZm9udC1zdHlsZTogcmVndWxhcjtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxleEJydXNoXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL2FsZXgtYnJ1c2gvQWxleEJydXNoLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJvZG9uaVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQYWNpZmljby1SZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL3BhY2lmaWNvL1BhY2lmaWNvLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIG1lZGl1bVwiO1xuICBmb250LXN0eWxlOiBtZWRpdW07XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIGxpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIGJvbGRcIjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrIHJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogcmVndWxhcjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogIzYxOGQyZiAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNyk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIGk6aG92ZXIge1xuICBvcGFjaXR5OiAwLjM7XG59XG4ubmF2YmFyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm5hdmJhciB1bCBsaSB7XG4gIHBhZGRpbmc6IDM0cHggMCAxOXB4O1xuICBtYXJnaW46IDAgMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIHVsIGxpIGhyIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDAlO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIge1xuICBjb2xvcjogIzYxOGQyZjtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIgaHIge1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhciAuZmEtZmFjZWJvb2sge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cbi5uYXZiYXIgLmZhLWluc3RhZ3JhbSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgdG9wOiAtOTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjMpO1xufVxuLm5hdmJhci1pbnZlcnNlIGkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5uYXZiYXItaW52ZXJzZSB1bCBsaSBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmZvb3RlciAuYm90dG9tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDM0MztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MzQzNDM7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciAuYm90dG9tLWNvbnRhaW5lciBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTkycHg7XG4gIH1cbn1cbi5uYXZiYXItb3V0dmVyc2Uge1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBhbmltYXRpb24tbmFtZTogZmFkZW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcbn1cbi5uYXZiYXItb3V0dmVyc2UgaSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLm5hdmJhci1vdXR2ZXJzZSB1bCBsaSBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jZW50ZXItZmxleCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jZW50ZXItZmxleCAubGVmdC1tYXJnIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2VudGVyLWZsZXggLmxlZnQtbWFyZzpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIHRvcDogLTkycHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogMHB4O1xuICB9XG59XG4ubmF2YmFyLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgYW5pbWF0aW9uLW5hbWU6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xufVxuXG5Aa2V5ZnJhbWVzIHRyYW5zcGFyZW50IHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZXhCcnVzaFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCb2RvbmlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY28tUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBtZWRpdW1cIjtcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBsaWdodFwiO1xuICBmb250LXN0eWxlOiBsaWdodDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBib2xkXCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayByZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi5wYXJhbGxheC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci8xLmpwZWdcIik7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59IiwiQGltcG9ydCAnLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vYXNzZXRzL3Njc3MvZm9udHMuc2Nzcyc7XG5cbjo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1ncmVlbiAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjcpO1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSg5NywgMTQxLCA0NywgMC43KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIGk6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAuMztcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNHB4IDAgMTlweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1ncmVlbjtcblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZhLWZhY2Vib29rIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgLmZhLWluc3RhZ3JhbSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gICAgdG9wOiAtOTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjMpO1xuXG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDM0MzQzO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzNDM0MztcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdG9wOiAtOTJweDtcbiAgICB9XG59XG5cbi5uYXZiYXItb3V0dmVyc2Uge1xuICAgIHRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXI7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVvdXQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjMpO1xuXG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jZW50ZXItZmxleCB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmxlZnQtbWFyZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5sZWZ0LW1hcmc6aG92ZXIge1xuICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogLTkycHg7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG59XG5cbi5uYXZiYXItdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG59XG5cbkBrZXlmcmFtZXMgdHJhbnNwYXJlbnQge1xuICAgIGZyb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgICB9XG59IiwiLy8gY29sb3JcbiRtYWluLWdyZWVuOiByZ2IoOTcsIDE0MSwgNDcpO1xuJHRleHQtY29sb3ItcG9zOiAjM2E0MzRkO1xuJG5hdmJhcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4kbmF2YmFyLXRyYW5zcGFyZW50OiByZ2JhKDk3LCAxNDEsIDQ3LCAwKTtcbiRhY3NlbnQtY29sb3I6IHJnYigxNzcsIDE1MCwgNzUpO1xuJGdyYXk6ICNmOGY2ZjM7XG4kYmxhY2s6ICMyMjIyMjI7XG5cbi8vIGZvbnRzXG4kYm9kb25pOiBcIi9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZlwiO1xuJFJ1YmlrLU1lZGl1bTogXCIvZm9udHMvYm9kb25pL1J1YmlrLU1lZGl1bS50dGZcIjsiLCJAaW1wb3J0ICcuLi9hcHAuY29tcG9uZW50LnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvZm9udHMuc2Nzcyc7XG5cbi5wYXJhbGxheC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmlsZGVyLzEuanBlZ1wiKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/impressum/impressum.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/impressum/impressum.component.ts ***!
    \**************************************************/

  /*! exports provided: ImpressumComponent */

  /***/
  function srcAppImpressumImpressumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function () {
      return ImpressumComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ImpressumComponent = class ImpressumComponent {
      constructor() {}

      ngOnInit() {}

    };
    ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-impressum',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./impressum.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/impressum/impressum.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./impressum.component.scss */
      "./src/app/impressum/impressum.component.scss")).default]
    })], ImpressumComponent);
    /***/
  },

  /***/
  "./src/app/main-gallery/main-gallery.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/main-gallery/main-gallery.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainGalleryMainGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n::ng-deep .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #618d2f !important;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n::ng-deep.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 10px;\n}\n::ng-deep.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: rgba(165, 165, 165, 0.7);\n  opacity: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.navbar {\n  position: fixed;\n  width: 100%;\n  height: 70px;\n  z-index: 9999;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar i {\n  color: #ffffff;\n  font-size: 35px;\n  margin-left: 18px;\n  margin-top: 15px;\n  opacity: 1;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.navbar i:hover {\n  opacity: 0.3;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.navbar ul li {\n  padding: 34px 0 19px;\n  margin: 0 15px;\n  color: #ffffff;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li hr {\n  opacity: 0;\n  width: 0%;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li:hover {\n  color: #618d2f;\n}\n.navbar ul li:hover hr {\n  opacity: 0.7;\n  width: 100%;\n}\n.navbar .fa-facebook {\n  float: right;\n  margin-right: 18px;\n}\n.navbar .fa-instagram {\n  float: right;\n}\n.navbar-inverse {\n  top: -92px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadein;\n          animation-name: fadein;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-inverse i {\n  color: #000000;\n}\n.navbar-inverse ul li p {\n  color: #000000;\n}\n.footer {\n  background-color: #222;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.footer .bottom-container {\n  width: 100%;\n  border-top: 1px solid #434343;\n  border-bottom: 1px solid #434343;\n  padding: 10px 0;\n  text-align: center;\n}\n.footer .bottom-container h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n@keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n.navbar-outverse {\n  top: 0px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadeout;\n          animation-name: fadeout;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-outverse i {\n  color: #000000;\n}\n.navbar-outverse ul li p {\n  color: #000000;\n}\n.center-flex {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: flex;\n}\n.center-flex .left-marg {\n  margin-left: 20px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n  cursor: pointer;\n}\n.center-flex .left-marg:hover {\n  color: rgba(255, 255, 255, 0.3);\n}\n@-webkit-keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n@keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n.navbar-transparent {\n  background-color: rgba(250, 250, 250, 0);\n  -webkit-animation-name: transparent;\n          animation-name: transparent;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n}\n@-webkit-keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\nswiper {\n  height: 92vh;\n  width: 100%;\n  overflow: hidden;\n}\n.swiper-pagination {\n  position: relative !important;\n  margin-top: -100px;\n}\n.gallery-container,\n.swiper-container {\n  width: 100%;\n  height: 100%;\n}\n.swiper-slide {\n  background-size: cover;\n}\n.swiper-slide .black-overlay {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n}\n.swiper-slide .black-overlay .center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.swiper-slide .black-overlay .center h1 {\n  font-size: 80px;\n  color: #ffffff;\n}\n.swiper-slide .black-overlay .center h2 {\n  font-size: 45px;\n  text-align: center;\n}\n.swiper-slide img {\n  max-width: 100%;\n}\n.first-img {\n  background-image: url('regale_2.jpg');\n}\n.second-img {\n  background-image: url('open.jpg');\n}\n.theerd-img {\n  background-image: url('natur.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9tYWluLWdhbGxlcnkvbWFpbi1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hlbmRyaWtkb2NraG9ybi9Eb2N1bWVudHMvQXJiZWl0L3BhcnRvdXRCaW8vV2Vic2VpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGVuZHJpa2RvY2tob3JuL0RvY3VtZW50cy9BcmJlaXQvcGFydG91dEJpby9XZWJzZWl0ZS9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvaGVuZHJpa2RvY2tob3JuL0RvY3VtZW50cy9BcmJlaXQvcGFydG91dEJpby9XZWJzZWl0ZS9zcmMvYXBwL21haW4tZ2FsbGVyeS9tYWluLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNIRjtBRFFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDTkY7QURXQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBQ1RGO0FEZUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUNiRjtBRGdCQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQ2RGO0FEaUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0FDZkY7QURrQkE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7QUNoQkY7QUMvQkE7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRGlDSjtBQzlCQTtFQUNJLFlBQUE7QURpQ0o7QUM5QkE7RUFDSSxVQUFB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LGlCQUFBO0VBQ0EsOENBQUE7QUM2TEY7QUQxTEE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUM0TEY7QUR6TEE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7QUMyTEY7QUd4T0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FIME9KO0FHdk9BO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtBSDBPSjtBR3RPQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBSHlPSjtBR3RPQTtFQUNJLHNCQUFBO0FIeU9KO0FHdk9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO0VBR0EsdUJBQUE7RUFDQSx5QkFBQTtFQUdBLG1CQUFBO0FIeU9SO0FHdk9RO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBSHlPWjtBR3ZPWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FIeU9oQjtBR3RPWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBSHdPaEI7QUdsT0E7RUFDSSxlQUFBO0FIcU9KO0FHbE9BO0VBQ0kscUNBQUE7QUhxT0o7QUdsT0E7RUFDSSxpQ0FBQTtBSHFPSjtBR2xPQTtFQUNJLGtDQUFBO0FIcU9KIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1nYWxsZXJ5L21haW4tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xuXG4vLyBBbGV4QnJ1c2hcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQWxleEJydXNoJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLy8gQm9kb25pXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JvZG9uaSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi8vIFBhY2lmaWNvLVJlZ3VsYXJcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28tUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvcGFjaWZpY28vUGFjaWZpY28tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cblxuLy8gUnViaWtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgbWVkaXVtJztcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBsaWdodCc7XG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1J1YmlrIGJvbGQnO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgcmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZXhCcnVzaFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCb2RvbmlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY28tUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBtZWRpdW1cIjtcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBsaWdodFwiO1xuICBmb250LXN0eWxlOiBsaWdodDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBib2xkXCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayByZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbjo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6ICM2MThkMmYgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG46Om5nLWRlZXAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjcpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5uYXZiYXIgaSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLm5hdmJhciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5uYXZiYXIgdWwgbGkge1xuICBwYWRkaW5nOiAzNHB4IDAgMTlweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciB1bCBsaSBociB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwJTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MThkMmY7XG59XG4ubmF2YmFyIHVsIGxpOmhvdmVyIGhyIHtcbiAgb3BhY2l0eTogMC43O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXIgLmZhLWZhY2Vib29rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG4ubmF2YmFyIC5mYS1pbnN0YWdyYW0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gIHRvcDogLTkycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcbn1cbi5uYXZiYXItaW52ZXJzZSBpIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubmF2YmFyLWludmVyc2UgdWwgbGkgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5mb290ZXIgLmJvdHRvbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzQzNDM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLmJvdHRvbS1jb250YWluZXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IC05MnB4O1xuICB9XG59XG4ubmF2YmFyLW91dHZlcnNlIHtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVvdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDU4LCA2NywgNzcsIDAuMyk7XG59XG4ubmF2YmFyLW91dHZlcnNlIGkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5uYXZiYXItb3V0dmVyc2UgdWwgbGkgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2VudGVyLWZsZXgge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2VudGVyLWZsZXggLmxlZnQtbWFyZyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNlbnRlci1mbGV4IC5sZWZ0LW1hcmc6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtcbiAgICB0b3A6IC05MnB4O1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gIGFuaW1hdGlvbi1uYW1lOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbn1cblxuQGtleWZyYW1lcyB0cmFuc3BhcmVudCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gIH1cbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbGV4QnJ1c2hcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYWxleC1icnVzaC9BbGV4QnJ1c2gtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQm9kb25pXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL2JvZG9uaS9ib2RvbmktbXQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvLVJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvcGFjaWZpY28vUGFjaWZpY28tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgbWVkaXVtXCI7XG4gIGZvbnQtc3R5bGU6IG1lZGl1bTtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLU1lZGl1bS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbGlnaHQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgYm9sZFwiO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgcmVndWxhclwiO1xuICBmb250LXN0eWxlOiByZWd1bGFyO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5zd2lwZXIge1xuICBoZWlnaHQ6IDkydmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xufVxuXG4uZ2FsbGVyeS1jb250YWluZXIsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnN3aXBlci1zbGlkZSAuYmxhY2stb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3dpcGVyLXNsaWRlIC5ibGFjay1vdmVybGF5IC5jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnN3aXBlci1zbGlkZSAuYmxhY2stb3ZlcmxheSAuY2VudGVyIGgxIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zd2lwZXItc2xpZGUgLmJsYWNrLW92ZXJsYXkgLmNlbnRlciBoMiB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmZpcnN0LWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmlsZGVyL3JlZ2FsZV8yLmpwZ1wiKTtcbn1cblxuLnNlY29uZC1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9vcGVuLmpwZ1wiKTtcbn1cblxuLnRoZWVyZC1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9uYXR1ci5qcGdcIik7XG59IiwiQGltcG9ydCAnLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vYXNzZXRzL3Njc3MvZm9udHMuc2Nzcyc7XG5cbjo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1ncmVlbiAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjcpO1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSg5NywgMTQxLCA0NywgMC43KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIGk6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAuMztcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNHB4IDAgMTlweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1ncmVlbjtcblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZhLWZhY2Vib29rIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgLmZhLWluc3RhZ3JhbSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gICAgdG9wOiAtOTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjMpO1xuXG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDM0MzQzO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzNDM0MztcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdG9wOiAtOTJweDtcbiAgICB9XG59XG5cbi5uYXZiYXItb3V0dmVyc2Uge1xuICAgIHRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXI7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVvdXQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSg1OCwgNjcsIDc3LCAwLjMpO1xuXG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jZW50ZXItZmxleCB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmxlZnQtbWFyZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5sZWZ0LW1hcmc6aG92ZXIge1xuICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogLTkycHg7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG59XG5cbi5uYXZiYXItdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG59XG5cbkBrZXlmcmFtZXMgdHJhbnNwYXJlbnQge1xuICAgIGZyb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcbiAgICB9XG59IiwiLy8gY29sb3JcbiRtYWluLWdyZWVuOiByZ2IoOTcsIDE0MSwgNDcpO1xuJHRleHQtY29sb3ItcG9zOiAjM2E0MzRkO1xuJG5hdmJhcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4kbmF2YmFyLXRyYW5zcGFyZW50OiByZ2JhKDk3LCAxNDEsIDQ3LCAwKTtcbiRhY3NlbnQtY29sb3I6IHJnYigxNzcsIDE1MCwgNzUpO1xuJGdyYXk6ICNmOGY2ZjM7XG4kYmxhY2s6ICMyMjIyMjI7XG5cbi8vIGZvbnRzXG4kYm9kb25pOiBcIi9mb250cy9ib2RvbmkvYm9kb25pLW10LnR0ZlwiO1xuJFJ1YmlrLU1lZGl1bTogXCIvZm9udHMvYm9kb25pL1J1YmlrLU1lZGl1bS50dGZcIjsiLCJAaW1wb3J0ICcuLi9hcHAuY29tcG9uZW50LnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvZm9udHMuc2Nzcyc7XG5cblxuc3dpcGVyIHtcbiAgICBoZWlnaHQ6IDkydmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG5cblxuLmdhbGxlcnktY29udGFpbmVyLFxuLnN3aXBlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIC5ibGFjay1vdmVybGF5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZmlyc3QtaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9yZWdhbGVfMi5qcGdcIik7XG59XG5cbi5zZWNvbmQtaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9vcGVuLmpwZ1wiKTtcbn1cblxuLnRoZWVyZC1pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmlsZGVyL25hdHVyLmpwZ1wiKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main-gallery/main-gallery.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/main-gallery/main-gallery.component.ts ***!
    \********************************************************/

  /*! exports provided: MainGalleryComponent */

  /***/
  function srcAppMainGalleryMainGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainGalleryComponent", function () {
      return MainGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let MainGalleryComponent = class MainGalleryComponent {
      constructor() {
        this.swiperOptions = {
          navigation: {}
        };
        this.config = {
          observer: true,
          observeParents: true,
          // prevents slide to zoom-in when clicking the navigation arrows
          touchEventsTarget: 'wrapper',
          loop: true,
          speed: 1000,
          // pagination: {
          //   el: '.swiper-pagination',
          //   // type: 'bullets',
          //   clickable: true,
          // },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          paginationClickable: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: true
          },
          zoom: {
            toggle: true
          }
        };
      }

      ngOnInit() {}

    };
    MainGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-gallery/main-gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-gallery.component.scss */
      "./src/app/main-gallery/main-gallery.component.scss")).default]
    })], MainGalleryComponent);
    /***/
  },

  /***/
  "./src/app/service/contentful.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/contentful.service.ts ***!
    \***********************************************/

  /*! exports provided: ContentfulService */

  /***/
  function srcAppServiceContentfulServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentfulService", function () {
      return ContentfulService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import * as content


    let ContentfulService = class ContentfulService {
      constructor() {}

    };
    ContentfulService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContentfulService);
    /***/
  },

  /***/
  "./src/app/show-case-gallery/show-case-gallery.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/show-case-gallery/show-case-gallery.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowCaseGalleryShowCaseGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\n::ng-deep .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #618d2f !important;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n::ng-deep.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 10px;\n}\n::ng-deep.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: rgba(165, 165, 165, 0.7);\n  opacity: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.navbar {\n  position: fixed;\n  width: 100%;\n  height: 70px;\n  z-index: 9999;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar i {\n  color: #ffffff;\n  font-size: 35px;\n  margin-left: 18px;\n  margin-top: 15px;\n  opacity: 1;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.navbar i:hover {\n  opacity: 0.3;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.navbar ul li {\n  padding: 34px 0 19px;\n  margin: 0 15px;\n  color: #ffffff;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li hr {\n  opacity: 0;\n  width: 0%;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar ul li:hover {\n  color: #618d2f;\n}\n.navbar ul li:hover hr {\n  opacity: 0.7;\n  width: 100%;\n}\n.navbar .fa-facebook {\n  float: right;\n  margin-right: 18px;\n}\n.navbar .fa-instagram {\n  float: right;\n}\n.navbar-inverse {\n  top: -92px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadein;\n          animation-name: fadein;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-inverse i {\n  color: #000000;\n}\n.navbar-inverse ul li p {\n  color: #000000;\n}\n.footer {\n  background-color: #222;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.footer .bottom-container {\n  width: 100%;\n  border-top: 1px solid #434343;\n  border-bottom: 1px solid #434343;\n  padding: 10px 0;\n  text-align: center;\n}\n.footer .bottom-container h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n@keyframes fadein {\n  from {\n    top: 0;\n  }\n  to {\n    top: -92px;\n  }\n}\n.navbar-outverse {\n  top: 0px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-animation-name: fadeout;\n          animation-name: fadeout;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  box-shadow: 0px 0px 20px rgba(58, 67, 77, 0.3);\n}\n.navbar-outverse i {\n  color: #000000;\n}\n.navbar-outverse ul li p {\n  color: #000000;\n}\n.center-flex {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: flex;\n}\n.center-flex .left-marg {\n  margin-left: 20px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n  cursor: pointer;\n}\n.center-flex .left-marg:hover {\n  color: rgba(255, 255, 255, 0.3);\n}\n@-webkit-keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n@keyframes fadeout {\n  from {\n    top: -92px;\n  }\n  to {\n    top: 0px;\n  }\n}\n.navbar-transparent {\n  background-color: rgba(250, 250, 250, 0);\n  -webkit-animation-name: transparent;\n          animation-name: transparent;\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n}\n@-webkit-keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@keyframes transparent {\n  from {\n    background-color: #fafafa;\n  }\n  to {\n    background-color: rgba(250, 250, 250, 0);\n  }\n}\n@font-face {\n  font-family: \"AlexBrush\";\n  font-style: normal;\n  src: url('AlexBrush-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Bodoni\";\n  font-style: normal;\n  src: url('bodoni-mt.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pacifico-Regular\";\n  font-style: normal;\n  src: url('Pacifico-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik medium\";\n  font-style: medium;\n  src: url('Rubik-Medium.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik light\";\n  font-style: light;\n  src: url('Rubik-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik bold\";\n  font-style: bold;\n  src: url('Rubik-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Rubik regular\";\n  font-style: regular;\n  src: url('Rubik-Regular.ttf') format(\"truetype\");\n}\nswiper {\n  height: 500px;\n  width: 100%;\n  overflow: hidden;\n}\n.swiper-pagination {\n  position: absolute !important;\n  margin-top: -100px;\n}\n.btn {\n  color: #000;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n.btn-1 {\n  background: #f70000;\n  font-weight: 100;\n}\n.btn-1 svg {\n  height: 45px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.btn-1 rect {\n  fill: none;\n  stroke: #000;\n  stroke-width: 2;\n  stroke-dasharray: 422, 0;\n  -webkit-transition: all 0.35s linear;\n  transition: all 0.35s linear;\n}\n.btn-1:hover {\n  background: rgba(255, 0, 0, 0);\n  font-weight: 900;\n  letter-spacing: 1px;\n}\n.btn-1:hover rect {\n  stroke-width: 5;\n  stroke-dasharray: 15, 310;\n  stroke-dashoffset: 48;\n  -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.gallery-container,\n.swiper-container {\n  width: 100%;\n  height: 100%;\n}\n.swiper-slide {\n  height: 350px;\n  background-size: cover;\n}\n.swiper-slide .black-overlay {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 0 200px rgba(0, 0, 0, 0) inset;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.swiper-slide .black-overlay .center {\n  margin-left: auto;\n  margin-right: auto;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.swiper-slide .black-overlay .center svg {\n  height: 60px;\n  width: 220px;\n  left: 40px;\n  position: absolute;\n  top: 147px;\n  box-shadow: 0 0 70px rgba(0, 0, 0, 0) inset;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.swiper-slide .black-overlay .center rect {\n  fill: none;\n  stroke: rgba(248, 246, 243, 0);\n  stroke-width: 2;\n  stroke-dasharray: 422, 0;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.swiper-slide .black-overlay .center .absolute {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 350px;\n  width: 300px;\n  text-align: center;\n}\n.swiper-slide .black-overlay .center .absolute h3 {\n  position: relative;\n  top: 142px;\n  font-size: 32px;\n  color: rgba(255, 255, 255, 0.8);\n  z-index: 9999;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.swiper-slide .black-overlay:hover {\n  background-color: rgba(0, 0, 0, 0);\n  box-shadow: 0 0 200px rgba(0, 0, 0, 0.6) inset;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.swiper-slide .black-overlay:hover .center svg {\n  box-shadow: 0 0 70px rgba(0, 0, 0, 0.9) inset;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.swiper-slide .black-overlay:hover .center rect {\n  stroke-width: 5;\n  stroke-dasharray: 58, 220;\n  stroke-dashoffset: 48;\n  stroke: rgba(248, 246, 243, 0.8);\n  -webkit-transition: all 2.35s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: all 2.35s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.swiper-slide .black-overlay:hover .center .absolute h3 {\n  color: white;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.swiper-slide img {\n  max-width: 100%;\n}\n.first-img {\n  background-image: url('food.jpg');\n  background-size: 400px 350px;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.first-img:hover {\n  background-size: 450px 400px;\n  -webkit-transition: all 2s ease-out;\n  transition: all 2s ease-out;\n}\n.second-img {\n  background-image: url('caffee.jpg');\n  background-size: 500px 400px;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.second-img:hover {\n  background-size: 550px 450px;\n  -webkit-transition: all 2s ease-out;\n  transition: all 2s ease-out;\n}\n.theerd-img {\n  background-image: url('dekoration.jpg');\n  background-size: 400px 350px;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.theerd-img:hover {\n  background-size: 450px 400px;\n  -webkit-transition: all 2s ease-out;\n  transition: all 2s ease-out;\n}\n.forth-img {\n  background-image: url('kosmetik.jpg');\n  background-size: 500px 350px;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.forth-img:hover {\n  background-size: 580px 400px;\n  -webkit-transition: all 2s ease-out;\n  transition: all 2s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hc3NldHMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9zaG93LWNhc2UtZ2FsbGVyeS9zaG93LWNhc2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oZW5kcmlrZG9ja2hvcm4vRG9jdW1lbnRzL0FyYmVpdC9wYXJ0b3V0QmlvL1dlYnNlaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hlbmRyaWtkb2NraG9ybi9Eb2N1bWVudHMvQXJiZWl0L3BhcnRvdXRCaW8vV2Vic2VpdGUvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2hlbmRyaWtkb2NraG9ybi9Eb2N1bWVudHMvQXJiZWl0L3BhcnRvdXRCaW8vV2Vic2VpdGUvc3JjL2FwcC9zaG93LWNhc2UtZ2FsbGVyeS9zaG93LWNhc2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBQ0hGO0FEUUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNORjtBRFdBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FDVEY7QURlQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQ2JGO0FEZ0JBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FDZEY7QURpQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUNmRjtBRGtCQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQ2hCRjtBQy9CQTtFQUNJLFVBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FEaUNKO0FDOUJBO0VBQ0ksWUFBQTtB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RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QUg2TUo7QUcxTUE7RUFDSSw0QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUg2TUoiLCJmaWxlIjoic3JjL2FwcC9zaG93LWNhc2UtZ2FsbGVyeS9zaG93LWNhc2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xuXG4vLyBBbGV4QnJ1c2hcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQWxleEJydXNoJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLy8gQm9kb25pXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JvZG9uaSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi8vIFBhY2lmaWNvLVJlZ3VsYXJcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28tUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvcGFjaWZpY28vUGFjaWZpY28tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cblxuLy8gUnViaWtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgbWVkaXVtJztcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBsaWdodCc7XG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1J1YmlrIGJvbGQnO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgcmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZXhCcnVzaFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCb2RvbmlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY28tUmVndWxhclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9wYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBtZWRpdW1cIjtcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBsaWdodFwiO1xuICBmb250LXN0eWxlOiBsaWdodDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayBib2xkXCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpayByZWd1bGFyXCI7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbjo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6ICM2MThkMmYgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG46Om5nLWRlZXAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjcpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5uYXZiYXIgaSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLm5hdmJhciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5uYXZiYXIgdWwgbGkge1xuICBwYWRkaW5nOiAzNHB4IDAgMTlweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciB1bCBsaSBociB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwJTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MThkMmY7XG59XG4ubmF2YmFyIHVsIGxpOmhvdmVyIGhyIHtcbiAgb3BhY2l0eTogMC43O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXIgLmZhLWZhY2Vib29rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG4ubmF2YmFyIC5mYS1pbnN0YWdyYW0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gIHRvcDogLTkycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcbn1cbi5uYXZiYXItaW52ZXJzZSBpIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubmF2YmFyLWludmVyc2UgdWwgbGkgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5mb290ZXIgLmJvdHRvbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzQzNDM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLmJvdHRvbS1jb250YWluZXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IC05MnB4O1xuICB9XG59XG4ubmF2YmFyLW91dHZlcnNlIHtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVvdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDU4LCA2NywgNzcsIDAuMyk7XG59XG4ubmF2YmFyLW91dHZlcnNlIGkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5uYXZiYXItb3V0dmVyc2UgdWwgbGkgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2VudGVyLWZsZXgge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2VudGVyLWZsZXggLmxlZnQtbWFyZyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNlbnRlci1mbGV4IC5sZWZ0LW1hcmc6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtcbiAgICB0b3A6IC05MnB4O1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gIGFuaW1hdGlvbi1uYW1lOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbn1cblxuQGtleWZyYW1lcyB0cmFuc3BhcmVudCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gIH1cbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbGV4QnJ1c2hcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvYWxleC1icnVzaC9BbGV4QnJ1c2gtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQm9kb25pXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL2JvZG9uaS9ib2RvbmktbXQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvLVJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvcGFjaWZpY28vUGFjaWZpY28tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgbWVkaXVtXCI7XG4gIGZvbnQtc3R5bGU6IG1lZGl1bTtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1J1YmlrL1J1YmlrLU1lZGl1bS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgbGlnaHRcIjtcbiAgZm9udC1zdHlsZTogbGlnaHQ7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9SdWJpay9SdWJpay1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgYm9sZFwiO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWsgcmVndWxhclwiO1xuICBmb250LXN0eWxlOiByZWd1bGFyO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvUnViaWsvUnViaWstUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5zd2lwZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cblxuLmJ0biB7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCAwIDJlbTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLTEge1xuICBiYWNrZ3JvdW5kOiAjZjcwMDAwO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmJ0bi0xIHN2ZyB7XG4gIGhlaWdodDogNDVweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi0xIHJlY3Qge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMwMDA7XG4gIHN0cm9rZS13aWR0aDogMjtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDIyLCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xufVxuXG4uYnRuLTE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uYnRuLTE6aG92ZXIgcmVjdCB7XG4gIHN0cm9rZS13aWR0aDogNTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTUsIDMxMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgMS4zNXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xufVxuXG4uZ2FsbGVyeS1jb250YWluZXIsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnN3aXBlci1zbGlkZSAuYmxhY2stb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDIwMHB4IHJnYmEoMCwgMCwgMCwgMCkgaW5zZXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLnN3aXBlci1zbGlkZSAuYmxhY2stb3ZlcmxheSAuY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4uc3dpcGVyLXNsaWRlIC5ibGFjay1vdmVybGF5IC5jZW50ZXIgc3ZnIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNDdweDtcbiAgYm94LXNoYWRvdzogMCAwIDcwcHggcmdiYSgwLCAwLCAwLCAwKSBpbnNldDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xufVxuLnN3aXBlci1zbGlkZSAuYmxhY2stb3ZlcmxheSAuY2VudGVyIHJlY3Qge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IHJnYmEoMjQ4LCAyNDYsIDI0MywgMCk7XG4gIHN0cm9rZS13aWR0aDogMjtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDIyLCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG59XG4uc3dpcGVyLXNsaWRlIC5ibGFjay1vdmVybGF5IC5jZW50ZXIgLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3aXBlci1zbGlkZSAuYmxhY2stb3ZlcmxheSAuY2VudGVyIC5hYnNvbHV0ZSBoMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNDJweDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB6LWluZGV4OiA5OTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG59XG4uc3dpcGVyLXNsaWRlIC5ibGFjay1vdmVybGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm94LXNoYWRvdzogMCAwIDIwMHB4IHJnYmEoMCwgMCwgMCwgMC42KSBpbnNldDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4uc3dpcGVyLXNsaWRlIC5ibGFjay1vdmVybGF5OmhvdmVyIC5jZW50ZXIgc3ZnIHtcbiAgYm94LXNoYWRvdzogMCAwIDcwcHggcmdiYSgwLCAwLCAwLCAwLjkpIGluc2V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG59XG4uc3dpcGVyLXNsaWRlIC5ibGFjay1vdmVybGF5OmhvdmVyIC5jZW50ZXIgcmVjdCB7XG4gIHN0cm9rZS13aWR0aDogNTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNTgsIDIyMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4O1xuICBzdHJva2U6IHJnYmEoMjQ4LCAyNDYsIDI0MywgMC44KTtcbiAgdHJhbnNpdGlvbjogYWxsIDIuMzVzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbn1cbi5zd2lwZXItc2xpZGUgLmJsYWNrLW92ZXJsYXk6aG92ZXIgLmNlbnRlciAuYWJzb2x1dGUgaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5maXJzdC1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9mb29kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDBweCAzNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5maXJzdC1pbWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IDQ1MHB4IDQwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWNvbmQtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iaWxkZXIvY2FmZmVlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1MDBweCA0MDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5zZWNvbmQtaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiA1NTBweCA0NTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2Utb3V0O1xufVxuXG4udGhlZXJkLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmlsZGVyL2Rla29yYXRpb24uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDM1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cblxuLnRoZWVyZC1pbWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IDQ1MHB4IDQwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1vdXQ7XG59XG5cbi5mb3J0aC1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9rb3NtZXRpay5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAwcHggMzUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xufVxuXG4uZm9ydGgtaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiA1ODBweCA0MDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2Utb3V0O1xufSIsIkBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzL2ZvbnRzLnNjc3MnO1xuXG46Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogJG1haW4tZ3JlZW4gIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG46Om5nLWRlZXAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC43KTtcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoOTcsIDE0MSwgNDcsIDAuNyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblxuICAgIGkge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICBpOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMzRweCAwIDE5cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tZ3JlZW47XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mYS1mYWNlYm9vayB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgIH1cblxuICAgIC5mYS1pbnN0YWdyYW0ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG4ubmF2YmFyLWludmVyc2Uge1xuICAgIHRvcDogLTkycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhcjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcblxuICAgIGkge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDM0MztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MzQzNDM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRvcDogLTkycHg7XG4gICAgfVxufVxuXG4ubmF2YmFyLW91dHZlcnNlIHtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlb3V0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoNTgsIDY3LCA3NywgMC4zKTtcblxuICAgIGkge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2VudGVyLWZsZXgge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5sZWZ0LW1hcmcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAubGVmdC1tYXJnOmhvdmVyIHtcbiAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIGZyb20ge1xuICAgICAgICB0b3A6IC05MnB4O1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxufVxuXG4ubmF2YmFyLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDApO1xuICAgIGFuaW1hdGlvbi1uYW1lOiB0cmFuc3BhcmVudDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xufVxuXG5Aa2V5ZnJhbWVzIHRyYW5zcGFyZW50IHtcbiAgICBmcm9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKTtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XG4gICAgfVxufSIsIi8vIGNvbG9yXG4kbWFpbi1ncmVlbjogcmdiKDk3LCAxNDEsIDQ3KTtcbiR0ZXh0LWNvbG9yLXBvczogIzNhNDM0ZDtcbiRuYXZiYXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuJG5hdmJhci10cmFuc3BhcmVudDogcmdiYSg5NywgMTQxLCA0NywgMCk7XG4kYWNzZW50LWNvbG9yOiByZ2IoMTc3LCAxNTAsIDc1KTtcbiRncmF5OiAjZjhmNmYzO1xuJGJsYWNrOiAjMjIyMjIyO1xuXG4vLyBmb250c1xuJGJvZG9uaTogXCIvZm9udHMvYm9kb25pL2JvZG9uaS1tdC50dGZcIjtcbiRSdWJpay1NZWRpdW06IFwiL2ZvbnRzL2JvZG9uaS9SdWJpay1NZWRpdW0udHRmXCI7IiwiQGltcG9ydCAnLi4vYXBwLmNvbXBvbmVudC5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL2ZvbnRzLnNjc3MnO1xuXG5cbnN3aXBlciB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cblxuLy9kZWZhdWx0IGJ1dHRvblxuLmJ0biB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbjogMCAwIDJlbTtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vYnV0dG9uIG9uZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLmJ0bi0xIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4ocmVkLCAxLjUlKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuXG4gICAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgcmVjdCB7XG4gICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgIHN0cm9rZTogIzAwMDtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA0MjIsIDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XG4gICAgfVxufVxuXG4uYnRuLTE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEocmVkLCAwKTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cbiAgICByZWN0IHtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiA1O1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxNSwgMzEwO1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxLjM1cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG4gICAgfVxufVxuXG5cblxuLmdhbGxlcnktY29udGFpbmVyLFxuLnN3aXBlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICR0cmFuc2l0aW9uLXNwZWVkOiAwLjRzO1xuXG4gICAgLmJsYWNrLW92ZXJsYXkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjAwcHggcmdiYSgwLCAwLCAwLCAwLjApIGluc2V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb24tc3BlZWQgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZCBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTQ3cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDcwcHggcmdiYSgwLCAwLCAwLCAwLjApIGluc2V0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjdCB7XG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHJnYmEoMjQ4LCAyNDYsIDI0MywgLjApO1xuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA0MjIsIDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWJzb2x1dGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTQycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJsYWNrLW92ZXJsYXk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwMHB4IHJnYmEoMCwgMCwgMCwgMC42KSBpbnNldDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uLXNwZWVkIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIC5jZW50ZXIge1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA3MHB4IHJnYmEoMCwgMCwgMCwgMC45KSBpbnNldDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY3Qge1xuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNTtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA1OCwgMjIwO1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA0ODtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHJnYmEoMjQ4LCAyNDYsIDI0MywgLjgpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyLjM1cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYnNvbHV0ZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmZpcnN0LWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iaWxkZXIvZm9vZC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDBweCAzNTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cblxuLmZpcnN0LWltZzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0NTBweCA0MDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWNvbmQtaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JpbGRlci9jYWZmZWUuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHggNDAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5zZWNvbmQtaW1nOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU1MHB4IDQ1MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLW91dDtcbn1cblxuLnRoZWVyZC1pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmlsZGVyL2Rla29yYXRpb24uanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHggMzUwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi50aGVlcmQtaW1nOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1MHB4IDQwMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLW91dDtcbn1cblxuLmZvcnRoLWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iaWxkZXIva29zbWV0aWsuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHggMzUwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5mb3J0aC1pbWc6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTgwcHggNDAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2Utb3V0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/show-case-gallery/show-case-gallery.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/show-case-gallery/show-case-gallery.component.ts ***!
    \******************************************************************/

  /*! exports provided: ShowCaseGalleryComponent */

  /***/
  function srcAppShowCaseGalleryShowCaseGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowCaseGalleryComponent", function () {
      return ShowCaseGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ShowCaseGalleryComponent = class ShowCaseGalleryComponent {
      constructor() {
        this.swiperOptions = {
          navigation: {}
        };
        this.config = {
          observer: true,
          observeParents: true,
          // prevents slide to zoom-in when clicking the navigation arrows
          touchEventsTarget: 'wrapper',
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          // pagination: {
          //   el: '.swiper-pagination',
          //   // type: 'bullets',
          //   clickable: true,
          // },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          paginationClickable: true
        };
        this.onResize();
      }

      onResize(event) {
        if (window.innerWidth < 450) {
          this.config.slidesPerView = 1;
        } else {
          this.config.slidesPerView = 3;
        }
      }

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], ShowCaseGalleryComponent.prototype, "onResize", null);
    ShowCaseGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-case-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./show-case-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/show-case-gallery/show-case-gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./show-case-gallery.component.scss */
      "./src/app/show-case-gallery/show-case-gallery.component.scss")).default]
    })], ShowCaseGalleryComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      contentful: {
        spaceId: 'jvwewlyhsrem',
        token: '_-sK3c02S7Vrgq7ZuT5ThCTbpARpqjlm-86V05gF7Ls'
      }
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hendrikdockhorn/Documents/Arbeit/partoutBio/Webseite/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map