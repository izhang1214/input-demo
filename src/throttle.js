import { Date } from "core-js";

// 节流：一段时间内重复触发，最后只执行一次
export function throttle(fn, delay) { 
    var timer = null;
    var begin = new Date().getTime();

    return function () { 
        var _that = this;
        var args = arguments;
        var currentTime = new Date().getTime();

        clearTimeout(timer);

        if (currentTime - begin >= delay) {
            fn.apply(_that, args)
            begin = currentTime
        } else {
            setTimeout(() => {
                fn.apply(_that,args)
            }, delay);
        }
    }
}