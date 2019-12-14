package com.reactnativetest;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MyModule extends ReactContextBaseJavaModule {

    public MyModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestModule";
    }

    @ReactMethod
    public String getTest() {
        return "Test";
//        WritableMap event = Arguments.createMap();
//        event.putString("message", "MyMessage");
        // reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
        //     getId(),
        //     "topChange",
        //     event);
//        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onTest", event);
    }

}
