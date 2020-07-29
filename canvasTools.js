function MakeCanvas(width, height)
{
        var canvas = document.createElement('canvas')
            canvas.height = height;
            canvas.width = width;

        document.body.appendChild(canvas);

        var ref={"width":width, "height": height, "ctx":canvas.getContext("2d")}
        return ref;
}

function RandomPattern(canvasRef)
{
	var i;
	var x,y;
	var r,g,b;
	var color;

	canvasRef.ctx.fillStyle="#cccccc";
	canvasRef.ctx.fillRect(0,0,canvasRef.width,canvasRef.height);

	for(i=0;i<100;i++)
	{
		r = Math.floor(Math.random()*255);
		g = Math.floor(Math.random()*255);
		b = Math.floor(Math.random()*255);

		color = "rgb("+r+","+g+","+b+")";
		canvasRef.ctx.fillStyle = color;

		x = Math.random()*canvasRef.width;
		y = Math.random()*canvasRef.height;
		canvasRef.ctx.fillRect(x, y, 2, 2);
	}
	return;
}

