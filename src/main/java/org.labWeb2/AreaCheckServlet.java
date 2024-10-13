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
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line).append("\n");
        }

        // Parse the request body
        String[] lines = sb.toString().split("\n");
        double x = Double.parseDouble(lines[0].split(":")[1]);
        double y = Double.parseDouble(lines[1].split(":")[1]);
        double r = Double.parseDouble(lines[2].split(":")[1]);

        // Check if the point is within the circle
        boolean isInside = (x * x + y * y) <= (r * r);

        // Prepare response
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println(isInside ? "Point is inside the area." : "Point is outside the area.");
    }
}