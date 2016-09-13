package SimpleMath;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class MyMath extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("Plus")) {
            
      
            this.Plus55(args, callbackContext);
            return true;
        }
        return false;
    }


    private void Plus55(JSONArray args, CallbackContext callbackContext) {
        
        int A = args.getInt(0);
        int B = args.getInt(1);
        int ret = A + B;
        callbackContext.success(""+ret);
    }
}
