package org.labWeb2.Services;

public class ImageScaleCalculator {
    public String getImageJSP(double radius){
        return "                <div class=\"graphicPlotContainer\" style=\"--scale: "+(radius/5)+";\">\n" +
                "                    <img src=\"figure/figure.png\" id=\"figure\" style=\"transform: scale(var(--scale));\">\n" +
                "                    <div id=\"coordinates\" class=\"coordinates\"></div>\n" +
                "                </div>";
    }
}
