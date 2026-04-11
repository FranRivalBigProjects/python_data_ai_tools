function analyze(){
let input=document.getElementById('input').value||"";
let insights="";
let output="";

// pandas query
if(input.includes("select") || input.includes("filter")){
  output += "df.query('column > value')\n";
}

// dataframe
if(input.includes(",")){
  insights += "CSV/DataFrame detected.<br>";
}

// numpy
if(input.includes("[") && input.includes("]")){
  insights += "Matrix-like structure detected.<br>";
}

// cleaning
if(input.includes("null") || input.includes("NaN")){
  insights += "Missing values detected.<br>";
}

// profiler
if(input.split("\n").length > 10){
  insights += "Dataset size moderate/large.<br>";
}

document.getElementById('result').innerHTML =
"<b>Output:</b><pre>"+output+"</pre><br>"+insights;
}
