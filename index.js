<!DOCTYPE html>
<html>
<head>
  <title>Accessing Environment Variable</title>
</head>
<body>
  <script>
    // Access the environment variable directly in a JavaScript variable
    const myVariable = '<%= process.env.PORT %>';
    console.log(myVariable);

    // Alternatively, define the environment variable in the script tag
    <% const myVariable = process.env.PORT %>
    console.log('<%= myVariable %>');
  </script>
</body>
</html>
