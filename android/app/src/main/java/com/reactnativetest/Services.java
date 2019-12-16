package com.reactnativetest;

import android.content.Intent;
import androidx.annotation.Nullable;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

public class Services extends HeadlessJsTaskService {
    public @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        return new HeadlessJsTaskConfig(
                "retrieveFunds",
                null,
                5000, // timeout for the task
                true // optional: defines whether or not  the task is allowed in foreground. Default is false
        );
    }
}
