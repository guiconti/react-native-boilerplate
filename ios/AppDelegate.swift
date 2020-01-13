//
//  AppDelegate.swift
//  reactnativetest
//
//  Created by Guilherme Conti Teixeira on 13/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!
  
  private func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject : AnyObject]?) -> Bool {
    
    /**
     * Loading JavaScript code - uncomment the one you want.
     *
     * OPTION 1
     * Load from development server. Start the server from the repository root:
     *
     * $ npm start
     *
     * To run on device, change `localhost` to the IP address of your computer
     * (you can get this by typing `ifconfig` into the terminal and selecting the
     * `inet` value under `en0:`) and make sure your computer and iOS device are
     * on the same Wi-Fi network.
     */
    
//    var jsCodeLocation = NSURL(string: "http://localhost:8081/index.ios.bundle?platform=ios&dev=true")
    
    
    /**
    * OPTION 2
    * Load from pre-bundled file on disk. The static bundle is automatically
    * generated by "Bundle React Native code and images" build step.
    */
    
    guard let jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle") else { return true }
    
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "wallet", initialProperties: nil, launchOptions:launchOptions)
    
    self.bridge = rootView.bridge
    
    self.window = UIWindow(frame: UIScreen.main.bounds)
    let rootViewController = UIViewController()
    
    rootViewController.view = rootView
    
    self.window!.rootViewController = rootViewController;
    self.window!.makeKeyAndVisible()
    
    return true
  }
}
