package org.labWeb2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.PrintWriter;

@WebServlet(name="AreaCheckServlet",value="/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String xValue = request.getParameter("xValue");
        String yValue = request.getParameter("yValue");
        String radius = request.getParameter("radius");

        double x=Double.parseDouble(xValue);
        double y=Double.parseDouble(yValue);
        double r=Double.parseDouble(radius);

        // Check if the point is within the circle
        boolean isInside = (x * x + y * y) <= (r * r);

        // Prepare response
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println(isInside ? "Point is inside the area." : "Point is outside the area.");
    }
}