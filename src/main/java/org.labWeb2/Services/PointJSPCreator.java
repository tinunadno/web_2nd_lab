package org.labWeb2.Services;

import java.util.ArrayList;

public class PointJSPCreator {
    private ArrayList<String> pointStory;
    public PointJSPCreator(){
        pointStory=new ArrayList<>();
    }
    public String createJSPPoint(double x, double y, boolean isInside){
        String ret= "<div class=\""+(isInside ? "point_pos" : "point")+"\" style=\"--x: "+(int)(((x+5)*56+15))+"; --y: "+(int)(((y*(-1)+5)*56)+15)+";\"></div>";
        pointStory.add(ret);
        return String.join("\n", pointStory);
    }
}
