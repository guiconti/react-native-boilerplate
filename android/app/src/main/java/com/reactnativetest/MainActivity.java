package com.reactnativetest;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  public String getMainComponentName() {
    return "reactnativetest";
  }

  public void testTest() {
    // ReactInstanceManager reactInstanceManager = getReactNativeHost().getReactInstanceManager();
    // ReactContext reactContext = reactInstanceManager.getCurrentReactContext();
    // WritableMap event = Arguments.createMap();
    // event.putString("message", "MyMessage");
    // ReactContext reactContext = (ReactContext)getContext();
    // // reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
    // //     getId(),
    // //     "topChange",
    // //     event);
    // reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onTest", event);
  }

  public void pleaseWork() {
    // ReactInstanceManager reactInstanceManager = getReactNativeHost().getReactInstanceManager();
    // ReactContext reactContext = reactInstanceManager.getCurrentReactContext();

    // CatalystInstance catalystInstance = reactContext.getCatalystInstance();
    // WritableNativeArray params = new WritableNativeArray();
    // params.pushString("Message to show using nameOfJsMethod");
    // catalystInstance.callFunction("JavaScriptVisibleToJava", "nameOfJsMethod", params);
  }
}
