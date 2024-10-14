package org.labWeb2.Services;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class AreaChecker {
    private BufferedImage functionImage;
    public AreaChecker(){
        try {
            functionImage = ImageIO.read(getClass().getResourceAsStream("/figure.jpg"));
        }catch (IOException e){
            e.printStackTrace();
        }
    }

    public boolean checkPoint(double x, double y, double r){
        x=x/(2*r)+0.5;
        y=((y*(-1))/(r)+0.5);

        if(x >= 1.0 || x < 0 || y>= 1.0 || y<0)return false;

        x*=functionImage.getWidth();
        y*=functionImage.getHeight();

        int color=functionImage.getRGB((int)x, (int)y);

        return color==-9792559;
    }
}
