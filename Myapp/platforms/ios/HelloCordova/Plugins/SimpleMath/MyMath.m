/********* MyMath.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface MyMath : CDVPlugin {
  // Member variables go here.
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command;
@end

@implementation MyMath

- (void)Plus:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    int A = [[command.arguments objectAtIndex:0] intValue];
int B= [[command.arguments objectAtIndex:1] intValue];
    int ret = A+B;
    
    
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:ret];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}


    
@end
