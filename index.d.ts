import * as Hammer from 'hammerjs';
import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type HammerOptionsWithRecognizers = Omit<HammerOptions, 'recognizers'> & {
  recognizers?: { [gesture: string]: RecognizerOptions };
};

declare namespace ReactHammer {
  interface ReactHammerProps {
    direction?: number;
    options?: HammerOptionsWithRecognizers;
    recognizeWith?: { [gesture: string]: Recognizer | string };
    vertical?: boolean;
    action?: HammerListener;
    onDoubleTap?: HammerListener;
    onPan?: HammerListener;
    onPanCancel?: HammerListener;
    onPanEnd?: HammerListener;
    onPanStart?: HammerListener;
    onPanMove?: HammerListener,
    onPanLeft?: HammerListener,
    onPanRight?: HammerListener,
    onPanUp?: HammerListener,
    onPanDown?: HammerListener,
    onPinch?: HammerListener;
    onPinchCancel?: HammerListener;
    onPinchEnd?: HammerListener;
    onPinchIn?: HammerListener;
    onPinchOut?: HammerListener;
    onPinchStart?: HammerListener;
    onPress?: HammerListener;
    onPressUp?: HammerListener;
    onRotate?: HammerListener;
    onRotateCancel?: HammerListener;
    onRotateEnd?: HammerListener;
    onRotateMove?: HammerListener;
    onRotateStart?: HammerListener;
    onSwipe?: HammerListener;
    onSwipeLeft?: HammerListener;
    onSwipeRight?: HammerListener;
    onSwipeUp?: HammerListener;
    onSwipeDown?: HammerListener;
    onTap?: HammerListener;
  }
}
declare const ReactHammer: React.ComponentClass<ReactHammer.ReactHammerProps>;
export default ReactHammer;
