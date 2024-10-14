package org.labWeb2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.labWeb2.Services.ImageScaleCalculator;
import org.labWeb2.Services.TableCreator;
import org.json.JSONObject;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.PrintWriter;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    private static TableCreator tableCreator = new TableCreator();
    private static ImageScaleCalculator imageScaleCalculator = new ImageScaleCalculator();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long executionStartTime = System.nanoTime();

        String xValue = request.getParameter("xValue");
        String yValue = request.getParameter("yValue");
        String radius = request.getParameter("radius");

        double x = Double.parseDouble(xValue);
        double y = Double.parseDouble(yValue);
        double r = Double.parseDouble(radius);

        // Check if the point is within the circle
        boolean isInside = (x * x + y * y) <= (r * r);

        // Prepare response
        response.setContentType("text/plain");

        long executionEndTime = System.nanoTime();

        String tableJSP = tableCreator.getTable(xValue, yValue, radius,
                (executionEndTime - executionStartTime), isInside);
        String imageJSP = imageScaleCalculator.getImageJSP(r);
        //<div class="grid-item" id="result"></div>
        String areaCheckResult = "<div class=\"grid-item\" id=\"result\">" + (isInside ? "point inside function"
                : "point outside function") + "</div>";

        JSONObject jsonResponse = new JSONObject();

        jsonResponse.put("table", tableJSP);
        jsonResponse.put("image", imageJSP);
        jsonResponse.put("result", areaCheckResult);

        PrintWriter out = response.getWriter();
        out.print(jsonResponse.toString());
        out.flush();
    }
}