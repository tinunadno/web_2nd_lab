<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://xmlns.jcp.org/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC"-//W3C//DTD HTML 4.01//EN""http://www.w3.org/TR/html4/strict.dtd">
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>base front sample</title>
    <link rel="stylesheet" href="css/baseStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="./css/headerStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="./css/footerStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/userInterfaceStructureStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/selectStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/interfaceGrid.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/textFieldStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/graphicStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/graphicPlotStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/tableStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/buttonStyle.css"> <!-- Подключение CSS файла -->
    <link rel="stylesheet" href="css/RadioButtonStyle.css"> <!-- Подключение CSS файла -->
    <script src="js/inputHandler.js"></script>
    <script src="js/eventHandler.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/requestHandler.js"></script>
    <script src="js/imageClickHandler.js"></script>
</head>
<body class="body">
<header class="header">Перминов Юра Константинович P3231 Вариант №223317</header>
<div class="middle">
    <div class="userInterfacePanel">
        <div class="left">
            <form id="userInputForm" action="ControllerServlet" method="POST">
                <div class="userInput">
                    <div class='grid-container'>
                        <div class="grid-item">X:</div>
                        <div class="grid-item">
                            <select class="select" name="xValue" id="user-input-selectBox">
                                <option value="-5">-5</option>
                                <option value="-4">-4</option>
                                <option value="-3">-3</option>
                                <option value="-2">-2</option>
                                <option value="-1">-1</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="grid-item">Y:</div>
                        <div class="grid-item">
                            <input class="textField" name="yValue" id="user-input-textField" type="text">
                        </div>
                        <div class="grid-item">radius:</div>
                        <div class="grid-item" id="radioButtonDiv">
                            <input type="radio" name="radius" id="choice1" value="1" />
                            <label for="choice1">1</label>
                            <input type="radio" name="radius" id="choice2" value="1.5"/>
                            <label for="choice2">1.5</label>
                            <input type="radio" name="radius" id="choice3" value="2"/>
                            <label for="choice3">2</label>
                            <input type="radio" name="radius" id="choice4" value="2.5"/ checked>
                            <label for="choice4">2.5</label>
                            <input type="radio" name="radius" id="choice5" value="3"/>
                            <label for="choice5">3</label>
                        </div>
                        <button class="grid-item button" type="button" id = "responseButton">get server response</button>
                        <div class="grid-item result-text-positive" id="result"></div>
                    </div>
                </div>
            </form>
            <div class="userInputHistory">

                <table class="table" id="userHistoryTable">
                    <thead id="tableHeaders">
                    <tr>
                        <th class="tableHeader">№</th>
                        <th class="tableHeader">X</th>
                        <th class="tableHeader">Y</th>
                        <th class="tableHeader">R</th>
                        <th class="tableHeader">request time</th>
                        <th class="tableHeader">server start</th>
                        <th class="tableHeader">response</th>
                    </tr>
                    </thead>
                    <tbody id="tableBody">

                    </tbody>

                </table>

            </div>
        </div>
        <div class="graphicSpot">
            <div class="graphic">
                <img src="figure/graphLines.png" alt="Interactive Image" id="interactive-image">
                <div id="point" class="point"></div>
            </div>
            <div class="graphicPlotContainer" style="--scale: 0.5;" id="graphicPlot">
                <img src="figure/figure.png" id="figure" style="transform: scale(var(--scale));">
            </div>
        </div>
    </div>
</div>
<footer class="footer">v 1.78</footer>
</body>
</html>
