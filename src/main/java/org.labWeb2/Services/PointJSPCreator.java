package org.labWeb2.Services;

import java.util.ArrayList;

public class PointJSPCreator {
    private ArrayList<String> pointStory;
    public PointJSPCreator(){
        pointStory=new ArrayList<>();
    }
    public String createJSPPoint(double x, double y){
        //        point.style.left = `${((x+5)*56)+15}px`;
//        point.style.top = `${((y*(-1)+5)*56)+15}px`;
        //<div id="point" class="point" style="--x: 375; --y: 375;"></div>\
        String ret= "<div class=\"point\" style=\"--x: "+(int)(((x+5)*56+15))+"; --y: "+(int)(((y*(-1)+5)*56)+15)+";\"></div>";
        pointStory.add(ret);
        return String.join("\n", pointStory);
    }
}
