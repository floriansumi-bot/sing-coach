package com.florian.voicelab;

import android.Manifest;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebChromeClient;

public class MainActivity extends BridgeActivity {

    @Override
    protected BridgeWebChromeClient makeBridgeWebChromeClient() {
        return new BridgeWebChromeClient(this.bridge) {
            @Override
            public void onPermissionRequest(PermissionRequest request) {
                // Grant microphone access to the WebView for getUserMedia
                requestPermissions(
                    new String[]{Manifest.permission.RECORD_AUDIO},
                    1001
                );
                request.grant(request.getResources());
            }
        };
    }
}
