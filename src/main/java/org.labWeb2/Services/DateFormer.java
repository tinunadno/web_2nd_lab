package org.labWeb2.Services;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class DateFormer {
    public static String getCurrentDate(){
        return  new SimpleDateFormat("dd.MM.yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
    }
}
