<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="This is Rey's Stock Chart project">
    <meta name="keywords" content="Stock Market, Stock Chart, Stock, JavaScript, Stock API">
    <meta name="author" content="Rey Walter Magbanua">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script type="text/javascript" src="./main.js" async defer></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>Stock Chart Project</title>
  </head>

  <style media="screen">

    strong, p {
      font-family: 'Roboto', sans-serif;
    }

    body h1 {
      text-align: center;
      font-family: 'Roboto', sans-serif;
    }

    body label {
      display: block;
      margin-top: 2em;
      margin-bottom: 5px;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
    }

  </style>

  <body>

    <h1>Project Made By: Rey Walter Magbanua</h1>

    <div>
      <canvas id="myChart"></canvas>
    </div>

    <form action="index.html" method="post">
      <label for="search">Search Symbol</label>
      <input type="text" id="search" placeholder="Ex. TSLA">
      <input type="submit" value="Submit">
    </form>

    <div class="div-info">
      <p><strong>Information:</strong> </p>
      <p><strong>Symbol:</strong> </p>
      <p><strong>Last Refreshed:</strong> </p>
      <p><strong>Time Zone:</strong> </p>
    </div>

  </body>

</html>
