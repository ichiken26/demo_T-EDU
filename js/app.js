/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'App',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const learningContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({\n      title: '固有値と固有ベクトル',\n      mainText: `\n    <p>\n      行列は、ベクトルを別のベクトルに変換する「関数」のようなものだと考えることができます。\n      多くの場合、行列 \\\\(A\\\\) をベクトル \\\\(\\\\vec{x}\\\\) に作用させると、\\\\(\\\\vec{x}\\\\) は向きも大きさも変わってしまいます。\n    </p>\n    <p>\n      でも、中には特別なベクトルがあって、行列 \\\\(A\\\\) を作用させても<strong>向きが変わらず、大きさだけが変わる</strong>ものがあります。\n      この特別なベクトルを<strong>固有ベクトル</strong>、その時の大きさの変化率（スカラー倍）を<strong>固有値</strong>と呼びます。\n    </p>\n    <p>\n      数式で書くと、以下のようになります。これが固有値・固有ベクトルの定義式です。\n    </p>\n    <div class=\"formula\">\n      $$ A\\\\vec{x} = \\\\lambda\\\\vec{x} $$\n    </div>\n    <p>\n      ここで、\n      <ul>\n        <li>\\\\(A\\\\): \\\\(n \\\\times n\\\\) の正方行列</li>\n        <li>\\\\(\\\\vec{x}\\\\): 固有ベクトル (ゼロベクトルではない)</li>\n        <li>\\\\(\\\\lambda\\\\): 固有値 (スカラー)</li>\n      </ul>\n    </p>\n    <h3>固有値の求め方</h3>\n    <p>\n      固有値は、次の<strong>固有多項式</strong>（または特性方程式）を解くことで求められます。\n    </p>\n    <div class=\"formula\">\n      $$ \\\\det(A - \\\\lambda I) = 0 $$\n    </div>\n    <p>\n      \\\\(I\\\\) は単位行列です。この方程式を解いて得られた \\\\(\\\\lambda\\\\) が、行列 \\\\(A\\\\) の固有値となります。\n    </p>\n  `,\n      quizzes: [{\n        id: 1,\n        questionText: '次の行列 \\\\(A\\\\) の固有値を求めてください。',\n        matrix: `$$\n                \\\\begin{bmatrix} 4 & 1 \\\\\\\\ 3 & 2 \\\\end{bmatrix}\n              $$`,\n        options: [{\n          id: 1,\n          text: '\\\\(\\\\lambda = 1, 5\\\\)'\n        }, {\n          id: 2,\n          text: '\\\\(\\\\lambda = 2, 3\\\\)'\n        }, {\n          id: 3,\n          text: '\\\\(\\\\lambda = -1, -5\\\\)'\n        }, {\n          id: 4,\n          text: '\\\\(\\\\lambda = 4, 2\\\\)'\n        }],\n        correctAnswerId: 1,\n        explanation: `\n        <p><strong>正解は \\\\(\\\\lambda = 1, 5\\\\) です。</strong></p>\n        <p>固有多項式 \\\\(\\\\det(A - \\\\lambda I) = 0\\\\) を計算します。</p>\n        <p>$$ \\\\det \\\\begin{pmatrix} 4-\\\\lambda & 1 \\\\\\\\ 3 & 2-\\\\lambda \\\\end{pmatrix} = 0 $$</p>\n        <p>\n          行列式を計算すると、<br>\n          \\\\((4-\\\\lambda)(2-\\\\lambda) - 1 \\\\cdot 3 = 0\\\\) <br>\n          \\\\(\\\\lambda^2 - 6\\\\lambda + 5 = 0\\\\) <br>\n          \\\\((\\\\lambda - 1)(\\\\lambda - 5) = 0\\\\)\n        </p>\n        <p>したがって、固有値は \\\\(\\\\lambda = 1, 5\\\\) となります。</p>\n      `\n      }, {\n        id: 2,\n        questionText: '次の行列 B の固有値を求めてください。',\n        matrix: `$$\n                \\\\begin{bmatrix} 2 & -1 \\\\\\\\ -2 & 3 \\\\end{bmatrix}\n              $$`,\n        options: [{\n          id: 1,\n          text: '\\\\(\\\\lambda = 2, 3\\\\)'\n        }, {\n          id: 2,\n          text: '\\\\(\\\\lambda = -2, -3\\\\)'\n        }, {\n          id: 3,\n          text: '\\\\(\\\\lambda = 1, 4\\\\)'\n        }, {\n          id: 4,\n          text: '\\\\(\\\\lambda = -1, -4\\\\)'\n        }],\n        correctAnswerId: 3,\n        explanation: `\n        <p><strong>正解は \\\\(\\\\lambda = 1, 4\\\\) です。</strong></p>\n        <p>固有多項式 \\\\(\\\\det(B - \\\\lambda I) = 0\\\\) を計算します。</p>\n        <p>$$ \\\\det \\\\begin{pmatrix} 2-\\\\lambda & -1 \\\\\\\\ -2 & 3-\\\\lambda \\\\end{pmatrix} = 0 $$</p>\n        <p>\n          行列式を計算すると、<br>\n          \\\\((2-\\\\lambda)(3-\\\\lambda) - (-1) \\\\cdot (-2) = 0\\\\) <br>\n          \\\\(\\\\lambda^2 - 5\\\\lambda + 4 = 0\\\\) <br>\n          \\\\((\\\\lambda - 1)(\\\\lambda - 4) = 0\\\\)\n        </p>\n        <p>したがって、固有値は \\\\(\\\\lambda = 1, 4\\\\) となります。</p>\n      `\n      }]\n    });\n    const selectedAnswers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({});\n    const revealedAnswers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({});\n    function revealAnswer(quizId) {\n      revealedAnswers[quizId] = !revealedAnswers[quizId];\n    }\n    const appContainer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);\n    const typesetMath = () => {\n      if (appContainer.value && window.MathJax && typeof window.MathJax.typesetPromise === 'function') {\n        window.MathJax.typesetPromise([appContainer.value]);\n      }\n    };\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {\n      // 念のため、100ミリ秒待ってから実行\n      setTimeout(typesetMath, 100);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {\n      // 画面が更新されたら、すぐに数式変換を実行\n      typesetMath();\n    });\n    const __returned__ = {\n      learningContent,\n      selectedAnswers,\n      revealedAnswers,\n      revealAnswer,\n      appContainer,\n      typesetMath,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,\n      onUpdated: vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://src/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D\n}");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  id: \"app\",\n  ref: \"appContainer\"\n};\nconst _hoisted_2 = {\n  class: \"container\"\n};\nconst _hoisted_3 = {\n  class: \"main-content\"\n};\nconst _hoisted_4 = [\"innerHTML\"];\nconst _hoisted_5 = {\n  class: \"quiz-area\"\n};\nconst _hoisted_6 = [\"innerHTML\"];\nconst _hoisted_7 = {\n  class: \"options\"\n};\nconst _hoisted_8 = [\"id\", \"name\", \"value\", \"onUpdate:modelValue\"];\nconst _hoisted_9 = [\"for\", \"innerHTML\"];\nconst _hoisted_10 = [\"onClick\"];\nconst _hoisted_11 = {\n  key: 0,\n  class: \"explanation\"\n};\nconst _hoisted_12 = [\"innerHTML\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<aside class=\\\"sidebar\\\" data-v-7ba5bd90><h2 data-v-7ba5bd90>メニュー</h2><ul data-v-7ba5bd90><li data-v-7ba5bd90><a href=\\\"/bector\\\" data-v-7ba5bd90>ベクトルと行列</a></li><li data-v-7ba5bd90><a href=\\\"/calc\\\" data-v-7ba5bd90>行列の四則演算</a></li><li data-v-7ba5bd90><a href=\\\"/\\\" data-v-7ba5bd90>固有値と固有ベクトル</a></li><li data-v-7ba5bd90><a href=\\\"/diagonalization\\\" data-v-7ba5bd90>行列の対角化</a></li><li data-v-7ba5bd90><a href=\\\"/application\\\" data-v-7ba5bd90>行列の応用</a></li></ul></aside>\", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"main\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.learningContent.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    innerHTML: $setup.learningContent.mainText\n  }, null, 8 /* PROPS */, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"aside\", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.learningContent.quizzes, (quiz, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: quiz.id,\n      class: \"quiz-card\"\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(`Q${index + 1}. ${quiz.questionText}`), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n      class: \"matrix-container\",\n      innerHTML: quiz.matrix\n    }, null, 8 /* PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(quiz.options, option => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n        key: option.id,\n        class: \"option\"\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n        type: \"radio\",\n        id: `q${quiz.id}_o${option.id}`,\n        name: `quiz_${quiz.id}`,\n        value: option.id,\n        \"onUpdate:modelValue\": $event => $setup.selectedAnswers[quiz.id] = $event\n      }, null, 8 /* PROPS */, _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.selectedAnswers[quiz.id]]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n        for: `q${quiz.id}_o${option.id}`,\n        innerHTML: option.text\n      }, null, 8 /* PROPS */, _hoisted_9)]);\n    }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      onClick: $event => $setup.revealAnswer(quiz.id),\n      class: \"answer-button\"\n    }, \"解答を見る\", 8 /* PROPS */, _hoisted_10), $setup.revealedAnswers[quiz.id] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n      innerHTML: quiz.explanation\n    }, null, 8 /* PROPS */, _hoisted_12)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n  }), 128 /* KEYED_FRAGMENT */))])])], 512 /* NEED_PATCH */);\n}\n\n//# sourceURL=webpack://src/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* 全体のスタイル */\\nbody[data-v-7ba5bd90] {\\n  margin: 0;\\n  font-family: 'Helvetica Neue', Arial, sans-serif;\\n  background-color: #f4f6f9;\\n}\\n.container[data-v-7ba5bd90] {\\n  display: flex;\\n  min-height: 100vh;\\n  max-width: 1485px; /* コンテンツの最大幅（お好みで調整してね） */\\n  margin: 0 auto;    /* 左右の余白を自動で調整して中央寄せ */\\n}\\n.sidebar[data-v-7ba5bd90] {\\n  flex: 0 0 240px;\\n  background-color: #ffffff;\\n  border-right: 1px solid #e0e0e0;\\n}\\n\\n/* メインコンテンツ (中央) */\\n.main-content[data-v-7ba5bd90] {\\n  flex: 2;\\n  background-color: #ffffff;\\n  color: #333;\\n  padding: 40px 50px;\\n  line-height: 1.7;\\n}\\n.main-content h1[data-v-7ba5bd90] {\\n  margin-top: 0;\\n  font-size: 2.5rem;\\n  color: #2c3e50;\\n}\\n\\n/* v-htmlで挿入される要素のスタイル */\\n.main-content[data-v-7ba5bd90] h3 {\\n  margin-top: 40px;\\n  border-bottom: 2px solid #3498db;\\n  padding-bottom: 10px;\\n  color: #2c3e50;\\n}\\n.main-content[data-v-7ba5bd90] ul {\\n  padding-left: 20px;\\n}\\n.main-content[data-v-7ba5bd90] .formula {\\n  text-align: center;\\n  font-size: 1.2rem;\\n  margin: 20px 0;\\n  padding: 20px;\\n  background-color: #ecf0f1;\\n  border-radius: 8px;\\n}\\n\\n/* クイズエリア (右) */\\n.quiz-area[data-v-7ba5bd90] {\\n  flex: 1;\\n  background-color: #f4f6f9;\\n  padding: 30px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 30px;\\n  overflow-y: auto;\\n}\\n.quiz-card[data-v-7ba5bd90] {\\n  background-color: #ffffff;\\n  border-radius: 12px;\\n  padding: 25px;\\n  box-shadow: 0 4px 12px rgba(0,0,0,0.08);\\n}\\n.quiz-card h2[data-v-7ba5bd90] {\\n  font-size: 1.1rem;\\n  color: #2c3e50;\\n  margin-top: 0;\\n  margin-bottom: 20px;\\n}\\n\\n/* 行列テーブルのスタイル */\\n.matrix-table[data-v-7ba5bd90] {\\n  margin: 0 auto 20px auto;\\n  border-collapse: collapse;\\n  font-size: 1.2rem;\\n}\\n.matrix-table td[data-v-7ba5bd90] {\\n  border: 1px solid #7f8c8d;\\n  padding: 10px 15px;\\n  text-align: center;\\n}\\n/* テーブルのカッコのような見た目を作る */\\n.matrix-table[data-v-7ba5bd90] {\\n  border-left: 2px solid #34495e;\\n  border-right: 2px solid #34495e;\\n  border-radius: 10px;\\n}\\n.matrix-table tr:first-child td[data-v-7ba5bd90] { border-top: none;\\n}\\n.matrix-table tr:last-child td[data-v-7ba5bd90] { border-bottom: none;\\n}\\n.matrix-table td[data-v-7ba5bd90]:first-child { border-left: none;\\n}\\n.matrix-table td[data-v-7ba5bd90]:last-child { border-right: none;\\n}\\n.options[data-v-7ba5bd90] {\\n  margin-top: 15px;\\n}\\n.option[data-v-7ba5bd90] {\\n  margin-bottom: 12px;\\n  display: flex;\\n  align-items: center;\\n}\\n.option input[data-v-7ba5bd90] {\\n  margin-right: 10px;\\n}\\n\\n/* 解答ボタン */\\n.answer-button[data-v-7ba5bd90] {\\n  display: block;\\n  width: 100%;\\n  padding: 12px;\\n  margin-top: 20px;\\n  border: none;\\n  background-color: #3498db;\\n  color: white;\\n  font-size: 1rem;\\n  border-radius: 8px;\\n  cursor: pointer;\\n  transition: background-color 0.3s;\\n}\\n.answer-button[data-v-7ba5bd90]:hover {\\n  background-color: #2980b9;\\n}\\n\\n/* 解説エリア */\\n.explanation[data-v-7ba5bd90] {\\n  margin-top: 20px;\\n  padding: 20px;\\n  background-color: #f8f9fa;\\n  border: 1px solid #dee2e6;\\n  border-radius: 8px;\\n  line-height: 1.6;\\n}\\n/* 解説内の数式スタイル */\\n.explanation[data-v-7ba5bd90] .formula {\\n  text-align: center;\\n  margin: 15px 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://src/./src/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D\n}");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("{// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"13e81a4d\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) // removed by dead control flow\n{}\n\n//# sourceURL=webpack://src/./src/App.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D\n}");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&scoped=true */ \"./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=js */ \"./src/App.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-7ba5bd90\"],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) // removed by dead control flow\n{}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://src/./src/App.vue?\n}");

/***/ }),

/***/ "./src/App.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************!*\
  !*** ./src/App.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://src/./src/App.vue?\n}");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css":
/*!*****************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://src/./src/App.vue?\n}");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true":
/*!***************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true\");\n\n\n//# sourceURL=webpack://src/./src/App.vue?\n}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://src/./src/main.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksrc"] = self["webpackChunksrc"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;