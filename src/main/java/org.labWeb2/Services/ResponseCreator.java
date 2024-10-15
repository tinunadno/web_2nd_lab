package org.labWeb2.Services;

import java.util.ArrayList;

public class ResponseCreator {
    private ArrayList<String> tableStory;
    private static String startTime=DateFormer.getCurrentDate();
    public ResponseCreator(){
        tableStory=new ArrayList<>();
    }
    public String createResponse(String xValue, String yValue, String radius, long executionTime, boolean isInside){
        String newRow = "<tr class=\"th\">\n" +
                "<td class=\"tableHeader\">"+(tableStory.size()+1)+"</td>\n" +
                "<td class=\"th\">"+xValue+"</td>\n" +
                "<td class=\"th\">"+yValue+"</td>\n" +
                "<td class=\"th\">"+radius+"</td>\n" +
                "<td class=\"th\">"+((double)executionTime/1000000000.0)+"</td>\n" +
                "<td class=\"th\">"+startTime+"</td>\n" +
                "<td class=\"th"+(isInside ? " col_1" : " col_0")+"\">"+(isInside ? "true" : "false")+"</td>\n" +
                "</tr>";
        tableStory.add(newRow);
        return String.join("\n", tableStory);
    }

    public void clearStory(){
        tableStory.clear();
    }
    public String getHistory(){
        return String.join("\n", tableStory);
    }
}
