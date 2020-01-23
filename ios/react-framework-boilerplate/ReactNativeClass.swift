//
//  ReactNativeClass.swift
//  react-framework-boilerplate
//
//  Created by Guilherme Conti Teixeira on 14/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import UIKit

public class ReactNativeClass: NSObject {
  public func testReactNative() -> String {
    return "React native"
  }
  
  public func getView() -> RCTRootView {
    guard let jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle") else { return true }
    
    let reactView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "wallet", initialProperties: nil, launchOptions: nil)
    
    return reactView
  }
}
