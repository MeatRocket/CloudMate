#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var minimist = require("minimist");
var config_1 = require("./config");
var bundler_1 = require("./bundler");
var compressor_1 = require("./compressor");
var matePackage;
var setPackage = function () {
    matePackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')).toString());
};
var getPackageInfo = function (info) {
    if (!matePackage)
        setPackage();
    return matePackage[info];
};
var args = minimist(process.argv.slice(2));
var versionArgs = args.v || args.version;
var helpArgs = args.h || args.help;
var watchArgs = args.w || args.watch;
var allArgs = args.a || args.all;
var builds = allArgs === true ? null : args._;
if (versionArgs)
    console.log(getPackageInfo('version'));
if (helpArgs) {
    console.log('Usage: mate [builds] [options]');
    console.log('mate\t\t\t will run dev build only');
    console.log('mate dist\t\t will run dist build only');
    console.log('mate dev dist abc\t will run dev, dist, and abc builds only');
    console.log('\nOptions:');
    console.log('-a, --all\t\t run all builds');
    console.log('-h, --help\t\t print mate command line options (currently set)');
    console.log('-v, --version\t\t print CloudMate.js version');
    console.log('-w, --watch\t\t watch defined inputs under the specified build(s)');
}
if (!versionArgs && !helpArgs) {
    var config = config_1.MateConfig.get();
    if (config) {
        if (watchArgs) {
            bundler_1.MateBundler.watch(config, builds);
            compressor_1.MateCompressor.watch(config);
        }
        else {
            bundler_1.MateBundler.execute(config, builds);
            compressor_1.MateCompressor.execute(config);
        }
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx1QkFBMEI7QUFDMUIsMkJBQThCO0FBQzlCLG1DQUFzQztBQUN0QyxtQ0FBc0M7QUFDdEMscUNBQXdDO0FBQ3hDLDJDQUE4QztBQUU5QyxJQUFJLFdBQW1CLENBQUM7QUFDeEIsSUFBTSxVQUFVLEdBQUc7SUFDbEIsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNsRyxDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxVQUFVLElBQVk7SUFDNUMsSUFBSSxDQUFDLFdBQVc7UUFBRSxVQUFVLEVBQUUsQ0FBQztJQUUvQixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFJRixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbkMsSUFBTSxNQUFNLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBSWhELElBQUksV0FBVztJQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFJeEQsSUFBSSxRQUFRLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7SUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO0lBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7Q0FDakY7QUFFRCxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsUUFBUSxFQUFFO0lBQzlCLElBQU0sTUFBTSxHQUFHLG1CQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFaEMsSUFBSSxNQUFNLEVBQUU7UUFDWCxJQUFJLFNBQVMsRUFBRTtZQUNkLHFCQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNsQywyQkFBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ04scUJBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLDJCQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO0tBQ0Q7Q0FDRCIsImZpbGUiOiJjbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcblxyXG5pbXBvcnQgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuaW1wb3J0IG1pbmltaXN0ID0gcmVxdWlyZSgnbWluaW1pc3QnKTtcclxuaW1wb3J0IHsgTWF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgTWF0ZUJ1bmRsZXIgfSBmcm9tICcuL2J1bmRsZXInO1xyXG5pbXBvcnQgeyBNYXRlQ29tcHJlc3NvciB9IGZyb20gJy4vY29tcHJlc3Nvcic7XHJcblxyXG5sZXQgbWF0ZVBhY2thZ2U6IG9iamVjdDtcclxuY29uc3Qgc2V0UGFja2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRtYXRlUGFja2FnZSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9wYWNrYWdlLmpzb24nKSkudG9TdHJpbmcoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrYWdlSW5mbyA9IGZ1bmN0aW9uIChpbmZvOiBzdHJpbmcpIHtcclxuXHRpZiAoIW1hdGVQYWNrYWdlKSBzZXRQYWNrYWdlKCk7XHJcblxyXG5cdHJldHVybiBtYXRlUGFja2FnZVtpbmZvXTtcclxufTtcclxuXHJcbi8vIEFyZ3NcclxuXHJcbmNvbnN0IGFyZ3MgPSBtaW5pbWlzdChwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xyXG5cclxuY29uc3QgdmVyc2lvbkFyZ3MgPSBhcmdzLnYgfHwgYXJncy52ZXJzaW9uO1xyXG5jb25zdCBoZWxwQXJncyA9IGFyZ3MuaCB8fCBhcmdzLmhlbHA7XHJcbmNvbnN0IHdhdGNoQXJncyA9IGFyZ3MudyB8fCBhcmdzLndhdGNoO1xyXG5jb25zdCBhbGxBcmdzID0gYXJncy5hIHx8IGFyZ3MuYWxsO1xyXG5jb25zdCBidWlsZHMgPSBhbGxBcmdzID09PSB0cnVlID8gbnVsbCA6IGFyZ3MuXztcclxuXHJcbi8vIFZlcnNpb25cclxuXHJcbmlmICh2ZXJzaW9uQXJncykgY29uc29sZS5sb2coZ2V0UGFja2FnZUluZm8oJ3ZlcnNpb24nKSk7XHJcblxyXG4vLyBIZWxwXHJcblxyXG5pZiAoaGVscEFyZ3MpIHtcclxuXHRjb25zb2xlLmxvZygnVXNhZ2U6IG1hdGUgW2J1aWxkc10gW29wdGlvbnNdJyk7XHJcblx0Y29uc29sZS5sb2coJ21hdGVcXHRcXHRcXHQgd2lsbCBydW4gZGV2IGJ1aWxkIG9ubHknKTtcclxuXHRjb25zb2xlLmxvZygnbWF0ZSBkaXN0XFx0XFx0IHdpbGwgcnVuIGRpc3QgYnVpbGQgb25seScpO1xyXG5cdGNvbnNvbGUubG9nKCdtYXRlIGRldiBkaXN0IGFiY1xcdCB3aWxsIHJ1biBkZXYsIGRpc3QsIGFuZCBhYmMgYnVpbGRzIG9ubHknKTtcclxuXHRjb25zb2xlLmxvZygnXFxuT3B0aW9uczonKTtcclxuXHRjb25zb2xlLmxvZygnLWEsIC0tYWxsXFx0XFx0IHJ1biBhbGwgYnVpbGRzJyk7XHJcblx0Y29uc29sZS5sb2coJy1oLCAtLWhlbHBcXHRcXHQgcHJpbnQgbWF0ZSBjb21tYW5kIGxpbmUgb3B0aW9ucyAoY3VycmVudGx5IHNldCknKTtcclxuXHRjb25zb2xlLmxvZygnLXYsIC0tdmVyc2lvblxcdFxcdCBwcmludCBDbG91ZE1hdGUuanMgdmVyc2lvbicpO1xyXG5cdGNvbnNvbGUubG9nKCctdywgLS13YXRjaFxcdFxcdCB3YXRjaCBkZWZpbmVkIGlucHV0cyB1bmRlciB0aGUgc3BlY2lmaWVkIGJ1aWxkKHMpJyk7XHJcbn1cclxuXHJcbmlmICghdmVyc2lvbkFyZ3MgJiYgIWhlbHBBcmdzKSB7XHJcblx0Y29uc3QgY29uZmlnID0gTWF0ZUNvbmZpZy5nZXQoKTtcclxuXHJcblx0aWYgKGNvbmZpZykge1xyXG5cdFx0aWYgKHdhdGNoQXJncykge1xyXG5cdFx0XHRNYXRlQnVuZGxlci53YXRjaChjb25maWcsIGJ1aWxkcyk7XHJcblx0XHRcdE1hdGVDb21wcmVzc29yLndhdGNoKGNvbmZpZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRNYXRlQnVuZGxlci5leGVjdXRlKGNvbmZpZywgYnVpbGRzKTtcclxuXHRcdFx0TWF0ZUNvbXByZXNzb3IuZXhlY3V0ZShjb25maWcpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=
