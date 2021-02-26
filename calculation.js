//variables needed
var a="",b="";
var sign="";

//performs the actual function
function operate()
{
	switch(sign)
	{
		case '+':
			a=String(Number(a)+Number(b))
			document.getElementById('first-screen').innerHTML=a;
			b="";sign="";
			break;
		case '-':
			a=String(Number(a)-Number(b))
			document.getElementById('first-screen').innerHTML=a;
			b="";sign="";
			break;
		case '*':
			a=String(Number(a)*Number(b))
			document.getElementById('first-screen').innerHTML=a;
			b="";sign="";
			break;
		case '/':
			if(b=='0')
			{
				document.getElementById('first-screen').innerHTML="Cannot divide by zero!";
				a="";b="";c="";
				break;
			}
			else
			{
				a=String(Number(a)/Number(b))
				document.getElementById('first-screen').innerHTML=a;
				b="";sign="";
				break;
			}
	}
}

//triggered when a button is pressed
function perform(m)
{
	
	//checks for =
	if(m=="=")
	{
		if((a!="")&(b!=""))
		{
			operate();
		}
	}
	//checks for signs
	else if((m=="+")||(m=="-")||(m=="*")||(m=="/"))
	{
		if((a!="")&&(b==""))
		{
			sign=m;
			document.getElementById('first-screen').innerHTML=a+sign;
		}
		else if((a!="")&&(b!=""))
		{
			operate();
			sign=m;
			document.getElementById('first-screen').innerHTML=a+sign;
		}
	}
	//checks for numbers and decimals
	else
	{
		if(sign=="")
		{
			a=a+m;
			document.getElementById('first-screen').innerHTML=a;
		}
		else
		{
			b=b+m;
			document.getElementById('first-screen').innerHTML=a+sign+b;
		}
	}
}

//function for special buttons
function sperform(m)
{
	switch(m)
	{
		case 'clear':
			location.reload();
			break;
		case 'bs':
			if((a!="")&&(sign!=""))
			{
				if(b=="")
				{
					sign="";
					document.getElementById('first-screen').innerHTML=a;
				}
				else//b has some value
				{
					var bx= new Array();
					bx=b.split("");
					bx.pop();
					b=bx.join("");
					document.getElementById('first-screen').innerHTML=a+sign+b;
				}
			}
			else if((a!="")&&(sign==""))
			{
				var ax=new Array();
				ax=a.split("");
				ax.pop();
				a=ax.join("");
				document.getElementById("first-screen").innerHTML=a;
			}
			break;
	}
}