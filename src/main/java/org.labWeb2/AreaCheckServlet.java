package org.labWeb2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.labWeb2.Services.AreaChecker;
import org.labWeb2.Services.PointJSPCreator;
import org.labWeb2.Services.ResponseCreator;
import org.json.JSONObject;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.PrintWriter;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    private static ResponseCreator responseCreator = new ResponseCreator();
    private static AreaChecker areaChecker = new AreaChecker();
    private static PointJSPCreator pointJSPCreator=new PointJSPCreator();


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String xValue = request.getParameter("xValue");
        PrintWriter out = response.getWriter();
        if (xValue.equals("EXIT")) {
            responseCreator.clearStory();
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
        String areaCheckResult = "<div class=\"grid-item" + (isInside ? " result-text-positive" : " result-text-negative") + "\" id=\"result\">" + (isInside ? "point inside function"
                : "point outside function") + "</div>";
        String pointStory= pointJSPCreator.createJSPPoint(x, y);

        JSONObject jsonResponse = new JSONObject();

        jsonResponse.put("table", tableJSP);
        jsonResponse.put("result", areaCheckResult);
        jsonResponse.put("points", pointStory);
        out.print(jsonResponse.toString());
        out.flush();
    }
}