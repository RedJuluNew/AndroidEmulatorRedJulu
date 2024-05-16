body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.sidebar {
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: -250px;
    background-color: #333;
    color: white;
    transition: 0.3s;
}

.sidebar h2 {
    padding: 20px;
    margin: 0;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar ul li {
    padding: 10px 20px;
    cursor: pointer;
}

.sidebar ul li:hover {
    background-color: #555;
}

.content {
    margin-left: 250px;
    transition: 0.3s;
}

.burger-menu {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
