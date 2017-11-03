<?php

// accept a term (keyword)
// respond with a value

$query = $_GET['q'];
$all = $_GET['all'];

$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];
$xmldata = '<?xml version="1.0" encoding="UTF-8"?>
<entries>
    <definition name ="definition" author ="Jason">
        A statement of the exact meaning of a word, especially in a dictionary.
        </definition>



        <definition name ="bar" author ="Travis">
        A place that sells alcholic beverages.</definition>



        <definition name ="ajax" author ="Leeroy">
        Technique which involves the use of javascript and xml (or JSON).
        </definition>



        <definition name ="html" author ="Kemesha">
        The standard markup language for creating web pages and web applications.
        </definition>



        <definition name ="css" author ="Markland">
        A style sheet language used for describing the presentation of a document written in a markup language.
        </definition>



        <definition name ="javascript" author ="Aaron">
        A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
        </definition>



        <definition name ="php" author ="Leerose">
        A server-side scripting language, and a powerful tool for making dynamic and interactive websites.
        </definition>
</entries>';

if ($query === "" && $all === "true"){
    header('Content-Type: application/xml');
    $xmlOutput = new SimpleXMLElement($xmldata);
    echo $xmlOutput->asXML();

}
else{
    print "<h3>" . strtoupper($query) . "</h3>";
    print "<p>" . $definition[$query] . "</p>";
}


?>
