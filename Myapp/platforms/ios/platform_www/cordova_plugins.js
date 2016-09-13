cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "SimpleMath.MyMath",
        "file": "plugins/SimpleMath/www/MyMath.js",
        "pluginId": "SimpleMath",
        "clobbers": [
            "cordova.plugins.MyMath"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-device": "1.1.2",
    "SimpleMath": "1.0.0"
};
// BOTTOM OF METADATA
});