//
//  CalendarManager.m
//  majia
//
//  Created by YYQ on 16/7/4.
//  Copyright © 2016年 Facebook. All rights reserved.
//
#import <UIKit/UIKit.h>
#import "CalendarManager.h"
#import "RCTLog.h"
#import "RCTConvert.h"
#import <YYQKeyChain.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSNumber * __nonnull)secondsSinceUnixEpoch callback:(RCTResponseSenderBlock)callback)
{
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
  RCTLogInfo(@"Pretending to create an event %@ at %@, ^^^^^%@", name, location,date);
  
  if (location.length > 5) {
    callback(@[[NSNull null],@[location,name]]);
  }else{
    callback(@[@"location is too short",@[location,name]]);
  }
  [self creatUI:location];
}

-(void)creatUI:(NSString *)message{
  NSLog(@"message is %@ ", message);
  NSString *udid = [YYQKeyChain getUDIDWithUniqueKey:@"com.llmj.app.udid.instead"];
  NSLog(@"udid from--->>> keyChain %@", udid);

  UIWindow *window = [UIApplication sharedApplication].keyWindow;
  UIView *showView = [[UIView alloc] init];
  
  dispatch_async(dispatch_get_main_queue(), ^{
    
    [showView setBackgroundColor:[UIColor colorWithRed:0 green:0 blue:0 alpha:0.7f]];
    showView.layer.cornerRadius = 5.0f;
    showView.layer.masksToBounds = YES;
    [window addSubview:showView];
    
    UILabel *label = [[UILabel alloc] init];
    label.text = message;
    label.textColor = [UIColor whiteColor];
    label.backgroundColor = [UIColor clearColor];
    label.textAlignment = 1;
    label.font = [UIFont boldSystemFontOfSize:14];
    CGRect realRect = [message boundingRectWithSize:CGSizeMake(200, 100) options:NSStringDrawingUsesLineFragmentOrigin attributes:@{NSFontAttributeName:label.font}  context:nil];
    CGSize labelSize = realRect.size;
    labelSize.height = labelSize.height < 44 ? 44 : labelSize.height;
    labelSize.width = labelSize.width < 100 ? 100 : labelSize.width;
    label.frame = CGRectMake(10, 5, labelSize.width, labelSize.height);
    [showView addSubview:label];
    
    CGRect rect = [[UIScreen mainScreen] bounds];
    CGSize size = rect.size;
    CGFloat width = size.width;
    CGFloat height = size.height;
    showView.frame = CGRectMake((width - labelSize.width - 20) / 2, height / 2 + 20, labelSize.width + 20, labelSize.height + 10);
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
      [UIView animateWithDuration:1 animations:^{
        showView.alpha = 0;
      } completion:^(BOOL finished){
        [showView removeFromSuperview];
      }];
    });
    
  });
}

//-(NSDictionary *) constantsToExport
//{
//  NSString *udid = [YYQKeyChain getUDIDWithUniqueKey:@"com.llmj.app.udid.instead"];
//  NSLog(@"udid from keyChain %@", udid);
//  return @{@"udid":udid};
//}
@end
