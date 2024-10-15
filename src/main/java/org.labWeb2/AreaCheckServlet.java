package org.labWeb2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.labWeb2.Services.AreaChecker;
import org.labWeb2.Services.ImageScaleCalculator;
import org.labWeb2.Services.ResponseCreator;
import org.json.JSONObject;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.PrintWriter;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    private static ResponseCreator responseCreator = new ResponseCreator();
    private static ImageScaleCalculator imageScaleCalculator = new ImageScaleCalculator();
    private static AreaChecker areaChecker = new AreaChecker();

    private String lastResponse = "";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String xValue = request.getParameter("xValue");
        PrintWriter out = response.getWriter();
        if (xValue.equals("EXIT")) {
            responseCreator.clearStory();
            return;
        }
        if (xValue.equals("UPDATE")) {
            if(lastResponse.equals("")){
                JSONObject jsonResponse = new JSONObject();
                jsonResponse.put("table", "<tr></tr>");
                jsonResponse.put("image", "            <div class=\"graphicPlotContainer\" style=\"--scale: 0.5;\" id=\"graphicPlot\">\n" +
                        "                <img src=\"figure/figure.png\" id=\"figure\" style=\"transform: scale(var(--scale));\">\n" +
                        "            </div>");
                jsonResponse.put("result", "<div></div>");
                out.print(jsonResponse.toString());
            }else{
                out.print(lastResponse);
            }
            return;
        }

        long executionStartTime = System.nanoTime();
        String yValue = request.getParameter("yValue");
        String radius = request.getParameter("radius");
        double x = Double.parseDouble(xValue);
        double y = Double.parseDouble(yValue);
        double r = Double.parseDouble(radius);
        x = (double) ((int) (x * 1000)) / 1000d;
        y = (double) ((int) (y * 1000)) / 1000d;

        // Check if the point is within the circle
        boolean isInside = areaChecker.checkPoint(x, y, r);

        // Prepare response
        response.setContentType("text/plain");

        long executionEndTime = System.nanoTime();

        String tableJSP = responseCreator.createResponse(x + "", y + "", radius,
                (executionEndTime - executionStartTime), isInside);
        String imageJSP = imageScaleCalculator.getImageJSP(r);
        String areaCheckResult = "<div class=\"grid-item" + (isInside ? " result-text-positive" : " result-text-negative") + "\" id=\"result\">" + (isInside ? "point inside function"
                : "point outside function") + "</div>";

        JSONObject jsonResponse = new JSONObject();

        jsonResponse.put("table", tableJSP);
        jsonResponse.put("image", imageJSP);
        jsonResponse.put("result", areaCheckResult);
        out.print(jsonResponse.toString());
        lastResponse = jsonResponse.toString();
        out.flush();
    }
}