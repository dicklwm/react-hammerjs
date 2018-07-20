React-HammerJS
==============

[ReactJS](http://facebook.github.io/react/) 与 [HammerJS](http://hammerjs.github.io) 的整合. 支撑你React应用的手势操作.

## 安装

用 `React-HammerJS` 最简单的方法就是从 `npm` 或 `yarn`

```bash
$ npm install react-hammerjs --save

or

$ yarn add react-hammerjs
```

## 用法

Hammer组件包裹其他React组件，通过绑定事件去处理手势

## 手势

### Tap
英文API：http://hammerjs.github.io/recognizer-tap/

识别 `轻点` 屏幕手势

| 配置项    | 默认  | 描述       |
|-----------|----------|-------------------|
| event     | tap      | 事件名 |
| pointers  | 1        | 多少指触发 |
| taps      | 1        | 点多少下触发 |
| interval  | 300      | 在多少毫秒内算连续点击 |
| time      | 250      | 多少毫秒后算按住 |
| threshold | 2        | 点击过程中，多少移动值是被允许 |
| posThreshold | 10    | 连续点击距离相隔多少有效 |

### Pan
英文API：http://hammerjs.github.io/recognizer-pan/

识别在允许的方向下 `按下` 、 `移动` 的手势

| 配置项    | 默认  | 描述       |
| -----------|----------|-------------------|
| event     | pan      | 事件名 |
| pointers  | 1        | 多少指触发 |
| threshold | 10       | 点击过程中，多少移动值是被允许 |
| direction | DIRECTION_ALL | 方向 |


### Pinch
英文API：http://hammerjs.github.io/recognizer-pinch/

识别双指或多指，`捏` 或 `张` 的手势

| 配置项    | 默认  | 描述       |
| -----------|----------|-------------------|
| event     | pinch    | 事件名 |
| pointers  | 2        | 多少指触发，>= 2 |
| threshold | 0        | 缩小放大的最小识别比率 |

### Rotate
英文API：http://hammerjs.github.io/recognizer-rotate/

识别双指或多指， 已圆的运动轨迹， `旋转` 的手势

| 配置项    | 默认  | 描述       |
| -----------|----------|-------------------|
| event     | pinch    | 事件名 |
| pointers  | 2        | 多少指触发，>= 2 |
| threshold | 0        | 旋转的最小识别比率 |

### Press
英文API： http://hammerjs.github.io/recognizer-press/

识别 `按住` 不动x秒的手势

| 配置项    | 默认  | 描述       |
|-----------|----------|-------------------|
| event     | pinch    | 事件名 |
| pointers  | 1        | 多少指触发 |
| threshold | 9        | 按住过程中，允许多少距离被移动 |
| time      | 251      | 持续多少秒算按住 |

### Swipe
英文API： http://hammerjs.github.io/recognizer-swipe/

识别快速 `滑动` 一定距离的手势

| 配置项    | 默认  | 描述       |
|-----------|----------|-------------------|
| event     | swipe    | 事件名 |
| pointers  | 1        | 多少指触发 |
| threshold | 10       | 滑动的最小距离 |
| direction | DIRECTION_ALL | 滑动的方向 |
| velocity  | 0.3      | 滑动的最小速度，px 除以 ms|

## 属性

### props - 事件属性
* `onTap`
* `onDoubleTap`
* `onPan`
* `onPanCancel`
* `onPanEnd`
* `onPanStart`
* `onPanMove`
* `onPanLeft`
* `onPanRight`
* `onPanUp`
* `onPanDown`
* `onPinch`
* `onPinchCancel`
* `onPinchEnd`
* `onPinchIn`
* `onPinchOut`
* `onPinchStart`
* `onPress`
* `onPressUp`
* `onRotate`
* `onRotateCancel`
* `onRotateEnd`
* `onRotateMove`
* `onRotateStart`
* `onSwipe`
* `onSwipeRight`
* `onSwipeLeft`
* `onSwipeUp`
* `onSwipeDown`
* `action` - 与 `onTap` 相同，但是也会触发 `onPress`.

### props - 表现属性
* `direction` - (string) `'DIRECTION_ALL'` | `'DIRECTION_HORIZONTAL'` | `'DIRECTION_VERTICAL'`.  用于限制 `pan` 和 `swipe` 的方向。 这里的值也可以是： `'DIRECTION_NONE'` |`'DIRECTION_LEFT'` | `'DIRECTION_RIGHT'` | `'DIRECTION_UP'` | `'DIRECTION_DOWN'`.

* `options` - 可以配置 `Hammer` 的 `manager`。这些属性将于默认属性合并

### 例子

```jsx
import Hammer from 'react-hammerjs';

// 默认配置
<Hammer onTap={handleTap} onSwipe={handleSwipe}><div>Tap Me</div></Hammer>

// 自定义配置
const options = {
  touchAction:'compute',
  recognizers: {
    tap: {
        time: 600,
        threshold: 100
    }
  }
};

<Hammer onTap={handleTap} options={options}><div>Tap Me</div></Hammer>
```

# 禁用的事件

通常情况下，`pinch` 和 `rotate`事件在 `hammer.js` 里面是被禁止的，因为他们会影响元素的 `touch-action`。你可以用配置的方式去开启这些事件

比如，在 `canvas` 元素里面启用 `pinch` 事件：

```jsx
import Hammer from 'react-hammerjs';

<Hammer
  onPinch={handlePinch}
  options={{
      recognizers: {
        pinch: { enable: true }
      }
  }}>
  <canvas></canvas>
</Hammer>
```
详细的禁用事件可以查看以下API文档：
- http://hammerjs.github.io/recognizer-rotate/
- http://hammerjs.github.io/recognizer-pinch/

# Fork By
https://github.com/JedWatson/react-hammerjs


# License

MIT Licensed. Copyright (c) Jed Watson 2017.
