import logo from "../image-20240206-114436-b8abddc1.jpeg";

function Home() {
    return ( 
<div className = "HomePage">
<h1 className = "homeHeading">MAGYC is Where the Home is!?</h1>
<img src={logo} className="App-logo2" alt="logo" />

<>
<br/>
<br/>
<h1 className = "valueList">Team MAGYC Values!</h1>
<br/>
<h3 className = "value1">When we think of MAGYC we think of HOME, 
    Whether in Colour or Monochrome.
</h3>
<br/>
<h3 className = "value2">With sales pitch smooth and discrete,
 Our reputation sure is solid as concrete.</h3>
 <br/>
 <h3 className = "value3">Keep moving in the right direction,
Settle only for perfection.</h3>
<br/>
<h3 className = "value4">Unless we're ready for success,
We won't shift that tricky address.</h3>
<br/>
<h3 className = "value5">Remain tenacious, engaging, bold,
And all our properties will turn to sold.</h3>

<br/>
</>
</div>
     );
}

export default Home;