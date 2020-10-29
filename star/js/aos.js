'use strict';
! function (value, t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define(t);
    else value.AOS = t()
}(this, function () {
    function debounce(fn, wait, options) {
        function resolve(time) {
            var params = args;
            var key = thisArg;
            return args = thisArg = void 0, start = time, string = fn.apply(key, params)
        }
        function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime;
            return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing &&
                time - start >= delay
        }
        function reset() {
            var time = now();
            if (shouldInvoke(time)) return callback(time);
            timeoutId = setTimeout(reset, function (now) {
                var result = wait - (now - lastCallTime);
                return maxing ? nativeMin(result, delay - (now - start)) : result
            }(time))
        }
        function callback(time) {
            return timeoutId = void 0, trailing && args ? resolve(time) : (args = thisArg = void 0, string)
        }
        function debounced() {
            var time = now();
            var isInvoking = shouldInvoke(time);
            if (args = arguments, thisArg = this, lastCallTime = time, isInvoking) {
                if (void 0 === timeoutId) return function (time) {
                    return start =
                        time, timeoutId = setTimeout(reset, wait), scope ? resolve(time) : string
                }(lastCallTime);
                if (maxing) return timeoutId = setTimeout(reset, wait), resolve(lastCallTime)
            }
            return void 0 === timeoutId && (timeoutId = setTimeout(reset, wait)), string
        }
        var args;
        var thisArg;
        var delay;
        var string;
        var timeoutId;
        var lastCallTime;
        var start = 0;
        var scope = false;
        var maxing = false;
        var trailing = true;
        if ("function" != typeof fn) throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
        return wait = stringify(wait) || 0, isObject(options) && (scope = !!options.leading,
            delay = (maxing = "maxWait" in options) ? nativeMax(stringify(options.maxWait) || 0, wait) : delay, trailing = "trailing" in options ? !!options.trailing : trailing), debounced.cancel = function () {
                if (void 0 !== timeoutId) clearTimeout(timeoutId);
                start = 0;
                args = lastCallTime = thisArg = timeoutId = void 0
            }, debounced.flush = function () {
                return void 0 === timeoutId ? string : callback(now())
            }, debounced
    }
    function isObject(obj) {
        var type = typeof obj;
        return !!obj && ("object" == type || "function" == type)
    }
    function stringify(value) {
        if ("number" == typeof value) return value;
        if (function (x) {
            return "symbol" == typeof x || function (val) {
                return !!val && "object" == typeof val
            }(x) && str.call(x) == row
        }(value)) return val;
        if (isObject(value)) {
            var other = "function" == typeof value.valueOf ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other
        }
        if ("string" != typeof value) return 0 === value ? value : +value;
        value = value.replace(colorToken, "");
        var valueType = reValidName.test(value);
        return valueType || trueRE.test(value) ? isVText(value.slice(2), valueType ? 2 : 8) : a.test(value) ? val : +value
    }
    function isFunction(value) {
        var type =
            typeof value;
        return !!value && ("object" == type || "function" == type)
    }
    function toNumber(value) {
        if ("number" == typeof value) return value;
        if (function (value) {
            return "symbol" == typeof value || function (value) {
                return !!value && "object" == typeof value
            }(value) && fnToStr.call(value) == arrayBufferTag
        }(value)) return NAN;
        if (isFunction(value)) {
            var val = "function" == typeof value.valueOf ? value.valueOf() : value;
            value = isFunction(val) ? val + "" : val
        }
        if ("string" != typeof value) return 0 === value ? value : +value;
        value = value.replace(newlineWithSpaces,
            "");
        var isBinary = c.test(value);
        return isBinary || reViewBoxTagNames.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reKeyword.test(value) ? NAN : +value
    }
    function result(parameters) {
        if (parameters) parameters.forEach(function (mutation) {
            var rowChunk = Array.prototype.slice.call(mutation.addedNodes);
            var cellValue = Array.prototype.slice.call(mutation.removedNodes);
            if (function isEmpty(stack) {
                var i = void 0;
                var node = void 0;
                i = 0;
                for (; i < stack.length; i = i + 1) {
                    if ((node = stack[i]).dataset && node.dataset.aos) return true;
                    if (node.children && isEmpty(node.children)) return true
                }
                return false
            }(rowChunk.concat(cellValue))) return subscriber()
        })
    }
    function render() {
        return navigator.userAgent || navigator.vendor || window.opera || ""
    }
    var commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    var ERR_ACCESSORS_NOT_SUPPORTED = "Expected a function";
    var val = NaN;
    var row = "[object Symbol]";
    var colorToken = /^\s+|\s+$/g;
    var a = /^[-+]0x[0-9a-f]+$/i;
    var reValidName = /^0b[01]+$/i;
    var trueRE =
        /^0o[0-7]+$/i;
    var isVText = parseInt;
    var freeGlobal = "object" == typeof commonjsGlobal && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = "object" == typeof self && self && self.Object === Object && self;
    var shimDefs = freeGlobal || freeSelf || Function("return this")();
    var str = Object.prototype.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function () {
        return shimDefs.Date.now()
    };
    var throttle = function (fn, wait, options) {
        var leading = true;
        var trailing = true;
        if ("function" != typeof fn) throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
        return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, trailing = "trailing" in options ? !!options.trailing : trailing), debounce(fn, wait, {
            leading: leading,
            maxWait: wait,
            trailing: trailing
        })
    };
    var msg = "Expected a function";
    var NAN = NaN;
    var arrayBufferTag = "[object Symbol]";
    var newlineWithSpaces = /^\s+|\s+$/g;
    var reKeyword = /^[-+]0x[0-9a-f]+$/i;
    var c = /^0b[01]+$/i;
    var reViewBoxTagNames = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var inputWin = "object" == typeof commonjsGlobal && commonjsGlobal && commonjsGlobal.Object ===
        Object && commonjsGlobal;
    var winRef = "object" == typeof self && self && self.Object === Object && self;
    var Y = inputWin || winRef || Function("return this")();
    var fnToStr = Object.prototype.toString;
    var max = Math.max;
    var mathmn = Math.min;
    var next = function () {
        return Y.Date.now()
    };
    var init = function (callback, wait, options) {
        function get(name) {
            var tmp = h;
            var data = s;
            return h = s = void 0, p = name, r = callback.apply(data, tmp)
        }
        function encodeURIComponent(x) {
            var delta = x - a;
            return void 0 === a || delta >= wait || delta < 0 || maxing && x - p >= maxWait
        }
        function end() {
            var el =
                next();
            if (encodeURIComponent(el)) return resolve(el);
            c = setTimeout(end, function (t) {
                var result = wait - (t - a);
                return maxing ? end(result, maxWait - (t - p)) : result
            }(el))
        }
        function resolve(x) {
            return c = void 0, trailing && h ? get(x) : (h = s = void 0, r)
        }
        function display() {
            var url = next();
            var url_encoded_url = encodeURIComponent(url);
            if (h = arguments, s = this, a = url, url_encoded_url) {
                if (void 0 === c) return function (a) {
                    return p = a, c = setTimeout(end, wait), key ? get(a) : r
                }(a);
                if (maxing) return c = setTimeout(end, wait), get(a)
            }
            return void 0 === c && (c =
                setTimeout(end, wait)), r
        }
        var h;
        var s;
        var maxWait;
        var r;
        var c;
        var a;
        var p = 0;
        var key = false;
        var maxing = false;
        var trailing = true;
        if ("function" != typeof callback) throw new TypeError(msg);
        return wait = toNumber(wait) || 0, isFunction(options) && (key = !!options.leading, maxWait = (maxing = "maxWait" in options) ? max(toNumber(options.maxWait) || 0, wait) : maxWait, trailing = "trailing" in options ? !!options.trailing : trailing), display.cancel = function () {
            if (void 0 !== c) clearTimeout(c);
            p = 0;
            h = a = s = c = void 0
        }, display.flush = function () {
            return void 0 ===
                c ? r : resolve(next())
        }, display
    };
    var subscriber = function () { };
    var get = function (that, size) {
        if (!(that instanceof size)) throw new TypeError("Cannot call a class as a function");
    };
    var installNativeEvent$2 = function () {
        function t(d, props) {
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(d, descriptor.key, descriptor)
            }
        }
        return function (p, n, a) {
            return n && t(p.prototype,
                n), a && t(p, a), p
        }
    }();
    var setupDefaultSchema = Object.assign || function (b) {
        var i = 1;
        for (; i < arguments.length; i++) {
            var data = arguments[i];
            var k;
            for (k in data)
                if (Object.prototype.hasOwnProperty.call(data, k)) b[k] = data[k]
        }
        return b
    };
    var r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
    var _tacet = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    var regIsJS = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
    var regISJS = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    var device = new (function () {
        function n() {
            get(this, n)
        }
        return installNativeEvent$2(n, [{
            key: "phone",
            value: function () {
                var result = render();
                return !(!r.test(result) && !_tacet.test(result.substr(0, 4)))
            }
        }, {
            key: "mobile",
            value: function () {
                var html = render();
                return !(!regIsJS.test(html) && !regISJS.test(html.substr(0, 4)))
            }
        }, {
            key: "tablet",
            value: function () {
                return this.mobile() && !this.phone()
            }
        }, {
            key: "ie11",
            value: function () {
                return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
            }
        }]),
            n
    }());
    var triggerEvent = function (name, type) {
        var event = void 0;
        return device.ie11() ? (event = document.createEvent("CustomEvent")).initCustomEvent(name, true, true, {
            detail: type
        }) : event = new CustomEvent(name, {
            detail: type
        }), document.dispatchEvent(event)
    };
    var add = function (data) {
        return data.forEach(function (keyReads, canCreateDiscussions) {
            return function (options, arg) {
                var opt = options.options;
                var args = options.position;
                var target = options.node;
                var gotoNewOfflinePage = (options.data, function () {
                    if (options.animated) {
                        (function (dropTarget,
                            wrappersTemplates) {
                            if (wrappersTemplates) wrappersTemplates.forEach(function (fieldValueItem) {
                                return dropTarget.classList.remove(fieldValueItem)
                            })
                        })(target, opt.animatedClassNames);
                        triggerEvent("aos:out", target);
                        if (options.options.id) triggerEvent("aos:in:" + options.options.id, target);
                        options.animated = false
                    }
                });
                if (opt.mirror && arg >= args.out && !opt.once) gotoNewOfflinePage();
                else if (arg >= args.in) {
                    if (!options.animated) {
                        (function (selectNode, wrappersTemplates) {
                            if (wrappersTemplates) wrappersTemplates.forEach(function (t) {
                                return selectNode.classList.add(t)
                            })
                        })(target,
                            opt.animatedClassNames);
                        triggerEvent("aos:in", target);
                        if (options.options.id) triggerEvent("aos:in:" + options.options.id, target);
                        options.animated = true
                    }
                } else if (options.animated && !opt.once) gotoNewOfflinePage()
            }(keyReads, window.pageYOffset)
        })
    };
    var getPosition = function (elem) {
        var _rowPosition = 0;
        var addtop = 0;
        for (; elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop);) {
            _rowPosition = _rowPosition + (elem.offsetLeft - ("BODY" != elem.tagName ? elem.scrollLeft : 0));
            addtop = addtop + (elem.offsetTop - ("BODY" != elem.tagName ? elem.scrollTop :
                0));
            elem = elem.offsetParent
        }
        return {
            top: addtop,
            left: _rowPosition
        }
    };
    var callback = function (html, name, all) {
        var value = html.getAttribute("data-aos-" + name);
        if (void 0 !== value) {
            if ("true" === value) return true;
            if ("false" === value) return false
        }
        return value || all
    };
    var check = function (posts, options) {
        return posts.forEach(function (module, n) {
            var m = callback(module.node, "mirror", options.mirror);
            var once = callback(module.node, "once", options.once);
            var record = callback(module.node, "id");
            var label2 = options.useClassNames && module.node.getAttribute("data-aos");
            var c = [options.animatedClassName].concat(label2 ? label2.split(" ") : []).filter(function (matchPart) {
                return "string" == typeof matchPart
            });
            if (options.initClassName) module.node.classList.add(options.initClassName);
            module.position = {
                in: function (data, mtime, processedBlock) {
                    var y = window.innerHeight;
                    var element = callback(data, "anchor");
                    var error = callback(data, "anchor-placement");
                    var curNum = Number(callback(data, "offset", error ? 0 : mtime));
                    var anchor = error || processedBlock;
                    var node = data;
                    if (element && document.querySelectorAll(element)) node =
                        document.querySelectorAll(element)[0];
                    var result = getPosition(node).top - y;
                    switch (anchor) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            result = result + node.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            result = result + node.offsetHeight;
                            break;
                        case "top-center":
                            result = result + y / 2;
                            break;
                        case "center-center":
                            result = result + (y / 2 + node.offsetHeight / 2);
                            break;
                        case "bottom-center":
                            result = result + (y / 2 + node.offsetHeight);
                            break;
                        case "top-top":
                            result = result + y;
                            break;
                        case "bottom-top":
                            result = result + (y + node.offsetHeight);
                            break;
                        case "center-top":
                            result = result + (y + node.offsetHeight / 2)
                    }
                    return result + curNum
                }(module.node, options.offset, options.anchorPlacement),
                out: m && function (template, i) {
                    window.innerHeight;
                    var element = callback(template, "anchor");
                    var result = callback(template, "offset", i);
                    var node = template;
                    return element && document.querySelectorAll(element) && (node = document.querySelectorAll(element)[0]), getPosition(node).top + node.offsetHeight - result
                }(module.node, options.offset)
            };
            module.options = {
                once: once,
                mirror: m,
                animatedClassNames: c,
                id: record
            }
        }),
            posts
    };
    var match = function () {
        var placeMidpointLine = document.querySelectorAll("[data-aos]");
        return Array.prototype.map.call(placeMidpointLine, function (screens_block) {
            return {
                node: screens_block
            }
        })
    };
    var results = [];
    var ne = false;
    var options = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: false,
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
        startEvent: "DOMContentLoaded",
        //animatedClassName: "aos-animate",
        //initClassName: "aos-init",
        initClassName: "aos-animate",
        useClassNames: false
    };
    var autoPlay = function () {
        return document.all &&
            !window.atob
    };
    var start = function () {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) ne = true;
        if (ne) {
            results = check(results, options);
            add(results);
            window.addEventListener("scroll", throttle(function () {
                add(results, options.once)
            }, 99))
        }
    };
    var done = function () {
        if (results = match(), send(options.disable) || autoPlay()) return remove();
        start()
    };
    var remove = function () {
        results.forEach(function (event, canCreateDiscussions) {
            event.node.removeAttribute("data-aos");
            event.node.removeAttribute("data-aos-easing");
            event.node.removeAttribute("data-aos-duration");
            event.node.removeAttribute("data-aos-delay");
            if (options.initClassName) event.node.classList.remove(options.initClassName);
            if (options.animatedClassName) event.node.classList.remove(options.animatedClassName)
        })
    };
    var send = function (headers) {
        return true === headers || "mobile" === headers && device.mobile() || "phone" === headers && device.phone() || "tablet" === headers && device.tablet() || "function" == typeof headers && true === headers()
    };
    return {
        init: function (collection) {
            var callback;
            var doc;
            var observer;
            return options = setupDefaultSchema(options,
                collection), results = match(), callback = done, doc = window.document, observer = new (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(result), subscriber = callback, observer.observe(doc.documentElement, {
                    childList: true,
                    subtree: true,
                    removedNodes: true
                }), send(options.disable) || autoPlay() ? remove() : (document.querySelector("body").setAttribute("data-aos-easing", options.easing), document.querySelector("body").setAttribute("data-aos-duration", options.duration), document.querySelector("body").setAttribute("data-aos-delay",
                    options.delay), -1 === ["DOMContentLoaded", "load"].indexOf(options.startEvent) ? document.addEventListener(options.startEvent, function () {
                        start(true)
                    }) : window.addEventListener("load", function () {
                        start(true)
                    }), "DOMContentLoaded" === options.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && start(true), window.addEventListener("resize", init(start, 50, true)), window.addEventListener("orientationchange", init(start, 50, true)), results)
        },
        refresh: start,
        refreshHard: done
    }
});
